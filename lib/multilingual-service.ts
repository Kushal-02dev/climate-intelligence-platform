// Multilingual Translation Service for Indian Languages
export class MultilingualService {
  private supportedLanguages = {
    en: { name: "English", nativeName: "English", rtl: false },
    hi: { name: "Hindi", nativeName: "हिंदी", rtl: false },
    pa: { name: "Punjabi", nativeName: "ਪੰਜਾਬੀ", rtl: false },
    ks: { name: "Kashmiri", nativeName: "کٲشُر", rtl: true },
    doi: { name: "Dogri", nativeName: "डोगरी", rtl: false },
    gu: { name: "Gujarati", nativeName: "ગુજરાતી", rtl: false },
    te: { name: "Telugu", nativeName: "తెలుగు", rtl: false },
    ta: { name: "Tamil", nativeName: "தமிழ்", rtl: false },
    kn: { name: "Kannada", nativeName: "ಕನ್ನಡ", rtl: false },
    ml: { name: "Malayalam", nativeName: "മലയാളം", rtl: false },
  }

  private translations = {
    // Weather Terms
    weather: {
      en: "Weather",
      hi: "मौसम",
      pa: "ਮੌਸਮ",
      ks: "موسم",
      doi: "मौसम",
      gu: "હવામાન",
      te: "వాతావరణం",
      ta: "வானிலை",
      kn: "ಹವಾಮಾನ",
      ml: "കാലാവസ്ഥ",
    },
    cyclone: {
      en: "Cyclone",
      hi: "चक्रवात",
      pa: "ਚੱਕਰਵਾਤ",
      ks: "طوفان",
      doi: "चक्रवात",
      gu: "ચક્રવાત",
      te: "తుఫాను",
      ta: "சூறாவளி",
      kn: "ಚಂಡಮಾರುತ",
      ml: "ചുഴലിക്കാറ്റ്",
    },
    flood: {
      en: "Flood",
      hi: "बाढ़",
      pa: "ਹੜ੍ਹ",
      ks: "ژھیل",
      doi: "बाढ़",
      gu: "પૂર",
      te: "వరద",
      ta: "வெள்ளம்",
      kn: "ಪ್ರವಾಹ",
      ml: "വെള്ളപ്പൊക്കം",
    },
    drought: {
      en: "Drought",
      hi: "सूखा",
      pa: "ਸੋਕਾ",
      ks: "خشک سالی",
      doi: "सुक्खा",
      gu: "દુષ્કાળ",
      te: "కరువు",
      ta: "வறட்சி",
      kn: "ಬರ",
      ml: "വരൾച്ച",
    },
    heatwave: {
      en: "Heatwave",
      hi: "गर्मी की लहर",
      pa: "ਗਰਮੀ ਦੀ ਲਹਿਰ",
      ks: "گرمی کی لہر",
      doi: "गर्मी दी लहर",
      gu: "ગરમીની લહેર",
      te: "వేడిమిగల్పు",
      ta: "வெப்ப அலை",
      kn: "ಶಾಖದ ಅಲೆ",
      ml: "ചൂട് തരംഗം",
    },
    // Safety Instructions
    evacuate: {
      en: "Evacuate immediately",
      hi: "तुरंत निकलें",
      pa: "ਤੁਰੰਤ ਨਿਕਲੋ",
      ks: "فوری طور پر نکلیں",
      doi: "तुरंत निकलो",
      gu: "તાત્કાલિક સ્થળાંતર કરો",
      te: "వెంటనే ఖాళీ చేయండి",
      ta: "உடனே வெளியேறுங்கள்",
      kn: "ತಕ್ಷಣ ಸ್ಥಳಾಂತರಿಸಿ",
      ml: "ഉടനെ ഒഴിഞ്ഞുപോകുക",
    },
    stayIndoors: {
      en: "Stay indoors and safe",
      hi: "घर के अंदर रहें और सुरक्षित रहें",
      pa: "ਘਰ ਦੇ ਅੰਦਰ ਰਹੋ ਅਤੇ ਸੁਰੱਖਿਤ ਰਹੋ",
      ks: "گھر کے اندر رہیں اور محفوظ رہیں",
      doi: "घरे दे अंदर रओ ते सुरक्षित रओ",
      gu: "ઘરની અંદર રહો અને સુરક્ષિત રહો",
      te: "ఇంట్లోనే ఉండి సురక్షితంగా ఉండండి",
      ta: "வீட்டிற்குள் இருந்து பாதுகாப்பாக இருங்கள்",
      kn: "ಮನೆಯೊಳಗೇ ಇರಿ ಮತ್ತು ಸುರಕ್ಷಿತವಾಗಿರಿ",
      ml: "വീടിനുള്ളിൽ തന്നെ സുരക്ഷിതമായി കഴിയുക",
    },
    emergencySupplies: {
      en: "Prepare emergency supplies",
      hi: "आपातकालीन सामान तैयार करें",
      pa: "ਐਮਰਜੈਂਸੀ ਸਪਲਾਈ ਤਿਆਰ ਕਰੋ",
      ks: "ہنگامی سامان تیار کریں",
      doi: "आपातकालीन सामान तैयार करो",
      gu: "કટોકટીની સામગ્રી તૈયાર કરો",
      te: "అత్యవసర సామాగ్రిని సిద్ధం చేయండి",
      ta: "அவசரகால பொருட்களை தயார் செய்யுங்கள்",
      kn: "ತುರ್ತು ಸರಬರಾಜುಗಳನ್ನು ಸಿದ್ಧಪಡಿಸಿ",
      ml: "അടിയന്തര സാധനങ്ങൾ തയ്യാറാക്കുക",
    },
    // UI Elements
    dashboard: {
      en: "Dashboard",
      hi: "डैशबोर्ड",
      pa: "ਡੈਸ਼ਬੋਰਡ",
      ks: "ڈیش بورڈ",
      doi: "डैशबोर्ड",
      gu: "ડેશબોર્ડ",
      te: "డాష్‌బోర్డ్",
      ta: "டாஷ்போர்டு",
      kn: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
      ml: "ഡാഷ്ബോർഡ്",
    },
    prediction: {
      en: "Weather Prediction",
      hi: "मौसम पूर्वानुमान",
      pa: "ਮੌਸਮ ਦੀ ਭਵਿੱਖਬਾਣੀ",
      ks: "موسمی پیشن گوئی",
      doi: "मौसम भविष्यवाणी",
      gu: "હવામાન આગાહી",
      te: "వాతావరణ అంచనా",
      ta: "வானிலை முன்னறிவிப்பு",
      kn: "ಹವಾಮಾನ ಮುನ್ನೋಟ",
      ml: "കാലാവസ്ഥാ പ്രവചനം",
    },
    carbonAnalysis: {
      en: "Carbon Analysis",
      hi: "कार्बन विश्लेषण",
      pa: "ਕਾਰਬਨ ਵਿਸ਼ਲੇਸ਼ਣ",
      ks: "کاربن تجزیہ",
      doi: "कार्बन विश्लेषण",
      gu: "કાર્બન વિશ્લેષણ",
      te: "కార్బన్ విశ్లేషణ",
      ta: "கார்பன் பகுப்பாய்வு",
      kn: "ಕಾರ್ಬನ್ ವಿಶ್ಲೇಷಣೆ",
      ml: "കാർബൺ വിശകലനം",
    },
  }

