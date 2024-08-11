using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CognitiveServices.Speech;
using Microsoft.Extensions.Configuration;
using SpeechServiceAPI.Helper;
using SpeechServiceAPI.Models;

namespace SpeechServiceAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SynthesizeController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public SynthesizeController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpPost("TextToSpeech")]
        [Consumes("application/json")]
        public async Task<IActionResult> SynthesizeSpeech([FromBody] TextModel request)
        {
            var SubscriptionKey = _configuration["AzureSettings:SubscriptionKey"];
            var ServiceRegion = _configuration["AzureSettings:ServiceRegion"];

            var speechConfig = SpeechConfig.FromSubscription(SubscriptionKey, ServiceRegion);
            speechConfig.SpeechSynthesisVoiceName = VoiceHelper.GetSpeechSynthesisVoice(request.Language, request.VoiceType);
            var synthesizer = new SpeechSynthesizer(speechConfig, null);

            var result = await synthesizer.SpeakTextAsync(request.Text);
            if (result.Reason == ResultReason.SynthesizingAudioCompleted)
            {
                var audioData = result.AudioData;
                return File(audioData, "audio/wav");
            }
            else if (result.Reason == ResultReason.Canceled)
            {
                var cancellation = SpeechSynthesisCancellationDetails.FromResult(result);
                return BadRequest(cancellation.ErrorDetails);
            }
            return BadRequest("Speech synthesis failed.");

        }
    }
}
