namespace SpeechServiceAPI.Helper
{
    public static class VoiceHelper
    {
        public static string GetSpeechSynthesisVoice(string language, string voicetype)
        {
            switch (language)
            {
                case "en-IN":
                    if (voicetype == "M")
                        return "en-IN-PrabhatNeural";
                    else
                        return "en-IN-NeerjaNeural";
                case "hi-IN":
                    if (voicetype == "M")
                        return "hi-IN-MadhurNeural";
                    else
                        return "hi-IN-SwaraNeural";
                case "mr-IN":
                    if (voicetype == "M")
                        return "mr-IN-ManoharNeural";
                    else
                        return "mr-IN-AarohiNeural";
                case "ur-IN":
                    if (voicetype == "M")
                        return "ur-IN-GulNeural";
                    else
                        return "ur-IN-GulNeural";
                case "bn-IN":
                    if (voicetype == "M")
                        return "bn-IN-BashkarNeural";
                    else
                        return "bn-IN-TanishaaNeural";
                default:
                    return "en-IN-NeerjaNeural";
            }
        }
    }
}