  private regionalAlerts = {
    // Region-specific alerts in local languages
    "Mumbai, Maharashtra": {
      monsoon: {
        hi: "मुंबई में भारी बारिश की चेतावनी। स्थानीय ट्रेन सेवा प्रभावित हो सकती है।",
        gu: "મુંબઈમાં ભારે વરસાદની ચેતવણી. સ્થાનિક ટ્રેન સેવા પ્રભાવિત થઈ શકે છે.",
        en: "Heavy rainfall warning in Mumbai. Local train services may be affected.",
      },
      cyclone: {
        hi: "मुंबई तट पर चक्रवात का खतरा। तटीय इलाकों से दूर रहें।",
        gu: "મુંબઈ કિનારે ચક્રવાતનો ખતરો. દરિયાકિનારાના વિસ્તારોથી દૂર રહો.",
        en: "Cyclone threat on Mumbai coast. Stay away from coastal areas.",
      },
    },
    "Chennai, Tamil Nadu": {
      cyclone: {
        ta: "சென்னையில் சூறாவளி எச்சரிக்கை। கடற்கரை பகுதிகளை விட்டு வெளியேறுங்கள்।",
        te: "చెన్నైలో తుఫాను హెచ్చరిక. తీర ప్రాంతాలను వదిలి వెళ్లండి.",
        en: "Cyclone warning in Chennai. Evacuate coastal areas immediately.",
      },
      flood: {
        ta: "சென்னையில் வெள்ளப்பெருக்கு எச்சரிக்கை। தாழ்வான பகுதிகளை விட்டு வெளியேறுங்கள்।",
        te: "చెన్నైలో వరద హెచ్చరిక. లోతట్టు ప్రాంతాలను వదిలి వెళ్లండి.",
        en: "Flood warning in Chennai. Evacuate low-lying areas.",
      },
    },
    "Kolkata, West Bengal": {
      cyclone: {
        hi: "कोलकाता में चक्रवात की चेतावनी। सुंदरबन क्षेत्र से निकलें।",
        bn: "কলকাতায় ঘূর্ণিঝড়ের সতর্কতা। সুন্দরবন এলাকা ছেড়ে চলে যান।",
        en: "Cyclone warning in Kolkata. Evacuate Sundarbans area.",
      },
    },
    "Bhubaneswar, Odisha": {
      cyclone: {
        hi: "भুবনेश्वर में चक्रवात अलर्ट। तटीय गांवों को खाली करें।",
        en: "Cyclone alert in Bhubaneswar. Evacuate coastal villages.",
      },
    },
    "Kochi, Kerala": {
      monsoon: {
        ml: "കൊച്ചിയിൽ കനത്ത മഴയ്ക്ക് സാധ്യത. കായൽ പ്രദേശങ്ങളിൽ ജാഗ്രത പാലിക്കുക.",
        ta: "கொச்சியில் கனமழைக்கு வாய்ப்பு. കായൽ பகுதிகളில் எச്சരிக்கை.",
        en: "Heavy rainfall expected in Kochi. Exercise caution in backwater areas.",
      },
    },
    "Srinagar, Kashmir": {
      snowstorm: {
        ks: "سرینگر میں برف کا طوفان۔ گھروں میں رہیں۔",
        hi: "श्रीनगर में बर्फीला तूफान। घरों में रहें।",
        en: "Snowstorm in Srinagar. Stay indoors.",
      },
    },
    "Jammu, Jammu & Kashmir": {
      heatwave: {
        doi: "जम्मू च गर्मी दी लहर। पानी पीते रओ।",
        hi: "जम्मू में गर्मी की लहर। पानी पीते रहें।",
        en: "Heatwave in Jammu. Keep drinking water.",
      },
    },
  }

  getSupportedLanguages() {
    return this.supportedLanguages
  }

  translate(key: string, language = "en"): string {
    const translation = this.translations[key]
    if (!translation) return key
    return translation[language] || translation.en || key
  }

  getRegionalAlert(region: string, eventType: string, language = "en"): string {
    const regionAlerts = this.regionalAlerts[region]
    if (!regionAlerts) return ""

    const eventAlerts = regionAlerts[eventType]
    if (!eventAlerts) return ""

    return eventAlerts[language] || eventAlerts.en || ""
  }

  async translateText(text: string, targetLanguage: string): Promise<string> {
    try {
      // In production, integrate with Google Translate API or similar
      // For now, return basic translations for common phrases
      const commonTranslations = {
        "High Risk": {
          hi: "उच्च जोखिम",
          pa: "ਉੱਚ ਜੋਖਮ",
          gu: "ઉચ્ચ જોખમ",
          te: "అధిక ప్రమాదం",
          ta: "அதிக ஆபத்து",
          kn: "ಹೆಚ್ಚಿನ ಅಪಾಯ",
          ml: "ഉയർന്ന അപകടസാധ്യത",
        },
        "Medium Risk": {
          hi: "मध्यम जोखिम",
          pa: "ਮੱਧਮ ਜੋਖਮ",
          gu: "મધ્યમ જોખમ",
          te: "మధ్యస్థ ప్రమాదం",
          ta: "நடுத்தர ஆபத்து",
          kn: "ಮಧ್ಯಮ ಅಪಾಯ",
          ml: "ഇടത്തരം അപകടസാധ്യത",
        },
        "Low Risk": {
          hi: "कम जोखिम",
          pa: "ਘੱਟ ਜੋਖਮ",
          gu: "ઓછું જોખમ",
          te: "తక్కువ ప్రమాదం",
          ta: "குறைந்த ஆபத்து",
          kn: "ಕಡಿಮೆ ಅಪಾಯ",
          ml: "കുറഞ്ഞ അപകടസാധ്യത",
        },
      }

      const translation = commonTranslations[text]
      if (translation && translation[targetLanguage]) {
        return translation[targetLanguage]
      }

      return text // Return original if no translation found
    } catch (error) {
      console.error("Translation error:", error)
      return text
    }
  }

  getLanguageDirection(language: string): "ltr" | "rtl" {
    return this.supportedLanguages[language]?.rtl ? "rtl" : "ltr"
  }

  formatNumber(number: number, language: string): string {
    // Format numbers according to regional preferences
    const formatters = {
      hi: new Intl.NumberFormat("hi-IN"),
      pa: new Intl.NumberFormat("pa-IN"),
      gu: new Intl.NumberFormat("gu-IN"),
      te: new Intl.NumberFormat("te-IN"),
      ta: new Intl.NumberFormat("ta-IN"),
      kn: new Intl.NumberFormat("kn-IN"),
      ml: new Intl.NumberFormat("ml-IN"),
      en: new Intl.NumberFormat("en-IN"),
    }

    const formatter = formatters[language] || formatters.en
    return formatter.format(number)
  }

  getLocalizedRecommendations(eventType: string, region: string, language: string) {
    const recommendations = {
      cyclone: {
        hi: ["तुरंत सुरक्षित स्थान पर जाएं", "आपातकालीन किट तैयार रखें", "स्थानीय अधिकारियों के निर्देशों का पालन करें"],
        pa: ["ਤੁਰੰਤ ਸੁਰੱਖਿਤ ਜਗ੍ਹਾ ਤੇ ਜਾਓ", "ਐਮਰਜੈਂਸੀ ਕਿੱਟ ਤਿਆਰ ਰੱਖੋ", "ਸਥਾਨਕ ਅਧਿਕਾਰੀਆਂ ਦੇ ਨਿਰਦੇਸ਼ਾਂ ਦਾ ਪਾਲਣ ਕਰੋ"],
        gu: ["તાત્કાલિક સુરક્ષિત સ્થળે જાઓ", "કટોકટીની કિટ તૈયાર રાખો", "સ્થાનિક અધિકારીઓના નિર્દેશોનું પાલન કરો"],
        te: ["వెంటనే సురక్షిత ప్రాంతానికి వెళ్లండి", "అత్యవసర కిట్ సిద్ధంగా ఉంచండి", "స్థానిక అధికారుల సూచనలను అనుసరించండి"],
        ta: [
          "உடனே பாதுகாப்பான இடத்திற்கு செல்லுங்கள்",
          "அவசரகால கிட் தயாராக வைத்திருங்கள்",
          "உள்ளூர் அதிகாரிகளின் வழிகாட்டுதல்களைப் பின்பற்றுங்கள்",
        ],
        kn: ["ತಕ್ಷಣ ಸುರಕ್ಷಿತ ಸ್ಥಳಕ್ಕೆ ಹೋಗಿ", "ತುರ್ತು ಕಿಟ್ ಸಿದ್ಧವಾಗಿ ಇರಿಸಿ", "ಸ್ಥಳೀಯ ಅಧಿಕಾರಿಗಳ ಸೂಚನೆಗಳನ್ನು ಅನುಸರಿಸಿ"],
        ml: ["ഉടനെ സുരക്ഷിത സ്ഥലത്തേക്ക് പോകുക", "അടിയന്തര കിറ്റ് തയ്യാറാക്കി വയ്ക്കുക", "പ്രാദേശിക അധികാരികളുടെ നിർദ്ദേശങ്ങൾ പാലിക്കുക"],
      },
      flood: {
        hi: ["ऊंची जगह पर जाएं", "बिजली के उपकरणों से दूर रहें", "साफ पानी स्टोर करें"],
        ta: ["உயரமான இடத்திற்கு செல்லுங்கள்", "மின் சாதனங்களிலிருந்து விலகி இருங்கள்", "சுத்தமான தண்ணீரை சேமித்து வைக்கவும்"],
        ml: ["ഉയർന്ന സ്ഥലത്തേക്ക് പോകുക", "വൈദ്യുത ഉപകരണങ്ങളിൽ നിന്ന് അകന്നു നിൽക്കുക", "ശുദ്ധജലം സംഭരിക്കുക"],
      },
    }

    const eventRecommendations = recommendations[eventType]
    if (!eventRecommendations) return []

    return eventRecommendations[language] || eventRecommendations.en || []
  }
}

// Singleton instance
export const multilingualService = new MultilingualService()
