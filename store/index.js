export const state = () => ({
  sidebar: false,
  activities: [
    {
      name_sans: 'सत्ता',
      meaning: 'to exist',
      category: 1,
      verse: 'भवत्यर्थे भवत्यस्ति जायते विद्यते तथा ।'
    },
    {
      name_sans: 'उत्पत्तिः',
      meaning: 'genesis',
      category: 2,
      verse: 'संपद्यते निष्पतति निष्पद्यत उदंचति ॥१॥'
    },
    {
      name_sans: 'उदयः',
      meaning: 'rise',
      category: 3,
      verse: 'उत्पद्यतेऽप्युदयत उदेत्युदयतीति च ।'
    },
    {
      name_sans: 'कन्दलनम्',
      meaning: 'bring forth or produce in abundance or simultaneously',
      category: 4,
      verse: 'अङ्कूरत्यङ्कुरति चोद्भिद्यते कन्दलत्यपि ॥'
    },
    {
      name_sans: 'वृद्धिः',
      meaning: 'increment',
      category: 5,
      verse: 'एधते वर्धते नंदत्यप्युत्तिष्ठत ऋध्यति ।'
    },
    {
      name_sans: 'प्रकाशः',
      meaning: 'shine',
      category: 6,
      verse:
        'भासते शोभते भाति लसतींधे प्रकाशते ॥ राजते द्योतते राजत्यपि दिव्यति दीव्यते ।'
    },
    {
      name_sans: 'व्याख्यानम्',
      meaning: 'narrate',
      category: 7,
      verse:
        'व्याख्याति विवृणोति व्याकुरुतेऽर्थापयत्यपि ॥८॥ विवृणीते विवृणुते व्याचष्टे व्याकरोति च । '
    },
    {
      name_sans: 'प्रणयनम्',
      meaning: 'fix',
      category: 8,
      verse: 'प्रबध्नाति प्रणयति प्रयुङ्क्ते व्याकरोति च ॥'
    },
    {
      name_sans: 'पूजनम्',
      meaning: 'worship',
      category: 9,
      verse:
        'पूजयत्यर्चयति सत्करोत्याद्रियतेऽञ्चति । संभावयत्यर्चति सत्कुरुते मानयत्यपि ॥ सभाजयत्युपचरत्यन्वास्ते महयत्यपि । आराधयत्युनुसरत्याराध्यत्यभिराध्यति ॥'
    },
    {
      name_sans: 'शुश्रूषा',
      meaning: 'serve',
      category: 10,
      verse: 'शुश्रूषते परिचरत्युपास्ते वरिवस्यति ।'
    },
    {
      name_sans: 'पुरस्कारः',
      meaning: 'award',
      category: 11,
      verse:
        'पुरस्करोति च पुरस्कुरुते बहु मन्यते ॥ बहूकरोति च बहुमनुते चार्हयत्यपि'
    },
    {
      name_sans: 'तनूकरणम्',
      meaning: 'dilute',
      category: 12
    },
    {
      name_sans: 'नमस्कारः',
      meaning: 'offering of respect',
      category: 13,
      verse:
        'नमस्करोति कुरुते जुषते च नमस्यति ॥ भजते भजति श्रयति श्रयते प्रणिपतति सेवते नमति ।'
    },
    {
      name_sans: 'अभिवादनम्',
      meaning: 'respectful salutation',
      category: 14,
      verse: 'अभिवादयते पादौ गृह्णीते वन्दतेऽभिवादयति ॥'
    },
    {
      name_sans: 'गतिः',
      meaning: 'movement',
      category: 15
    },
    {
      name_sans: 'रक्षणम्',
      meaning: 'protect',
      category: 16,
      verse:
        'अवति त्रायते पाति पालयत्यपि रक्षति । शास्ति गोपायति भुनक्त्यभिगोपायतीति च ॥'
    },
    {
      name_sans: 'नन्दनम्',
      meaning: 'rejoice',
      category: 17,
      verse:
        'प्रीयते मोदते हृष्यत्यानंदति च नंदति । निर्वृणोति च निर्वाति सुख्यत्यवति तुष्यति ॥१६॥'
    },
    {
      name_sans: 'व्यथा',
      meaning: 'be disturbed',
      category: 18,
      verse:
        'दूयते व्यथते दुःख्यत्यपि शोचति सीदति । खिद्यते क्लिश्यति श्राम्यत्यंतस्तपति ताम्यति ॥'
    },
    {
      name_sans: 'प्रीणनम्',
      meaning: 'pleasing',
      category: 19,
      verse:
        'सुखयत्याह्लादयति प्रीणीते प्रीणयति सुखाकुरुते । आनंदयति धिनोत्यामोदयति च हर्षयति च तोषयति ॥'
    },
    {
      name_sans: 'म्लानम्',
      meaning: 'fading',
      category: 20,
      verse: ' ग्लायति म्लायति प्लुष्यत्यपि स्विद्यति शुष्यति ॥'
    },
    {
      name_sans: 'विषादनम्',
      meaning: 'despair',
      category: 21,
      verse:
        'क्लिश्नाति क्लेशयति व्यथयति दुःखाकरोति शोचयति । विह्वलयति च दुनोति व्याकुलयति विमनयति विषादयति ॥'
    },
    {
      name_sans: 'आहननम्',
      meaning: 'beat',
      category: 22,
      verse:
        'घातयत्याहते हन्ति निबर्हयति सूदते । हिनस्त्युज्जासयति संहरते सूदयत्यपि ॥'
    },
    {
      name_sans: 'विलोडनम्',
      meaning: 'agitating',
      category: 23,
      verse: 'कदर्थयति मथ्नाति कर्शयत्यपि बाधते ।'
    },
    {
      name_sans: 'पीडनम्',
      meaning: 'cause pain',
      category: 24,
      verse: 'पिनष्ट्युपद्रवति पीडयत्यपि शास्ति च ॥'
    },
    {
      name_sans: 'ताडनम्',
      meaning: 'beat',
      category: 25,
      verse: 'निगृह्णीते निगृह्णाति ताडयत्यपि विध्यति ।'
    },
    {
      name_sans: 'निग्रहः',
      meaning: 'punishment',
      category: 26,
      verse: 'तनूकरोति तक्ष्णोति क्रशयत्यपि च द्यति ॥'
    },
    {
      name_sans: 'प्राप्तिः',
      meaning: 'obtain',
      category: 27,
      verse: 'आप्नोति लभते याति गच्छत्ययति ऋच्छति ।'
    },
    {
      name_sans: 'उपसर्पणम्',
      meaning: 'act of approaching softly',
      category: 28,
      verse:
        'उपसर्पत्युपसरत्युपयात्युपगच्छति  । उपधावत्युपनयत्युपैप्युपतिष्ठते ॥'
    },
    {
      name_sans: 'अपसरणम्',
      meaning: 'going away',
      category: 29,
      verse: 'अपैति व्ययति व्येति विगच्छत्यपवर्तते ॥'
    },
    {
      name_sans: 'आगमनम्',
      meaning: 'coming',
      category: 30,
      verse: 'आगच्छत्याव्रजत्यायात्यापतत्यासरत्यपि । '
    },
    {
      name_sans: 'उद्गमः',
      meaning: 'ascent',
      category: 31,
      verse: 'उद्गच्छत्युद्व्रजत्युद्यात्युत्तिष्ठत्युच्चलत्यपि ।'
    },
    {
      name_sans: 'निर्गमः',
      meaning: 'going out',
      category: 32,
      verse: 'निर्गच्छति च निर्याति निस्सरत्युत्पतत्यपि ॥'
    },
    {
      name_sans: 'अभिगमनम्',
      meaning: 'rush',
      category: 33,
      verse: 'अभिगच्छत्यभिपतत्यभियात्यभिधावति ॥'
    },
    {
      name_sans: 'अनुवर्तनम्',
      meaning: 'follow up',
      category: 34,
      verse: 'अनुसर्पत्यनुपतत्यनूदेत्यनुवर्तते॥'
    },
    {
      name_sans: 'उपमानम्',
      meaning: 'similar',
      category: 35
    },
    {
      name_sans: 'दानम्',
      meaning: 'donate',
      category: 36,
      verse: 'ददाति ददते दत्ते दिशत्युपहरत्यपि ।'
    },
    {
      name_sans: 'आदानम्',
      meaning: 'accept',
      category: 37,
      verse: 'आदत्ते प्रतिगृह्णित प्रतिगृह्णीत इत्यपि ॥'
    },
    {
      name_sans: 'उपकारः',
      meaning: 'help',
      category: 38,
      verse: 'दास्या संयच्छते कामी ददात्युपकरोति च ।'
    },
    {
      name_sans: 'नृत्यम्',
      meaning: 'dance',
      category: 39,
      verse: 'विभ्राम्यति ललत्येवमथो नटति नृत्यति ॥'
    },
    {
      name_sans: 'विक्रमः',
      meaning: 'move away',
      category: 40,
      verse: 'विक्रामति परिक्रामत्यथ दृप्यति माद्यति ॥'
    },
    {
      name_sans: 'जयः',
      meaning: 'win',
      category: 41,
      verse:
        'जयत्यतिक्रामत्यतिशेतेऽतिरिच्यते । अत्येत्यर्थे विजयते पराजयत इत्यपि ॥'
    },
    {
      name_sans: 'दया',
      meaning: 'kind',
      category: 42
    },
    {
      name_sans: 'दर्पः',
      meaning: 'pride',
      category: 43
    },
    {
      name_sans: 'युद्धः',
      meaning: 'fight, war',
      category: 44,
      verse: 'युध्यते योधयति च बाहुभ्यांतु नियुध्यते। '
    },
    {
      name_sans: 'कोपः',
      meaning: 'angry',
      category: 45,
      verse: 'कुप्यति क्रुध्यति द्वेष्टि रुष्यतीर्ष्यत्यसूयति ॥'
    },
    {
      name_sans: 'सहनम्',
      meaning: 'tolerate',
      category: 46,
      verse: 'सहते क्षमते क्षाम्यत्यपि शाम्यति मृष्यति ॥'
    },
    {
      name_sans: 'विचारः',
      meaning: 'consult',
      category: 47
    },
    {
      name_sans: 'प्रसादः',
      meaning: 'gracious',
      category: 48,
      verse: 'प्रसीदत्यनुगृह्णाति दयते चानुकम्पते । '
    },
    {
      name_sans: 'दर्शनम्',
      meaning: 'show',
      category: 49,
      verse: 'पश्यति निर्वर्णयति प्रत्यक्षयतीक्षतेऽपरोक्षयति ॥'
    },
    {
      name_sans: 'तर्कः',
      meaning: 'reason',
      category: 50,
      verse: 'ऊहते तर्कयत्यध्याहरत्यालोचयत्यपि ।'
    },
    {
      name_sans: 'निर्णयः',
      meaning: 'decide',
      category: 51,
      verse:
        'निर्धारयति निगमयति निश्चिनुते निश्चिनोति निर्णयते । निर्णयति  निरूपयति च निर्लोडयते परिच्छिनत्यपि च ॥'
    },
    {
      name_sans: 'उन्मेषः',
      meaning: 'open',
      category: 52,
      verse: 'उन्मीलत्युन्मिषति '
    },
    {
      name_sans: 'निमेषः',
      meaning: 'close',
      category: 53,
      verse: 'ह्युच्छ्र्वसिति निमीलयति मिषति हसति ॥'
    },
    {
      name_sans: 'विकासः',
      meaning: 'expand',
      category: 54,
      verse: ' उद्भिद्यते विकसति स्फुटीभवति दीर्यते ।'
    },
    {
      name_sans: 'रचनम्',
      meaning: 'create',
      category: 55,
      verse: 'करोति कुरुते निर्मात्याचरत्यनुतिष्ठति ॥'
    },
    {
      name_sans: 'चिरोधः',
      meaning: 'quarell',
      category: 56,
      verse:
        'वैरायते विरुन्धे विरुणद्धि कलहायते । द्वेष्टि द्विष्टे विगृह्णाति विराध्यत्यपराध्यति ॥'
    },
    {
      name_sans: 'आवरणम्',
      meaning: 'cover',
      category: 57,
      verse:
        'जिघांसति विगृह्णीते द्रुह्यत्यपकरोति च । अपिधत्ते चावृणुते स्थगयत्यपि चोर्णुते ॥'
    },
    {
      name_sans: 'अन्तर्धानम्',
      meaning: 'disappear / hidden',
      category: 58,
      verse:
        'ऊर्णोत्युर्णौति धुडयत्यंतर्धापयतीति च। अंतर्धत्ते तिरोधत्ते लीयतेंऽतर्दधाति च ॥'
    },
    {
      name_sans: 'कथनम्',
      meaning: 'tell',
      category: 59
    },
    {
      name_sans: 'शब्दकर्म',
      meaning: 'make sound',
      category: 60,
      verse:
        'शब्दायते घोषयति रौति स्वनति कूजति । सङ्क्रीडति ध्वनति च शिङ्क्ते नदति गुंजति ॥'
    },
    {
      name_sans: 'चौर्यम्',
      meaning: 'rob',
      category: 61,
      verse: 'मुष्णाति चोरयति च हरत्यपहरत्यपि । '
    },
    {
      name_sans: 'रोदनम्',
      meaning: 'cry',
      category: 62,
      verse:
        'रणति क्वणति क्रुंचत्यपि स्तनति गर्जति । रसति क्रोशति रटत्यथाक्रन्दति रोदिति ॥ बाष्पायते विलपति परिदेवयतीति च । '
    },
    {
      name_sans: 'कम्पः',
      meaning: 'shiver',
      category: 63,
      verse: 'वेपते कंपते चञ्चत्यपि लोलति  वल्गति ॥'
    },
    {
      name_sans: 'कम्पजननम्',
      meaning: 'cause shiver',
      category: 64
    },
    {
      name_sans: 'आरोहः',
      meaning: 'climb',
      category: 65
    },
    {
      name_sans: 'आलिङ्गनम्',
      meaning: 'embrace',
      category: 66,
      verse:
        'श्लिष्यत्यालिङ्गति परिष्वजतेप्युपगूहति ॥ आलिङ्गते चापि परिरंभते वेष्टयत्यपि ॥'
    },
    {
      name_sans: 'न्यासः',
      meaning: 'place',
      category: 67,
      verse:
        'निदधाति निधत्ते निक्षिपते निक्षिपत्यपि ।  निवेशयति विन्यस्यत्यपि न्यस्यति चाप्यथ ॥'
    },
    {
      name_sans: 'पाणिग्रहणम्',
      meaning: 'marry',
      category: 68,
      verse: 'पाणौ गृह्णाति गृह्णीते  विवहत्युपयच्छते ।'
    },
    {
      name_sans: 'अधिष्ठानम्',
      meaning: 'sit',
      category: 69,
      verse:
        ' तिष्ठत्यास्ते निविशते वसत्युपविशत्यपि । वितिष्ठते तदध्यास्तेऽधितिष्ठत्युपतिष्ठते ॥'
    },
    {
      name_sans: 'तर्जनम्',
      meaning: 'beat',
      category: 70
    },
    {
      name_sans: 'निवासः',
      meaning: 'reside',
      category: 71
    },
    {
      name_sans: 'जीवनम्',
      meaning: 'live',
      category: 72,
      verse: ' वर्तते ध्रियते प्राणित्यपि श्वसिति जीवति ।'
    },
    {
      name_sans: 'प्रेरणा',
      meaning: 'motivate',
      category: 73,
      verse: 'नुदति प्रेरयति '
    },
    {
      name_sans: 'क्रीडा',
      meaning: 'play',
      category: 74,
      verse:
        'खेलति क्रीडति परिक्रीडते विहरत्यपि । सङ्क्रीडते विभ्रमति विनोदयति दीव्यति ॥३७॥ '
    },
    {
      name_sans: 'तिरस्कारः',
      meaning: 'insult',
      category: 75,
      verse:
        ' तिरस्करोत्यभिभवत्यवजानाति निन्दति । धिक्करोति न्यक्कुरुते विगायत्यवगायति ॥'
    },
    {
      name_sans: 'धारणम्',
      meaning: 'wear',
      category: 76,
      verse: 'बिभर्ति बिभृते धत्ते वहते धायत्यपि।'
    },
    {
      name_sans: 'वाच्छा',
      meaning: 'like',
      category: 77,
      verse: ' वांछतीच्छत्यभिलषत्यभिलष्यत्यपेक्षते ॥'
    },
    {
      name_sans: 'शक्तिः',
      meaning: 'ability',
      category: 78,
      verse: ' शक्नोति पारयति पर्याप्नोति प्रभवत्यपि ॥'
    },
    {
      name_sans: 'आरम्भः',
      meaning: 'start',
      category: 79,
      verse: ' प्रवर्तते प्रक्रमते प्रस्तौत्यारभतेऽपि च ॥'
    },
    {
      name_sans: 'पाकः',
      meaning: 'cook',
      category: 80,
      verse: 'ईष्टे प्रगल्भते चाथ पचते पचतीति च ।'
    },
    {
      name_sans: 'प्रवृत्तिः',
      meaning: 'start',
      category: 81,
      verse: ' ईहते चेष्टते चैव यतते च प्रयस्यति ॥'
    },
    {
      name_sans: 'खादनम्',
      meaning: 'eat',
      category: 82,
      verse:
        'भुङ्क्तेऽभ्यवहरत्यश्नात्याचामत्यत्ति खादति । रसयत्यास्वादयति भक्षयत्यपि चर्वति ॥'
    },
    {
      name_sans: 'पानम्',
      meaning: 'drink',
      category: 83,
      verse:
        'ग्रसते ग्रसतीत्यर्थे जक्षति प्रत्यवस्यति । लेढि लीढेऽथ पिबति धयत्यास्वादतेऽपि च ॥'
    },
    {
      name_sans: 'उद्गारः',
      meaning: 'spit, eject',
      category: 84,
      verse: 'अथो गिरत्युद्गिरति निगिरत्युद्वमत्यपि'
    },
    {
      name_sans: 'भूषा',
      meaning: 'decorate',
      category: 85,
      verse:
        'भूषयति परिष्कुरुतेऽलंकुरुतेऽलंकरोति मण्डयति । अपि वा परिष्करोत्यप्याकल्पयति प्रसाधयति ॥'
    },
    {
      name_sans: 'लज्जा',
      meaning: 'shy, shame',
      category: 86,
      verse: 'त्रपते लज्जते जिह्रेत्यपि संकुचतीति च ॥'
    },
    {
      name_sans: 'उत्पादनम्',
      meaning: 'create',
      category: 87,
      verse: 'सौति सूते च जनयत्युत्पादयति सूयते । '
    },
    {
      name_sans: 'उपपत्तिः',
      meaning: 'substantiate',
      category: 88,
      verse: 'सङ्गच्छते युज्यते संपद्यते चोपपद्यते । '
    },
    {
      name_sans: 'पूरणम्',
      meaning: 'fill',
      category: 89,
      verse: 'सन्तिष्ठते समाप्नोति पर्याप्नोति च पूर्यते ॥'
    },
    {
      name_sans: 'भेदनम्',
      meaning: 'divide',
      category: 90,
      verse: 'छिनत्ति कृन्तति लुनात्यपि खंडयति द्यति । '
    },
    {
      name_sans: 'भ्रंशः',
      meaning: 'ruin',
      category: 91
    },
    {
      name_sans: 'मरणम्',
      meaning: 'die',
      category: 92,
      verse: 'व्यापद्यते प्रैति म्रियते च प्रमीयते ॥'
    },
    {
      name_sans: 'अङ्गीकारः',
      meaning: 'accept',
      category: 93,
      verse: 'उररीकुरुते चाङ्गीकरोत्यभ्युपगच्छति ॥'
    },
    {
      name_sans: 'अनुज्ञा',
      meaning: 'entitlement',
      category: 94,
      verse: 'सम्मन्यतेऽनुजानीतेऽनुजानात्यनुमन्यते । '
    },
    {
      name_sans: 'श्रवणम्',
      meaning: 'hear',
      category: 95,
      verse:
        'शृणोति संशृणुत इत्यर्थे निशमयत्यपि । आकर्णयत्यपि ततोऽवधत्ते धारयत्यपि ॥'
    },
    {
      name_sans: 'अवधानम्',
      meaning: 'caution',
      category: 96
    },
    {
      name_sans: 'अवरोहः',
      meaning: 'descend',
      category: 97
    },
    {
      name_sans: 'विस्मरणम्',
      meaning: 'forget',
      category: 98,
      verse:
        'अध्येति स्मरति ध्यायत्यपि चिन्तयतीति च । प्रमाद्यति प्रस्मरति विस्मरत्यपि मुह्यति ॥'
    },
    {
      name_sans: 'अध्ययनम्',
      meaning: 'learn',
      category: 99,
      verse: 'अधीते शीलयत्यभ्यस्यति शीलति शिक्षते । '
    },
    {
      name_sans: 'पावनम्',
      meaning: 'pure',
      category: 100,
      verse: 'पवते पावयत्यर्थे पुनीते च पुनाति च ॥'
    },
    {
      name_sans: 'पोषणम्',
      meaning: 'nourishing',
      category: 101,
      verse: 'पुष्णाति पोषयत्यर्थे वर्धयत्येधयत्यपि । '
    },
    {
      name_sans: 'मार्जनम्',
      meaning: 'cleaning',
      category: 102,
      verse:
        'मार्ष्टि मार्जयते शुद्धीकुरुते शोधयत्यपि । मार्जति क्षालयत्यर्थे निर्णेनेक्ति च धावति ॥'
    },
    {
      name_sans: 'विक्रयः',
      meaning: 'sell',
      category: 103,
      verse: 'विक्रीणीते व्यवहरत्यपि ॥'
    },
    {
      name_sans: 'क्रयणम्',
      meaning: 'buy',
      category: 104,
      verse: 'क्रीणाति पणते'
    },
    {
      name_sans: 'वरणम्',
      meaning: 'choose',
      category: 105,
      verse: 'वृणोति वरयत्यर्थे वृणीते वृणुते वरम् । '
    },
    {
      name_sans: 'सज्जता',
      meaning: 'preparation',
      category: 106
    },
    {
      name_sans: 'मानम्',
      meaning: 'respectability',
      category: 107
    },
    {
      name_sans: 'अध्यापनम्',
      meaning: 'teach',
      category: 108
    },
    {
      name_sans: 'लग्नः',
      meaning:
        'auspicious moment or time fixed upon as lucky for beginning to perform anything',
      category: 109
    },
    {
      name_sans: 'प्रापणम्',
      meaning: 'send',
      category: 110
    },
    {
      name_sans: 'क्षरणम्',
      meaning: 'trickling, distilling',
      category: 111
    },
    {
      name_sans: 'लेपनम्',
      meaning: 'coat, smearing',
      category: 112
    },
    {
      name_sans: 'मेलनम्',
      meaning: 'union',
      category: 113
    },
    {
      name_sans: 'पतनम्',
      meaning: 'fall',
      category: 114
    },
    {
      name_sans: 'प्लवनम्',
      meaning: 'jump',
      category: 115
    },
    {
      name_sans: 'दहनम्',
      meaning: 'burn',
      category: 116
    },
    {
      name_sans: 'प्रतिषेधः',
      meaning: 'prevent',
      category: 117
    },
    {
      name_sans: 'भयम्',
      meaning: 'fear',
      category: 118
    },
    {
      name_sans: 'लेखनम्',
      meaning: 'write',
      category: 119
    },
    {
      name_sans: 'पृच्छा',
      meaning: 'ask',
      category: 120
    },
    {
      name_sans: 'अन्तःप्रवेशः',
      meaning: 'enter inside',
      category: 121
    },
    {
      name_sans: 'वीजनम्',
      meaning: '',
      category: 122
    },
    {
      name_sans: 'उत्तरदानम्',
      meaning: '',
      category: 123
    },
    {
      name_sans: 'कृतिः',
      meaning: 'creation',
      category: 124
    },
    {
      name_sans: '(वि) शरणम्',
      meaning: 'asylum',
      category: 125
    },
    {
      name_sans: 'शापः',
      meaning: 'curse',
      category: 126
    },
    {
      name_sans: 'घ्राणम्',
      meaning: 'smell',
      category: 127
    },
    {
      name_sans: 'घूर्णनम्',
      meaning: 'shaking',
      category: 128
    },
    {
      name_sans: 'घोषः',
      meaning: 'proclaim',
      category: 129
    },
    {
      name_sans: 'चुम्बनम्',
      meaning: 'kiss',
      category: 130
    },
    {
      name_sans: 'जीर्णक्रीया',
      meaning: '',
      category: 131
    },
    {
      name_sans: 'जृम्भणम्',
      meaning: 'yawn',
      category: 132
    },
    {
      name_sans: 'दशनम्',
      meaning: 'bite',
      category: 133
    },
    {
      name_sans: 'दोषः',
      meaning: 'mistake',
      category: 134
    },
    {
      name_sans: 'फलनम्',
      meaning: 'bearing fruit or producing consequences',
      category: 135
    },
    {
      name_sans: 'लङ्घनम्',
      meaning: 'jump',
      category: 136
    },
    {
      name_sans: 'लम्बनम्',
      meaning: 'hanging down',
      category: 137
    },
    {
      name_sans: 'सन्दानम्',
      meaning: 'healing',
      category: 138
    },
    {
      name_sans: 'बन्धनम्',
      meaning: 'binding',
      category: 139
    },
    {
      name_sans: 'श्लथनम्',
      meaning: '',
      category: 140
    },
    {
      name_sans: 'क्रमणम्',
      meaning: 'stepping, walking',
      category: 141
    },
    {
      name_sans: 'खननं',
      meaning: 'cut',
      category: 142
    },
    {
      name_sans: 'ज्वलनम्',
      meaning: 'flaming',
      category: 143
    },
    {
      name_sans: 'पठनम्',
      meaning: 'read',
      category: 144
    },
    {
      name_sans: 'प्रस्रवणम्',
      meaning: 'spout',
      category: 145
    },
    {
      name_sans: 'वयनम्',
      meaning: 'weave',
      category: 146
    },
    {
      name_sans: 'आस्फालनम्',
      meaning: 'collision',
      category: 147
    },
    {
      name_sans: 'दोहनम्',
      meaning: 'milking',
      category: 148
    },
    {
      name_sans: 'स्नानम्',
      meaning: 'bathe',
      category: 149
    }
  ],
  verbs: [
    {
      root: 'भू',
      form: 'भवति',
      meaning: 'to be',
      category: '1',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'parasmaipadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%AD%E0%A5%821_%E0%A4%AD%E0%A5%82_%E0%A4%AD%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-',
      gana: 'भ्वादिः'
    },
    {
      root: 'असँ',
      form: 'अस्ति',
      meaning: 'to be',
      category: '1',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'parasmaipadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%85%E0%A4%B8%E0%A5%8D2_%E0%A4%85%E0%A4%B8%E0%A4%81_%E0%A4%85%E0%A4%A6%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-',
      gana: 'अदादिः'
    },
    {
      root: 'जनीँ',
      form: 'जायते',
      meaning: 'happen, become',
      category: '1',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%9C%E0%A4%A8%E0%A5%8D2_%E0%A4%9C%E0%A4%A8%E0%A5%80%E0%A4%81_%E0%A4%A6%E0%A4%BF%E0%A4%B5%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-',
      gana: 'दिवादिः'
    },
    {
      root: 'विदँ',
      form: 'विद्यते',
      meaning: 'be, exists',
      category: '1',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%B5%E0%A4%BF%E0%A4%A6%E0%A5%8D2_%E0%A4%B5%E0%A4%BF%E0%A4%A6%E0%A4%81_%E0%A4%A6%E0%A4%BF%E0%A4%B5%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-',
      gana: 'दिवादिः'
    },
    {
      root: 'सम्_पद् ',
      gana: 'दिवादिः',
      form: 'संपद्यते',
      meaning: 'produce',
      category: '2',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%AA%E0%A4%A6%E0%A5%8D1_%E0%A4%AA%E0%A4%A6%E0%A4%81_%E0%A4%A6%E0%A4%BF%E0%A4%B5%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=%E0%A4%B8%E0%A4%AE%E0%A5%8D'
    },
    {
      root: 'निस्_पद्',
      form: 'निष्पद्यते',
      gana: 'दिवादिः',
      meaning: 'generate',
      category: '2',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%AA%E0%A4%A6%E0%A5%8D1_%E0%A4%AA%E0%A4%A6%E0%A4%81_%E0%A4%A6%E0%A4%BF%E0%A4%B5%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=%E0%A4%A8%E0%A4%BF%E0%A4%B8%E0%A5%8D'
    },
    {
      root: '',
      form: 'उत्पद्यते',
      meaning: 'produce',
      category: '3',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अप्युदयते',
      meaning: '',
      category: '3',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: 'उत्_इ',
      form: 'उदेति',
      meaning: 'arise from',
      category: '3',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'parasmaipadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%871_%E0%A4%87%E0%A4%A3%E0%A5%8D_%E0%A4%85%E0%A4%A6%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=%E0%A4%89%E0%A4%A4%E0%A5%8D',
      gana: 'अदादिः'
    },
    {
      root: '',
      form: 'उदयति',
      meaning: '',
      category: '3',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अङ्कूरति',
      meaning: 'sprout or shoot new growth',
      category: '4',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अङ्कुरति',
      meaning: 'sprout or shoot new growth',
      category: '4',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'parasmaipadi',
      forms_url: ''
    },
    {
      root: 'उत्_भिद्',
      form: 'उद्भिद्यते',
      meaning: 'burst forth',
      category: '4',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%AD%E0%A4%BF%E0%A4%A6%E0%A5%8D1_%E0%A4%AD%E0%A4%BF%E0%A4%A6%E0%A4%BF%E0%A4%81%E0%A4%B0%E0%A5%8D_%E0%A4%B0%E0%A5%81%E0%A4%A7%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=%E0%A4%89%E0%A4%A4%E0%A5%8D',
      gana: 'रुधादिः'
    },
    {
      root: '',
      form: 'कन्दलति',
      meaning: 'bring forth',
      category: '4',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'एधते',
      meaning: 'prosper',
      category: '5',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%8F%E0%A4%A7%E0%A5%8D1_%E0%A4%8F%E0%A4%A7%E0%A4%81_%E0%A4%AD%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-',
      gana: 'भ्वादिः'
    },
    {
      root: 'वृध् - वृधुँ',
      form: 'वर्धते',
      meaning: 'increase',
      category: '5',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%B5%E0%A5%83%E0%A4%A7%E0%A5%8D1_%E0%A4%B5%E0%A5%83%E0%A4%A7%E0%A5%81%E0%A4%81_%E0%A4%AD%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-',
      gana: 'भ्वादिः'
    },
    {
      root: '',
      gana: '',
      form: 'नंदति',
      meaning: '',
      category: '5',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'parasmaipadi',
      forms_url: ''
    },
    {
      root: 'उत्_ष्ठा',
      gana: 'भ्वादिः',
      form: 'उत्तिष्ठत',
      meaning: 'rise',
      category: '5',
      obj: 'akarmaka',
      padi: 'parasmaipadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%B7%E0%A5%8D%E0%A4%A0%E0%A4%BE1_%E0%A4%B7%E0%A5%8D%E0%A4%A0%E0%A4%BE_%E0%A4%AD%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=%E0%A4%89%E0%A4%A4%E0%A5%8D'
    },
    {
      root: 'ऋध् - ऋधुँ',
      form: 'ऋध्यति',
      meaning: 'grow',
      category: '5',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'parasmaipadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%8B%E0%A4%A7%E0%A5%8D1_%E0%A4%8B%E0%A4%A7%E0%A5%81%E0%A4%81_%E0%A4%A6%E0%A4%BF%E0%A4%B5%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-',
      gana: 'दिवादिः'
    },
    {
      root: 'भास् - भासृँ',
      form: 'भासते',
      meaning: 'shine',
      category: '6',
      obj: 'akarmaka',
      padi: 'atmanepadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%AD%E0%A4%BE%E0%A4%B8%E0%A5%8D1_%E0%A4%AD%E0%A4%BE%E0%A4%B8%E0%A5%83%E0%A4%81_%E0%A4%AD%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-',
      gana: 'भ्वादिः'
    },
    {
      root: 'शुभ् - शुभँ',
      form: 'शोभते',
      meaning: 'shine',
      category: '6',
      obj: 'akarmaka',
      padi: 'atmanepadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%B6%E0%A5%81%E0%A4%AD%E0%A5%8D1_%E0%A4%B6%E0%A5%81%E0%A4%AD%E0%A4%81_%E0%A4%AD%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-',
      gana: 'भ्वादिः'
    },
    {
      root: 'भा ',
      form: 'भाति',
      meaning: 'shine',
      category: '6',
      obj: 'akarmaka',
      padi: 'parasmaipadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%AD%E0%A4%BE1_%E0%A4%AD%E0%A4%BE_%E0%A4%85%E0%A4%A6%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-',
      gana: 'अदादिः'
    },
    {
      root: 'लस् - लसँ',
      form: 'लसति',
      meaning: 'shine',
      category: '6',
      obj: 'akarmaka',
      padi: 'parasmaipadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%B2%E0%A4%B8%E0%A5%8D1_%E0%A4%B2%E0%A4%B8%E0%A4%81_%E0%A4%AD%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-',
      gana: 'भ्वादिः'
    },
    {
      root: 'इन्ध् - ञिइन्धीँ',
      form: 'इंधे',
      meaning: 'to be lighted ; to blaze , flame',
      category: '6',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%87%E0%A4%A8%E0%A5%8D%E0%A4%A7%E0%A5%8D1_%E0%A4%9E%E0%A4%BF%E0%A4%87%E0%A4%A8%E0%A5%8D%E0%A4%A7%E0%A5%80%E0%A4%81_%E0%A4%B0%E0%A5%81%E0%A4%A7%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-',
      gana: 'रुधादिः'
    },
    {
      root: '',
      form: 'प्रकाशते',
      meaning: 'shine',
      category: '6',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi',
      forms_url: ''
    },
    {
      root: 'राज् - राजृँ',
      form: 'राजते',
      meaning: 'shine',
      category: '6',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'ubhayapadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%B0%E0%A4%BE%E0%A4%9C%E0%A5%8D1_%E0%A4%B0%E0%A4%BE%E0%A4%9C%E0%A5%83%E0%A4%81_%E0%A4%AD%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-',
      gana: 'भ्वादिः'
    },
    {
      root: 'द्युत् - द्युतँ',
      form: 'द्योतते',
      meaning: 'shine',
      category: '6',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%A6%E0%A5%8D%E0%A4%AF%E0%A5%81%E0%A4%A4%E0%A5%8D1_%E0%A4%A6%E0%A5%8D%E0%A4%AF%E0%A5%81%E0%A4%A4%E0%A4%81_%E0%A4%AD%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-',
      gana: 'भ्वादिः'
    },
    {
      root: 'दिव् - दिवुँ',
      form: 'दीव्यति ',
      meaning: 'shine',
      category: '6',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'parasmaipadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%A6%E0%A4%BF%E0%A4%B5%E0%A5%8D2_%E0%A4%A6%E0%A4%BF%E0%A4%B5%E0%A5%81%E0%A4%81_%E0%A4%A6%E0%A4%BF%E0%A4%B5%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-',
      gana: 'दिवादिः'
    },
    {
      root: 'वि_आङ्_ख्या - ख्या',
      form: 'व्याख्याति',
      meaning: 'explain',
      category: '7',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'parasmaipadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%96%E0%A5%8D%E0%A4%AF%E0%A4%BE1_%E0%A4%96%E0%A5%8D%E0%A4%AF%E0%A4%BE_%E0%A4%85%E0%A4%A6%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=%E0%A4%B5%E0%A4%BF_%E0%A4%86%E0%A4%99%E0%A5%8D',
      gana: 'अदादिः'
    },
    {
      root: 'वि_वृ  - वृञ्',
      form: 'विवृणोति',
      meaning: 'explain',
      category: '7',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'ubhayapadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%B5%E0%A5%831_%E0%A4%B5%E0%A5%83%E0%A4%9E%E0%A5%8D_%E0%A4%B8%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=%E0%A4%B5%E0%A4%BF',
      gana: 'स्वादिः'
    },
    {
      root: 'वि_आङ्_कृ - डुकृञ्',
      form: 'व्याकुरुते',
      meaning: 'explain',
      category: '7',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'ubhayapadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%95%E0%A5%833_%E0%A4%A1%E0%A5%81%E0%A4%95%E0%A5%83%E0%A4%9E%E0%A5%8D_%E0%A4%A4%E0%A4%A8%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=%E0%A4%B5%E0%A4%BF_%E0%A4%86%E0%A4%99%E0%A5%8D',
      gana: 'तनादिः'
    },
    {
      root: '',
      form: 'अर्थापयति',
      meaning: '',
      category: '7',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'विवृणीते',
      meaning: '',
      category: '7',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: 'वि_आङ्_चक्ष् - चक्षिँङ्',
      form: 'व्याचष्टे ',
      meaning: 'explain',
      category: '7',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%9A%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A5%8D1_%E0%A4%9A%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A4%BF%E0%A4%81%E0%A4%99%E0%A5%8D_%E0%A4%85%E0%A4%A6%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=%E0%A4%B5%E0%A4%BF_%E0%A4%86%E0%A4%99%E0%A5%8D',
      gana: 'अदादिः'
    },
    {
      root: 'वि_आङ्_कृ - डुकृञ्',
      form: 'व्याकरोति ',
      meaning: 'explain',
      category: '7',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'ubhayapadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%95%E0%A5%833_%E0%A4%A1%E0%A5%81%E0%A4%95%E0%A5%83%E0%A4%9E%E0%A5%8D_%E0%A4%A4%E0%A4%A8%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=%E0%A4%B5%E0%A4%BF_%E0%A4%86%E0%A4%99%E0%A5%8D',
      gana: 'तनादिः'
    },
    {
      root: '',
      form: 'प्रबध्नाति ',
      meaning: 'bind on',
      category: '8',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: 'प्र_णी - णीञ्',
      form: 'प्रणयति',
      meaning: 'fix',
      category: '8',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'ubhayapadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%A3%E0%A5%801_%E0%A4%A3%E0%A5%80%E0%A4%9E%E0%A5%8D_%E0%A4%AD%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=%E0%A4%AA%E0%A5%8D%E0%A4%B0',
      gana: 'भ्वादिः'
    },
    {
      root: '',
      form: 'प्रयुङ्क्ते ',
      meaning: 'fix',
      category: '8',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: 'पूज् - पूजँ',
      form: 'पूजयति ',
      meaning: 'worship',
      category: '9',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'parasmaipadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%AA%E0%A5%82%E0%A4%9C%E0%A5%8D1_%E0%A4%AA%E0%A5%82%E0%A4%9C%E0%A4%81_%E0%A4%9A%E0%A5%81%E0%A4%B0%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-',
      gana: 'चुरादिः'
    },
    {
      root: 'अर्च् - अर्चँ',
      form: 'अर्चयति',
      meaning: 'praise, worship',
      category: '9',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'parasmaipadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%85%E0%A4%B0%E0%A5%8D%E0%A4%9A%E0%A5%8D2_%E0%A4%85%E0%A4%B0%E0%A5%8D%E0%A4%9A%E0%A4%81_%E0%A4%9A%E0%A5%81%E0%A4%B0%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-',
      gana: 'चुरादिः'
    },
    {
      root: 'सत्कृ - डुकृञ्',
      form: 'सत्करोति ',
      meaning: 'treat well or with respect',
      category: '9',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'parasmaipadi',
      forms_url: '#',
      gana: 'तनादिः'
    },
    {
      root: '',
      form: 'आद्रियते',
      meaning: 'pay respect to',
      category: '9',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi',
      forms_url: ''
    },
    {
      root: 'अन्च् - अन्चुँ',
      form: 'अञ्चति',
      meaning: 'honor',
      category: '9',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'ubhayapadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%85%E0%A4%A8%E0%A5%8D%E0%A4%9A%E0%A5%8D1_%E0%A4%85%E0%A4%A8%E0%A5%8D%E0%A4%9A%E0%A5%81%E0%A4%81_%E0%A4%AD%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-',
      gana: 'भ्वादिः'
    },
    {
      root: '',
      form: 'संभावयति',
      meaning: 'honour',
      category: '9',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: 'अर्च् - अर्चँ',
      form: 'अर्चति ',
      meaning: 'honour',
      category: '9',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'parasmaipadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%85%E0%A4%B0%E0%A5%8D%E0%A4%9A%E0%A5%8D2_%E0%A4%85%E0%A4%B0%E0%A5%8D%E0%A4%9A%E0%A4%81_%E0%A4%9A%E0%A5%81%E0%A4%B0%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-',
      gana: 'भ्वादिः'
    },
    {
      root: 'मान् - मानँ',
      form: 'मानयति',
      meaning: 'honour',
      category: '9',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: '',
      gana: 'भ्वादिः'
    },
    {
      root: 'सभाज',
      form: 'सभाजयति',
      meaning: 'worship',
      category: '9',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'parasmaipadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%B8%E0%A4%AD%E0%A4%BE%E0%A4%9C1_%E0%A4%B8%E0%A4%AD%E0%A4%BE%E0%A4%9C_%E0%A4%9A%E0%A5%81%E0%A4%B0%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-',
      gana: 'चुरादिः'
    },
    {
      root: '',
      form: 'उपचरति',
      meaning: 'serve',
      category: '9',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अन्वास्ते',
      meaning: '',
      category: '9',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: 'मह ',
      form: 'महयति',
      meaning: 'honour',
      category: '9',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'parasmaipadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%AE%E0%A4%B91_%E0%A4%AE%E0%A4%B9_%E0%A4%9A%E0%A5%81%E0%A4%B0%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-',
      gana: 'चुरादिः'
    },
    {
      root: '',
      form: 'आराधयति',
      meaning: 'worship',
      category: '9',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: 'अनु_सृ ',
      form: 'अनुसरति',
      meaning: 'follow',
      category: '10',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'parasmaipadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%B8%E0%A5%831_%E0%A4%B8%E0%A5%83_%E0%A4%AD%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=%E0%A4%85%E0%A4%A8%E0%A5%81',
      gana: 'भ्वादिः'
    },
    {
      root: 'आङ्_राध् - राधोँ',
      form: 'आराध्यति',
      meaning: 'worship',
      category: '9',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'parasmaipadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%B0%E0%A4%BE%E0%A4%A7%E0%A5%8D1_%E0%A4%B0%E0%A4%BE%E0%A4%A7%E0%A5%8B%E0%A4%81_%E0%A4%A6%E0%A4%BF%E0%A4%B5%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=%E0%A4%86%E0%A4%99%E0%A5%8D',
      gana: 'दिवादिः'
    },
    {
      root: '',
      form: 'अभिराध्यति',
      meaning: '',
      category: '9',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'शुश्रूषते ',
      meaning: 'serve',
      category: '10',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: 'परि_चर् - चरँ',
      form: 'परिचरति',
      meaning: 'serve',
      category: '10',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'parasmaipadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%9A%E0%A4%B0%E0%A5%8D1_%E0%A4%9A%E0%A4%B0%E0%A4%81_%E0%A4%AD%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=%E0%A4%AA%E0%A4%B0%E0%A4%BF',
      gana: 'भ्वादिः'
    },
    {
      root: '',
      form: 'उपास्ते',
      meaning: '',
      category: '10',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'वरिवस्यति ',
      meaning: '',
      category: '10',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'पुरस्करोति',
      meaning: '',
      category: '11',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'पुरस्कुरुते',
      meaning: '',
      category: '11',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'बहुमन्यते',
      meaning: '',
      category: '11',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: 'बहूकृ - डुकृञ्',
      form: 'बहूकरोति',
      meaning: 'serve',
      category: '11',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: '',
      gana: 'तनादिः'
    },
    {
      root: '',
      form: 'बहुमनुते',
      meaning: '',
      category: '11',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'चार्हयति',
      meaning: '',
      category: '11',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: 'नमस्_कृ - डुकृञ्',
      form: 'नमस्करोति',
      meaning: 'salute',
      category: '13',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'ubhayapadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%95%E0%A5%833_%E0%A4%A1%E0%A5%81%E0%A4%95%E0%A5%83%E0%A4%9E%E0%A5%8D_%E0%A4%A4%E0%A4%A8%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D',
      gana: 'तनादिः'
    },
    {
      root: 'जुष् - जुषीँ',
      form: 'जुषते',
      meaning: 'be devoted to',
      category: '13',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%9C%E0%A5%81%E0%A4%B7%E0%A5%8D1_%E0%A4%9C%E0%A5%81%E0%A4%B7%E0%A5%80%E0%A4%81_%E0%A4%A4%E0%A5%81%E0%A4%A6%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-',
      gana: 'तुदादिः'
    },
    {
      root: '',
      form: 'नमस्यति',
      meaning: 'salute',
      category: '13',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: 'भज् - भजँ',
      form: 'भजते',
      meaning: 'revere',
      category: '13',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'ubhayapadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%AD%E0%A4%9C%E0%A5%8D1_%E0%A4%AD%E0%A4%9C%E0%A4%81_%E0%A4%AD%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-',
      gana: 'भ्वादिः'
    },
    {
      root: 'श्रि - श्रिञ्',
      form: 'श्रयति',
      meaning: 'salute',
      category: '13',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'ubhayapadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%B6%E0%A5%8D%E0%A4%B0%E0%A4%BF1_%E0%A4%B6%E0%A5%8D%E0%A4%B0%E0%A4%BF%E0%A4%9E%E0%A5%8D_%E0%A4%AD%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-',
      gana: 'भ्वादिः'
    },
    {
      root: '',
      form: 'प्रणिपतति',
      meaning: '',
      category: '13',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: 'सेव् - सेवृँ',
      form: 'सेवते',
      meaning: 'serve',
      category: '13',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%B8%E0%A5%87%E0%A4%B5%E0%A5%8D1_%E0%A4%B8%E0%A5%87%E0%A4%B5%E0%A5%83%E0%A4%81_%E0%A4%AD%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-',
      gana: 'भ्वादिः'
    },
    {
      root: 'णम् - णमँ',
      form: 'नमति',
      meaning: 'bow',
      category: '13',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'parasmaipadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%A3%E0%A4%AE%E0%A5%8D1_%E0%A4%A3%E0%A4%AE%E0%A4%81_%E0%A4%AD%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-',
      gana: 'भ्वादिः'
    },
    {
      root: '',
      form: 'अभिवादयते',
      meaning: 'respectful salutation',
      category: '14',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'पादौगृह्णीते',
      meaning: 'respectful salutation',
      category: '14',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: 'वद् - वदिँ',
      form: 'वन्दते',
      meaning: 'salute respectfully',
      category: '14',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%B5%E0%A4%A6%E0%A5%8D2_%E0%A4%B5%E0%A4%A6%E0%A4%BF%E0%A4%81_%E0%A4%AD%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-',
      gana: 'भ्वादिः'
    },
    {
      root: '',
      form: 'अभिवादयति',
      meaning: 'salute respectfully',
      category: '14',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: 'अव् - अवँ',
      form: 'अवति',
      meaning: 'guard',
      category: '16',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'parasmaipadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%85%E0%A4%B5%E0%A5%8D1_%E0%A4%85%E0%A4%B5%E0%A4%81_%E0%A4%AD%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-',
      gana: 'भ्वादिः'
    },
    {
      root: '',
      form: 'त्रायते',
      meaning: '',
      category: '16',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: 'पा ',
      form: 'पाति',
      meaning: 'protect',
      category: '16',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%AA%E0%A4%BE2_%E0%A4%AA%E0%A4%BE_%E0%A4%85%E0%A4%A6%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-',
      gana: 'अदादिः'
    },
    {
      root: 'पाल् - पालँ',
      form: 'पालयति',
      meaning: 'protect',
      category: '16',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%AA%E0%A4%BE%E0%A4%B2%E0%A5%8D1_%E0%A4%AA%E0%A4%BE%E0%A4%B2%E0%A4%81_%E0%A4%9A%E0%A5%81%E0%A4%B0%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-',
      gana: 'चुरादिः'
    },
    {
      root: 'रक्ष् - रक्षँ',
      form: 'रक्षति',
      meaning: 'protect',
      category: '16',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%B0%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A5%8D1_%E0%A4%B0%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A4%81_%E0%A4%AD%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-',
      gana: 'भ्वादिः'
    },
    {
      root: 'शास् - शासुँ',
      form: 'शास्ति',
      meaning: 'rule',
      category: '16',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'parasmaipadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%B6%E0%A4%BE%E0%A4%B8%E0%A5%8D1_%E0%A4%B6%E0%A4%BE%E0%A4%B8%E0%A5%81%E0%A4%81_%E0%A4%85%E0%A4%A6%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-',
      gana: 'अदादिः'
    },
    {
      root: 'गुप् - गुपूँ',
      form: 'गोपायति',
      meaning: 'guard',
      category: '16',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'parasmaipadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%97%E0%A5%81%E0%A4%AA%E0%A5%8D1_%E0%A4%97%E0%A5%81%E0%A4%AA%E0%A5%82%E0%A4%81_%E0%A4%AD%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-',
      gana: 'भ्वादिः'
    },
    {
      root: 'भुज् - भुजँ',
      form: 'भुनक्ति',
      meaning: 'govern',
      category: '16',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'ubhayapadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%AD%E0%A5%81%E0%A4%9C%E0%A5%8D2_%E0%A4%AD%E0%A5%81%E0%A4%9C%E0%A4%81_%E0%A4%B0%E0%A5%81%E0%A4%A7%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-',
      gana: 'रुधादिः'
    },
    {
      root: '',
      form: 'अभिगोपायति ',
      meaning: '',
      category: '16',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: 'प्री - प्रीङ्',
      form: 'प्रीयते',
      meaning: 'enjoy',
      category: '17',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A5%801_%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A5%80%E0%A4%99%E0%A5%8D_%E0%A4%A6%E0%A4%BF%E0%A4%B5%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-',
      gana: 'दिवादिः'
    },
    {
      root: 'मुद् - मुदँ',
      form: 'मोदते',
      meaning: 'be glad',
      category: '17',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%AE%E0%A5%81%E0%A4%A6%E0%A5%8D1_%E0%A4%AE%E0%A5%81%E0%A4%A6%E0%A4%81_%E0%A4%AD%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-',
      gana: 'भ्वादिः'
    },
    {
      root: 'हृष् - हृषँ',
      form: 'हृष्यति',
      meaning: 'be glad or pleased',
      category: '17',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'parasmaipadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%B9%E0%A5%83%E0%A4%B7%E0%A5%8D2_%E0%A4%B9%E0%A5%83%E0%A4%B7%E0%A4%81_%E0%A4%A6%E0%A4%BF%E0%A4%B5%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-',
      gana: 'दिवादिः'
    },
    {
      root: 'आङ्_नद् - टुनदिँ',
      form: 'आनंदति',
      meaning: 'to be happy',
      category: '17',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%A8%E0%A4%A6%E0%A5%8D1_%E0%A4%9F%E0%A5%81%E0%A4%A8%E0%A4%A6%E0%A4%BF%E0%A4%81_%E0%A4%AD%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=%E0%A4%86%E0%A4%99%E0%A5%8D',
      gana: 'भ्वादिः'
    },
    {
      root: 'नद् - टुनदिँ',
      form: 'नंदति',
      meaning: 'to be happy',
      category: '17',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'parasmaipadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%A8%E0%A4%A6%E0%A5%8D1_%E0%A4%9F%E0%A5%81%E0%A4%A8%E0%A4%A6%E0%A4%BF%E0%A4%81_%E0%A4%AD%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-',
      gana: 'भ्वादिः'
    },
    {
      root: 'निस्_वृ - वृञ्',
      form: 'निर्वृणोति ',
      meaning: '',
      category: '17',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'ubhayapadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%B5%E0%A5%831_%E0%A4%B5%E0%A5%83%E0%A4%9E%E0%A5%8D_%E0%A4%B8%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=%E0%A4%A8%E0%A4%BF%E0%A4%B8%E0%A5%8D',
      gana: 'स्वादिः'
    },
    {
      root: 'निस्_वा ',
      form: 'निर्वाति ',
      meaning: 'exhilarated',
      category: '17',
      obj: 'akarmaka',
      padi: 'parasmaipadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%B5%E0%A4%BE1_%E0%A4%B5%E0%A4%BE_%E0%A4%85%E0%A4%A6%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=%E0%A4%A8%E0%A4%BF%E0%A4%B8%E0%A5%8D',
      gana: 'अदादिः'
    },
    {
      root: '',
      form: 'सुख्यति',
      meaning: 'gladden',
      category: '17',
      obj: 'akarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: 'अव् - अवँ',
      form: 'अवति',
      meaning: 'satisfy',
      category: '17',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'parasmaipadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%85%E0%A4%B5%E0%A5%8D1_%E0%A4%85%E0%A4%B5%E0%A4%81_%E0%A4%AD%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-',
      gana: 'भ्वादिः'
    },
    {
      root: 'तुष् - तुषँ',
      form: 'तुष्यति',
      meaning: 'be pleased',
      category: '17',
      obj: 'akarmaka',
      padi: 'parasmaipadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%A4%E0%A5%81%E0%A4%B7%E0%A5%8D1_%E0%A4%A4%E0%A5%81%E0%A4%B7%E0%A4%81_%E0%A4%A6%E0%A4%BF%E0%A4%B5%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-',
      gana: 'दिवादिः'
    },
    {
      root: 'सुख',
      form: 'सुखयति ',
      meaning: 'make happy',
      category: '19',
      obj: 'akarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%B8%E0%A5%81%E0%A4%961_%E0%A4%B8%E0%A5%81%E0%A4%96_%E0%A4%9A%E0%A5%81%E0%A4%B0%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-',
      gana: 'चुरादिः'
    },
    {
      root: '',
      form: 'आह्लादयति ',
      meaning: 'delight',
      category: '19',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: 'प्री - प्रीञ्',
      form: 'प्रीणीते ',
      meaning: 'delight',
      category: '19',
      obj: 'akarmaka',
      padi: 'ubhayapadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A5%802_%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A5%80%E0%A4%9E%E0%A5%8D_%E0%A4%95%E0%A5%8D%E0%A4%B0%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-',
      gana: 'क्र्यादिः'
    },
    {
      root: 'प्री - प्रीञ्',
      form: 'प्रीणयति',
      meaning: 'gratify, please',
      category: '19',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'parasmaipadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A5%803_%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A5%80%E0%A4%9E%E0%A5%8D_%E0%A4%9A%E0%A5%81%E0%A4%B0%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-',
      gana: 'चुरादिः'
    },
    {
      root: '',
      form: 'सुखाकुरुते ',
      meaning: '',
      category: '19',
      obj: 'akarmaka',
      padi: 'atmanepadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'आनंदयति  ',
      meaning: 'gladden',
      category: '19',
      obj: 'akarmaka',
      padi: 'parasmaipadi',
      forms_url: ''
    },
    {
      root: 'धिव् - धिविँ',
      form: 'धिनोति ',
      meaning: 'delight',
      category: '19',
      obj: 'akarmaka',
      padi: 'parasmaipadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%A7%E0%A4%BF%E0%A4%B5%E0%A5%8D1_%E0%A4%A7%E0%A4%BF%E0%A4%B5%E0%A4%BF%E0%A4%81_%E0%A4%AD%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-',
      gana: 'भ्वादिः'
    },
    {
      root: '',
      form: 'आमोदयति ',
      meaning: '',
      category: '19',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'हर्षयति',
      meaning: 'rejoice',
      category: '19',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: 'तुष् - तुषँ',
      form: 'तोषयति ',
      meaning: 'please',
      category: '19',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'parasmaipadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%A4%E0%A5%81%E0%A4%B7%E0%A5%8D1_%E0%A4%A4%E0%A5%81%E0%A4%B7%E0%A4%81_%E0%A4%A6%E0%A4%BF%E0%A4%B5%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-',
      gana: 'दिवादिः'
    },
    {
      root: 'दू - दूङ्',
      form: 'दूयते',
      meaning: 'distress',
      category: '18',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%A6%E0%A5%821_%E0%A4%A6%E0%A5%82%E0%A4%99%E0%A5%8D_%E0%A4%A6%E0%A4%BF%E0%A4%B5%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-',
      gana: 'दिवादिः'
    },
    {
      root: 'व्यथ् - व्यथँ',
      form: 'व्यथते ',
      meaning: 'tremble',
      category: '18',
      obj: 'akarmaka',
      padi: 'atmanepadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%B5%E0%A5%8D%E0%A4%AF%E0%A4%A5%E0%A5%8D1_%E0%A4%B5%E0%A5%8D%E0%A4%AF%E0%A4%A5%E0%A4%81_%E0%A4%AD%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-',
      gana: 'भ्वादिः'
    },
    {
      root: '',
      form: 'दुःख्यति ',
      meaning: 'cause pain',
      category: '18',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '	शुच् - शुचँ',
      form: 'शोचति ',
      meaning: 'be sorrowful or afflicted',
      category: '18',
      obj: 'akarmaka',
      padi: 'parasmaipadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%B6%E0%A5%81%E0%A4%9A%E0%A5%8D1_%E0%A4%B6%E0%A5%81%E0%A4%9A%E0%A4%81_%E0%A4%AD%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-',
      gana: 'भ्वादिः'
    },
    {
      root: 'षद् - षदॢँ',
      form: 'सीदति ',
      meaning: 'despair',
      category: '18',
      obj: 'akarmaka',
      padi: 'parasmaipadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%B7%E0%A4%A6%E0%A5%8D1_%E0%A4%B7%E0%A4%A6%E0%A5%A2%E0%A4%81_%E0%A4%AD%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-',
      gana: 'भ्वादिः'
    },
    {
      root: 'खिद् - खिदँ',
      form: 'खिद्यते ',
      meaning: 'be distressed or wearied',
      category: '18',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%96%E0%A4%BF%E0%A4%A6%E0%A5%8D1_%E0%A4%96%E0%A4%BF%E0%A4%A6%E0%A4%81_%E0%A4%A6%E0%A4%BF%E0%A4%B5%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-',
      gana: 'दिवादिः'
    },
    {
      root: '',
      form: 'क्लिश्यति ',
      meaning: '',
      category: '18',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: 'श्रम् - श्रमुँ',
      form: 'श्राम्यति',
      meaning: ' 	be or become weary or tired',
      category: '18',
      obj: 'akarmaka',
      padi: 'parasmaipadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%B6%E0%A5%8D%E0%A4%B0%E0%A4%AE%E0%A5%8D1_%E0%A4%B6%E0%A5%8D%E0%A4%B0%E0%A4%AE%E0%A5%81%E0%A4%81_%E0%A4%A6%E0%A4%BF%E0%A4%B5%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-',
      gana: 'दिवादिः'
    },
    {
      root: '',
      form: 'अंतस्तपति ',
      meaning: '',
      category: '18',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: 'तम् - तमुँ',
      form: 'ताम्यति',
      meaning: 'be distressed',
      category: '18',
      obj: 'akarmaka',
      padi: 'parasmaipadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%A4%E0%A4%AE%E0%A5%8D1_%E0%A4%A4%E0%A4%AE%E0%A5%81%E0%A4%81_%E0%A4%A6%E0%A4%BF%E0%A4%B5%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-',
      gana: 'दिवादिः'
    },
    {
      root: 'ग्लै',
      form: 'ग्लायति ',
      meaning: 'weary',
      category: '20',
      obj: 'akarmaka',
      padi: 'parasmaipadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%97%E0%A5%8D%E0%A4%B2%E0%A5%881_%E0%A4%97%E0%A5%8D%E0%A4%B2%E0%A5%88_%E0%A4%AD%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-',
      gana: 'भ्वादिः'
    },
    {
      root: 'म्लै',
      form: 'म्लायति ',
      meaning: 'be languid or weary',
      category: '20',
      obj: 'akarmaka',
      padi: 'parasmaipadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%AE%E0%A5%8D%E0%A4%B2%E0%A5%881_%E0%A4%AE%E0%A5%8D%E0%A4%B2%E0%A5%88_%E0%A4%AD%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-',
      gana: 'भ्वादिः'
    },
    {
      root: 'प्लुष् - प्लुषँ',
      form: 'प्लुष्यति ',
      meaning: 'singe',
      category: '20',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'parasmaipadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%AA%E0%A5%8D%E0%A4%B2%E0%A5%81%E0%A4%B7%E0%A5%8D2_%E0%A4%AA%E0%A5%8D%E0%A4%B2%E0%A5%81%E0%A4%B7%E0%A4%81_%E0%A4%A6%E0%A4%BF%E0%A4%B5%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-',
      gana: 'दिवादिः'
    },
    {
      root: 'ष्विद् - ञिष्विदाँ',
      form: 'स्विद्यति',
      meaning: 'be disturbed',
      category: '20',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'parasmaipadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%B7%E0%A5%8D%E0%A4%B5%E0%A4%BF%E0%A4%A6%E0%A5%8D2_%E0%A4%9E%E0%A4%BF%E0%A4%B7%E0%A5%8D%E0%A4%B5%E0%A4%BF%E0%A4%A6%E0%A4%BE%E0%A4%81_%E0%A4%A6%E0%A4%BF%E0%A4%B5%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-',
      gana: 'दिवादिः'
    },
    {
      root: 'शुष् - शुषँ',
      form: 'शुष्यति',
      meaning: 'become dry',
      category: '20',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'parasmaipadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%B6%E0%A5%81%E0%A4%B7%E0%A5%8D1_%E0%A4%B6%E0%A5%81%E0%A4%B7%E0%A4%81_%E0%A4%A6%E0%A4%BF%E0%A4%B5%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-',
      gana: 'दिवादिः'
    },
    {
      root: 'क्लिश् - क्लिशूँ',
      form: 'क्लिश्नाति',
      meaning: ' 	feel pain',
      category: '21',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'parasmaipadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%95%E0%A5%8D%E0%A4%B2%E0%A4%BF%E0%A4%B6%E0%A5%8D2_%E0%A4%95%E0%A5%8D%E0%A4%B2%E0%A4%BF%E0%A4%B6%E0%A5%82%E0%A4%81_%E0%A4%95%E0%A5%8D%E0%A4%B0%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-',
      gana: 'क्र्यादिः'
    },
    {
      root: 'व्यथ् - व्यथँ',
      form: 'व्यथयति',
      meaning: 'hurt',
      category: '21',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'parasmaipadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%B5%E0%A5%8D%E0%A4%AF%E0%A4%A5%E0%A5%8D1_%E0%A4%B5%E0%A5%8D%E0%A4%AF%E0%A4%A5%E0%A4%81_%E0%A4%AD%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-',
      gana: 'भ्वादिः'
    },
    {
      root: '',
      form: 'दुःखाकरोति ',
      meaning: '',
      category: '21',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: 'शुच् - शुचँ',
      gana: 'भ्वादिः',
      form: 'शोचयति ',
      meaning: 'cause to suffer pain',
      category: '21',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'parasmaipadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%B6%E0%A5%81%E0%A4%9A%E0%A5%8D1_%E0%A4%B6%E0%A5%81%E0%A4%9A%E0%A4%81_%E0%A4%AD%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-'
    },
    {
      root: '',
      form: 'विह्वलयति ',
      meaning: '',
      category: '21',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: 'दु - टुदु',
      form: 'दुनोति ',
      meaning: ' 	distress',
      category: '21',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%A6%E0%A5%812_%E0%A4%9F%E0%A5%81%E0%A4%A6%E0%A5%81_%E0%A4%B8%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-',
      gana: 'स्वादिः'
    },
    {
      root: '',
      form: 'व्याकुलयति',
      meaning: ' 	agitate',
      category: '21',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'विमानयति',
      meaning: ' 	dishonour',
      category: '21',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'विषादयति',
      meaning: 'cause to despond or despair',
      category: '21',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: 'हन् - हनँ',
      gana: 'अदादिः',
      form: 'हन्ति',
      meaning: 'kill',
      category: '22',
      obj: 'sakarmaka',
      padi: 'parasmaipadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%B9%E0%A4%A8%E0%A5%8D1_%E0%A4%B9%E0%A4%A8%E0%A4%81_%E0%A4%85%E0%A4%A6%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-'
    },
    {
      root: '',
      form: 'निबर्हयति',
      meaning: 'cause to destroy',
      category: '22',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: 'षूद् - षूदँ',
      gana: 'भ्वादिः',
      form: 'सूदते',
      meaning: 'kill',
      category: '22',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%B7%E0%A5%82%E0%A4%A6%E0%A5%8D1_%E0%A4%B7%E0%A5%82%E0%A4%A6%E0%A4%81_%E0%A4%AD%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-'
    },
    {
      root: 'हिस् - हिसिँ',
      gana: 'रुधादिः',
      form: 'हिनस्ति',
      meaning: 'kill',
      category: '22',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'parasmaipadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%B9%E0%A4%BF%E0%A4%B8%E0%A5%8D1_%E0%A4%B9%E0%A4%BF%E0%A4%B8%E0%A4%BF%E0%A4%81_%E0%A4%B0%E0%A5%81%E0%A4%A7%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-'
    },
    {
      root: 'सम्_हृ - हृञ्',
      form: 'संहरते',
      meaning: 'kill',
      category: '22',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'ubhayapadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%B9%E0%A5%831_%E0%A4%B9%E0%A5%83%E0%A4%9E%E0%A5%8D_%E0%A4%AD%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=%E0%A4%B8%E0%A4%AE%E0%A5%8D',
      gana: 'भ्वादिः'
    },
    {
      root: '',
      form: 'उज्जासयति',
      meaning: 'kill',
      category: '22',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'कदर्थयति',
      meaning: 'torment',
      category: '23',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: 'मन्थ् - मन्थँ',
      form: 'मथ्नाति',
      meaning: 'agitate',
      category: '23',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%AE%E0%A4%A8%E0%A5%8D%E0%A4%A5%E0%A5%8D2_%E0%A4%AE%E0%A4%A8%E0%A5%8D%E0%A4%A5%E0%A4%81_%E0%A4%95%E0%A5%8D%E0%A4%B0%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-',
      gana: 'क्र्यादिः'
    },
    {
      root: 'कृश् - कृशँ',
      form: 'कर्शयति',
      meaning: 'torment',
      category: '23',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'parasmaipadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%95%E0%A5%83%E0%A4%B6%E0%A5%8D1_%E0%A4%95%E0%A5%83%E0%A4%B6%E0%A4%81_%E0%A4%A6%E0%A4%BF%E0%A4%B5%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-',
      gana: 'दिवादिः'
    },
    {
      root: '	बाध् - बाधृँ',
      form: 'बाधते',
      meaning: 'trouble',
      category: '23',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%AC%E0%A4%BE%E0%A4%A7%E0%A5%8D1_%E0%A4%AC%E0%A4%BE%E0%A4%A7%E0%A5%83%E0%A4%81_%E0%A4%AD%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-',
      gana: 'भ्वादिः'
    },
    {
      root: 'पिष् - पिषॢँ',
      form: 'पिनष्टि',
      meaning: 'hurt',
      category: '24',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'parasmaipadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%AA%E0%A4%BF%E0%A4%B7%E0%A5%8D1_%E0%A4%AA%E0%A4%BF%E0%A4%B7%E0%A5%A2%E0%A4%81_%E0%A4%B0%E0%A5%81%E0%A4%A7%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-',
      gana: 'रुधादिः'
    },
    {
      root: 'उप_द्रु ',
      form: 'उपद्रवति',
      meaning: 'assault',
      category: '24',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%A6%E0%A5%8D%E0%A4%B0%E0%A5%811_%E0%A4%A6%E0%A5%8D%E0%A4%B0%E0%A5%81_%E0%A4%AD%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=%E0%A4%89%E0%A4%AA',
      gana: 'भ्वादिः'
    },
    {
      root: 'पीड् - पीडँ',
      form: 'पीडयति',
      meaning: 'hurt',
      category: '24',
      obj: 'sakarmaka',
      padi: 'parasmaipadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%AA%E0%A5%80%E0%A4%A1%E0%A5%8D1_%E0%A4%AA%E0%A5%80%E0%A4%A1%E0%A4%81_%E0%A4%9A%E0%A5%81%E0%A4%B0%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-',
      gana: 'चुरादिः'
    },
    {
      root: '',
      form: 'शास्ति',
      meaning: 'punish',
      category: '24',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: 'शास् - शासुँ',
      form: 'निगृह्णीते',
      meaning: 'suppress',
      category: '25',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'parasmaipadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%B6%E0%A4%BE%E0%A4%B8%E0%A5%8D1_%E0%A4%B6%E0%A4%BE%E0%A4%B8%E0%A5%81%E0%A4%81_%E0%A4%85%E0%A4%A6%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-',
      gana: 'अदादिः'
    },
    {
      root: 'तड् - तडँ',
      form: 'ताडयति',
      meaning: 'hit',
      category: '25',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%A4%E0%A4%A1%E0%A5%8D2_%E0%A4%A4%E0%A4%A1%E0%A4%81_%E0%A4%9A%E0%A5%81%E0%A4%B0%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-',
      gana: 'चुरादिः'
    },
    {
      root: '',
      form: 'विध्यति',
      meaning: 'bruise',
      category: '25',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'आप्नोति',
      meaning: 'obtain',
      category: '27',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'लभते',
      meaning: 'obtain',
      category: '27',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'प्रपद्यते',
      meaning: 'obtain',
      category: '27',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'जिहीते',
      meaning: 'give away',
      category: '27',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'आसादयति',
      meaning: ' 	cause to obtain',
      category: '27',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'विन्दते',
      meaning: 'obtain',
      category: '27',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'उपसर्पति',
      meaning: 'approach',
      category: '28',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'उपसरति',
      meaning: 'approach',
      category: '28',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'उपयाति',
      meaning: 'approach',
      category: '28',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'उपगच्छति',
      meaning: 'approach',
      category: '28',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'उपधावति',
      meaning: 'approach hastily',
      category: '28',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'उपनयति',
      meaning: 'approach hastily',
      category: '28',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'उपतिष्ठते',
      meaning: ' 	be or stand here and there',
      category: '28',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अपसरति',
      meaning: 'disappear',
      category: '29',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अपगच्छति',
      meaning: 'go away',
      category: '29',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अपैति',
      meaning: 'go away',
      category: '29',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'व्येति',
      meaning: 'disappear',
      category: '29',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'विगच्छति',
      meaning: 'go away',
      category: '29',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अपवर्तते',
      meaning: 'move away',
      category: '29',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'आगच्छति',
      meaning: 'come',
      category: '30',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'आव्रजति',
      meaning: 'come near',
      category: '30',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'आयाति',
      meaning: 'come',
      category: '30',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'आपतति',
      meaning: 'approach ',
      category: '30',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'आसरति',
      meaning: 'come running',
      category: '30',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'निर्गच्छति',
      meaning: 'run away',
      category: '32',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'निर्याति',
      meaning: 'set out for',
      category: '32',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'निस्सरति',
      meaning: 'run away',
      category: '32',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'उत्पतति',
      meaning: 'run away',
      category: '32',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'उद्गच्छति',
      meaning: 'run away',
      category: '31',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'उद्व्रजति',
      meaning: 'run away',
      category: '31',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'उद्याति',
      meaning: 'rise',
      category: '31',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'उत्तिष्ठति',
      meaning: 'stand',
      category: '31',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'उच्चलति',
      meaning: 'jump up',
      category: '31',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अभिगच्छति',
      meaning: 'attack',
      category: '33',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अभिपतति',
      meaning: 'fall down upon',
      category: '33',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अभियाति',
      meaning: 'approach',
      category: '33',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अभिधावति',
      meaning: 'rush upon',
      category: '33',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अभिप्रार्दयते',
      meaning: '',
      category: '33',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अभिषेणयति',
      meaning: 'assail with an army',
      category: '33',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अनुसर्पति',
      meaning: 'glide after or towards',
      category: '34',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अनुपतति',
      meaning: 'run after',
      category: '34',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अनूदेति',
      meaning: 'rise or come up after',
      category: '34',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अनुवर्तते',
      meaning: 'follow',
      category: '34',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अनुगच्छति',
      meaning: 'come along with',
      category: '34',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अनुसरति',
      meaning: 'go after',
      category: '34',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अनुयाति',
      meaning: 'go towards or after',
      category: '34',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अनुधावति',
      meaning: 'chase, run after',
      category: '34',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अन्वेति',
      meaning: 'come after',
      category: '34',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अनुद्रवति',
      meaning: 'follow, run after',
      category: '34',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अन्वागच्छति',
      meaning: 'follow',
      category: '34',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अन्वयति',
      meaning: '',
      category: '34',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'विडंबयति',
      meaning: 'imitate',
      category: '35',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अनुकरोति',
      meaning: 'imitate',
      category: '35',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'उपमाति',
      meaning: 'imitate',
      category: '35',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अनुकल्पते',
      meaning: 'follow in order',
      category: '35',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अनुविदधाति',
      meaning: 'regulate',
      category: '35',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'तुलयति',
      meaning: 'match',
      category: '35',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form:
        'ददाति ददते दत्ते दिशत्युपहरत्यपि ।       विश्राणयत्यर्पयति वितरत्यावहत्यपि ॥३३॥       प्रयच्छति स्पर्शयति प्रतिपादयतीति च ।       पात्रत्रा कुरुते तत्सात्करोत्यतिसृजत्यपि ॥ दास्या संयच्छते कामी ददात्युपकरोति च ।      ',
      meaning: '',
      category: '36',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form:
        'आदत्ते प्रतिगृह्णित प्रतिगृह्णीत इत्यपि ॥३५॥       जहाति विसृजत्युज्झत्यपि त्यजति मुञ्चति ।  मुञ्चते वर्जयति च तथा परिहरत्यपि ॥      ',
      meaning: '',
      category: '37',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form:
        'खेलति क्रीडति परिक्रीडते विहरत्यपि ।       सङ्क्रीडते विभ्रमति विनोदयति दीव्यति ॥      ',
      meaning: '',
      category: '74',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form:
        'रमतेऽनुक्रीडते प्रेङ्खति त्वङ्गति रिङ्गति ।       विभ्राम्यति ललत्येवमथो नटति नृत्यति ॥      ',
      meaning: '',
      category: '39',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form:
        'वीरायते धर्षयते प्रतिहन्ति प्रगल्भते ।       विक्रामति परिक्रामत्यथ दृप्यति माद्यति ॥      ',
      meaning: '',
      category: '40',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form:
        'युध्यते योधयति च बाहुभ्यांतु नियुध्यते। सङ्घर्षयत्याह्वयति स्पर्धते स्पर्धयत्यपि । ',
      meaning: '',
      category: '44',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form:
        'जयत्यतिक्रामत्यतिशेतेऽतिरिच्यते । अत्येत्यर्थे विजयते पराजयत इत्यपि ॥ अथो जयत्यतिक्रामत्यतिशेतेऽतिरिच्यते ।      अत्येत्यर्थे विजयते पराजयत इत्यपि ॥',
      meaning: '',
      category: '41',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'कुप्यति क्रुध्यति द्वेष्टि रुष्यतीर्ष्यत्यसूयति ॥',
      meaning: '',
      category: '45',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: '',
      meaning: '',
      category: '',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'सहते क्षमते क्षाम्यत्यपि शाम्यति मृष्यति ॥',
      meaning: '46',
      category: '',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'प्रसीदत्यनुगृह्णाति दयते चानुकम्पते । ',
      meaning: '',
      category: '48',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form:
        'पश्यति निर्वर्णयति प्रत्यक्षयतीक्षतेऽपरोक्षयति ॥       निध्यायति लोचयति च साक्षात्कुरुते निशामयति ॥      ',
      meaning: '',
      category: '49',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form:
        'ऊहते तर्कयत्यध्याहरत्यालोचयत्यपि ।      मीमांसते विविङ्क्ते च विचारयति चाप्यथ ॥      ',
      meaning: '',
      category: '50',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form:
        'निर्धारयति निगमयति निश्चिनुते निश्चिनोति निर्णयते ।       निर्णयति  निरूपयति च निर्लोडयते परिच्छिनत्यपि च ॥      ',
      meaning: '',
      category: '51',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'निमिषतिमुकुळीभवति      स्फुटति च सङ्कुचति कुड्मलीभवति ।      ',
      meaning: '',
      category: '53',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form:
        'उन्मीलत्युन्मिषति      ह्युच्छ्र्वसिति निमीलयति मिषति हसति ॥      ',
      meaning: '',
      category: '52',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'उद्भिद्यते विकसति स्फुटीभवति दीर्यते ।',
      meaning: '',
      category: '54',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form:
        'करोति कुरुते निर्मात्याचरत्यनुतिष्ठति ॥५१॥      निर्मिमीते विधत्ते विदधाति रचयत्यपि ।      कल्पयत्याकलयति तनोति तनुतेऽपि च ॥      ',
      meaning: '',
      category: '55',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form:
        'वैरायते विरुन्धे विरुणद्धि कलहायते ।      द्वेष्टि द्विष्टे विगृह्णाति विराध्यत्यपराध्यति ॥      ',
      meaning: '',
      category: '56',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form:
        'जिघांसति विगृह्णीते द्रुह्यत्यपकरोति च ।      अपिधत्ते चावृणुते स्थगयत्यपि चोर्णुते ॥      ',
      meaning: '',
      category: '57',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form:
        'ऊर्णोत्युर्णौति धुडयत्यंतर्धापयतीति च।      अंतर्धत्ते तिरोधत्ते लीयतेंऽतर्दधाति च ॥      ',
      meaning: '',
      category: '58',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form:
        'मुष्णाति चोरयति च हरत्यपहरत्यपि ।       बलाद्गृह्णात्याच्छिनत्ति लुण्टयत्यथ घुष्यति ॥      ',
      meaning: '',
      category: '61',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form:
        'शब्दायते घोषयति रौति स्वनति कूजति ।       सङ्क्रीडति ध्वनति च शिङ्क्ते नदति गुंजति ॥      ',
      meaning: '',
      category: '60',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form:
        'रणति क्वणति क्रुंचत्यपि स्तनति गर्जति ।       रसति क्रोशति रटत्यथाक्रन्दति रोदिति ॥ बाष्पायते विलपति परिदेवयतीति च ।      ',
      meaning: '',
      category: '62',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'वेपते कंपते चञ्चत्यपि लोलति  वल्गति ॥',
      meaning: '',
      category: '63',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form:
        'डोलायते च चलति वलते वलतीति च ।       धुनोति धुनुते धूनोत्यालोलयति धूनुते ॥६१॥      धुनाति कम्पयत्येवं धुवति व्यग्रयत्यपि ।      चलयत्याकुलयति श्रन्थादिश्चालयत्यपि ॥      ',
      meaning: '',
      category: '64',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form:
        'श्लिष्यत्यालिङ्गति परिष्वजतेप्युपगूहति ॥       आलिङ्गते चापि परिरंभते वेष्टयत्यपि ॥     ',
      meaning: '',
      category: '66',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form:
        'निदधाति निधत्ते निक्षिपते निक्षिपत्यपि ।       निवेशयति विन्यस्यत्यपि न्यस्यति चाप्यथ ॥     ',
      meaning: '',
      category: '67',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form:
        'पाणौ गृह्णाति गृह्णीते  विवहत्युपयच्छते ।       परिगृह्णाति च परिणयत्यथ निषीदति ॥६५     ',
      meaning: '',
      category: '68',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form:
        'तिष्ठत्यास्ते निविशते वसत्युपविशत्यपि ।       वितिष्ठते तदध्यास्तेऽधितिष्ठत्युपतिष्ठते ॥     ',
      meaning: '',
      category: '69',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: ' वर्तते ध्रियते प्राणित्यपि श्वसिति जीवति ।',
      meaning: '',
      category: '72',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form:
        'नुदति प्रेरयति विक्षिपति क्षिपतेऽस्यति ॥ प्रहिणोति व्यादिशति नियुङ्क्ते चोदयत्यपि ।       प्रेषयत्यपि युङ्क्ते विसृजति प्रेष्यतीति च ॥',
      meaning: '',
      category: '73',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form:
        ' बिभर्ति बिभृते धत्ते वहते धारयत्यपि।       दधाति वहतीत्यर्थे धरत्युद्वहतीत्यपि ॥          ',
      meaning: '',
      category: '76',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form:
        'तिरस्करोत्यभिभवत्यवजानाति निन्दति ।       धिक्करोति न्यक्कुरुते विगायत्यवगायति ॥७०॥      जुगुप्सतेऽववमनुते गर्हयत्यपमन्यते ।      बहिष्करोति परिभवत्याक्षिपति चाजति ॥ अवधीरयत्येवमवमानयतीति च ।     ',
      meaning: '',
      category: '75',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form:
        ' वांछतीच्छत्यभिलषत्यभिलष्यत्यपेक्षते ॥  कांक्षत्याद्रियते चाभिप्रेति स्पृहयतीहते ।      आशास्तेऽर्थयते वष्टि लिप्सतेऽभीप्सतीति च ॥७३॥      काङ्क्षते चाभिसंधत्तेऽनुरुंधे चानुरुध्यते ।       याचते याचतीत्यर्थे नाथत्यर्थयतेऽर्दति ॥      ',
      meaning: '',
      category: '77',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form:
        'अपोऽवगाहते चोपस्पृशति स्नाति मज्जति ।  तिम्यत्यार्द्रीभवत्यर्थे स्तिम्यतीत्यप्यथोक्षति ॥ स्नपयत्याप्लावयति मज्जयत्यपि सिंचति ।',
      meaning: '',
      category: '149',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: ' शक्नोति पारयति पर्याप्नोति प्रभवत्यपि ॥',
      meaning: '',
      category: '78',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'ईष्टे प्रगल्भते चाथ पचते पचतीति च ।',
      meaning: '',
      category: '80',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'प्रवर्तते प्रक्रमते प्रस्तौत्यारभतेऽपि च ॥',
      meaning: '',
      category: '79',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form:
        'उपक्रमत उद्युङ्क्ते चार्हत्युत्सहतेपि च ।       ईहते चेष्टते चैव यतते च प्रयस्यति ॥     ',
      meaning: '',
      category: '81',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form:
        'भुङ्क्तेऽभ्यवहरत्यश्नात्याचामत्यत्ति खादति ।      रसयत्यास्वादयति भक्षयत्यपि चर्वति ॥      ',
      meaning: '',
      category: '82',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'लेढि लीढेऽथ पिबति धयत्यास्वादतेऽपि च ॥     ',
      meaning: '',
      category: '83',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'गिरत्युद्गिरति निगिरत्युद्वमत्यपि॥',
      meaning: '',
      category: '84',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form:
        ' भूषयति परिष्कुरुतेऽलंकुरुतेऽलंकरोति मण्डयति ।      अपि वा परिष्करोत्यप्याकल्पयति प्रसाधयति ॥      ',
      meaning: '',
      category: '85',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'सौति सूते च जनयत्युत्पादयति सूयते । ',
      meaning: '',
      category: '87',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'त्रपते लज्जते जिह्रेत्यपि संकुचतीति च ॥',
      meaning: '',
      category: '86',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'सङ्गच्छते युज्यते संपद्यते चोपपद्यते । ',
      meaning: '',
      category: '88',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'सन्तिष्ठते समाप्नोति पर्याप्नोति च पूर्यते ॥',
      meaning: '',
      category: '89',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'छिनत्ति कृन्तति लुनात्यपि खंडयति द्यति । ',
      meaning: '',
      category: '90',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'व्यापद्यते प्रैति म्रियते च प्रमीयते ॥',
      meaning: '',
      category: '92',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'सम्मन्यतेऽनुजानीतेऽनुजानात्यनुमन्यते । ',
      meaning: '',
      category: '94',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'उररीकुरुते चाङ्गीकरोत्यभ्युपगच्छति ॥',
      meaning: '',
      category: '93',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form:
        'शृणोति संशृणुत इत्यर्थे निशमयत्यपि ।      आकर्णयत्यपि ततोऽवधत्ते धारयत्यपि ॥      ',
      meaning: '',
      category: '95',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'प्रमाद्यति प्रस्मरति विस्मरत्यपि मुह्यति ॥',
      meaning: '',
      category: '98',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form:
        'अधीते शीलयत्यभ्यस्यति शीलति शिक्षते ।      अमी  परिचिनोत्यर्थे घटतेऽपि च सिद्ध्यति ॥      ',
      meaning: '',
      category: '99',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'पुष्णाति पोषयत्यर्थे वर्धयत्येधयत्यपि । ',
      meaning: '',
      category: '101',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'पवते पावयत्यर्थे पुनीते च पुनाति च ॥',
      meaning: '',
      category: '100',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: '',
      meaning: '',
      category: '',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form:
        'मार्ष्टि मार्जयते शुद्धीकुरुते शोधयत्यपि ।      मार्जति क्षालयत्यर्थे निर्णेनेक्ति च धावति ॥      ',
      meaning: '',
      category: '102',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'वृणोति वरयत्यर्थे वृणीते वृणुते वरम् । ',
      meaning: '',
      category: '105',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'क्रीणाति पणते विक्रीणीते व्यवहरत्यपि ॥',
      meaning: '',
      category: '104',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'सज्जत्यासंजयत्यर्थे सन्नह्यति तु सज्जते ॥',
      meaning: '',
      category: '106',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form:
        'विचिनोत्यन्विष्यति चान्विच्छत्यनुसरत्यपि । विनयत्यनुशास्त्यध्यापयत्यभ्यासयत्यपि ॥९५॥      शास्ति शिक्षयतीत्यर्थे लगत्यर्थे तु लीयते ।      ',
      meaning: '',
      category: '108',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'नयति प्रापयति सङ्गमयत्यर्पयत्यपि ॥',
      meaning: '',
      category: '110',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'स्रवति द्रवति श्चोतत्यपि क्षरति वर्षति ॥',
      meaning: '',
      category: '111',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: '',
      meaning: '',
      category: '',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'न्यञ्चत्यधोयाति पतत्यधोगच्छति मज्जति । ',
      meaning: '',
      category: '114',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'भस्मीकरोति दहति ',
      meaning: '',
      category: '116',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'प्लवते तु तरत्यपि ',
      meaning: '115',
      category: '',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'निषेधति निरुन्धे निरुणद्धि प्रतिषेधति ॥',
      meaning: '',
      category: '117',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form:
        'सम्भ्राम्यति क्षुभ्यति सम्भ्रमत्यपि च वेपते ।      बिभेति त्रसति त्रस्यत्यारोहत्यधिरोहति ॥      ',
      meaning: '',
      category: '118',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'रज्यते रज्यति स्निह्यत्यनुयुङ्क्ते तु पृच्छति ॥',
      meaning: '',
      category: '120',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'प्रतिवक्त्युत्तरयति वाति वीजयतीत्यपि । ',
      meaning: '',
      category: '122',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'लिखत्यालिखतीत्यस्मिन्नर्थे कृषति कर्षति ॥',
      meaning: '',
      category: '119',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'बध्नाति नह्यति च संददात्याकलयत्यपि । ',
      meaning: '',
      category: '139',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'समाधत्तेऽनुनयति सान्त्वयत्युपयच्छति ॥',
      meaning: '',
      category: '138',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'कर्षयत्यास्फालयति सङ्घट्टयति सीव्यति ।',
      meaning: '',
      category: '147',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: '',
      meaning: '',
      category: '',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: '',
      meaning: '',
      category: '',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: '',
      meaning: '',
      category: '',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: '',
      meaning: '',
      category: '',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: '',
      meaning: '',
      category: '',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'atmanepadi/parasmaipadi',
      forms_url: ''
    }
  ],
  chandraloka_lessons: [
    {
      title_sans: 'श्रीगणेशाय नमः',
      title_eng: 'Benedictory Verses - Mangala śloka ',
      id: 1,
      slokas: [
        {
          sloka:
            'अमरीकबरीभारभ्रमरीमुखरीकृतम् ।<br>दूरीकरितु दुरितं गीरीचरणापङ्कजम् ॥',
          sloka_explanation: {
            eng:
              'May the foot- lotus of Gauri made resonant by the female bees in the masses of braided hairs of the prostrating goddesses!'
          }
        },
        {
          sloka:
            'परस्परतपःसम्पत्फलायितपरस्परौ।<br>प्रपञ्चमातापितरौ प्राञ्चौ जायापती स्तुमः॥',
          sloka_explanation: {
            eng:
              'We glorify that ancient husband and wife, the parents of the universe, each of whom became the fruit of the penance treasure of the other.'
          }
        },
        {
          sloka:
            'अलङ्कारेषु बालानामवगाहनसिद्धये।<br>ललितः क्रियते तेषां लक्ष्यलक्षणसंग्रहः॥',
          sloka_explanation: {
            eng:
              'This elegant treatise on Alankaras with their  concise definitions and apt examples has been composed (by me) for the purpose of enabling the young students to understand the ornaments easily'
          }
        }
      ]
    },
    {
      title_sans: 'उपमालङ्कारः',
      title_eng: 'Upamālaṅkāra - Simile',
      id: 2,
      slokas: [
        {
          sloka: 'उपमा यत्र सादृश्यलक्ष्मीरुल्लसति द्वयोः। <br>',
          sloka_explanation: {
            sans:
              'यत्र उपमान-उपमेययोः सहृदय-हृदयाह्लादकत्वेन चारुसादृश्यम् उद्भूततया उल्लसति व्यङ्ग्यमर्यादा विना स्पष्टं प्रकाशत तत्र उपमालङ्कारः।',
            eng:
              'When the beauty of equality between the thing equated and the thing equated to pleases the hearts of connoisseurs, it is known as "Upamā"'
          },
          examples: [
            {
              text: 'हंसीव कृष्ण! ते कीर्तिः स्वर्गङ्गामवगाहते॥',
              explanation: {
                sans:
                  '<p>इयं च पूर्णोपमा इत्युच्यते। तत्रोपमानोपमेय साधारणधर्मोपमावाचकानां चतुर्णां प्रयोगे पूर्णेत्युच्यते <br>हंसी कीर्तिः स्वर्गङ्गावगाहनमिव शब्दश्चेत् एतेषाम् उपमान-उपमेय-साधारण-धर्मोपमा-वाचकानां चतुर्णामपि उपादानात्‌। </p>',
                eng:
                  '<p>O Krishna, thy fame like a she-swan enters the celestial Ganges (or pervades the celestial regions and this earth).</p><p>This is an example of ‘simile complete’; for, it contains all the four essentials of comparison,which are –</p><table><thead><th></th><th></th><th>In the present example</th></thead><tr><td>1. उपमेयम्, वर्ण्यम् or विषयः</td><td>The object compared, i.e, the subject of comparison, such as face etc.</td><td>कीर्तिः - Fame</td></tr><tr><td>2. उपमानम्, अवर्ण्यम् or विषयी</td><td>The object compared to, i.e, the standard of comparison, such as moon, lotus etc.</td><td>हंसी - swan </td></tr><tr><td>3. साधारणधर्मः or सामान्यधर्मः or simply धर्मः </td><td>The common attribute, i.e, the characteristic resemblance between the two objects (the object compared and the object compared to); or the quality of the said two objects that occasions their similitude such as charmingness or the like.</td><td>अवगाहते i.e, अवगाहनक्रिया - ‘The act of entering or pervading’ – the common attribute</td></tr><tr><td>4. उपमावाचकः or simply वाचकः </td><td>The word implying comparison, such as इव ‘as’ or the like.</td><td>इव - like</td></tr></table><br><p>कीर्तिः ‘fame’, यशस् ‘reputation’ and हासः ‘laughter’ are always described as white according to the convention of the poets. Hence, the fame of Krishna is compared to a swan which is of white colour.</p>'
              }
            }
          ]
        },
        {
          sloka:
            'वर्ण्योपमानधर्माणामुपमावाचकस्य च।<br>एकद्वित्र्यनुपादानैर्भिन्ना लुप्तोपमाष्टधा॥',
          sloka_explanation: {
            sans:
              '<p>उपमेयादीनां चतुर्णां मध्ये एकस्य द्वयोस्त्रयाणां वा प्रतिपादकशब्दाभावेन लुप्तोपमेत्युच्यते। </p><p>सा चाष्टधा। यथा –</p><ul><li> वाचकलुप्ता </li><li>धर्मलुप्ता </li><li>धर्मवाचकलुप्ता </li><li>वाचकोपमेयलुप्ता </li><li> उपमानलुप्ता </li><li> वाचकोपमानलुप्ता </li><li>धर्मोपमानलुप्ता </li><li>धर्मोपमानवाचकलुप्ता </li></ul>',
            eng:
              '<h3>Word meanings</h3><table><tr><td>वर्ण्य-उपमान-धर्माणां </td><td>of the object compared, the object compared to, the common attribute</td></tr><tr><td>उपमावाचकस्य च  </td><td>and of the word implying comparison.</td></tr><tr><td>एक-द्वि- त्रि- अनुपादानात् </td><td>by the omission of the one, two or three</td></tr><tr><td>अष्टधा</td><td>eightfold</td></tr><tr><td>भिन्ना</td><td>divided</td></tr><tr><td>लुप्तोपमा</td><td>elliptical simile</td></tr><tr><td>(भवति)</td><td>(becomes)</td></tr></table><h3>Summary of the verse</h3><p>By the omission of one, two or three (of the four requisites of simile complete, i. e., the object compared, the object compared to, the common attribute and the word implying comparison) the simile becomes elliptical and is eightfold, which are :-</p><ol><li>वाचकलुप्ता-SIMILE in the omission of the word implying comparison.</li><li>धर्मपुल्ता- SIMILE in the omission of the common attribute.</li><li>धर्मवाचकलुप्ता- SIMILE in the omission of the common attribute and of the Word implying comparison.</li><li>वाचकोपमेयलुप्ता- SIMILE in the omission of the word implying comparison and of the object compared.</li><li>उपमानवाचकलुप्ता- SIMILE in the omission of  the object compared to and the word implying comparison.</li><li>उपमानलुप्ता- SIMILE in the omission of the object compared to.</li><li>उपमानवाचकधर्मलुप्ता- SIMILE in the omission of the object compared to, of the word implying comparison and of the common attribute.</li><li>उपमानधर्मलुप्ता- SIMILE in the omission of the object compared to and of the common attribute.</li>'
          },
          examples: [
            {
              text:
                'तडिद्गौरीन्दुतुल्यास्या कर्पूरन्ती दृशोर्मम।<br>कान्त्या स्मरवधूयन्ती दृष्टा तन्वी रहो मया॥',
              explanation: {
                sans:
                  '<p>तत्रोपमानलोपरहिताश्चत्वारो भेदाः ‘तडिद्गौरी’ – इत्यादिश्लोकेन प्रदर्शिताः।</p><h3>वाचकलुप्ता</h3><p>तत्र ‘तडिद्गौरी’ इत्यत्र वाचकलोपस्तडिदिव गौरीत्यर्थे ‘उपमानामि सामान्यवचनैः (पा. २।१।५५) इति समासविधायकशास्त्रकृतः।</p><h3>धर्मलुप्ता</h3><p>‘इन्दुतुल्यास्या’ इत्यत्र धर्मलोपः, स त्वैच्छिको न शास्त्रकृतः, कान्त्या इन्दुतुप्यास्येत्यपि वक्तुं शक्यत्वात्‌।</p><h3>धर्मवाचकलुप्ता</h3><p>‘कर्पूरन्ती’ इत्यत्र धर्मवाचकलोपः कर्पूरमिवाचरन्तीत्यर्थे विहितस्य कर्पूरवदानन्दात्मकाचारार्थकस्य किप्‌ इवशब्देन सह लोपात्‌।</p><p>अत्र धर्मलोप; ऐ्च्छिकः, ननयोरानन्दात्मकतया कर्पूरन्तीति तदुपादानस्यापि संभावादिति।</p><h3>वाचकोपमेयलुप्ता</h3><p>‘कान्त्या स्मरवधूयन्ती’ इत्यत्र वाचकोपमेयलोपः अत्र कान्त्येति विशेषणसामर्थ्यात्स्वात्मानं कामवधूमिवाचरन्तीत्यर्थस्य गम्यमानतया स्वात्मन उपमेयस्य सहोपमावाचकेनानुपादानात्स त्वैच्छिकः; स्वात्मानं स्मरवधूयन्तीत्युपमेयोपादानस्यापि संभवात्‌।</p>',
                eng:
                  '<p>Examples of the first four Elliptical Similes in their order:</p><h3>Word Meaning:</h3><table><tr><td>तङिट्गौरी-</td><td> it (as) yellowish (as) the lightning</td></tr><tr><td>इन्दुतुल्यास्या</td><td>having the face like the moon.</td></tr><tr><td>मम</td><td>my</td></tr><tr><td>दृशोः</td><td>of eyes</td></tr><tr><td>कर्पूरन्ती</td><td>acts (like) the camphor</td></tr><tr><td>कान्त्या</td><td>by (her)loveliness</td></tr><tr><td>स्मरवधूयन्ती</td><td>acts (herself) like the Kama’s bride (Goddess of love)</td></tr><tr><td>(एवंविधा)</td><td>(Such a.)</td></tr><tr><td>तन्वी</td><td>slender woman</td></tr><tr><td>रहः</td><td>in a lonely place</td></tr><tr><td>मया</td><td>by me</td></tr><tr><td>दृष्टा</td><td>was seen. </td></tr></table><br><h3>Summary</h3><p>A slender woman was seen by me in a lonely place a, woman (as) yellowish as the lightning ; and, having the face like the moon, she acts (like) camphor to my eyes, and by (her) loveliness she acts (herself) like the Goddess of love.</p><h3>Example of the Elliptical Simile, No. 1,-in the omission of the word implying comparison (वाचकलुप्ता)</h3><br><p>तङिद्गौरी- If this compound is uncompounded, we have तङिद् इव गौरी , where :-</p><table><tr><td>तङिद् -</td><td>the object compared to</td></tr><tr><td>गौरी-</td><td>the common attribute</td></tr><tr><td>तन्वी </td><td>the object compared.</td></tr></table><br><p>We have, in this example, these 3 requisites, but the remaining requisite, the word इव, expressive of comparison, is indirectly omitted and in the expansion of the compound, it becomes expressed and so this is the example of the Elliptical Simile, No. 1,-in the omission of the word implying comparison (वाचकलुप्ता).</p><h3>Example of the Elliptical Simile, No. 2,-in the omission of the common attribute ( धर्मलुप्ता ).</h3><br><p>इन्दुतुल्यास्या,when uncompounded, becomes इन्दुना तुल्यं आस्यं यस्याः सा ‘she whose face is like the moon,’ where :-</p><table><tr><td>इन्दुः - </td><td>the object compared to</td></tr><tr><td>तुल्यम् - </td><td>the word implying comparison</td></tr><tr><td>आस्यम् - </td><td>the object compared</td></tr></table><br><p>Here, we have the above three requisites; and the remaining requisite--the common attribute such as charmingness &c., we have not got. Hence, this is the example of the Elliptical Simile, No. 2,-in the omission of the common attribute ( धर्मलुप्ता ).</p><p>Observe :-With regard to Elliptical Similes in the omission of the common attribute only, the word omission ‘लोपः’ is used strictly in the sense in which it is used in the Panini’s Sutra ’अदर्शनं लोपः’</p><p>(I. 1. 60) ‘The disappearance is called ‘लोपः’. With regard to the omissions of the other three, i.e., the object compared, the object compared to and the word implying comparison, they are indirectly omitted; but when the compounds which contain them are uncompounded, they come to light, and thus, We see, they are understood. Moreover, the student should note that, without these three requisites, either expressed or understood, there will be no simile at all.</p><h3>Example of the Elliptical Simile, No. 3,-in the omission of the common attribute and the word implying comparison (धर्मवाचकलुप्ता)</h3><br><p>कर्पूरन्ती दृशोर्मम । कर्पूरन्ती is the present participial noun, feminine gender, of the nominal verb ‘कर्पूरति’ having the क्विप् affix expressive of comparison omitted. If it is uncompounded, it becomes कर्पूरमिव आचरन्तौ ‘she acts like the camphor’, where :-</p><table><tr><td>तन्वौ</td><td>in the second line of the sloka is the object compared and</td></tr><tr><td>कर्पूरम्</td><td>is the object compared to.</td></tr></table><br><p>Thus, we have here only the above two requisites and the other two ingredients of comparison, the common attribute and the word implying comparison, are omitted. Hence, this is the example of the Elliptical Simile, No. 3,-in the omission of the common attribute and the word implying comparison (धर्मवाचकलुप्ता)</p><h3>Example of the Elliptical Simile, No. 4,-in the omission of the word implying comparison and the object compared (वाचकोपमेयलुप्ता)</h3><br><p>कान्त्या स्मरवधूयन्ती-by (her) loveliness, she acts (herself) like Kama’s bride. The compound स्मरवधूयन्ती is the present participial noun, feminine gender, of the nominal verb स्मरवधूयति having the affix ‘kyach’ (क्यच्) expressive of comparison. If it is uncompounded, it becomes आत्मानम् स्मरवधूम् इव आचरन्तौ ;  where we have</p><table><tr><td>स्मरवधू - </td><td>the object compared to</td></tr><tr><td>कान्त्या - </td><td>the common attribute</td></tr></table><br><p>Only  two essentials of comparison. The other two, i.e., the object compared आत्मानम्  ‘herself’ and the word expressive of comparison इव ‘as’ are indirectly omitted. Hence, we have the example of the Elliptical Simile, No. 4,-in the omission of the word implying comparison and the object compared (वाचकोपमेयलुप्ता)</p>'
              }
            },
            {
              text:
                'यत्तया मेलनं तत्र लाभो मे यश्च तद्रतेः।<br>तदेतत्काकतालीयमवितर्कितसंभवम्‌॥',
              explanation: {
                sans:
                  '<p>‘काकतालीय’ इत्यत्र काकतालशब्दौ वृत्तिविषये काकतालसमवेतक्रियावर्तिनौ, तेन काकागमनमिव तालपतनमिव काकतालमितीवार्थे ‘समासाच्च तद्विषयात्‌’ (पा. ५।३।१०६) इति ज्ञापकात्समासः।</p><p>उभयत्रोपमेयं स्वस्य क्वचिद्गमनं तत्रैव रहसि तन्व्या अवस्थानं च।</p>तेन स्वस्य तस्याश्च समागमः काकतालसमागमसदृश इति फलति।</p><p>ततः ‘ काकतालमिव काकतालीय‌म्‌’ इति द्वितीयस्मिन्निवार्थे ‘समासाच्च तद्विषयात्‌’ (पा. ५।३।१०६) इति सूत्रेण ‘इवे प्रतिकृतौ’ (पा. ५।३।९६) इत्यधिकारस्थेन छ-प्रत्ययः।</p><h3>उपमानलुप्ता, वाचकोपमानलुप्ता </h3><p>तथा च पतनदलितं तालफलं यथा काकेनोपभुक्तम्‌, एवं रहोदर्शनक्षुभितहृदया तन्वी तालफलोपभोगरुपस्य हओपमानस्यानुपादानात्प्रत्ययार्थोपमायामुपमानलोपः, समासार्थोपमायां वाचकोपमानलोपः ।</p><h3>धर्मोपमानलुप्ता</h3><p>सर्वोऽप्ययं लोपश्छप्रत्ययविधायकशास्त्रकृतः, अवितर्कितसंभवमिति साधारणधर्मस्यानुपादाने प्रत्ययार्थोपमायां धर्मोपमानलोपः।</p><h3>धर्मोपमानवाचकलुप्ता</h3><p>समासार्थोपमायां धर्मोपमानवाचकलोप इति सूक्ष्मया दृष्ट्यावधारितम्‌।</p>',
                eng:
                  '<p>Examples of the Elliptical Similes Nos. 5 and 6 are discussed here. </p><h3>Word meanings</h3><table><tr><td>तत्र - </td><td>there, i.e., in that lonely place</td></tr><tr><td>मे - </td><td>my</td></tr><tr><td>तया - </td><td>with that (lady)</td></tr><tr><td>यत् - </td><td>which </td></tr><tr><td>मेलनम् - </td><td>meeting</td></tr><tr><td>यः - </td><td>which</td></tr><tr><td>तदू रतेः - </td><td>of the sexual intercourse with that lady</td></tr><tr><td>लाभः - </td><td>gain</td></tr><tr><td>तदू - </td><td>that</td></tr><tr><td>एतदू - </td><td>this</td></tr><tr><td>अवितर्कितसम्भवम् - </td><td>accidental or unexpected occurrence</td></tr><tr><td>काकतालीयम्</td><td>like the maxim of the crow and the palm fruit</td></tr></table><br><h3>Summary</h3><p>My meeting with that lady, in that lonely place, and my gain of sexual intercourse with that lady- each is an accidental occurrence like the maxim of the crow and the palm fruit.</p><h3>Examination of the compound काकतालीयम् </h3><br><p>This is the most puzzling example. The compound काकतालीयम्  must be first analyzed ; but its analysis can be best understood only when the Panini’s Sutra समासाच्च तद्विषयात् (V. 3. 106) with its commentary is rightly and fully understood. This Sutra contains 3 words and one word छः is to be supplied from the preceding Sutra (V. 3. 105) and the full Sutra stands thus :-</p><p>समासात् च तद्- विषयात् छः ।</p><p>Meaning: The affix Chha. ( ईय ) comes, also in the sense of  ‘like this’, after a compound noun containing in itself the force of ‘like this’ (hidden).</p><h4 class="text-xs-center">Kasika commentary on the Sutra</h4><br><ul><li>तद् इत्यनेन प्रकृतः इवार्थः निर्दिश्यते -By the Word तद् the sense of इव the subject of discussion, is referred to.</li><li>इवार्थविषयात् समासात् अपरस्मिन् इवार्थे एव छः प्रत्ययो भवति - The affix Chha ( ईय ) comes, only in the second sense of इव ‘like this’, after a compound containing in itself the force of इव.</li></ul><h4>Examples</h4><ol><li>काकतालीयम् -Like the maxim of the crow (काक) and the palm fruit (ताल).</li><li>अजाकृपाणीयम् - Like the death of a goat (अजा) by the accidental falling of a. sword ( कृपाणा ).</li><li>अन्धकर्त्तिकीयम्- the accidental falling of a quail ( वर्त्तिकी ) into the hands of a blind person (अन्धक ).</li></ol><h4>Explanation of the example</h4><table><tr><td>अतर्कितोपनतं चित्रीकरणम् उच्यते-</td><td>Unintentional and strange coincidences are referred to here.</td></tr><tr><td>तत् कथम्-</td><td>How is that.</td></tr><tr><td>काकस्य आगमनम् याट्टच्छिकम्</td><td>The coming of the crow is accidental.</td></tr><tr><td>तालस्य पतनं च</td><td>As also the (sudden) fall of the palm fruit (on the head of the crow).</td></tr><tr><td>तेन तालेन पतता काकस्य वधः कृतः</td><td>By the palm fruit thus falling, the death of the crow occurred.</td></tr><tr><td>एवं एव देवदत्तस्य तत्र आगमनम्</td><td>In the very same manner, the coming of Devadatta. (a person) there.</td></tr><tr><td>दस्यूनां च उपनिपातः</td><td>In the same manner, the sudden attack of robbers (upon Devadatta).</td></tr><tr><td>तैश्च तस्य वधः कृतः</td><td>By them (robbers) his (Devadatta’s) death occurred.</td></tr><tr><td>तत्र यो देवदत्तस्य दस्यूनां च समागमः, सः काकतालसमागमसदृशः</td><td>There, the coincidence of the person Devadatta and the robbers is like that of the crow and the palm fruit.</td></tr><tr><td>इति एकः उपमार्थः</td><td>This is the first sense of ‘like this’ (in the compound काकतालम्).</td></tr><tr><td>अतश्च देवदत्तस्य वधः , सः काकतालवधसदृसः</td><td>Then, the killing of Devadatta is like that of the crow by the fall of the palm fruit.</td></tr><tr><td>इति द्वितीयः उपमार्थः</td><td>This is the second sense of ‘like this’.</td></tr><tr><td>तत्र प्रथमे, समासः</td><td>In the first case, we have the sense of इव  in the compound (काकतालम् hidden).</td></tr><tr><td>द्वितीये, प्रत्ययः</td><td>In the second case, We have the same, expressed in the affix छ (in the compound ककतालीयम्).</td></tr><tr><td>समासश्च अयम् अस्मादेव ज्ञापकात्</td><td>The implication of such a compound, having the sense of ‘like this’ hidden, is indicated by this Sutra, only.</td></tr><tr><td>नहि  अस्य अपरं लक्षणं अस्ति-</td><td>There is no other rule for the formation of this compound but this indication (as no such compound with the Force of इव is taught in the chapter on compounds).</td></tr></table><p>By a careful study of this Sutra with its commentary, we come to know that the compound काकतालीयम् contains two senses of  “इव” = like this’ :</p><ul><li>The first sense is hidden in the compound काकतालम्  and the second sense is expressed by means of the affix chha in the compound काकतालीयम्.</li><li>The compound काकतालम्, if uncompounded, becomes काकः इव, तालमिव  which again become काकागमनमिव ‘like the coming of the crow’ and तालफलपतनमिव ‘like the Falling of the palm fruit’.</li></ul><h3>Example of the Elliptical Similes No. 5 - In the omission of the object compared to and the word implying comparison.</h3><p>From the sloka quoted above, let us first take the example for the Elliptical Simile, No. 5-in the omission of the object compared to and the word implying comparison and consider the same.</p><p>यत्तया मेलनम् तत् अवितर्कितसंभवं काकतालम् where</p><p>मेलनम्  is the object compared and अवितर्कितसंभवम् is the common attribute. Here, we have only the above two essentials of comparison. The other two the object compared to and the word implying comparison, are both hidden in the compound काकतालम्. The coming of the person (पुरुषागमनम्) is compared to the coming of the crow (काकागमनम्) and the coming of the lady is compared to the falling of the palm fruit (तालफलपतनम्). The union of these two, i.e., the person and the lady (तयोः मेलनम् ) which is the object compared) is like that of the crow and the palm fruit (काकतालसमागमसदृशम्). The Word समागमः, the object compared to, and the word, इव, implying comparison, are both omitted. Hence, we have the Elliptical Simile, No. 5 - in the omission of the object compared to and the word implying comparison.</p><h3>Example for the Elliptical Simile No. 6 - in the omission of the object compared to</h3><p>Let us then consider the example for the Elliptical Simile No. 6.</p><p>लाभो मे यश्च तद्रतेः<br>तदेतत् काकतालीयम् अवितर्कितसंभवम् ॥</p>Where: <table><tr><td>लाभः</td><td>is the object compared,</td></tr><tr><td>अवितर्कितसंभवम्</td><td>is the common attribute and the compound</td></tr><tr><td>काकतालीयम्</td><td>contains the object compared to,</td></tr><tr><td>उपभोगः</td><td>eating, hidden and the word implying comparison expressed by the affix छ (ईय) because the compound, if uncompounded, becomes</td></tr><tr><td> काकतालम् इव = काककृततालोपभोगसदृशः</td><td> ‘like the eating of the palm fruit by the crow’:</td></tr></table><p>In this example, we have the above three ingredients of comparison; and the fourth, the object compared to, is omitted. Hence, this is the example of the Elliptical Simile, No. 6-in the omission of the object compared to.</p><h3>Examples of the Elliptical Simile, No. 7 and 8</h3><p>Now, if we take away the common attribute अवितर्कितसंभवम् from the sloka which contains the examples for the Elliptical Similes Nos. 5 and 6 and substitute in its place “अभवत् किं ब्रवीमि ते” it so chanced ; what shall I tell you’ ; and read the sloka. thus :-</p><p>यत्तया मेलनं तत्र लाभो मे यश्च तद्रतेः ।<br>तदेतत्काकतालीयमभवन् किं ब्रवीमि ते ॥</p><p>We have here the omission of the common attribute in the above two examples.</p><h4>In the first example :-</h4><p>मेलनम्  is the object compared and, of the other three essentials of comparison, the common attribute is directly omitted, and the object compared to and the word implying comparison are indirectly omitted in the compound काकतालम् as explained before and so we have the example of the Elliptical Simile, No. 7, in the omission of the object compared to the word implying comparison and the common attribute (उपमानवाचकधर्मलुप्ता).</p><h4>In the second example-</h4><p>लाभः  is the object compared and the compound काकतालीयम् contains the object compared to hidden and the word implying comparison expressed in the affix 5 and We have no common attribute ; so we have the example of the Elliptical Simile, No. 8,—in the omission of the object compared to and of the common attribute (उपमानधर्मलुप्ता).</p><h3>Difference between Simile and other types of Alaṅkāras</h3><p>This ornament उपमा is distinguishable from certain other ornaments such as अनन्वयः No. II. ‘Comparison Absolute,’ रूपकम् No. V.-Metaphor, उपमेयोपमा No. III.-Reciprocal Comparison, and व्यतिरिकः  No. XX.-Dissimilitude.</p><p>In the Rupaka, the resemblance is suggested whereas it is expressed here.</p><p>In the Comparison Absolute, only one object is compared to itself. Here, two different objects are compared.</p><p>In the Reciprocal Comparison, two sentences are employed ; here, only one sentence.</p><p>In the Dissimilitude, contrast also is stated, whereas it is not so in this figure.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'अनन्वयालङ्कारः',
      title_eng: 'Ananvayālaṅkāra - Comparison Absolute',
      id: 3,
      slokas: [
        {
          sloka:
            'उपमानोपमेयत्वं यदेकस्यैव वस्तुनः।<br>इन्दुरिन्दुरिव श्रीमानित्यादौ तदनन्वयः॥',
          sloka_explanation: {
            sans:
              'एकस्यैव वस्तुनः उपमानोपमेयत्ववर्णनमनन्वयः।   वर्ण्यमानमपि स्वस्य स्वेन साधर्म्यं नान्वेतीति व्युत्पत्तेः।  अनन्वयिनोऽप्यर्थस्याभिधानं सदृशान्तरव्यवच्छेदेनानुपमत्वद्योतनाय।',
            eng:
              '<h3>Word meaning</h3><table><tr><td>एकस्य एव</td><td>of only one object on hand.</td></tr><tr><td>यद्</td><td>which like the moon itself</td></tr><tr><td>उपमानोपमेयत्वम्</td><td>the relation of the object compared to and that compared</td></tr><tr><td>तत्</td><td>that</td></tr><tr><td>  श्रीमान्</td><td>glorious</td></tr><tr><td>इन्दुः</td><td>moon</td></tr><tr><td>इन्दुः इव</td><td>like the moon itself</td></tr><tr><td>इत्यादौ</td><td>in the illustrations like this</td></tr><tr><td>अनन्वयः</td><td>the ﬁgure comparison absolute</td></tr></table><h3>Definition of Comparison Absolute</h3><p>When the object compared to and the object compared are one and the same, or in other words, when one and the same object is compared to itself, it is Comparison Absolute</p><p>Meaning of the word Ananvaya:</p><table><tr><td>अनन्वयः = नास्ति यस्य सः: <br>अन्वयः = </td><td>connection</td></tr><tr><td>यस्य सः = </td><td>want of connection with any other object in the world in respect of comparison.</td></tr></table>'
          },
          examples: [
            {
              text: 'इन्दुरिन्दुरिव श्रीमान्‌',
              explanation: {
                sans:
                  '<p>‘इन्दुरिन्दुरिव श्रीमान्‌’ इत्युक्ते श्रीमत्त्वेन चन्द्रस्य नान्यः सदृशोऽस्तीति सदृशान्तरव्यवच्छेदो लक्ष्यते।</p><p>ततश्च स्वस्य स्वेनापि सादृश्यासंभवादनुपमेयत्वे पर्यवसानम्‌॥</p>',
                eng:
                  '<p>The glorious moon is like the moon itself.</p><p>In this figure, a sameness of terms would be more expedient for the really understanding of the identity of the object at the very hearing. ‘इन्दुः इन्दुरिव’ holds better than ‘इन्दुः चन्द्रः इव’ although the latter is a Synonym of the former.</p>'
              }
            },
            {
              text:
                'गगनं गगनाकारः सागरः सागरोपमः।<br>रामरावणयोर्युद्धं रामरावणयोरिव॥',
              explanation: {
                sans:
                  '<p>पूर्वोदाहरणे श्रीमत्त्वस्य धर्मस्योपादानमस्ति।</p><p>इह तु गगनादिषु वैपुल्यादेर्धर्मस्य तन्नास्तीति विशेषः</p>',
                eng:
                  '<p>(As regards spaciousness), the sky is like the sky itself. (As regards vastness), the ocean is similar to the ocean itself. (As regards awfulness), the battle between Rama and Ravana is like the battle between Rama and Ravana.</p><p>The self-comparison of the ocean, sky and the battle is to show the non-existence of their like.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'उपमेयोपमालङ्कारः',
      title_eng: 'Upameyopamālaṅkāra - Reciprocal Comparison',
      id: 4,
      slokas: [
        {
          sloka: 'पर्यायेण द्वयोस्तच्चेदुपमेयोपमा मता ।<br>',
          sloka_explanation: {
            sans:
              'द्वयोः पर्यायेणोपमानोपमेयत्वकल्पनं तृतीयसदृशव्यवच्छेदार्थम्‌।',
            eng:
              '<h3>Word meanings</h3><table><tr><td>द्वयोः</td><td>Of the two, i.e., the object compared to and that compared</td></tr><tr><td>पर्यायेण</td><td>In turn, i.e., alternation</td></tr><tr><td>तत्</td><td>That i.e., the position of upamana and upameya (taken from the preceding sloka)</td></tr><tr><td>चेत्</td><td>If</td></tr><tr><td> उपमेयोपमा</td><td>Reciprocal comparison</td></tr><tr><td>मता </td><td>Is termed</td></tr></table><h3>Definition</h3><p>That, i.e., the position of Upamana and Upameya, when alternated is declared the Reciprocal Comparison.</p>'
          },
          examples: [
            {
              text: 'धर्मोऽर्थ इव पूर्णश्रीरर्थो धर्म इव त्वयि ॥',
              explanation: {
                sans:
                  'धर्मार्थयोर्हि कस्यचित्केनचित्सादृश्ये वर्णिते तस्याप्यन्येन सादृश्यमर्थसिद्धमपि मुखतो वर्ण्यमानं तृतीयसदृशव्यवच्छेदं फलति॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>त्वयि </td><td>In thee</td></tr><tr><td>धर्मः </td><td>(thy) virtue</td></tr><tr><td>अर्थः इव</td><td>Like (thy) riches</td></tr><tr><td>पूर्ण श्रीः</td><td>Full</td></tr><tr><td>अर्थः</td><td>(thy) riches</td></tr><tr><td>धर्मः इव</td><td>Like (thy) virtue</td></tr></table><p>In you, O King! thy virtue is as full as (thy) riches ; and thy riches as full as thy virtue.</p><p>Here, the object of comparing the king’s virtue with his riches and again his riches with his virtue excluding the other similar objects is to show that there is nothing else equal to the virtue &c., of the king.</p><p>This figure is possible only in two sentences as the interchange of comparisons is impossible in one sentence. The Upamana in the first sentence becomes Upameya in the second and the Upameya in the first becomes Upamana in the second in the total absence of a third thing to be compared to. But the figure अनन्वयः No. II. Is possible in one sentence, the object compared to and that compared being the same in the total absence of a second thing to he compared to.</p>'
              }
            },
            {
              text:
                'खमिव जलं जलमिव खं हंस इव चन्द्रश्चन्द्र इव हंस”।<br>कुमुदाकारास्तारास्ताराकाराणि कुमुदानि॥',
              explanation: {
                sans:
                  'पूर्वत्र पूर्णश्रीइति धर्म उपात्तः।<br>इह निर्मलत्वादिधर्मो नोपात्त इति भेदः।<br>उदाहरणद्वयेऽपि प्रकृतयोरेवोपमानोपमेयत्वकल्पनम्‌।<br>राज्ञिधर्मार्थसमृद्धेः शरदि गगनसलिलादिर्नैर्मल्यस्य च वर्णनीयत्वात्‌ प्रकृताप्रकृतयोरप्येषा संभवति॥',
                eng: ' '
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'प्रतीपालङ्कारः',
      title_eng: 'Pratīpālaṅkāra - Converse',
      id: 5,
      slokas: [
        {
          sloka: 'प्रतीपमुपमानस्योपमेयत्वप्रकल्पनम्‌।<br>',
          sloka_explanation: {
            sans: 'प्रसिद्धोपमानोपमेयभावः प्रातिलोम्यात्प्रतीपम्‌।',
            eng:
              '<h3>Word Meanings</h3><table><tr><td>उपमानस्य - </td><td>Of the object compared to</td></tr><tr><td>उपमेयत्वप्रकल्पनम् - </td><td>Assumption as the object compared</td></tr><tr><td>प्रतीपम् - </td><td>The figure converse </td></tr></table><h3>Definition:</h3><p>The assumption of the object compared to as the object compared‘ i.e., when Upamana (moon &c.) is compared to Upameya (Face &c.), or in other words, when the usual form of comparison is inverted, it is the Converse.</p>'
          },
          examples: [
            {
              text: 'त्वल्लोचनसमं पद्म त्वद्वक्त्रसदृशो विधुः',
              explanation: {
                sans:
                  'हे सुंदरि- पद्मंत्वल्लोचन समंभवनेत्र तुल्यंतधाविधुश्चन्द्रः त्वद्वक्त्र सदृशः भवन्मुख तुल्यः ॥',
                eng:
                  '<h3>Word Meanings</h3><table><tr><td>पद्मम् - </td><td>Lotus</td></tr><tr><td>विधुः - </td><td>Moon</td></tr><tr><td>त्वल्लोचनसमम् - </td><td>Equal to thy eye</td></tr><tr><td>त्वद्वक्त्रसदृशः - </td><td>Equal to thy face</td></tr></table>(Lady ! ) The lotus is like thy eyes ; and the moon is like thy face.'
              }
            }
          ]
        }
      ],
      types: 4,
      type: [
        {
          sloka: 'अन्योपमेयलाभेन वर्ण्यस्यानादरश्च तत्‌।',
          sloka_explanation: {
            sans:
              '<p>अत्युत्कृष्टगुणतया वर्ण्यमानस्यान्यत्र स्वसादृश्यमसहमानस्योपमेयं किंचित्प्रदर्श्य तावता तस्य तिरस्कारो द्वितीयं प्रतीपं पूर्वस्मादपि विच्छित्तिविशेषशालि।</p>',
            eng:
              '<h3>Word meanings</h3><table><tr><td>अन्योपमेयलाभेन - </td><td>By reason of gain of another, i.e., the object compared to as the object compared</td></tr><tr><td>वर्ण्यस्य - </td><td>Of the object on hand (face & c)</td></tr><tr><td>अनादरः - </td><td>Disregard</td></tr><tr><td>च</td><td>Also</td></tr><tr><td>तत् - </td><td>That i.e., the figure converse</td></tr></table><h3>Definition</h3><p>When the subject on hand (face &c.) is disregarded by reason-of the gain of another object (i.e., moon &c.) which is not the subject under discourse it is also termed Converse.</p>'
          },
          examples: [
            {
              text: 'अलं गर्वेण ते वक्त्र! कान्त्या चन्द्रोऽपि तादृशः॥',
              explanation_sans:
                'हे वक्त्र हे मुख- तेतव गर्वेण अहंकारेण- अलं- कांत्या मत्तुल्योनास्तीति गर्वं जहिकुतः – कान्त्या शोभयाभवादृशः त्वत्तुल्यः चंद्रः विद्यत इतिशेषः अत्राप्युपमेय भूत चन्द्रस्यलाभेन प्रकृतमुख तिरस्कार वर्णनात् लक्षण संगतिः ॥',
              explanation_eng:
                '<h3>Word meanings</h3><table><tr><td>वक्त्र! - </td><td>Face!</td></tr><tr><td>ते - </td><td>Thy</td></tr><tr><td>गर्वेण - </td><td>By the pride</td></tr><tr><td>अलम् - </td><td>Enough</td></tr><tr><td>कान्त्या - </td><td>In splendor</td></tr><tr><td>चन्द्रः - </td><td>The moon</td></tr><tr><td>भवादृशः - </td><td>Like thee</td></tr></table>O Face! enough of thy pride ; (there is) the moon equal to thee in splendor.'
            }
          ]
        },
        {
          sloka: 'वर्ण्योपमेयलाभेन तथान्यस्याप्यनादरः ।<br>',
          sloka_explanation: {
            sans:
              'अत्युत्कृष्टगुणतया द्वचिदप्युपप्मानभावमसहमानस्यावर्ण्यस्य वर्ण्योपमेयं परिकल्प्य तावता तस्य तिरस्कारः पूर्वप्रतीपवैपरीत्येन तृतीयं प्रतीपम्‌।',
            eng:
              '<h3>Word meanings</h3><table><tr><td>वर्ण्योपमेयलाभेन</td><td>By reason of the gain of the object compared which is the subject on hand</td></tr><tr><td>अन्यस्य - </td><td>Of the object which is not the subject on hand</td></tr><tr><td>अपि</td><td>Also</td></tr><tr><td>अनादरः - </td><td>Disregard</td></tr><tr><td>तथा - </td><td>So, i.e., the converse</td></tr></table><h3>Definition</h3><p>When the object which is not the subject on hand is disregarded by reason of gain of another object which is the subject on hand, it is declared the third kind of Converse.</p>'
          },
          examples: [
            {
              text: 'कः क्रौर्यदर्पस्ते मृत्यो त्वत्तुल्याः सन्ति हि स्त्रियः',
              explanation_sans:
                'हे मृत्योते तव- क्रौर्यदर्पः क्रूरत्व गतोगर्वः पमेय लाभेन तथान्यस्याप्यनादरः । कः क्रौर्य दर्पस्तेमृत्योत्वत्तुल्या स्संतिहस्त्रियः ॥',
              explanation_eng:
                '<h3>Word meanings</h3><table><tr><td>मृत्यो! - </td><td>Death!</td></tr><tr><td>ते - </td><td>Thy</td></tr><tr><td>क्रौर्यदर्पः - </td><td>Pride on account of cruelty</td></tr><tr><td>कः - </td><td>What</td></tr><tr><td>हि - </td><td>Because</td></tr><tr><td>स्त्रियः - </td><td>Women</td></tr><tr><td>त्वत्तुल्याः - </td><td>Equal to you</td></tr><tr><td>सन्ति - </td><td>There are</td></tr></table><p>O death! wherefore dost thou bear the pride on account of cruelty; because, there are (many) Women equal to thee (in cruelty).</p>'
            }
          ]
        },
        {
          sloka: 'वर्ण्येनान्यस्योपमाया अनिष्पत्तिवचश्च तत्‌।<br>',
          sloka_explanation: {
            sans:
              'अवर्ण्ये वर्ण्योपमित्यनिष्पत्तिवचनं पूर्वेभ्य उत्कर्षशालि चतुर्थं प्रतीपम्‌।',
            eng:
              '<h3>Word Meanings</h3><table><tr><td>वर्ण्येन - </td><tdBy the object on hand (i.e., face & c.)</td></tr><tr><td>अन्यस्य - </td><td>Of the object not on hand</td></tr><tr><td>उपमायाः - </td><td>Of the resemblance</td></tr><tr><td>अनिष्पत्तिवचः - </td><td>The assertion of non accomplishment</td></tr><tr><td>च - </td><td>Also</td></tr><tr><td>तत् - </td><td>That i.e., the converse</td></tr></table><h3>Definition</h3><p>The assertion of non-accomplishment of the resemblance of the object not on hand with the object on hand is also termed the Converse.</p>'
          },
          examples: [
            {
              text: 'मिथ्यावादो हि मुग्धाक्षि ! त्वन्मुखाभं किलांबुजम् ॥',
              explanation_sans:
                'उदाहरणे मुदापवादत्वोक्त्योपमित्यनिष्पत्तिरुद्धाटिता।',
              explanation_eng:
                '<h3>Word Meanings</h3><table><tr><td>मुग्धाक्षि! - </td><td>O beautiful-eyed lady!</td></tr><tr><td>अंबुजम् - </td><td>Lotus</td></tr><tr><td>त्वन्मुखाभम् - </td><td>Equal to thy face</td></tr><tr><td>मिथ्यावादः - </td><td>Untrue assertion</td><td>किल - </td><td>Truly</td></tr></table>O beautiful-eyed lady! The assertion that the lotus has the likeness of thy face is an untrue one. Hence, we see here that the resemblance between the two objects lotus and face being stated as untrue becomes an unaccomplished one and so it is the Converse.'
            }
          ]
        },
        {
          sloka: 'प्रतीपमुपमानस्य कैमर्थ्यमपि मन्वते।<br>',
          sloka_explanation: {
            sans:
              'उपमेयस्यैवोपमानप्रयोजनधूर्वहत्वेनोपमानकैमर्थ्यमुपमानप्रातिलोम्यात्‌ पञ्चमं प्रतीपम्‌।',
            eng:
              '<table><tr><td>उपमानस्य - </td><td>Of the object compared to</td></tr><tr><td>कैमर्थ्यम् - </td><td>The sense of “what is the use of”</td></tr><tr><td>अपि</td><td>also</td></tr><tr><td>प्रतीपम् - </td><td>the Converse</td></tr><tr><td>मन्यते - </td><td>Is considered</td></tr></table><p>The assertion ‘ what is the use of the upamana ’ (With reference to the upameya which is the subject on hand) is also considered as one of the Pratipas.</p>'
          },
          examples: [
            {
              text: 'दृष्टं चेद्वदनं तन्व्याः किं पद्मेन किमिन्दुना ॥',
              explanation_sans:
                'विषय्यभेदताद्रूप्यरञ्जनं विषयस्ययत् । रूपकं तत्त्रिधाधिकः क्रौर्यविषयेत्तुल्यो नास्तीत्यभिमानः मर्धः – कुतः – हियस्मात्कारणात् त्वत्तुल्याः क्रौर्यविषयेत्वत्समाः स्त्रियस्संति- त्वत्तुल्यानां क्रूर स्त्रीणां संभवा दहमेव क्रूर इतिवृदाभिमानं माकृथा इत्यर्थः – अत्र वर्ण्यानां क्रूरस्त्रीणां लाभेन अवर्ण्यस्य मृत्योस्तिरस्कारा ल्लक्षण संगतिः ',
              explanation_eng:
                '<table><tr><td>तन्व्याः</td><td>Of that slender lady</td></tr><tr><td>वदनम् - </td><td>The face</td></tr><tr><td>दृष्टं चेत् - </td><td>If seen</td></tr><tr><td>पद्मेन किम् - </td><td>What with the lotus</td></tr><tr><td>इन्दुना किम् - </td><td>What with the moon</td></tr></table>When the face of that slender lady was seen, what is the use of the lotus or of the moon.'
            }
          ]
        }
      ]
    },
    {
      title_sans: 'रूपकालङ्कारः ',
      title_eng: 'Rūpakālaṅkāraḥ - Metaphor',
      id: 6,
      slokas: [
        {
          sloka:
            'विषय्यभेदताद्रूप्यरञ्जनं विषयस्य यत्‌।<br>रूपकं तत्त्रिधाधिक्यन्यूनत्वानुभयोक्तिभिः॥',
          sloka_explanation: {
            sans:
              '<p>विषय्युपमानभूतं पद्मादि, विषयस्तदुपमेयभूतं वर्णनीयं मुखादि।</p><p>विषयिणो रुपेण विषयस्य रञ्जनं रूपकम्‌, अन्यरूपेण रूपवत्त्वकरणात्‌।</p><p>तच्च क्वचित्प्रसिद्धविषय्यभेदे पर्यवसितं, क्वचिद्भेदे प्रतीयमान एव तदीयधर्मारोपमात्रे पर्यवसितम्‌।</p><p>ततश्च रूपकं तावद्विधम्‌ – </p><ul><li>अभेदरूपकं </li><li>ताद्रूप्यरूपकं चेति।</li></ul><p>द्विविधमपि प्रत्येकं त्रिविधम्‌।</p><p>प्रसिद्धविषय्याधिक्यवर्णनेन तन्न्यूनत्ववर्णनेनानुभयोक्त्या चैवम रूपकं षड्विधम्‌।</p>',
            eng:
              '<h3>Word meanings</h3><table><tr><td>वत् - </td><td>Which</td></tr><tr><td>विषयस्य - </td><td>Of the object compared</td></tr><tr><td>विषय्यभेदरञ्जनम् - </td><td>The gratifying representation as non different from the object compared to</td></tr><tr><td>विषयिताद्रूप्यरञ्जनम्- </td><td>The gratifying representation as identifical with the object compared to</td></tr><tr><td>तत् - </td><td>That</td></tr><tr><td>रूपकम् - </td><td>The metaphor</td></tr><tr><td>तत् - </td><td>That (metaphor)</td></tr><tr><td>आधिक्य न्यूनत्व अनुभयोक्तिभिः - </td><td>In point of superiority, inferiority and the absence of both</td></tr><tr><td>विधा - </td><td>Is three fold</td></tr></table><h3>Definition</h3><p>The gratifying representation of the object compared (1) as non-different from, and (2) as identical with, the object compared to is termed Rupaka. And each (of the said two kinds) is again three-fold in point of (1) superiority, (2) inferiority and (3) the absence of both.</p><p>The Metaphor is first hold two-fold :-</p><ol><li>अभेदरूपकम् </li><li>ताद्रूप्यरूपकम् </li></ol><br><p>Each of these is again three-fold in point of superiority &c., of the object compared over the object compared to. </p><p>Hence the Metaphor is six-fold which are :-</p><ol><li>अधिकाभेदरूपकम् </li><li>न्यूनाभेदरूपकम् </li><li>अनुभयाभेदरूपकम् </li><li>अधिकताद्रूप्यरूपकम् </li><li>न्यूनताद्रूप्यरूपकम् </li><li>अनुभयताद्रूप्यरूपकम् </li></ol>'
          },
          examples: [
            {
              text: 'अयं हि धूर्जटिः साक्षाद्येन दग्धाः पुरःक्षणात्‌।',
              explanation: {
                sans:
                  '<h3>अनुभयाभेदरूपकम् ।</h3><p>‘अयं हि’ इत्यादिसार्धश्लोकेनाभेदरूपकाणि - ‘येन दग्धा’ इति विशेषणेन वर्णनीये राज्ञि प्रसिद्धशिवाभेदानुरञ्जनाच्छिवस्य पूर्वावास्थातो वर्णनीयराजभावावस्थायां न्यूनत्वाधिक्ययोरवर्णनाच्चानुभयाभेदरूपकमाद्यम्‌।</p>',
                eng:
                  '<h3>अनुभयाभेदरूपकम् ।</h3><h3>Word meanings</h3><table><tr><td>अयम् (राजा) - </td><td>This (king)</td></tr><tr><td>साक्षात् - </td><td>In person, in bodily form</td></tr><tr><td>धूर्जटिः</td><td>The God Siva</td></tr><tr><td>हि - </td><td>Indeed</td></tr><tr><td>येन - </td><td>By whom</td></tr><tr><td>क्षणात् - </td><td>In a moment</td></tr><tr><td>पुरः - </td><td>The cities (of his foes)</td></tr><tr><td>दग्धाः - </td><td>Were burnt</td></tr></table><p>This (king) is indeed the very God Siva in bodily form ; because by him the cities (of his foes) were burnt.</p><p>Here, the king, the upameya, who is said to have burnt the cities of his foes is represented as non-different from the God Siva, the upamana, the destroyer of the three cities of gold, silver and iron of the demon Tripura, and in the absence of any superiority or of inferiority between these two objects, we have the example of Rupaka No. 3.</p>'
              }
            },
            {
              text: 'अयमास्ते विना शम्भुस्तार्तीयीकं विलोचनम्‌॥',
              explanation: {
                sans:
                  '<h3>न्यूनाभेदरूपकम्</h3><p>तृतीयलोचनप्रहाणोक्त्या पूर्वावस्थातो न्यूनताप्रदर्शनान्न्यूनाभेदरुपकं द्वितीयम्‌।</p><p>न्यूनत्ववर्णनमप्यभेदादार्ढ्यापादकत्वाच्चमत्कारि।</p>',
                eng:
                  '<h3>न्यूनाभेदरूपकम्</h3><table><tr><td>अयम् (राजा) - </td><td>This (king)</td></tr><tr><td>तर्त्तीयौकम् - </td><td>Third</td></tr><tr><td>विलोचनम् - </td><td>Eye</td></tr><tr><td>विना - </td><td>Without</td></tr><tr><td>शंभुः - </td><td>God Siva</td></tr><tr><td>आस्ते - </td><td>Is or stands</td></tr></table><p>Here stands (before us) this (king), the God Sarnbhu himself without his third eye. </p><p>Here, the king, the upameya, having only two eyes is represented as non-different from the God Sambhu, the upamana, in the absence of his third eye, i.e., with an inferiority in respect of eyes. Hence, this is the example of Rupaka No. 2.</p>'
              }
            },
            {
              text: 'शम्भुर्विश्वमवत्यद्य स्वीकृत्य समदृष्टिताम्‌।',
              explanation: {
                sans:
                  '<h3>अधिकाभेदरूपकम् </h3><p>विषमदृष्टित्वपरित्यागेन जगद्रक्षकत्वोक्त्या शिवस्य पूर्वावस्थातो वर्णनीयराहभावावस्थायामुत्कर्षविभावनादधिकाभेदरुपकं तृतीयम्‌।</p>',
                eng:
                  '<h3>अधिकाभेदरूपकम् </h3><h3>Word meanings</h3><table><tr><td>एषः -</td><td> This (king)</td></tr><tr><td>शंभुः - </td><td>The God Sambhu</td></tr><tr><td>समदृष्टिताम् - </td><td>Equality, even eyes,impartiality</td></tr><tr><td>स्वीकृत्य - </td><td>Having assumed</td></tr><tr><td>विश्वम् - </td><td>The universe</td></tr><tr><td>अवति - </td><td>protects</td></tr></table><p>This (king), the God Sambhu himself, protects the world assuming impartiality (lit. even eyes).</p><p>Here, the God Sambhu is said to have assumed two eyes in protecting the world While his third fiery eye clever in consuming the world was now removed in as much as his present Work is the protection of the world and not consuming. Hence, We have here the superiority, i.e., the protection of the world with reference to the destruction of the world with the विषमदृष्टि uneven eyes or three eyes, and so this is the example of Rupaka No. 1.</p>'
              }
            },
            {
              text: 'अस्या मुखेन्दुना लब्धे नेत्रानन्दे किमिन्दुना॥',
              explanation: {
                sans:
                  '<h3>अनुभयताद्रूप्यरूपकम् </h3><p>‘अस्या मुखेन्दुना इत्यादिसार्धश्लोकेन ताद्रूप्यरूपकाणि - एवमुत्तरेषु ताद्रूप्यरुपकोदाहरणेष्वपि क्रमेणानुभयन्यूनाधिकभावा उन्नेयाः।</p>',
                eng:
                  '<h3>अनुभयताद्रूप्यरूपकम् </h3><h3>Word meanings</h3><table><tr><td>अस्याः - </td><td>Of this (lady)</td></tr><tr><td>मुखेन्दुना -</td><td>Face-moon</td></tr><tr><td>नेत्रानन्दे - </td><td>The delight of (our) eyes</td></tr><tr><td>लब्धे - </td><td>When attained</td></tr><tr><td>इन्दुना - </td><td>By the moon</td></tr><tr><td>किम् - </td><td>what</td></tr></table><p>When the delight of (our) eyes has been attained by (seeing) the face-moon of this (lady), What is the good of seeing the moon.</h3>Here, the face of the lady in question is represented as identical with the moon and in the absence of any superiority or of inferiority between them, we have here Rupaka No. 6.</p>'
              }
            },
            {
              text: 'साध्वीयमपरा लक्ष्मीरसुधासागरोदिता।',
              explanation: {
                eng:
                  '<h3>न्यूनताद्रूप्यरूपकम् </h3><h3>Word meanings</h3><table><tr><td>इयं साध्वौ - </td><td>This virtuous women</td></tr><tr><td>असुधासागरोदिता - </td><td>Not born of the Milky Sea.</td></tr><tr><td>अपरा - </td><td>A second</td></tr><tr><td>लक्ष्मीः - </td><td>Goddess of fortune</td></tr></table><p>This virtuous woman is a second Lakshmi (Goddess of fortune) not born of the Milky Sea. </p><p>Here, two different objects, the virtuous woman and the Goddess of fortune, are represented as identical with an inferiority in as much as the former is not born of the Milky Sea and We have therefore here the example of Rupaka No.5.</p>'
              }
            },
            {
              text: 'अयम् कलङ्किनश्चन्द्रान्मुखचन्द्रोऽतिरिच्यते॥',
              explanation: {
                eng:
                  '<h3>अधिकताद्रूप्यरूपकम् </h3><h3>Word meanings</h3><table><tr><td>अयम्</td><td>This</td></tr><tr><td>मुखचन्द्रः - </td><td>Face –moon</td></tr><tr><td>कलंकिनः - </td><td>Spotted</td></tr><tr><td>चन्द्रात् - </td><td>From the moon</td></tr><tr><td>अतिरिच्यते - </td><td>Is superior to</td></tr></table><p>This face-moon (of this lovely woman) is superior to the spotted moon.</p><p>Here, we have the ‘superiority expressed in the example which needs no comment.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'परिणामालङ्कारः',
      title_eng: 'Pariṇāmālaṅkāra - Commutation',
      id: 7,
      slokas: [
        {
          sloka: 'परिणामः क्रियार्थश्चेद् विषयी विषयात्मना ।<br>',
          sloka_explanation: {
            sans:
              '<p>यत्रारोप्यमाणो विषयी किंचित्कार्योपयोगित्वेन निबध्यमानः स्वतस्तस्य तदुपयोगित्वासंभवात्प्रकृतात्मना परिणतिमपेक्षते तत्र परिणामालङ्कारः।</p>',
            eng:
              '<h3>Word meanings</h3><table><tr><td>विषयी - </td><td>The object compared to</td></tr><tr><td>विषयात्मना - </td><td>Under the character of the object compared</td></tr><tr><td>क्रियार्थः - </td><td>Serving the purpose on hand</td></tr><tr><td>चेत् - </td><td>If</td></tr><tr><td>परिणामः - </td><td>The figure commutation</td></tr></table><h3>Definition</h3><p> When the upamana (i.e., the lotus &c., the object superimposed) is identified with the upameya. (i.e., the eye &o., the subject of superimposition) and serves the purpose on hand (i.e., seeing &c.) it is the Commutation.</p>'
          },
          examples: [
            {
              text: 'प्रसन्नेन दृगब्जेन वीक्षते मदिरेक्षणा॥',
              explanation: {
                sans:
                  '<p>अत्रोदाहरणम्‌ – प्रसन्नेति।</p><p>अत्र हि अब्जस्य वीक्षणोपयोगित्वं निबध्यते, न तु दृशः। मयूरव्यंसकादिसमासेन उत्तरपदार्थप्राधान्यात्‌।</p><p>न चोपमितसमासाश्रयेण दृगब्जमिवेति पूर्वपदार्थप्राधान्यमस्तीति वाच्यम्‌ ।</p><p>प्रसन्नेति सामान्यधर्मप्रयोगात्‌।</p><p>‘उपमितं व्याघ्रादिभिः सामान्याप्रयोगे’ (पा० २।१।५६) इति तदप्रयोग एवोपमितसमासानुशासनात्‌।</p><p>अब्जस्य वीक्षणोपयोगित्वं न स्वात्मना संभवति।</p><p>अतस्तस्य प्रकृतदृगात्मना परिणत्यपेक्षणात्‌ परिनामालङ्कारः।</p>',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>मदिरेक्षणा॥ - </td><td>This lovely-lady</td></tr><tr><td>प्रसन्नेन - </td><td>Bright</td></tr><tr><td>दृगब्जेन - </td><td>Eye-lotus</td></tr><tr><td>दीक्षते - </td><td>sees</td></tr></table><p>This lady of lovely eyes beholds with her bright eye-lotus.</p><p>Here, the superimposed lotus not possessed of the power of beholding is identified with the lady’s eye, the subject of superimposition, and is made to serve the purpose on hand, i.e., the act of beholding. In the Rupaka, as per instance in the sentence ‘दृगञ्जं वीक्षे I see the eye-lotus,’ the imposed lotus served only to gratify the expression. In this figure, the act of seeing belonging to the subject of superimposition, the eye, is transferred to the object superimposed, the lotus, as in the present example.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'उल्लेखालङ्कारः',
      title_eng: 'Ullekhālaṅkāra - Representation',
      id: 8,
      slokas: [
        {
          sloka_explanation: {
            sans:
              '<p>यत्र नानाविधधर्मयोग्येकं वस्तु तत्तद्धर्मयोगरूपनिमित्तभेदेन अनेकेन ग्रहीत्रानेकधा उल्लिख्यते तत्र उल्लेखः।</p><p>अनेकधोल्लेखने रुच्यर्थित्वभयादिकं यथार्हं प्रयोजकम्‌। </p><p>रुचिरबिह्रतिः अर्थित्वं लिप्सा।</p>',
            eng:
              '<h3>Word meanings</h3><table><tr><td>एकस्य - </td><td>Of one (object)</td></tr><tr><td>बहभिः - </td><td>By different persons</td></tr><tr><td>बहुधा - </td><td>Under different characters</td></tr><tr><td>उल्लेखात् - </td><td>By delineating</td></tr><tr><td>उल्लेखः - </td><td>Representation</td></tr><tr><td>इष्यते - </td><td>Is regarded</td></tr><tr><td>सः - </td><td>That God Krishna</td></tr></table><h3>Definition</h3><p>When an object is delineated by different people under different characters, it is termed Representation.</p>'
          },
          examples: [
            {
              text: 'स्त्रीभिः कामोऽर्थिभिः स्वर्द्रुः कालः शत्रुभिरैक्षि सः ॥',
              explanation: {
                sans:
                  '<p>‘स्त्रीभिः’ इत्याद्युदाहरणम्‌ अतैक एव राजा सौन्दर्यवितरणपराक्रमशालीति कृत्वा स्त्रीभिरर्थिभिः प्रत्यर्थिभिश्च रुच्यर्थित्वभयैः कामकल्पतरुकालरूपो दृष्टः।</p>',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>स्त्रीभिः - </td><td>By the women</td></tr><tr><td>कामः - </td><td>As God of love</td></tr><tr><td>ऐक्षि - </td><td>Was seen</td></tr><tr><td>अर्थिभिः - </td><td>By the mendicants</td></tr><tr><td>स्वर्द्रुः - </td><td>As the tree of paradise</td></tr><tr><td>शत्रुभिः - </td><td>By (his) foes</td></tr><tr><td>कालः - </td><td>As God of death</td></tr></table><p>He (God Krishna) was regarded as the God of love by the women, as the tree of paradise by the mendicants, and as the God of death by (his) foes.</p><p>Here, the one and the same object is represented as distinct by different beholders on different occasions according to their liking or taste.</p>'
              }
            }
          ]
        }
      ],
      types: 1,
      type: [
        {
          sloka: 'एकेन बहुधोल्लेखेऽप्यसौ विषयभेदतः ।<br>',
          sloka_explanation: {
            sans:
              '<p>ग्रहीतृभेदाभावेऽपि विषयभेदाद्बहुधोल्लेखनादसावुल्लेखः।</p>',
            eng:
              '<h3>Word meanings</h3><table><tr><td>(एकस्य - </td><td>Of one object)</td></tr><tr><td>एकेन - </td><td>By one person</td></tr><tr><td>विषयभेदतः - </td><td>Through difference of peculiarities</td></tr><tr><td>बहुधा</td><td>Under various characters</td></tr><tr><td>उल्लेखे - </td><td>In the delineation</td></tr><tr><td>अपि - </td><td>Also</td></tr><tr><td>असौ - </td><td>That i.e., Representation</td></tr></table><h3>Definition</h3><p>When an object is delineated by one person, i.e., by one perceiver, under various characters through difference of peculiarities. it is also termed Representation.</p>'
          },
          examples: [
            {
              text: 'गुरुर्वचस्यर्जुनो कीर्तौ भीष्मः शरासने॥',
              explanation_sans:
                'उदाहरणं श्लेषसंकीर्णम्‌।वचोविषये महान्पटुरित्यादिवद्बृहस्पतिरित्याद्यर्थान्तरस्यापि क्रोडीकरणात्‌।',
              explanation_eng:
                '<h3>Word meanings</h3><table><tr><td>अयं (राजा) - </td><td>This (King)</td></tr><tr><td>वचसि- </td><td>In speech</td></tr><tr><td>गुरूः - </td><td>(is) grave or Brihaspati</td></tr><tr><td>कीर्त्तौ - </td><td>In fame</td></tr><tr><td>अर्जुनः - </td><td>(is) white or Arjuna</td></tr><tr><td>शरासने</td><td>In bow</td></tr><tr><td>भीष्मः</td><td>(is) terrible or Bhishma</td></tr></table><p>He ( the king ) is grave ( Brihaspati ) in speech, white ( Arjuna  in fame, and terrible ( Bhishma ) in bow.</p><p>Here, one and the same king is represented as distinct by one and the same beholder but through difference of peculiarities belonging to the object delineated.</p>'
            }
          ]
        }
      ]
    },
    {
      title_sans: 'स्मृति-भ्रान्ति- संदेहालङ्काराः',
      title_eng:
        'Smṛti (Reminiscence or Rhetorical Recollection) - bhrānti (Mistaker) - saṃdehālaṅkārā (Doubt)',
      id: 9,
      slokas: [
        {
          sloka: 'स्यात्स्मृतिभ्रान्तिसंदेहैस्तदङ्कालङ्कृतित्रयम्‌।<br>',
          sloka_explanation: {
            sans:
              'स्मृतिभ्रान्तिसंदेहैः सादृश्यान्निबध्यमानैः स्मृतिभ्रान्तिमान्संदेह इति स्मृत्यादि-पदाङ्कितम्‌ अलङ्कार-त्रयं भवति।',
            eng:
              '<h3>Word meanings</h3><table><tr><td>स्मृति-भ्रान्ति-सन्देहैः - </td><td>By (expressions of) recollection, mistake and doubt</td></tr><tr><td>तदंकालङ्कृतित्रयम् - </td><td>Three figures that go by the names of Recollection, Mistaker and Doubt (respectively)</td></tr></table><h3>Definition</h3><p>(1) Expressions of a certain object capable of arousing an impression in the mind favoring a recollection, (2) mistaking a certain object to be something else similar to it, and (3) doubting the certainty of an object are respectively termed Reminiscence, the Mistaker and Doubt. Or in other words :-</p><ol><li>A recollection of an object, experienced before, that arises from the sight of some other object similar to it, is termed Reminiscence.</li><li>The Mistaker is the representation of an object, i.e., face &c. as something else, i.e., lotus &c., as suggested by the skill of the poet, on account of the close resemblance of those two objects.</li><li>When the certainty of an object under delineation is doubted through poetical skill, it is called Doubt.</li></ol>'
          },
          examples: [
            {
              text: 'पङ्कजं पश्यतः कान्तामुखं मे गाहते मनः॥',
              explanation: {
                sans:
                  'पंकजं पश्यतः मेमनः – कांतामुखं प्रियावदनं गाहते- स्मरत्यीत्यर्थः – पद्ममुखयोरत्यंत सादृश्यात् पद्मसंदर्शने सतितत्सदृशं प्रियामुखं मयास्मर्यत इत्यर्थः – अत्र मुखसदृश पद्मदर्शनेनत त्सदृशस्यमुखस्य स्मृतिवर्णनाल्लक्षसंगतिः ॥',
                eng:
                  '<h3>Example of Reminiscence</h3><h3.Word meanings</h3><table><tr><td>पंकजम् - </td><td>Lotus</td></tr><tr><td>पश्यतः - </td><td>Seeing</td></tr><tr><td>मे मनः - </td><td>My mind</td></tr><tr><td>कांतामुखम् - </td><td>The face of the beloved</td></tr><tr><td>गाहते - </td><td>Enters, i.e., recollects</td></tr></table><h3>Meaning</h3><p>Seeing this lotus, my mind recollects the face of my beloved.</p>'
              }
            },
            {
              text: 'अयं प्रमत्तमधुपस्त्वन्मुखं वेत्ति पङ्कजम् ।',
              explanation: {
                sans:
                  'हे कांते अतं पुरोवर्ती प्रमत्तः मधुपः – मधुपानपरवशोभ्रमरः – त्वन्मुखं पंकजंवेत्ति अत्रमुखे पंकजत्व प्रतिपत्ति वर्णानाद्भ्रांति मदलंकारः',
                eng:
                  '<h3>Example of the Mistaker</h3><h3>Word meanings</h3><table><tr><td>अयम् - </td><td>this</td></tr><tr><td>प्रमत्तमधुपः - </td><td>Intoxicated bee</td></tr><tr><td>त्वन्मुखम् - </td><td>Thy face</td></tr><tr><td>पंकजम् - </td><td>Lotus</td></tr><tr><td>वेत्ति - </td><td>Understands</td></tr></table><h3>Meaning</h3><p> (Lady ! ) this intoxicated bee understands thy face to be the lotus (through mistake). </p><p>The difference between this figure and the Rupaka (V) is, that, in the latter, we identify the face with the lotus without mistaking the one for the other, whereas, in this figure, the mistake is clearly expressed as in the foregoing example.</p>'
              }
            },
            {
              text: 'पङ्कजं वा सुधांशुर्वेत्यस्माकं तु न निर्णयः ।',
              explanation: {
                sans:
                  'पंकजंवा उतसुधांशुश्चंद्रोवा इत्येवं प्रकारेणास्माकंतुन निर्णयः – अनिश्चयः पंकजं वासुधांशुर्वेत्या कारकस्संशयो भवतीत्यर्थः – अत्रमुखे पंकजत्वसुधांशुत्व कोटिकसंदेह निबंधनात्संदेहालंकारः ॥',
                eng:
                  '<h3>Example of Doubt</h3><h3>Word meanings</h3><table><tr><td>अस्माकम् - </td><td>To us</td></tr><tr><td>पंकजम् - </td><td>Lotus</td></tr><tr><td>वा - </td><td>Or</td></tr><tr><td>सुधांशुः - </td><td>Moon</td></tr><tr><td>वा - </td><td>Or</td></tr><tr><td>इति - </td><td>So</td></tr><tr><td>निर्णयः - </td><td>Decision</td></tr><tr><td>न - </td><td>Not.</td></tr></table><h3>Meaning</h3><p>We are not able to decide whether (the object before us) is the lotus or the moon nectar-rayed.</p><p>Thus, we sec that these three figures are founded upon the close resemblance, of the objects seen and experienced before, that gave rise to a recollection, mistake or doubt.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'अपह्नुत्यलङ्कारः',
      title_eng: 'Apahnutyalaṅkāra - Concealment',
      id: 10,
      types: 6,
      type: [
        {
          sloka:
            '<h3>शुद्धापह्नुतिः - Concealment pure</h3>शुद्धापह्नुतिरन्यस्यारोपार्थो धर्मनिह्नवः।<br>',
          sloka_explanation: {
            sans:
              '<p>वर्णनीये वस्तुनि तत्सदृश-धर्मारोप-फलकस्तदीय-धर्म-निह्नवः  कविमति-विकासोत्प्रेक्षित-धर्मान्तरस्यापि निह्नवः शुद्धापह्नुतिः।</p>',
            eng:
              '<h3>Word meanings</h3><table><tr><td>अन्यस्य - </td><td>Of the object not on hand</td></tr><tr><td>आरोपार्थः - </td><td>Causing superimposition</td></tr><tr><td>धर्मनिह्नवः - </td><td>Denial of the character</td></tr><tr><td>शुद्धा</td><td>Pure</td></tr><tr><td>अपह्नुतिः - </td><td>Concealment</td></tr></table><h3>Definition</h3><p>Pure Concealment is the denial of the real character (of an object on hand such as moon & c.) for the purpose of superimposing (upon it) the character of another (object lotus &c., not on hand). </p>'
          },
          examples: [
            {
              text: 'नायं सुधांशुः किं तर्हि? व्योमगङ्गासरोरुहम्‌॥',
              explanation_sans:
                'यथा चन्द्रे वियन्नदीपुण्डरीकत्वारोपफलकस्तदीयधर्मस्य चन्द्रत्वस्यापह्नवः।',
              explanation_eng:
                '<h3>Word meanings</h3><table><tr><td>अयं - </td><td>This</td></tr><tr><td>सुधांशुः - </td><td>Moon</td></tr><tr><td>न - </td><td>Not</td></tr><tr><td>किं तर्हि - </td><td>Then, what is that</td></tr><tr><td>व्योमगंगासरोरुहम् - </td><td>The lotus of the celestial Ganges.</td></tr></table><p>This (the object before us) is not the moon (nectar-rayed) but it is the lotus of the celestial Ganges. </p>'
            }
          ]
        },
        {
          sloka:
            '<h3>हेत्वपह्नुतिः- Concealment with a reason</h3>स एव युक्तिपूर्वश्चेदुच्यते हेत्वपह्नुतिः।<br>',
          sloka_explanation: {
            sans:
              'स एव अन्यस्यारोपार्थः प्रकृत धर्मनिह्नवः – युक्तिपूर्वश्चेत् सहेतुकोयदि- तर्हिहेत्वपह्नुतिरित्युच्यते- यत्र प्रकृतधर्मं युक्तिपूर्वकमपह्नुत्यान्यधर्नुः अरोप्यते तत्र हेत्वपह्नुतिरिति निष्कर्षः',
            eng:
              '<h3>Word Meanings</h3><table><tr><td>सः (धर्मनिह्नवः) - </td><td>The same i.e., the denial of the character</td></tr><tr><td>युक्तिपूर्वः - </td><td>Based upon the reasoning</td></tr><tr><td>चेत् - </td><td>If</td></tr><tr><td>हेत्वपह्नुतिः - </td><td>Concealment with a reason</td></tr><tr><td>उच्यते - </td><td>Is called</td></tr></table><h3>Definition</h3><p>The above, i.e., the ‘Concealment pure’ when based upon a reasoning, is termed हेत्वपह्नुतिः ।</p>'
          },
          examples: [
            {
              text: 'नेन्दुस्तीव्रो न निश्यर्कः सिंधोरौर्वोयमुत्थितः ॥',
              explanation_sans:
                'अत्र चन्द्र एव तीव्रत्वनैशत्वयुक्तिभ्यां चन्द्रत्वसूर्यत्वापह्नवो वडवानलत्वारोपार्थः।',
              explanation_eng:
                '<h3>Word Meanings</h3><table><tr><td>अयम् - </td><td>This</td></tr><tr><td>इन्दुः - </td><td>Moon</td></tr><tr><td>न - </td><td>Not</td></tr><tr><td>तीव्रः - </td><td>Hot</td></tr><tr><td>निशि - </td><td>At night</td></tr><tr><td>अर्कः - </td><td>Sun</td></tr><tr><td>न - </td><td>Not</td></tr><tr><td>सिन्धोः - </td><td>Not from the ocean</td></tr><tr><td>उत्थितः - </td><td>Sprung up</td></tr><tr><td>और्वः - </td><td>The submarine fire.</td></tr></table>This is not the moon, (because it is) hot ; (not even) the sun, (because it is) night ; but it is the submarine fire come out of the ocean.'
            }
          ]
        },
        {
          sloka:
            '<h3>पर्यस्तापह्नुतिः - Concealment transferred</h3>अन्यत्र तस्यारोपार्थः पर्यस्तापह्नुतिश्च सः ।<br>',
          sloka_explanation: {
            sans:
              '<p>यत्र क्वचिद्वस्तुनि तदीयधर्मनिह्नवः अन्यत्र वर्णनीये वस्तुनि तस्य धर्मस्यारोपार्थः स पर्यस्तापह्नुतिः।</p>',
            eng:
              '<h3>Word meanings</h3><table><tr><td>अन्यत्र</td><td>On another object</td></tr><tr><td>तस्य - </td><td>Of that (object on hand)</td></tr><tr><td>आरोपार्थः - </td><td>Causing superimposition</td></tr><tr><td>सः - </td><td>That</td></tr><tr><td>पर्यतिः - Concealment transferred</td></tr></table><h3>Definition</h3><p>Paryastapahnuti is that in which the real character of an object (moon &c.) is denied and the same is superimposed upon another object (face of a damsel).</p>'
          },
          examples: [
            {
              text: 'नायं सुधांशुः किं तर्हि सुधांशुः प्रेयसीसुखम् ॥',
              explanation_sans:
                'यथा चन्द्रे चन्द्रत्वनिह्नवो वणनीये मुखे तदारोपार्थः।',
              explanation_eng:
                '<h3>Word meanings</h3><table><tr><td>अयं - </td><td>This</td></tr><tr><td>सुधांशुः - </td><td>Moon</td></tr><tr><td>न - </td><td>Not</td></tr><tr><td>हिं तर्हि - </td><td>Then which (is called moon)</td></tr><tr><td>प्रेयसीसुखम् - </td><td>The face of (my) beloved</td></tr><tr><td>सुधांशुः - </td><td>Moon</td></tr></table>This is not the moon (nectar-rayed). Then which is moon ? The face of my beloved is the moon (nectar-rayed-not being endowed with burning character).'
            }
          ]
        },
        {
          sloka:
            '<h3>भ्रान्तापह्नुतिः - Concealment under a mistake</h3>भ्रान्तापह्नुतिरन्यस्य शंकायां भ्रान्तिवारणे ।<br>',
          sloka_explanation: {
            sans:
              'अन्यस्य इतर जनस्य – शंकायां तत्वाज्ञानेन अयथार्थ वस्तुनः भ्रान्तौ सत्यां भ्रान्तिवारणे सतितत्वस्वरूपकथनेन भ्रान्तिवारणे कृते सतिभ्रान्तापह्नुतिः – केनचिद्वक्त्राकिंचित्प्रकृत मुद्दिश्यवृत्तांते कथिते सतितस्या प्रकृतसाधारण्यादि तरजनस्य श्रोतुस्तत्वाज्ञानादुद्देश्य विषयिक शंकायां सत्यांवक्त्रातत्त्व कथनेन तद्भ्रान्तिवारणे कृतेसति- भ्रान्तापह्नावाख्योलंकारः ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>अन्यस्य - </td><td>Of another person</td></tr><tr><td>शंकायाम् - </td><td>In doubt</td></tr><tr><td>भ्रान्तिवारणे - </td><td>In the removal of the mistake</td></tr><tr><td>भ्रान्तापह्नुतिः - </td><td>It is Concealment under a mistake</td></tr></table><h3>Definition</h3><p> When a person is in doubt (i.e., under a mistaken notion as to the real character of an ‘object on hand) and when that doubt is warded of (by the mention of the real thing), it is Bhrantapahnuti.</p>'
          },
          examples: [
            {
              text: 'तापं करोति सोत्कम्पं, ज्वरः किं? न सखि स्मरः ॥',
              explanation_sans:
                'अत्र तापं करोतीति स्मरवृत्तान्ते कथिते तस्य ज्वरसाधारण्यादृजुबुद्ध्या सख्या ‘ज्वरः किम्‌’ इति पृष्टे, ‘न सखि! स्मरः” इति तत्त्वोक्त्या भ्रान्तिवारणं कृतम्‌।',
              explanation_eng:
                '<h3>Word meanings</h3><table><tr><td>सोत्कंपम् - </td><td>Accompanied by trembling</td></tr><tr><td>तापम् - </td><td>Heat</td></tr><tr><td>करोति - </td><td>Produces</td></tr><tr><td>ज्वरः किम् - </td><td>Is it fever?</td></tr><tr><td>सखि - </td><td>Friend !</td></tr><tr><td>न - </td><td>No </td></tr><tr><td>स्मरः - </td><td>The God of love.</td></tr></table>(It) produces heat accompanied by the trembling of the body* Is it fever?  No, friend ! It is the God of love. '
            }
          ]
        },
        {
          sloka:
            '<h3>छेकापह्नुतिः -Concealment of the skilful</h3>इति छेकापह्नुतिरन्यस्य शङ्कातस्तथ्यनिह्नवे।<br>',
          sloka_explanation: {
            sans:
              'कस्यचित्कञ्चित्प्रति रहस्योक्तावन्येन श्रुतायां स्वोक्तेस्तात्पर्यान्तरवर्णनेन तथ्य निह्नवे छेकापह्नुतिः।',
            eng:
              '<h3>Word meanings</h3><table><tr><td>अन्यस्य - </td><td>Of another person</td></tr><tr><td>शंकातः - </td><td>Owing to fear</td></tr><tr><td>तथ्यनिह्नवे - </td><td>For the purpose of denying the real sense</td></tr><tr><td>छेकापह्नुतिः - </td><td>Concealment of the skilful</td></tr></table><h3>Definition</h3><p>When a person (having once given expression to some real object) denies the same (by interpreting it otherwise) for fear of being understood by another person (in its real sense), it is termed the Concealment of the skilful.</p>'
          },
          examples: [
            {
              text: 'प्रजल्पनमत्पदे लगनः कान्तः किं? नहि नूपुरः॥',
              explanation_sans:
                'यथा नायिकाया नर्मसखीं प्रति ‘प्रजल्पनमत्पदे लग्नः इति स्वनायकवृत्तान्ते निगद्यमाने तदाकर्ण्य ‘कान्तः किम्‌’ इति शङ्कितवतीमन्यां प्रति ‘नहि, नूपुरः’ इति निह्नवः।',
              explanation_eng:
                '<h3>Word meanings</h3><table><tr><td>प्रजल्पन् - </td><td>Prattling</td></tr><tr><td>मत्पदे - </td><td>In my foot</td></tr><tr><td>लग्नः - </td><td>Clung</td></tr><tr><td>कान्तः किम् - </td><td>Is it (thy) lover?</td></tr><tr><td>न हि - </td><td>No, no</td></tr><tr><td>नूपुरः - </td><td>Anklet</td></tr></table>Pratling (something he) clung to my foot.* Is it thy lover? No, no. It is my anklet.'
            }
          ]
        },
        {
          sloka:
            '<h3>कैतवापह्नुतिः - Concealment of the deceitful</h3>कैतवापह्नुतिर्व्यक्तौ व्याजाद्यैर्निह्नुतेः पदैः।<br>',
          sloka_explanation: {
            sans:
              'व्याजाद्यैः व्याजच्छलकैतवादिभिः पदैग्निह्नुतेः धर्मनिह्नवस्य- व्यक्तौ सत्यांस्फुटत्वेनति- कैतवापह्नुतिरित्युच्यते- यत्रकविनाकंरतोपह्नवस्या भावेपि असत्यत्व प्रतिपादक कैतवादिपदैरेव धर्मापह्नवः क्रियते- तत्रकैतवापह्नुतिरिति निष्कर्षः',
            eng:
              '<h3>Word meanings</h3><table><tr><td>व्याजादौः निह्नुतैः पदैः - </td><td>By words of denial व्याजः &c.</td></tr><tr><td>व्यक्तौ - </td><td>If expressed</td></tr><tr><td>कैतवापह्नुतिः - </td><td>Concealment of the deceitful</td></tr></table><h3>Definition</h3><p>When (the denial of the real character of an object on hand) is clearly expressed by the words of denial व्याज (under the semblance of, under the pretext of) etc., it is the Concealment of the deceitful.</p><p>etc. includes such other words मिष, कपट, छल, छद्म. कैतव ।</p>'
          },
          examples: [
            {
              text: 'निर्यान्ति स्मरनाराचाः कांतादृक्पातकैतवात् ॥',
              explanation_sans:
                'अत्रासत्यत्वाभिधायिना, ‘कैतव’ पदेन ;नेमे कान्ताकटाक्षाः, किन्तु स्मरनाराचाः’ इत्यपह्नवः प्रतीयते।',
              explanation_eng:
                '<h3>Word meanings</h3><table><tr><td>कान्तादृक्पातकैतवात् - </td><td>Under the semblance of the glances of a damsel</td></tr><tr><td>स्मरनाराचाः - </td><td>The arrows of the God of love</td></tr><tr><td>निर्यान्ति - </td><td>Issue forth</td></tr></table>The arrows of the God of love issue forth under the semblance of the glances of a damsel.'
            }
          ]
        }
      ]
    },
    {
      title_sans: 'उत्प्रेक्षालङ्कारः',
      title_eng: 'Utprekṣālaṅkāra - Poetical fancy',
      id: 11,
      slokas: [
        {
          sloka:
            'संभावना स्यादुत्प्रेक्षा वस्तुहेतुफलात्मना।<br>उक्तानुक्तास्पदाद्यात्र सिद्धाऽसिद्धास्पदे परे॥',
          sloka_explanation: {
            sans:
              '<p>अन्य-धर्म-संबन्ध-निमित्तेनान्यस्यान्यतादात्म्य-संभावनमुत्प्रेक्षा ।</p><p>सा च वस्तु-हेतु-फलात्मतागोचरत्वेन त्रिविधा।</p><ul><li>स्वरूपोत्प्रेक्शा उक्तविषयाऽनुक्तविषया चेति द्विविधा।</li><li>हेतूफलोत्प्रेक्षे सिद्धविषयाऽसिद्धविषया चेति प्रत्येकं द्विविधे।</li></ul>',
            eng:
              '<h3>Word meanings</h3><table><tr><td>वस्तु-हेतु-फलात्मना - </td><td>Under the character of (1) nature (2) cause and (3) effect (of another object)</td></tr><tr><td>संभावना - </td><td>Imagining</td></tr><tr><td>उत्प्रेक्षा स्यात् - </td><td>Is Poetical fancy</td></tr><tr><td>अत्र - </td><td>Of these</td></tr><tr><td>आद्या - </td><td>First i.e., वस्तूत्प्रेक्षा</td></tr><tr><td>उक्त-अनुक्त- आस्पदा - </td><td>Where the occa- mentioned  or not mentioned</td></tr><tr><td>परे - </td><td>the other two i.e.,हेतूत्प्रेक्षा and फलोत्प्रेक्षा</td></tr><tr><td>सिद्ध-असिद्ध-आस्पदा - </td><td>Where the subject of the fancy is an  accomplished or unaccomplished one.</td></tr></table><h3>Definition</h3><p>The Poetical fancy is the imagining of an object on hand under the character of another object not on hand under three heads, viz., (1) nature, (2) cause and (3) effect. (And thus the figure is first three-fold).</p><p.these, the first वस्तूत्प्रेक्षा or as it is generally called स्वरूपोत्प्रेक्षा is two-fold according as the occasion of the fancy is mentioned or not mentioned. </p><p>The other two, i.e., हेतूत्प्रेक्षा  and फलोत्प्रेक्षा are each two-fold according as the subject of the fancy is an accomplished or unaccomplished one. </p>'
          }
        }
      ],
      types: 3,
      type: [
        {
          sloka_explanation: {
            sans:
              'अत्र वस्तुनः कस्यचिद्वस्त्वन्तरतादात्म्यसंभावना प्रथमा स्वरूपोत्प्रेक्षेत्युच्यते।',
            eng:
              'स्वरूपोत्प्रेक्षा is that in which the state, condition or natural appearance of an object is imagined by the poets to be the state, condition or natural appearance of another similar object. '
          },
          examples: [
            {
              text:
                '<h3>Example of स्वरूपोत्प्रेक्षा  (1) where the occasion of the fancy is mentioned.</h3>धूमस्तोमं तमः शंके कोकीविरहशुष्मणाम् ।',
              explanation_sans:
                'रजनीमुखे सर्वत्र विसृत्वरस्य तमसो नैल्यदृष्टिप्रतिरोधकत्वादिधर्मसंबन्धेन गम्यमानेन निमित्तेन सद्यःप्रियविधटित-सर्वदेशस्थित-कोकाङ्गानाहृदुपगत-प्रज्वलिष्यद्विरहानलधूमस्तोम-तादात्म्य-संभावना-स्वरुपोत्प्रेक्षा तमसो विषयस्योपादानादुक्तविषया ।',
              explanation_eng:
                '<h3>Word meanings</h3><table><tr><td>तमः - </td><td>The darkness</td></tr><tr><td>कोकीविरहशुष्मणाम् - </td><td>The fire of separation of Koki birds</td></tr><tr><td>धूमस्तोमं - </td><td>The mass of smoke</td></tr><tr><td>शंके - </td><td>I suspect</td></tr></table><p>I suspect (this) darkness to be the mass of smoke of the fire of separation of the koki birds.</td></tr><tr><td>Here, the darkness and the smoke are similar in appearance. The poet is aware that it is darkness. He then fancies it to be the smoke of the fire of separation of the koki birds which is the occasion of the fancy.</p>'
            },
            {
              text:
                '<h3>Example of स्वरूपोत्प्रेक्षा  (2) where the occasion of the fancy is not mentioned.</h3>लिम्पतीव तमोङ्गानि वर्षतीवाञ्जनं नभः॥',
              explanation_sans:
                'तमोव्यापनस्य नभःप्रभृतिभूपर्यन्तसकलवस्तुसान्द्रमलिनीकरणेन निमित्तेन तमःकर्तृकलेपनतादात्म्योत्प्रेक्षा, नभःकर्तृकाञ्जनवषणतादात्म्योत्प्रेक्षा चनुक्तविषया स्वरुपोत्प्रेक्षा, उभयत्राअपि विषयभूततमोव्यापनस्यानुपादानात्‌।',
              explanation_eng:
                '<h3>Word meanings</h3><table><tr><td>तमः - </td><td>darkness</td></tr><tr><td>अङ्गानि - </td><td>Limbs</td></tr><tr><td>लिम्पति इव - </td><td>Anoints as it were</td></tr><tr><td>नभः - </td><td>Sky</td></tr><tr><td>अञ्जनम् - </td><td>Collyrium</td></tr><tr><td>वर्षति इव - </td><td>Rains as it were</td></tr></table><p>The darkness anoints, as it were, the bodies, (lit. limbs). Sky rains, as it were, the collyrium. </p><p>This is the description of the thick darkness of a particular night. In the first sentence, the subject, i.e., the pervasion of darkness which was fancied by the poet as anointing the bodies is not mentioned.</p><p>In the second sentence too, the pouring down of the darkness which is the subject of the raining of co1lyrium is not mentioned. Hence we have two instances of  अनुक्तास्पदा वस्तूत्पेक्षा  where the occasion of the fancy is not mentioned.</p>'
            }
          ]
        },
        {
          sloka_explanation: {
            sans: 'अहेतोर्हेतुभावना हेतूत्प्रेक्षा',
            eng:
              'हेतूत्प्रेक्षा is that in which something is imagined to be the effect of some other thing which cannot form its real cause.'
          },
          examples: [
            {
              text:
                '<h3>सिद्धविषया हेतूत्प्रेक्षा </h3> रक्तौ तवाङ्घ्री मृदुलौ भुवि विक्षेपणाद्ध्रुवम्‌।',
              explanation_sans:
                'चरणयोः स्वतः सिद्धे रक्तिमनि वस्तुतो विक्षेपणं न हेतुरित्यहेतोस्तस्य हेतुत्वेन सम्भावना हेतूत्प्रेक्षा विक्षेपणस्य विषयस्य सत्त्वात्सिद्धविषया।',
              explanation_eng:
                '<h3>Word meanings</h3><table><tr><td>तव - </td><td>thy</td></tr><tr><td>मृदुलौ - </td><td>Soft</td></tr><tr><td>अंघ्री - </td><td>Tender feet</td></tr><tr><td>भुवि - </td><td>On the floor</td></tr><tr><td>विक्षेपणात् - </td><td>By treading</td></tr><tr><td>ध्रुवम् - </td><td>Certainly</td></tr><tr><td>रक्तौ - </td><td>Red</td></tr></table><p> (Oh! Lady), thy soft feet have become red certainly by their trending on the floor.</p><p>Here, the treading on the floor is fancied as a cause for the natural redness of the lady’s feet; and the redness being an accomplished one, this is an instance of सिद्धविषया हेतूत्पेक्षा ।</p>'
            },
            {
              text:
                '<h3>असिद्धविषया हेतूत्प्रेक्षा</h3>त्वन्मुखाभेच्छया नूनं पद्मैर्वेरायते शशी॥',
              explanation_sans:
                'चन्द्रपद्मविरोधे स्वाभाविके नायिकावदनकान्तिप्रेप्सा न हेतुरिति तत्र तद्धेतुत्वसंभावना हेतूत्प्रेक्षा वस्तुतस्तदिच्छाया अभावादसिद्धविषया।',
              explanation_eng:
                '<h3>Word meanings</h3><table><tr><td>शशी - </td><td>moon</td></tr><tr><td>त्वन्मुखाभेच्छया - </td><td>With a desire of attaining the loveliness of thy face</td></tr><tr><td>नूनं - </td><td>Surely</td></tr><tr><td>पद्मैः - </td><td>With the lotuses</td></tr><tr><td>वैरायते - </td><td>Rivals</td></tr></table><p>Oh ! Damsel, the moon rivals with the lotuses, surely, with a desire of attaining the loveliness of thy face.</p><p>Here, the enmity, between the moon and the lotuses, on account of the latter’s contraction on the appearance of the former, is natural, and the cause ascribed to it i.e., with a desire of attaining the beauty of the lady’s face is not real and is due to the fancy of the poet. The cause not being an established one, this forms an instance of असिद्धविषया हेतूत्प्रेक्षा ।</p>'
            }
          ]
        },
        {
          sloka_explanation: {
            sans: 'अफलस्य फलत्वेनोत्प्रेक्षा फलोत्प्रेक्षेत्युच्यते।',
            eng:
              'फलोत्प्रेक्षा is that in which something is imagined to be the cause of some other thing which is not its real effect. '
          },
          examples: [
            {
              text:
                '<h3>सिद्धविषया फलोत्प्रेक्षा</h3>मध्यः किं कुच्योर्धृत्यै बद्धः कनकदामभिः।',
              explanation_sans:
                'मध्द्यः स्वयमेव कुचौ धरति न तु कनकदामबन्धत्वेनाध्यवसिताया वलित्रयशालिताया बलादिति मध्यकर्तृककुचधृतेस्तत्फलत्वेनोत्प्रेक्षा सिद्धविषया फलोत्प्रेक्षा।',
              explanation_eng:
                '<h3>Word meanings</h3><table><tr><td>मध्यः - </td><td>waist</td></tr><tr><td>कुचयोः - </td><td>Of breasts</td></tr><tr><td>धित्यै -</td><td>For the support</td></tr><tr><td>किम् - </td><td>What</td><td>कनकदामभिः - </td><td>By the golden strings</td></tr><tr><td>बड्बः - </td><td>Was tied</td></tr></table><p>Lady ! Is it for the support of thy breasts that thy waist was tied by the golden strings (in the form of the lady’s folding) ?</p><p>Here, the lady’s breasts are naturally placed above the Waist; whereas, the poet describes the natural gold like folds over the navel of the lady as three golden strings tied round the waist as if to support the breasts. The fact being an accomplished one, this is an instance of सिद्धविषया फलोत्प्रेक्षा ।'
            },
            {
              text:
                '<h3>असिद्धविषया फलोत्प्रेक्षा</h3>प्रायोऽब्जं त्वत्पदेनैक्यं प्राप्तुं तोये तपस्यति॥',
              explanation_sans:
                'जलजस्य जलावस्थितेरुदवासतपस्त्वेनाध्यवसितायाः कामिनीचरणसायुज्यप्राप्तिर्न फलमिति तस्या गगनकुसुमायमानायास्तपःफलत्वेनोत्प्रेक्षणादसिद्धविषया फलोत्प्रेक्षा',
              explanation_eng:
                '<h3>Word meanings</h3><table><tr><td>अञ्ज - </td><td>lotus</td></tr><tr><td>त्वत्पदेन - </td><td>With thy foot</td></tr><tr><td>ऐक्यम् - </td><td>The oneness, i.e., likeness</td><td>प्राप्तुं - </td><td>To get</td></tr><tr><td>प्रायः - </td><td>Perhaps</td></tr><tr><td>तोये - </td><td>In the water</td></tr><tr><td>तपस्यति - </td><td>Does penance</td></tr></table><p>Lady! the lotus does penance in the water perhaps to become identical with thy foot.</p><p>Here, the lotuses naturally grow in water, and the poet artfully attributes another cause for their अतिशयोक्तिः - standing in the water, which is no doubt the work of his imagination ; and this being an unaccomplished one, it is an instance of असिद्धविषया फलोत्प्रेक्षा ।</p>'
            }
          ]
        }
      ]
    },
    {
      title_sans: 'अतिशयोक्त्यलङ्कारः',
      title_eng: 'Atiśayoktyalaṅkāra - Hyperbole',
      id: 12,
      types: 8,
      type: [
        {
          sloka:
            '<h3>शुद्धा रूपकातिशयोक्तिः - Pure Hyperbole Metaphorical</h3>रुपकातिशयोक्तिः स्यानिनिगीर्याध्यवसानतः।<br>',
          sloka_explanation: {
            sans:
              'विषयस्य स्वशब्देनोल्लेखनं विनापि विषयिवाचकेनैव शब्देन ग्रहणं विषयनिगरणं तत्पूर्वकं विषयस्य विषयिरुपतयाऽध्यवसानमाहार्यनिश्चयस्तस्मिन्सति रुपकातिशयोक्तिः।',
            eng:
              '<h3>Word meanings</h3><table><tr><td>निगीर्य - </td><td>Having devoured</td></tr><tr><td>अध्यवसानतः - </td><td>Through introsusception</td></tr><tr><td>रूपकातिशयोक्तिः - </td><td>Metaphorical hyperbole (pure)</td></tr><tr><td>स्यात् - </td><td>Is</td></tr></table><h3>Definition<h3><p>When the object on hand (i.e., face &c. the upameya) is swallowed up, or completely taken in, by the upamana ‘moon & c.’ through introsusception, and the upameya. is therefore comprehended as upamana itself, or, in other words, (when the upamana is used for upameya), it is called ‘Hyperbole Metaphorical.</p><p>निगीर्य is indeclinable past participle in य of the root गॄ with नि ‘to devour’. अध्यवसानतः = अध्यवसान् + तस् अध्यवसान is the abstract noun formed by adding the affix अन to the root सो with prepositions अधि and अव, and तस् is a termination of the ablative case.</p><p>अध्यवसान means the identification of two objects of which the one is the object on hand and the other not on hand in such a manner that the former" is completely absorbed into the latter.</p><p>When a man comprehends face of it damsel as moon itself and calls it by the word ‘moon’ without mentioning the proper word ‘face’, then the face ‘upameya’ is said to have been swallowed up by the moon ‘upamana’.</p>'
          },
          examples: [
            {
              text: 'पश्य नीलोत्पलद्वन्द्वान्निःसरन्ति शिताः शराः॥',
              explanation_sans:
                'यथा नीलोत्पलशरशब्दाभ्यां लोचनयोः कटाक्षाणां च ग्रहणपूर्वकं तद्रूपताध्यवसानम्‌।',
              explanation_eng:
                '<h3>Word meanings</h3><table><tr><td>नीलोत्पलड्वंद्वात् - </td><td>From a pair of blue lotuses</td></tr><tr><td>शिताः - </td><td>Sharpened</td></tr><tr><td>शराः - </td><td>Shafts</td></tr><tr><td>निःसरंति - </td><td>Issue forth</td></tr><tr><td>पश्य - </td><td>See</td></tr></table><p>Behold ! There issue forth sharpened shafts from a pair of blue lotuses.</p><p>Here, the speaker, instead of saying ‘पश्यकान्ताक्षि युग्मात् कटाक्षा निःसरन्त्यहो there issue forth ogles or side-glances from a pair of eyes of this lovely woman who was before him, says thus by using the upamana words नीलोत्पल ‘blue lotus’ and शराः ‘shafts’ for their corresponding upameya. words the अक्षि ‘eye’ and कटाक्षाः ‘ogles’. Thus, we have the introsusception of the eyes and the ogles of a. beloved lady in the blue lotuses and shafts with which they are respectively identified. </p>'
            }
          ]
        },
        {
          sloka:
            '<h3>सापह्नवा रूपकातिशयोक्तिः - Hyperbole founded upon the ornament of Concealment </h3>यद्यपह्नतिगर्भत्वं सैव सपह्नवा मता।<br>',
          sloka_explanation: {
            sans:
              'हे राजन् त्वत्सूक्तिषु भवदीय मृदुवाक्येष्वेद सुधास्थितेतिशेषः – त्वदीयमधुरवचस्येव अमृतं वर्तते नान्यत्रेर्धः – ननु चंद्रेसुधास्तीतिप्रवादः कथमिथ्यत आह- भ्रान्ताः इति- भ्रान्ताः – अज्ञानोपहताः जनाः – विधौ चन्द्रे- तांपथां पश्यन्ति- चन्द्रे सुधास्तीति व्यवहारोभ्रममूलक एवेत्यर्थः – सा चन्द्र, तासुधानभवतीत्यपह्निवगच्छेति सापह्नवा ॥',
            eng:
              '<h3>Word meanings</h3><table><tr><td>यदि - </td><td>if</td></tr><tr><td>अपह्नुतिगर्भत्वम् - Founded upon the ornament ”concealment”</td></tr><tr><td>सैव सापह्नवा - </td><td>Metaphorical hyperbole pure itself founded upon the ornament of concealment</td></tr><tr><td>मता - </td><td>Is considered ( by the poet)</td></tr></table><h3>Definition</h3><p>If the same, i.e., the Metaphorical Hyperbole No. 1 (a) is founded upon the ornament of Concealment, then it is called  सापह्नवा रूपकातिशयोक्तिः ।</p>'
          },
          examples: [
            {
              text: ' त्वत्सूक्तिषु सुधा राजभ्रान्त्या पश्यन्ति तां विधौ॥',
              explanation_sans:
                'अत्र ‘त्वत्सूक्तिमाधुर्यमेवामृतम्‌’ इत्यतिशयोक्तिश्चन्द्रमण्डलस्तह्ममृतं न भवतीत्यपह्नुतिगर्भा।',
              explanation_eng:
                '<h3>Word meanings</h3><table><tr><td>राजन् - </td><td>O king</td></tr><tr><td>त्वत्सूक्तिषु - </td><td>In thy good speeches</td></tr><tr><td>सुधा - </td><td>Nectar</td></tr><tr><td>भ्रांताः - </td><td>Infatuated people</td></tr><tr><td>ताम् - </td><td>That</td></tr><tr><td>विधौ - </td><td>In the moon</td></tr><tr><td>पश्यन्ति - </td><td>See</td></tr></table><p>O king ! Nectar exists in thy good speeches ; but the infatuated people see the same in the moon.</p><p>Here, ‘the sweetness in the good speeches of the king is the nectar’—is the Hyperbole No. 1 (a) ; because the upamana. ‘nectar’ is used for upameya ‘sweetness’. Again, the nectar which is in the moon is denied and that which exists in the good speeches of the king is called nectar and hence we have the ornament of Concealment also.</p><p>* This comprehension brings about the superior excellence of the upameya over the upamana.</p>'
            }
          ]
        },
        {
          sloka:
            '<h3>भेदकातिशयोक्तिः - Hyperbole Asserting a difference</h3>भेदकातिशयोक्तिस्तु तस्यैवान्यत्ववर्णनम्‌।<br>',
          sloka_explanation: {
            sans:
              'तस्यैवलोकसिद्धस्यैव अन्यत्ववर्णनं- सा- भेदकातिशयोक्तिस्स्यादित्यर्थः ॥',
            eng:
              '<h3>Word meanings</h3><table><tr><td>तस्यैव - </td><td>Of the object described</td></tr><tr><td>अन्यत्ववर्णनम् - </td><td>Description as another</td></tr><tr><td>भेदकातिशयोक्तिः - </td><td>Hyperbole asserting a difference</td></tr></table><h3>Definition</h3><p>When the thing described is comprehended as another, i.e., as extraordinary or strange or peculiar, it is called भेदकातिशयोक्तिः ।</p>'
          },
          examples: [
            {
              text: 'अन्यदेवास्य गांभीर्यमन्यड्वैर्यं महीपतेः ॥',
              explanation_sans:
                'अत्र लोकप्रसिद्धगाम्भीर्याद्यभेदेऽपि भेदो वर्णितः।',
              explanation_eng:
                '<h3>Word meanings</h3><table><tr><td>अस्य - </td><td>Of this (king)</td></tr><tr><td>गांभीर्यम् - </td><td>Profundity</td></tr><tr><td>अन्यदेव - </td><td>(is regarded) as another i.e., strange or extraordinary</td></tr><tr><td>धैर्यम् - </td><td>Courage</td></tr><tr><td>अन्यत् - </td><td>(is regarded) as another, i.e., strange</td></tr></table><p>Strange is the profundity of this king and strange is his courage also.</p><p>Here, the profundity and the courage of the king are considered as extraordinary because a difference is asserted between the profundity and courage of an ordinary man and those of the king.</p>'
            }
          ]
        },
        {
          sloka:
            '<h3>संबन्धातिशयोक्तिः - Hyperbole Asserting a connection</h3>संबन्धातिशयोक्तिः स्यादयोगे योगकल्पनम्‌।<br>',
          sloka_explanation: {
            sans:
              'अयोगे असंबंधेयोगकल्पनं संबंधवर्णनमितियत्- सा संबंधातिशयोक्तिस्स्यात्',
            eng:
              '<h3>Word meanings</h3><table><tr><td>अयोगे - </td><td>When there is no connection</td></tr><tr><td>योगकल्पनम् - </td><td>Assertion of a connection</td></tr><tr><td>संबंधाक्तिः - </td><td>Hyperbole asserting a connection</td></tr><tr><td>स्यात् - </td><td>Is (called)</td></tr></table><h3>Definition</h3><p>When a connection is asserted where there is really none, it is called संबंधातिशयोक्तिः । </p>'
          },
          examples: [
            {
              text: 'सौधाग्राणि पुरस्यास्य स्पृशंति विधुमंडलम् ।',
              explanation_sans:
                'अन्यपुरस्य सौधाग्राणि राजगृह शिखराणि- विधुमंडलं चंद्रमंडलं स्पृशंति- तादृगुन्नतानिभवंतीत्यर्धः – अत्र सौधाग्राणां विधुमंडल स्पर्शा संबंधेपि तत्संबंधोवर्णितः ॥',
              explanation_eng:
                '<h3>Word meanings</h3><table><tr><td>अस्य पुरस्य - </td><td>Of this town</td></tr><tr><td>सौधाग्राणि - </td><td>Tops of the mansions</td></tr><tr><td>विधुमण्डलम् - </td><td>The disc of the moon</td></tr><tr><td>स्पृशन्ति - </td><td>Touch or kiss</td></tr></table><p>The tops of the mansions of this town kiss the disc of the moon.</p><p>Here, the tops do not really touch the disc of the moon ; still they are asserted to do so on account of their extraordinary height. </p>'
            }
          ]
        },
        {
          sloka:
            '<h3>असंबन्धातिशयोक्तिः - Hyperbole Asserting a disconnection</h3>योगेऽप्ययोगोऽसंबन्धातिशयोक्तिरितीर्यते।<br>',
          sloka_explanation: {
            sans:
              'योगेनसंबंधे सत्यपि- अयोगो संबंधवर्णनमितियत्- सा असंबंधातिशयोक्तिरिष्यते कथ्यते',
            eng:
              '<h3>Word meanings</h3><table><tr><td>योगे अपि - </td><td>Though there is connection</td></tr><tr><td>अयोगः - </td><td>(the assertion of) disconnection</td></tr><tr><td>असंबंधाक्तिः - </td><td>Hyperbole asserting a disconnection</td></tr></table><h3>Definition</h3><p>Denial of connection where there is really a connection is called असंबन्धातिशयोक्तिः ।</p>'
          },
          examples: [
            {
              text: 'त्वयि दातरि राजेन्द्र खर्द्रु मान्नाद्रियामहे ॥',
              explanation_sans:
                'अत्र स्वर्द्रुमेषादरसंबन्धेऽपि तद्संबन्धो वर्णित इत्यसंबन्धातिशयोक्तिः।',
              explanation_eng:
                '<h3>Word meanings</h3><table><tr><td>राजेन्द्र - </td><td>O best of kings!</td></tr><tr><td>त्वयि दातरि - </td><td>When thou art a donor</td></tr><tr><td>खर्द्रुमान् - </td><td>The trees of the paradise</td></tr><tr><td>न आद्रियामहे - </td><td>We wont devote to.</td></tr></table><p>O best of kings ! As long as thou remainest here, as our liberal-donor, we won’t devote ourselves to the wish-yielding trees of Indra’s paradise.</p><p>This is addressed by the mendicants to a king of very liberal donations. They, the mendicants, say that as long as this king is their donor, they sever their connection with the Kalpa tree. Here, the connection of the mendicants with their wish-yielding tree which is, as its very name implies, renowned for its liberality is denied.</p>'
            }
          ]
        },
        {
          sloka:
            '<h3>अक्रमातिशयोक्तिः - Hyperbole Asserting a want of order</h3>अक्रमातिशयोक्तिः स्यात् सहते हेतुकार्ययोः।<br>',
          sloka_explanation: {
            sans:
              'हेतु कार्ययोस्पहत्वे यौगपद्येवर्णिते सति- अक्रमातिशयोक्तिः- कारणं पूर्वं कार्यं परमितिलोकमर्यादा- तामुल्लंघ्य यत्र कार्यकारणयोरेक कालत्वं वर्ण्यते तत्रा क्रमातिशयोक्तिरित्यर्धः ॥ ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>हेतुकार्ययोः - </td><td>Of the cause and effect</td></tr><tr><td>सहत्वे - </td><td>In the simultaneously</td></tr><tr><td>अक्रमाक्तिः - </td><td>Hyperbole asserting a want of order</td></tr></table><h3>Definition</h3><p>When the cause and effect are said to have taken place simultaneously, or, in other words, when the effect is said to co-exist with the cause, it is called अक्रमातिशयोक्तिः ।</p>'
          },
          examples: [
            {
              text: 'आलिङ्गन्ति समं देव! ज्यां शराश्च पराश्च ते॥',
              explanation_sans:
                'अत्र मौर्व्या यदा शरसंधानं कृतं तदानीमेव शत्रवः क्ष्तौ पतन्तीति हेतुकार्ययोः सहत्वं वर्णितम्‌।',
              explanation_eng:
                '<h3>Word meanings</h3><table><tr><td>देव - </td><td>O king !</td></tr><tr><td>ते - </td><td>Thy</td></tr><tr><td>शराश्च - </td><td>Arrows</td></tr><tr><td>पराश्च - </td><td>Foes</td></tr><tr><td>ज्याम् - </td><td>(1)bow-string (2)earth</td></tr><tr><td>समम् - </td><td>Simultaneously</td></tr><tr><td>आलिंगन्ति - </td><td>Clasp</td></tr></table><p>O king I Thy arrows and thy foes both clasp the jya simultaneously.</p><p>Observe the pun on the word jya, which means ‘bow-string’ and ‘earth.’ The arrows are said to clasp the bow-string. and the foes, the earth, i.e., they fall down on earth dead being struck with the arrows of the king. It is usual that cause precedes the effect. </p><p>Here, the effect, the falling down lead on earth, is said to co-exist with the cause, the issuing of an arrow. Hence, it is called  अक्रमातिशयोक्तिः ।</p>'
            }
          ]
        },
        {
          sloka:
            '<h3>चपलातिशयोक्तिः - Hyperbole Asserting fickleness</h3>चपलातिशयोक्तिस्तु कार्ये हेतुप्रसक्तिजे।<br>',
          sloka_explanation: {
            sans:
              'कार्येहेतु प्रसतिजे सतिहेतु प्रसक्तिमात्रेण कार्येजाते सति- चपलातिशयोक्तिः- यत्रकारणेभविष्यत्येवकार्यं वर्ण्यते तत्र चपलातिशयोक्तिः',
            eng:
              '<h3>Word meanings</h3><table><tr><td>कार्ये - </td><td>The effect</td></tr><tr><td>हेतुप्रसक्तिजे - </td><td>When the cause was under discussion</td></tr><tr><td>चपलाक्तिः - </td><td>Hyperbole asserting fickleness</td></tr></table><h3>Definition</h3><p>If the effect is described to have taken place without the cause, or, literally,‘ if the effect is said to have taken place when the cause was under discussion, i.e., not yet begun, it is then called चपलातिशयोक्तिः ।</p>'
          },
          examples: [
            {
              text: 'यास्यामीत्युदिते तन्व्या वलयोऽभवदूर्मिका॥',
              explanation_sans:
                'अत्र नायकप्रवासप्रसक्तिमात्रेण योषितोऽतिकार्श्यं कार्यमुखेन दर्शितम्‌।',
              explanation_eng:
                '<h3>Word meanings</h3><table><tr><td>यस्यामि इत्युदिते - </td><td>When said (by the lover) “I go”</td></tr><tr><td>तन्व्याः - </td><td>Of the slender lady</td></tr><tr><td>ऊर्मिका - </td><td>Ring</td></tr><tr><td>वलयः - </td><td>Bracelet</td><td>अभवत् - </td><td>Became</td></tr></table><p>No sooner did the lover say ‘I shall go’ than the ring of his slender lady became her bracelet. </p><p>When the lover simply said ‘I shall go’ but did not actually go, his beloved became so very thin at the very thought of her lover’s future separation that the ring of her finger served as bracelet for her hand. Here, the cause was only expressed but did not actually take place and we see the effect is produced without the cause.</p>'
            }
          ]
        },
        {
          sloka:
            '<h3>अत्यन्तातिशयोक्तिः - Hyperbole Of the highest degree</h3>अत्यन्तातिशयोक्तिस्तु पौर्वापर्यव्यतिक्रमे।<br>',
          sloka_explanation: {
            sans:
              'तयोः कारणकार्ययोः यत्पौर्वापर्यं पूर्वोत्तरभावः तस्यव्यतिक्रमे उल्लंघने सति- अत्यंतातिशयोक्तिः – कारणं पूर्वं कार्यंपरमिति नियममुल्लंघ्य वैपरीत्येन कार्यंपूर्वं कारणं परमितियत्रवर्ण्यते तत्रात्यंतातिशयोक्तिस्स्यादित्यर्थः ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>तत्-पौर्वापर्य-व्यतिक्रमे - </td><td>When there is a violation of the priority and posteriority of those (i.e., of the cause and effect)</td></tr><td>अत्यक्तिः - </td><td>Hyperbole of the highest degree</td></tr></table><h3>Definition</h3><p> When the relation of priority and posteriority is violated, i.e., when the due order is inverted, or in other words, when the effect is said to have preceded the cause, it is अत्यन्तातिशयोक्तिः ।</p>'
          },
          examples: [
            {
              text: 'अग्रे मानो गतः पश्चादनुनीता प्रियेण सा ॥',
              explanation_sans:
                'मानः प्रणयकोपः आग्रे प्रथममेव अनुवयात्प्रागे वेत्यर्थः – गतोपसृतः – पश्चान्मानत्यागा नंतरं- साकांताप्रियेन अनुनीता उपलालिता॥',
              explanation_eng:
                '<h3>Word meanings</h3><table><tr><td>अग्रे - </td><td>In the beginning, i.e., previously</td></tr><tr><td>मानः - </td><td>Anger</td></tr><tr><td>गतः - </td><td>Subsided</td></tr><tr><td>सा - </td><td>She</td></tr><tr><td>प्रियेण - </td><td>By her lover</td></tr><tr><td>पश्चात् - </td><td>Afterwards</td></tr><tr><td>अनुनीता - </td><td>Was conciliated</td></tr></table><p>The anger (of the beloved lady) had previously subsided. Afterwards, she was conciliated by her lover. </p><p>Here, a lady’ angry, through love, at the absence of her lover removed her anger at the moment the lover came before her. The lover not knowing the subsidence of the anger of the lady excused himself of his absence which was unnecessary at that stage.</p>'
            }
          ]
        }
      ]
    },
    {
      title_sans: 'तुल्ययोगितालङ्कारः',
      title_eng: 'Tulyayogitālaṅkāra - Equal Pairing',
      id: 13,
      slokas: [
        {
          sloka: 'वर्ण्यानामितरेषां वा धर्मैक्यं तुल्ययोगिता।<br>',
          sloka_explanation: {
            sans:
              'प्रस्तुतानामप्रस्तुतानां वा गुणक्रियारुपैकधर्मान्वयस्तुल्ययोगिता।',
            eng:
              '<h3>Word meanings</h3><table><tr><td>वर्ण्यानाम् - </td><td>Of objects on hand</td></tr><tr><td>इतरेषाम् वा - </td><td>Or of those not on hand</td></tr><tr><td>धर्मैक्यम् - </td><td>Sameness of attribute</td></tr><tr><td>तुल्ययोगिता - </td><td>Equal Pairing</td></tr></table><h3>Definition</h3><p>The sameness of attribute of objects on hand or of objects not on hand, is called तुल्ययोगिता ।</p>'
          },
          examples: [
            {
              text: ' संकुचन्ति सरोजानि स्वैरिणीवदनानि च॥',
              explanation: {
                sans:
                  'संकुचन्तीति प्रस्तुततुल्ययोगिताया उदाहरणम्‌।<br>तत्र प्रस्तुतचन्द्रोदयकार्यतया वर्णनीयानां सरोजानां प्रकाशभीरुस्वैरिणीवदनानां च संकोचरुपैकक्रियान्वयो दर्शितः।',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>सरोजानि - </td><td>Lotuses</td></tr><tr><td>स्वैरणीवदनानि च - </td><td>And the faces of the adulterous women</td></tr><tr><tr><td>संकुचन्ति - </td><td>Become contracted.</td></tr><tr><td>तत्= तयोः - </td><td>of those, i.e., of the cause and effect.</td></tr></table><h3>Example of objects on hand.</h3><p>The lotuses become contracted as well as the faces of the adulterous women.</p><p>This being the description of the rise of the moon, the lotuses are said to contract; and the moonlight being an impediment to the free movements of the harlots, their faces also are said to contract or droop.</p><p><b>Observe :-</b> Here, the lotuses and the faces of the women are the objects on hand and are associated with one common attribute.</p>'
              }
            },
            {
              text:
                'त्वदङ्गमार्दवे दृष्टे कस्य चित्ते न भासते।<br>मालतीशसभृल्लेखाकदलीनां कठोरता ॥',
              explanation: {
                sans:
                  'हे प्रिये त्वदंगमार्गवे दृष्टे सति कस्य वा चित्ते मालतीशतभृल्लेखाकदळीनां सुमनो लता चंद्ररेखा वे दृष्टेकस्य चित्तेनभासते । मालतीशशभृल्लेखाकदळीनां कठोरता॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>त्वदंगमार्दवे दृष्टे - </td><td>When the softness of thy limbs was perceived</td></tr><td>कस्य चित्ते - </td><td>In whose mind</td></tr><tr><td>मालती- कदलीनाम् - </td><td>Of the jasamine, moon’s ray and the plantain</td></tr><tr><td>कठोरता - </td><td>Hardness</td></tr><tr><td>न भासते - </td><td>Will not become manifest</td></tr></table><p>Lady ! In whose mind will not the hardness of the jasamine, the lunar ray and the plantain be manifest when the softness of thy limbs was perceived?</p><p>Here, the jasamine &c., the objects unconnected with the subject, are associated with one and the same attribute, that is, the quality of hardness.</p>'
              }
            }
          ]
        }
      ],
      types: 2,
      type: [
        {
          sloka:
            '<h3>Equal Pairing, second kind</h3>हिताहिते वृत्तितौल्यमपरा तुल्ययोगिता।<br>',
          sloka_explanation: {
            sans:
              'हिताहिते मित्रेऽमित्रे चेत्यर्थः- वृत्तितौल्यं व्यापार साम्यमेक विधव्यापार इति यावत् अपरा अन्यातुल्ययोगिता- यत्र शत्रुमित्रयोर्विषये एकव्यापारो वर्ण्यते तत्रान्या तुल्ययोगितेत्यर्थः ॥ ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>हिताहिते - </td><td>In a friend and foe</td></tr><tr><td>वृत्तितौल्यम् - </td><td>The sameness of behavior</td></tr><tr><td>अपरा - </td><td>another</td></tr><tr><td>तुल्ययोगिता - </td><td>Equal Pairing</td></tr><tr><td>त्वया - </td></table><h3>Definition</h3><p>The description of the sameness of behaviour towards a friend and a foe is another kind of Equal Pairing.</p>'
          },
          examples: [
            {
              text: 'प्रदीयते पराभूतिर्मित्रशात्रवयोस्त्वया॥',
              explanation_sans:
                'अत्र हिताऽहितयोर्मित्रं – शात्रवयोरुत्कृष्टभूतिदानस्य पराभवदानस्य च श्लेषेणाभेदाध्यवसायाद्‌ वृत्तितौल्यम्‌।',
              explanation_eng:
                '<h3>Word meanings</h3><table><td>By thee</td></tr><tr><td>मित्रशात्रवयोः - </td><td>To the friend and foe</td></tr><tr><td>पराभूतिः - </td><td>Immense riches (to a friend)</td></tr><tr><td>पराभूतिः - </td><td>Defeat (to a foe)</td></tr><tr><td>दीयते - </td><td>Is distributed</td></tr></table><p>(O king 1) Parabuti is equally distributed by thee both to thy friend and to thy foe.</p><p>परा and भूतिः  are two separate words meaning immense riches when applied to ‘friend’ ; when taken as one word, पराभूतिः means ‘defeat’ and applies to ‘foe’ ; however the same word being used to friend and foe, this must be taken as instancing the figure without referring to its meaning.</p><p><b>Observe :-</b> This is possible only under a pun.</p>'
            }
          ]
        },
        {
          sloka:
            '<h3>Equal Pairing, third kind</h3>गुणोत्कृष्टे समीकृत्य वचोऽन्या तुल्ययोगिता।<br>लोकपालो यमः पाशी श्रीदः शक्रो भवानपि॥',
          sloka_explanation: {
            sans:
              'गुणोत्कृष्टैश्शौर्यादार्यादिगुण गरिष्ठैः समीकृत्य समानीकृत्य वचः उक्तिः अपरातुल्ययोगिता- यत्रवर्णनीयोराजादिः उत्कृष्ट गुणैरिंद्रादिभिस्सहधर्मतः समानीकृत्य वर्ण्यते- तत्रान्यातुल्ययोगितेर्थः ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>गुणात्कृष्टैः - </td><td>With those possessed of superior qualities</td></tr><tr><td>समीकृत्य - </td><td>Having placed on the same footing</td></tr><tr><td>वचः - </td><td>Description</td></tr><tr><td>अन्या - </td><td>Another</td></tr><tr><td>तुल्ययोगिता - </td><td>Equal Pairing</td></tr><tr><td>यमः - </td><td>God of death</td></tr><tr><td>पाशी - </td><td>Varuna</td></tr><tr><td>श्रीदः - </td><td>Kubera</td></tr><tr><td>शक्रः - </td><td>Indra</td></tr><tr><td>भवान् अपि - </td><td>As well as thyself</td></tr><tr><td>लोकपालः - </td><td>A regent of the quarter (and the ruler of the earth)</td></tr></table><h3>Definition</h3><p>The description of placing one object on a footing of equality with those possessed of superior qualities is termed a third kind of Equal Pairing.</p>'
          },
          examples: [
            {
              text: 'लोकपालो यमः पाशी श्रीदः शक्रो भवानपि॥',
              explanation_sans:
                'अत्र वर्णनीयो राजा शक्रादिभिर्लोकपालत्वेन समीकृतः।',
              explanation_eng:
                '<p>(O Lord !), Yama, Pasi, Srida, Sakra as Well as thyself are each a Lokapala.</p><table><tr><td>Lokapala = </td><td>a regent or guardian of a quarter = a ruler of earth.</td></tr><tr><td>Yama = </td><td>the God of death, the regent of the Southern quarter.</td></tr><tr><td>Pasi = </td><td>Varuna, the regent of the Western quarter and of the oceans.</td></tr><tr><td>Srida = </td><td>Kubera, the regent of the Northern quarter and the God of riches and treasure.</td></tr><tr><td>Sakra = </td><td>Indra, the regent of the Eastern quarter and the king of the Gods.</td></tr>'
            }
          ]
        }
      ]
    },
    {
      title_sans: 'दीपकालङ्कारः',
      title_eng: 'Dīpakālaṅkāra - The ‘Illuminator’',
      id: 14,
      slokas: [
        {
          sloka: 'वदन्ति वर्ण्यावर्ण्यानां धर्मैक्यं दीपकं बुधाः।<br>',
          sloka_explanation: {
            sans: 'प्रस्तुताप्रस्तुतानामेकधर्मान्वयो दीपकम्‌।',
            eng:
              '<h3>Word meanings</h3><table><tr><td>वर्ण्यावर्ण्यानाम् - </td><td>Of objects on hand and those not on hand</td></tr><tr><td>धर्मैक्यम् - </td><td>The common attribute</td></tr><tr><td>बुधाः - </td><td>The learned</td></tr><tr><td>दीपकम् - </td><td>Illuminator</td></tr><tr><td>वदन्ति - </td><td>Call</td></tr></table><h3>Definition</h3><p>When objects on hand and those‘ not on hand are associated with a common attribute (mentioned only once), the learned call it the Illuminator.</p>'
          },
          examples: [
            {
              text: 'मदेन भाति कलभः प्रतापेन महीपतिः॥',
              explanation: {
                sans: 'यथा कलभमहीपालयोः प्रस्तुताप्रस्तुतयोर्भानक्रियान्वयः।',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>कलभः - </td><td>Young elephant</td></tr><tr><td>मदेन - </td><td>By ichor</td></tr><tr><td>भाति - </td><td>Shines</td></tr><tr><td>महीपतिः - </td><td>Lord of earth</td></tr><tr><td>प्रतापेन - </td><td>By valour</td></tr></table><p>The young elephant shines by its ichor and this lord of earth by his valour.</p><p>Here, the elephant, the object not on hand, and the king, the object on hand, are together associated with one and the same attribute, the action of shining. Just as a lamp standing in one place illumines the several objects round it, so in the present figure one finite verb serves as predicate to two-or more nominatives. Compare the maxim of the lamp placed over a threshold देहलीदोपन्यायः । It takes its origin from a lamp hanging over the threshold of a house which, by its peculiar position, serves to light the rooms on both sides, and is used to denote something which serves a two-fold purpose at the same time. Apte.</p><p>In the Equal Pairing No. 1 (Fig. XIV), the objects on hand if associated with one and the same attribute formed one kind of the figure ; and the objects not on hand if associated with one and the same attribute formed another kind of the same figure (observe the word वा in the Definition). In the Illuminator, the objects on hand and those not on hand are together associated with one common attribute mentioned only once.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'आवृत्तिदीपकालङ्कारः',
      title_eng: 'āvṛttidīpakālaṅkāra - The Illuminator by repetition',
      id: 15,
      slokas: [
        {
          sloka: 'त्रिविधम् दीपकावृत्त्तौ भवेदावृत्तिदीपकम्‌।<br>',
          sloka_explanation: {
            sans:
              'दीपकस्यानेकोपकारार्थतया दीपस्थानीयस्य पदस्यार्थस्योभयोर्वाऽऽवृत्तौ त्रिविधमावृत्तिदीपकम्‌।',
            eng:
              '<h3>Word meanings</h3><table><tr><td>दीपकावृत्तौ - </td><td>In the repetition of the Illuminator</td></tr><tr><td>त्रिविधम् - </td><td>Three kinds</td></tr><tr><td>आवृत्तिदीपकम् - </td><td>Illuminator by repetition</td></tr><tr><td>भवेत् - </td><td>Will be</td></tr></table><p>त्रिविधम् i.e., by repetition of 1 पद ‘word’, 2 अर्थ ‘signiﬁcation’ and 3 उभय ‘both word and signiﬁcation’.</p><h3>Definition</h3><p>By repetition of (1) Word, (2) signification and (3) both, We have the three kinds of the figure आवृत्तिदीपकम् ।</p>'
          },
          examples: [
            {
              text: 'वर्षत्यम्बुदमालेयं वर्षत्येषा च शर्वरी॥',
              explanation: {
                sans:
                  'वर्षासमये विरहतओताकाचित्कांचिदाह ॥ इयंपुरोवर्तिनी अंबुदमालामेघपङ्क्तिः वर्षतिवर्षं मुंचतीत्यर्थः ',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>इयं अंबुदमाला - </td><td>This range of clouds</td></tr><tr><td>वर्षति - </td><td>Rains</td></tr><tr><td>एषा शर्वरी च - </td><td>And this night</td></tr><tr><td>वर्षति - </td><td>Looks like a year</td></tr></table><p>This range of clouds rains and this night looks like a year.</p><p>This is the example of No. 1 पदावृत्ति ।  Here, the verb वर्षति, a. पद, is repeated though with different significations. The first is the form of the third person, singular number, present tense of the root 515; ‘to rain’, and the second is the form of the third person, singular number, present tense of the nominal verb derived from the noun वर्ष ‘a year’.</p>'
              }
            },
            {
              text:
                '<h3>Example of No. 2. अर्थावृत्ति ।</h3>उन्मीलन्ति कदम्बानि स्फुटन्ति कुटजोद्गमाः।',
              explanation: {
                sans:
                  'कदंबानिकदंब कुसुमानि उन्मीलंति विकसंति- तथाकुटजोद्गमाः गिरिमल्लिकाः स्फुटंतिइकसंति- अत्रोन्मीलंति स्फुटंतीतिशब्दयोः भेदेपि विकासरूपार्थस्य एकत्वात्तस्यावृत्तत्वेन इदमर्थावृतिदीपकम्',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>कदंबानि - </td><td>Kadamba flowers</td></tr><tr><td>उन्मीलन्ति - </td><td>Blossom</td></tr><tr><td>कुटकद्रुमाः - </td><td>Kutaja creepers</td></tr><tr><td>स्फुटन्ति - </td><td>Bloom forth</td></tr></table><p>The kadamba ﬂowers blossom and the kutaja creepers bloom forth.</p><p>उन्मीलन्ति and स्फुटन्ति mean the same thing and we have here a repetition of signification.</p>'
              }
            },
            {
              text:
                '<h3>Example of No. 3. उभयावृत्ति ।</h3>माद्यन्ति चातकास्तृप्ता माद्यन्ति च शिखावलाः॥',
              explanation: {
                sans:
                  'तृप्ताः अंतराळ एवमेघोदक पानेन संतुष्टास्संतः – माद्यंति मदंगच्छंतितथा शिखावळाः – मयूराश्चमाद्यंति अत्रमद प्राप्ति रूपस्य अर्थस्य माद्यंतीति पदस्य उभयस्याप्यावृत्तात्वादुभयावृत्तिदीपकम् ॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>तृप्ताः - </td><td>Satiated</td></tr><tr><td>चातकाः - </td><td>Chataka birds</td></tr><tr><td>माद्यन्ति - </td><td>Rejoice</td></tr><tr><td>शिखावलाः - </td><td>Peacocks</td></tr><tr><td>माद्यन्ति - </td><td>Rejoice</td></tr></table><p>The satiated chataka. birds rejoice and the peacocks also rejoice (at the sight of the clouds).</p><p>Here, the same word माद्यन्ति  is repeated in the same meaning and hence it is called उभयावृत्तिदीपकम् ।</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'प्रतिवस्तुपमालङ्कारः',
      title_eng: 'Prativastupamālaṅkāra - Typical Comparison',
      id: 16,
      slokas: [
        {
          sloka: 'वाक्ययोरेकसमान्ये प्रतिवस्तूपमा मता।<br>',
          sloka_explanation: {
            sans:
              'यत्रोपमानोपमेयपरवाक्ययोरेकः समनो धर्मः पृथङ्निर्दिश्यते सा प्रतिवस्तूपमा।<br>प्रतिवस्तु प्रतिवाक्यार्थमुपमासमानधर्मोऽस्यामिति व्युत्पत्तेः।',
            eng:
              '<h3>Word meanings</h3><table><tr><td>वाक्ययोः - </td><td>In (the sense of) two sentences</td></tr><tr><td>एकसामान्ये - </td><td>If one common  attribute (is expressed)</td></tr><tr><td>प्रतिवस्तूपमा - </td><td>Typical Comparison</td></tr><tr><td>मता - </td><td>Is recognized</td></tr></table><h3>Definition</h3><p>When, in two sentences one of which describes the object compared and the other the object compared to, the same common attribute is expressed but by different words, it is termed Typical Comparison.</p>'
          },
          examples: [
            {
              text: 'तापेन भ्राजते सूरः शूरश्चापेन राजते॥',
              explanation: {
                sans:
                  'यथाऽत्रैव भ्राजते राजत इत्येक एव धर्म उपमानोपमेयवाक्ययोः पृथग्भिन्नपदाभ्यां निर्दिष्टः।',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>सूरः - </td><td>The sun</td></tr><tr><td>तापेन - </td><td>With intense heat</td></tr><tr><td>भ्राजते - </td><td>Shines</td></tr><tr><td>शूरश्च - </td><td>And this warrior</td></tr><tr><td>चापेन - </td><td>with (his) bow</td></tr><tr><td>राजते - </td><td>Looks brilliant</td></tr></table><p>The sun shines with intense heat and this warrior looks brilliant with his bow.</p><p>Here, the actions of shining and looking brilliant, though mean the same thing, are expressed by different words to avoid the fault of repetition.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'दृष्टान्तालङ्कारः',
      title_eng: 'Dṛṣṭāntālaṅkāra - Exemplification',
      id: 17,
      slokas: [
        {
          sloka: 'चेत्-बिंबप्रतिबिंबत्वं दृष्टान्तस्तदलंकृतिः।<br>',
          sloka_explanation: {
            sans:
              'यत्रोपमनोपमेयवाक्ययोर्भिन्नावेव धर्मौ बिम्बप्रतिबिम्बभावेन निर्दिष्टौ तत्र दृष्टान्तः।',
            eng:
              '<h3>Word meanings</h3><table><tr><td>चेत् - </td><td>if</td></tr><tr><td>वाक्ययोः - </td><td>In (the sense of ) two sentences</td></tr><tr><td>बिंबप्रतिबिंबत्वम् - </td><td>Relation of type and proto-type</td></tr><tr><td>तत् - </td><td>Then</td></tr><tr><td>दृष्टान्तः - </td><td>Exemplification</td></tr></table><h3>Definition</h3><p>If two sentences, one of which contains the object compared and the other the object compared to, stand in relation of type and proto-type, or, in other words, contain similar attributes reflectively expressed, it is called Exempliﬁcation.</p>'
          },
          examples: [
            {
              text: ' त्वमेव कीर्तिमान्‌ राजन्‌! विधुरेव हि कान्तिमान्‌॥',
              explanation: {
                sans:
                  '‘त्वमेव कीर्तिमान्‌’ इत्यत्र कीर्तिकान्त्योर्बिम्बप्रतिबिम्बबहवः।',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>राजन् - </td><td>O king!</td></tr><tr><td>त्वमेव - </td><td>Thou only</td></tr><tr><td>कीर्त्तिमान् - </td><td>Possessed of fame</td></tr><tr><td>विधुरेव हि - </td><td>Moon only</td></tr><tr><td>कान्तिमान् - </td><td>Radiant</td></table><p>O king l Thou art the only being possessed of fame and the moon is the only object having radiance.</p><p>Here, possessing fame and having radiance are similar attributes and the two sentences stand in relation of type and proto-type. The first sentence is exemplified by the second in which a renowned object, the moon, whose radiance has been experienced taken from the preceding verse.</p><p>The difference between this figure and प्रतिवस्तूपमा  is that the common attributes here are similar but in the latter they are identical. In the प्रतिवस्तूपमा the couple of sentences terminates in conveying the same sense; whilst in the example of the present figure the sentences have similar sense reflectively expressed and not the same.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'निदर्शनालङ्कारः',
      title_eng: 'Nidarśanālaṅkāra - Illustration ',
      id: 18,
      types: 3,
      type: [
        {
          sloka:
            '<h3>First kind</h3>वाक्यार्थयोः सदृशयोरैक्यारोपो निदर्शना।<br>',
          sloka_explanation: {
            sans: 'सदृशयोर्वाक्या पदार्धवृत्तिमप्येकेवदंत्यन्यां निदर्शनाम् ।',
            eng:
              '<h3>Word meanings</h3><table><tr><td>सदृशयोः - </td><td>similar</td></tr><tr><td>वाक्यार्थयोः - </td><td>In the significations of two sentences</td></tr><tr><td>ऐक्यारोपः - </td><td>Attribution of identity</td></tr><tr><td>निदर्शना - </td><td>Illustration</td></tr></table><h3>Definition</h3><p>A description, resulting in the identity of the significations, of two sentences, which are similar, i.e., which terminate in a. comparison or similarity, is called Illustration.</p>'
          },
          examples: [
            {
              text: 'यद्दातुः सौम्यता सेयं पूर्णेन्दोरकलङ्कता॥',
              explanation_sans:
                'अत्र दातृपुरुषसौम्यत्वस्योपमेयवाक्यार्थस्य पुर्णेन्दोरकलङ्कत्वस्योपमानवाक्यार्थस्य यत्तद्द्भ्यामैक्यारोपः।',
              explanation_eng:
                '<h3>Word meanings</h3><table><tr><td>या - </td><td>Which</td></tr><tr><td>दातुः - </td><td>Of a donor</td></tr><tr><td>सौम्यता - </td><td>Mildness</td></tr><tr><td>सेयम् - </td><td>That itself</td></tr><tr><td>पूर्णेन्दोः - </td><td>Of the full moon</td></tr><tr><td>अकलंकता - </td><td>Stainlessness</td></tr></table><p>That mild nature if possessed by a donor answers to the stainlessness of the full moon.</p><p>Here, the impossibility of the existence of the full moon without the black spot corresponds to the Non existence of a. donor destitute of anger. Thus, we see that the two sentences terminate in a comparison.</p><p>The difference between this figure and the दृष्टान्त is that दृष्टान्त  Similar attributes are stated whereas here they are not stated. Here, the two sentences employed are dependent upon each other in their meanings but in the दृष्टान्त they are independent.</p>'
            }
          ]
        },
        {
          sloka:
            '<h3>2nd kind of Illustration</h3>पदार्थवृत्तिमप्येके वदन्त्यां निदर्शनाम्‌।<br>तन्नेत्रयुगलं धत्ते नीलाम्बुजन्मनोः॥',
          sloka_explanation: {
            sans:
              'एकेकेचिदालंकारिकाः पदार्थवृत्तिमपि निदर्शनामन्यां वदंति- यत्रान्यस्मिन् पदार्थेन्य धर्मस्य आरोपो वर्ण्यते सापदार्थ वृत्ति निदर्शनेत्यर्धः ॥ ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>एके - </td><td>Certain writers on Rhetoric</td></tr><tr><td>पदार्थवृत्तिम्- पदार्थे - </td><td>In a thing</td></tr><tr><td>वृत्तिम् ऐक्यारोपस्थितिम् - </td><td>The state of being identical</td></tr><tr><td>अन्याम् निदर्शनाम् - </td><td>Another kind of Illustration</td></tr><tr><td>वदन्ति - </td><td>Say</td></tr><tr><td>त्वन्नेचयुगलम् - </td><td>Thy two eyes</td></tr><tr><td>नीलांबुजन्मनोः - </td><td>Of the two blue lotuses</td></tr><tr><td>लीलाम् - </td><td>Charmingness</td></tr><tr><td>धत्ते - </td><td>Bears</td></tr></table><h3>Definition</h3><p>If a thing is described as bearing the property of another, then it is another kind of Illustration according to certain writers on Rhetoric.</p>'
          },
          examples: [
            {
              text: 'तन्नेत्रयुगलं धत्ते नीलाम्बुजन्मनोः॥',
              explanation_sans:
                'अत्र नेत्रयुगले नीलाम्बुजगतलॉलापदार्थारोपो निदर्शना।',
              explanation_eng:
                '(Lady !) Thy two eyes bear the charmingness of the two blue lotuses.'
            }
          ]
        },
        {
          sloka:
            '<h3>3rd kind of Illustration</h3> अपरां बोधनं प्राहुः क्रिययाऽसत्सदर्थयोः।<br>नश्येद्राजविरोधीति क्षीणं चन्द्रोदये तमः॥',
          sloka_explanation: {
            sans:
              'कस्यचित्किंचित्क्रियाविशिष्टस्य स्वक्रियया परान्प्रति असतः सतो वाऽर्थ्स्य बोधनं यन्निबध्यते तदपरां निदर्शनामाहुः।',
            eng:
              '<h3>Word meanings</h3><table><tr><td>क्रियया - </td><td>By an action of a certain object</td></tr><tr><td>असत्सदर्थयोः - </td><td>Of the unreal and real objects</td></tr><tr><td>बोधनम् - </td><td>Intimation</td></tr><tr><td>अपरां - </td><td>Third kind of Illustration</td></tr><tr><td>प्राहुः - </td><td>(the learned) call</td></tr><tr><td>तमः - </td><td>Darkness</td></tr><tr><td>चंद्रोदये - </td><td>At the rise of the moon</td></tr><tr><td>राजविरोधी - </td><td>The enemy of a king or moon</td></tr><tr><td>नश्येत् - </td><td>Will perish</td></tr><tr><td>इति - </td><td>So intimating</td></tr><tr><td>क्षीणाम् - </td><td>Vanished</td></tr></table><h3>Definition</h3><p>The intimation, by an agent engaged in a certain action, of the unreal and the real state of things signified by the action itself, it is" termed the third kind of Illustration.</p>'
          },
          examples: [
            {
              text: 'नश्येद्राजविरोधीति क्षीणं चन्द्रोदये तमः॥',
              explanation_sans:
                'तत्र नश्येदिति बोधयदिति वक्तव्ये बोधयदित्यस्य गम्यमनत्वादप्रयोगः तत्श्च राज्ञा चन्द्रेण सह विरुध स्वयं नाशक्रियाविशिष्टं तमः स्वकीयनाशक्रियया दृष्टान्तभूतया अन्योऽप्येवं राजविरुद्धश्चेन्नश्येदित्यनिष्टपर्यवसायिनमर्थं बोधयदेव नष्टमित्यर्थनिबन्धनादसदर्थनिदर्शना।',
              explanation_eng:
                '<p>The enemy of a king (moon) will perish telling this, the darkness, on the rise of the moon, vanished.</p><p>Here, the darkness is the agent in the act of intimating to the world the above fact, the result of its own experience which is certainly unreal. This forms the example of unreal state of things.</p>'
            },
            {
              text:
                '<h3>Example of the real state of things :- </h3>उदयन्नेव सविता दमेष्वर्पयति श्रियम्।<br>विभावयन् समृद्धीनां फलं सुहृदनुग्रहः॥',
              explanation_sans:
                'सविता स्वोदयसमय एव पद्मषु लक्ष्मीमादधानः स्वया पद्मलक्ष्म्याधानक्रियया परान्प्रति समृद्धीनां फलं सुहृदनुग्रह एवेति श्रेयस्करमर्थं बोधयन्निबद्ध इत सदर्थनिदर्शना।',
              explanation_eng:
                '<h3>Word meanings</h3><table><tr><td>सविता - </td><td>The sun</td></tr><tr><td>उदयन्नेव - </td><td>Just when it rises</td></tr><tr><td>सुहृदनुग्रहम् - </td><td>Rewarding the friends</td></tr><tr><td>समृद्धीनाम् - </td><td>Of one’s riches</td></tr><tr><td>फलम् - </td><td>The chief object</td></tr><tr><td>विभावयन् - </td><td>(thus) intimating</td></tr><tr><td>पद्मेषु - </td><td>On the lotuses</td></tr><tr><td>श्रियम् - </td><td>Splendor</td></tr><tr><td>अर्पयति - </td><td>Consigns</td></tr></table><p>"The chief” object of one’s having riches consists in rewarding his friends’-thus intimating (to the world), the sun, just on its rise, consigns its own treasures (splendour) to the lotuses.</p><p>Here, the sun is the agent in the act of intimating to the world the above fact which is real as the lotuses bloom only on the rise of the sun.</p>'
            }
          ]
        }
      ]
    },
    {
      title_sans: 'व्यतिरेका ',
      title_eng: 'व्यतिरेका - Dissimilitude or Contrast',
      id: 19,
      slokas: [
        {
          sloka: 'व्यतिरेकोविशेषश्चेदुपमानोपमेययोः।',
          sloka_explanation: {
            sans:
              'उपमेयोपमानयोः विशेषः – वैलक्षण्यं वर्णितं चेदयं व्यतिरेक इत्यर्थः अयं त्रिप्रकारः उपमेयाधिक्यवर्यवसायी उपमेयन्यूनत्वपर्यवसायी अनुभयवर्यवसायी चेति ॥',
            eng:
              '<h3>Word meanings</h3><table><tr><td>उपमानोपमेययोः - </td><td>Between the object compared to and that compared</td></tr><tr><td>विशेषः - </td><td>Any peculiarity</td></tr><tr><td>चेत् - </td><td>If asserted</td></tr><tr><td>व्यतिरेकः - </td><td>Dissimilitude or Contrast</td></tr></table><h3>Definition</h3><p>If any characteristic difference is asserted between the object compared to and that compared, then it is called Dissimilitude or Contrast.</p>'
          },
          examples: [
            {
              text: 'शैलाइवोन्नताःसन्तःकिंतुप्रकृतिकोमलाः॥',
              explanation: {
                sans:
                  'संतः सत्पुरुषाः शैलाः पर्वता इवोन्नताः किंतु प्रकृत्याकोमलाः शैलास्तु प्रकृतकठिना इतिभावः -  अत्रोपमानशैलापेक्षया प्रकृतिकोमलत्वेन सतामाधिक्य पर्यवसायित्वादय मुपमेयाधिक्य पर्यवसायीव्यतिरेकः एवमन्यत्रा व्यूहनीयम् ॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>संतः - </td><td>Good people</td></tr><tr><td>शैलाः इव - </td><td>As mountains</td></tr><tr><td>उन्नताः - </td><td>Are high</td></tr><tr><td>किंतु - </td><td>But</td></tr><tr><td>प्रकृतिकोमलाः - </td><td>Are delicate by nature</td></tr></table><p>Good men are as high as mountains ; but they (good men) are delicate by nature.</p><p>Here, we see a similitude between the good men, upameya, and the mountains, upamana, in one respect and a dissimilitude in another respect.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'सहोक्तिः',
      title_eng: 'सहोक्तिः  Connected Description or a Speech with सह ‘with’',
      id: 20,
      slokas: [
        {
          sloka: 'सहोक्तिःसहभावश्चेद्भासतेजनरञ्जनः।',
          sloka_explanation: {
            sans:
              'जनरंजनः लोकानंदकरः सहभावः साहित्यं चेत्सहोक्तिर्नामालंकार इति निष्कर्षः यत्र सहृदयहृदयाह्लादकरः कस्यचित्केन चित्सहभावः वर्ण्यते तत्र सहोक्तिः जनरंजन इति विशेषणात् अनेन सार्धमित्यादि प्रयोगेतुन सहोक्तिः तत्र सहभावस्य चमत्कारकारित्वाभावात्',
            eng:
              '<h3>Word meanings</h3><table><tr><td>चेत् - </td><td>if</td></tr><tr><td>जनरंजनः - </td><td>Pleasing to the people’s mind</td></tr><tr><td>सहभावः - </td><td>Simultaneity</td></tr><tr><td>भासते - </td><td>Shines forth</td></tr><tr><td>सहोक्तिः - </td><td>Connected Speech</td></tr></table><h3>Definition</h3><p>A description of simultaneity or conjunction which will excite a pleasing (poetical) delight in the people’s (mind) is called the Connected Description.</p>'
          },
          examples: [
            {
              text: ' दिगन्तमगमत्तस्यकीर्तिःप्रत्यर्थिभिःसह॥',
              explanation: {
                sans:
                  'तस्यराज्ञः कीर्तिः प्रत्यर्थिभिः शत्रुभिस्सहदिगंतमगमत् प्राप्ता- अत्र यदानिज प्रतापादि जनिता कीर्तिर्दिगंतं व्याप्ता- तदानीमेवशत्रवः पलाय्यदिगंतानेव प्राप्ता इत्येवं विधतात्पर्यगर्भत्वेन चमत्कारकारिणस्सहभावस्य वर्णनात्सहोक्तिः ॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>तस्य - </td><td>Of that (king)</td></tr><tr><td>कीर्त्तिः - </td><td>Fame</td></tr><tr><td>प्रत्यर्थिभिः सह - </td><td>Together with (his) foes</td></tr><tr><td>दिगंतम् - </td><td>To the end of the quarter</td></tr><tr><td>अगमत् - </td><td>Reached</td></tr></table><p>The fame of that king has reached the end of the quarters together with his foes.</p><p>Here, the reaching of the fame to the end of the quarters is directly expressed and that of the foes is indirectly expressed by the word सह । सह  denotes simultaneity of two actions that are of one and the same kind. The idea. conveyed in the present example is that both the king’s fame and the enemies reached the end of the quarters at the same time. Thus we see that this figure consists in the description of simultaneous action connected with सह ।</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'विनोक्तिः',
      title_eng: 'विनोक्तिः - Speech of Absence or Speech',
      id: 21,
      slokas: [
        {
          sloka: 'विनोक्तिश्चेद्विनाकिंचित्प्रस्तुतंहीनमुच्यते।',
          sloka_explanation: {
            sans:
              'किंचिद्विना प्रस्तुतं वर्ण्यं हीनं निकृष्टं उच्यते हीनत्वेन वर्ण्यते यदीत्यर्धः- तर्हिविनोक्ति नामालंकारः ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>चेत् - </td><td>if</td></tr><tr><td>किंचिड्बिना - </td><td>In the absence of some other thing</td></tr><tr><td>प्रस्तुतम् - </td><td>The object on hand</td></tr><tr><td>हीनम् - </td><td>As inferior</td></tr><tr><td>उच्यते - </td><td>Is represented</td></tr><tr><td>विनोक्तिः - </td><td>Speech of Absence</td></tr></table><h3>Definition</h3><p>When an object on hand is represented as inferior in the absence of some other object, it is termed the Speech of Absence.</p>'
          },
          examples: [
            {
              text: 'विद्याहृद्यापिसावद्याविनाविनयसंपदम्॥',
              explanation: {
                sans:
                  'हृद्यामनोहरापिविद्या- विनयसंपदं विनाविनय समृद्धिमंतरा सावद्यासदोषा- अत्र विद्यायाः विनयसंपत्तिं विनाहैन्य वर्णनाद्विनोक्तिः ॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>विद्या - </td><td>The learning</td></tr><tr><td>हृद्या अपि - </td><td>Though pleasing</td></tr><tr><td>विनयसंपदम् - </td><td>Excellence of good behavior</td></tr><tr><td>विना - </td><td>Without</td></tr><tr><td>सा - </td><td>That, i.e., the learning</td></tr><tr><td>अवद्या - </td><td>Censurable</td></tr></table><p>In the absence of excellent good behaviour, the learning, though pleasing, is censurable.</p>'
              }
            }
          ]
        }
      ],
      types: 1,
      type: [
        {
          sloka: 'तच्चोत्किंचिद्विनारम्यंविनोक्तिःसापिकथ्यते।',
          sloka_explanation: {
            sans:
              'तत् प्रस्तुतं किंचिद्वस्रु विनारम्यं चेत् सुंदरं यदितर्हि- सापिविनोक्तिरितिकथ्यत इत्यर्थः ॥ ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>चेत् - </td><td>if</td></tr><tr><td>तत् - </td><td>The object on hand</td></tr><tr><td>किंचिद्विना - </td><td>Without some thing else</td></tr><tr><td>रम्यम् - </td><td>As charming</td></tr><tr><td>सापि - </td><td>That too</td></tr><tr><td>विनोक्तिः - </td><td>Speech of Absence</td></tr><tr><td>कथ्यते - </td><td>Is termed</td></tr></table><h3>Definition</h3><p>When an object on hand is represented as charming in the absence of some other object, it is also called Speech of Absence.</p>'
          },
          examples: [
            {
              text: 'विनाखलैर्विभात्येषाराजेन्द्रभवतःसभा॥',
              explanation_sans:
                'हे राजेंद्र भवतः एषासभा आस्थानमंटपः – खलैर्विनादुर्जन संपर्कं विनाविभाति- अत्र सभायाह् खलसंपर्कं विनारम्यत्व वर्णानाद्विनोक्तिः ',
              explanation_eng:
                '<h3>Word meanings</h3><table><tr><td>राजेंद्र - </td><td>O best of kings!</td></tr><tr><td>एषा - </td><td>This</td></tr><tr><td>भवतः - </td><td>Of thy honour</td></tr><tr><td>सभा - </td><td>Council hall</td></tr><tr><td>खलैः विना - </td><td>In the absence of wicked persons</td></tr><tr><td>विभाति - </td><td>Shines</td></tr></table>O best of kings 1 Thy council hall shines splendid in the absence of wicked persons.'
            }
          ]
        }
      ]
    },
    {
      title_sans: 'समासोक्तिः ',
      title_eng: 'समासोक्तिः – Modal Metaphor or Speech of Brevity',
      id: 22,
      slokas: [
        {
          sloka: 'समासोक्तिःपरिस्फूर्त्तिःप्रस्तुतेऽप्रस्तुतस्यचेत्।',
          sloka_explanation: {
            sans:
              'नानार्थ संश्रयश्श्लेषो वर्ण्यावर्ण्योभप्रस्तुते प्रस्तुत वृत्तांते वर्णिते सति- अप्रस्तुतस्या प्रकृतस्य परिस्फूर्तिश्चेत् प्रतीतिव्यदितर्हि समासोक्तिः – समासेन संक्षेपेण प्रकृता प्रकृत वृत्तांत वर्णनादियमन्वर्थ संज्ञा ॥ ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>चेत् - </td><td>if</td></tr><tr><td>प्रस्तुते - </td><td>In the description of an object on hand</td></tr><tr><td>अप्रस्तुतस्य - </td><td>Of an object not on hand</td></tr><tr><td>परिस्फूर्त्तिः - </td><td>Apprehension</td></tr><tr><td>समासोक्तिः - </td><td>Speech of Brevity</td></tr></table><h3>Definition</h3><p>If, by the description of an object on hand, an object not on hand is apprehended, or in other words, when the description of an object on hand conveys a reference to an object, not on hand, it is called Modal Metaphor.</p>'
          },
          examples: [
            {
              text: 'अयमैन्द्रीमुखंपश्यरक्तश्चुम्बतिचन्द्रमाः॥',
              explanation: {
                sans:
                  'कस्यचित्कामुकस्य कांचित्कामुकीमुद्दिश्य उयमुक्तिः- हे प्रिये अयं परिदृश्यमानः – चंद्रमाश्चंद्रः रक्तः लोहितः स एवैंद्र्याः प्राच्याः मुखं अग्रभागं चुंबति स्पृशति-पश्यविलोकयेति- प्रस्तुते वर्ण्यमाने वृत्तांते मुखशब्दस्य प्रारंभ वदन साधारण्यात् चुंबतीत्यस्य संस्पर्शवदन संयोग साधारण्याद्रक्त शब्दस्यलोहित कामुक साधारण्याच्चंद्रमश्शब्दगत पुंलिंगेन ऐंद्रीशब्दगत स्त्रीलिंगेन च अयंरक्तः कामुकस्सन् ऐंद्राः इंद्र संबंधोपस्कृत परांगनायाः मुखं वदनं चुंबतिस्ववदनेन तद्वदनं संयोजयतीत्यर्थः – एवं प्रकारः इंद्र संबंधोपस्कृत परवतानिरक्त कामुकवृत्तांतः प्रतीयत इति समासोक्तिः ॥ ',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>अयम् - </td><td>This</td></tr><tr><td>चंद्रमाः - </td><td>The moon</td></tr><tr><td>रक्ताः - </td><td>Red</td></tr><tr><td>ऐंद्रीमुखं - </td><td>The face of the castern quarter</td></tr><tr><td>चुंबति - </td><td>Kisses</td></tr><tr><td>पश्य - </td><td>See !</td></tr></table><p>My beloved ! see, this moon becoming red kisses the face of the Eastern (Indra’s) quarter.</p><p>Here, by the use of the words-(1) चुम्बति the action of which belongs to a human being, (2) चन्द्रमाः in the masculine gender and (3) ऐन्द्री in the feminine gender, we understand that a lover, the subject of discourse, out of passion, kisses the face of some beautiful damsel residing in the east.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'परिकरः ',
      title_eng: 'परिकरः - Insinuator',
      id: 23,
      slokas: [
        {
          sloka: 'अलंकारःपरिकरःसाभिप्रायेविशेषणे।',
          sloka_explanation: {
            sans:
              'साभिप्राय विशेषणैः अर्धविशेष विषयक तात्पर्यगर्भैर्विशेषणैर्हेतुभिः परिकरः परिकराख्योलंकारः – यत्रसाभिप्राय विशेषणान्युपपाद्यंते तत्र परिकरालंकार इत्यर्थः ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>विशेषणे - </td><td>If the epithet</td></tr><tr><td>साभिप्राये - </td><td>Signifying the import</td></tr><tr><td>परिकरः - </td><td>Insinuator</td></tr><tr><td>अलंकारः - </td><td>Figure</td></tr></table><h3>Definition</h3><p>A speech with epithets signifying the import (of the speaker) is termed Insinuator.</p>'
          },
          examples: [
            {
              text: 'सुधांशुकलितोत्तंसस्तापंहरतुवःशिवः॥',
              explanation: {
                sans:
                  'सुधांपकलितोत्तंसः –चंद्रपरिष्कृतः उत्तंसः शेखरोयस्य सतधोक्तः – शिवःवः तापं मनस्तापं हरतुनिवर्तयतु- अत्र सुधांशुकलितेत्यादि विशेषणं तापहरणसामार्थ्याभिप्राय गर्भं अतः परिकरः ',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>सुधांशुकलितोत्तंसः - </td><td>Whose crest has been adorned by the moon</td></tr><tr><td>शिवः - </td><td>The God “Siva”</td></tr><tr><td>वः तापम् - </td><td>Your misery</td></tr><tr><td>हरतु - </td><td>Remove</td></tr></table><p>Let God Siva whose crest has been adorned with nectar-rayed (moon) remove your misery (lit. mental heat).</p><p>Here, the charming epithet सुधांशुकलितोत्तंसः  suggests that the heat is removable. This‘ figure occurs even when only one epithet is employed and when that epithet invests the verse with as peculiar charm agreeable to the effect like the present one.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'परिकरांकुरः',
      title_eng: 'परिकरांकुरः - Sprout of an Insinuator.',
      id: 24,
      slokas: [
        {
          sloka: 'साभिप्रायेविशेष्येतुभवेत्परिकरांकुरः।',
          sloka_explanation: {
            sans:
              'विशेष्ये साभिप्राये सतितु परिकरांकुराख्योलंकारः भवेत् यत्र विशेष्यमभिप्राय गर्भंस्यात्तत्र परिकरांकुरस्स्यादित्यर्धः',
            eng:
              '<h3>Word meanings</h3><table><tr><td>विशेष्येतु - </td><td>When the noun itself</td></tr><tr><td>साभिप्राये - </td><td>Signifying the import</td></tr><tr><td>परिकरांकुरः - </td><td>Sprout of an Insinuator</td></tr><tr><td>भवेत् - </td><td>Is</td></tr></table><h3>Definition</h3><p>When the noun itself (i.e., Without epithets) signifies the import of the speaker, it is called the Sprout of an Insinuator.</p>'
          },
          examples: [
            {
              text: 'चतुर्णांपुरुषार्थानांदातादेवश्चतुर्भुजः॥',
              explanation: {
                sans:
                  'चतुर्णां पुरुषार्थानां धर्मार्थ काममोक्षाणां दातादेवः – तद्दान समर्था देवता चतुर्भुजः विष्णुरेव- अत्र चतुर्भुजत्वाद्विष्णुरेव युगपच्चतुर्विध पुरुषार्थ प्रदान समर्थः नान्योदेव इत्यभिप्राय गर्भं चतुर्भुजवि.....पादानम्',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>चतुर्भुजो देवः - </td><td>The four armed God Vishnu</td></tr><tr><td>चतुर्णां पुरूषार्थानां - </td><td>Of the four objects of human life</td></tr><tr><td>दाता - </td><td>Giver</td></tr></table><p>The four-armed God (Vishnu) is the giver of the four principal objects of life.</p><p>Four objects of life are धर्मः - ‘merit’, अर्थः - ‘wealth’, कामः - ‘enjoyment’ and मोक्षः - ‘liberation’.</p><p>“Here, the word चतुर्भुजः is one of the thousand names of the Lord Vishnu and is used here without epithets, The import of the speaker is that God Vishnu alone (being -four-armed) is able to distribute the four objects of life.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'श्लेषः',
      title_eng: 'श्लेषः - Paronomasia',
      id: 25,
      slokas: [
        {
          sloka:
            'नानार्थसंश्रयःश्लोषोवर्ण्यावर्ण्योभयाश्रितः (वर्ण्यावर्ण्योभयास्पदः) ।',
          sloka_explanation: {
            sans:
              'अनेकार्थगोचरः वर्णावर्णोभयाश्रयः- केवल प्रकृत गोचरः – केवला प्रकृतगोचरः- उदुभयविषयशब्दविन्यासरूप स्त्रिविधः – श्लेष इत्यर्थः',
            eng:
              '<h3>Word meanings</h3><table><tr><td>वर्ण्यावर्ण्योभयास्पदः - </td><td>Relating to 1. An object on hand, 2. An object not on hand and 3. both</td></tr><tr><td>नानार्थसंश्रयः - </td><td>Depending upon words having many meanings</td></tr><tr><td>श्लेषः - </td><td>Paronomasia</td></tr></table><h3>Definition</h3><p>Paronomasia is the expression by words having more than one signification referring: <ol><li> to an object on hand, </li><li> to an object not on hand and </li><li> to both.</li></ul></p>'
          },
          examples: [
            {
              text: 'सर्वदोमाधवःपायात्सयोगंगामदोधरत् (योऽगंगामदीधरत्) ॥',
              explanation: {
                sans:
                  'सर्वदः सर्वार्थप्रदः सःमाधवः पायात् रक्षतुयः अगंगोवर्धनाख्यंगांभुवं अदीधरत् भृशं बिभर्तिस्मयाश्रितः । ',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>सर्वदः - </td><td>All-giver</td></tr><tr><td>स माधवः - </td><td>The husband of मा  Lakshmi, the Lord Vishnu</td></tr><tr><td>पायात् - </td><td>May protect</td></tr><tr><td>यः - </td><td>Who</td></tr><tr><td>अगम् - </td><td>The mountain Govardhana</td></tr><tr><td>गाम् - </td><td>The earth</td></tr><tr><td>अदीधरत् - </td><td>Head up</td></tr><tr><td>सर्वदा - </td><td>Always</td></tr><tr><td>सः उमाधवः - </td><td>The husband of Uma, the Lord Shiva</td></tr><tr><td>पायात् - </td><td>May protect</td></tr><tr><td>यः - </td><td>Who</td></tr><tr><td>गंगाम् - </td><td>The river Ganges</td></tr><tr><td>अदीधरत् - </td><td>Bore (on his head)</td></tr></table><p>The all-giver Madhava who held up the mountain (Govardhana on his head) and the earth may protect (you).</p><p>The husband of Uma (Siva) who bore (on his head) the river Ganges may protect (you)</p><p>सर्वदो माधवः may be split into: <ol><li>सर्वदः माधवः </li><li>सर्वदा उमाधवः ।</li></ol></p><p>यो गंगाम्  may be split into: <ol><li> –यः अगं </li><li>यः गंगाम् ।</li></ol><p>Here both Madhava and Umadhava are objects on hand and this is therefore the Example of No. 1</p>'
              }
            },
            {
              text:
                '<h3>Example of No. 2</h3><br><br>अब्जेनत्वन्मुखंतुल्यंहरिणाहितसक्तिना।',
              explanation: {
                sans:
                  'अब्जेनेति हे प्रिये हरिणासूर्येण आहितानिहिता सक्तिरासक्तिर्वस्यतेन अब्जेन पद्मेन तधाहरिणेन मृगेण सक्तिर्यस्यतेन अब्जेव चंद्रेणत्वन्मुखंत्वद्वदनं तुल्यं समम्- अत्र अज्जपदस्योपमानत्वने अप्रकृतपद्म चंद्रगोचरत्वाद प्रकृतः श्लेषः अत्राब्जेनेत्यत्र एकनाहावलंबिफलद्वय वदर्धद्वय प्रतीतेरर्थ श्लेषः – हरिणाहितसक्ति नेत्यत्र बतुकाष्ठवच्छब्दश्लेषः ',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>त्वन्मुखम् - </td><td>Thy face</td></tr><tr><td>हरिणाहितसक्तिना हरिणेन - </td><td>by the deer आहिता effected सक्तिः attachment येन having the attachement effected by the deer in the form of the spot</td></tr><tr><td>अब्जेन - </td><td>By the moon</td></tr><tr><td>तुल्यम् - </td><td>Is equal</td></tr></table><p>Or</p></table><p>(Lady !) thy face resembles the moon having an attachment effected by the deer (in the form of the spot).</p><p>Or</p><p>(Lady !) thy face resembles the lotus having an attachment effected by the sun (in the act of blooming at the dawn).</p><p>Here, अब्ज “moon” and  अब्ज  “lotus” which are upamanas are both objects not on hand.</p>'
              }
            },
            {
              text:
                '<h3>Example of No. 3.</h3><br><br>उच्चरद्भूरिकीलालःशुशुभेवाहिनीपतिः॥',
              explanation_sans:
                'उच्चरदुद्गच्छद्भूरिबहुळं कीलालं शोणितं यस्यसः शोणितेंभसिकीलालमित्यमरः वाहीनीपतिः सेनापतिः शुशुभेदिदीपे- तथा उज्जृंभमाणं भूरिकीलाल मुदकं यस्यसह् वाहिनीपतिः समुद्रः शुशुभे- अत्र सेनापतेः प्रकृतत्वं समुद्रस्या प्रकृतत्वमतः प्रकृता प्रकृतगोचरः श्लेषः ',
              explanation_eng:
                '<h3>Word meanings</h3><table><tr><td>उच्चरड्भूरिकीलालः - </td><td>Having profuse effusion of blood</td></tr><tr><td>वाहिनीपतिः - </td><td>The commander of the army (Bhishma)</td></tr><tr><td>शुशुभे - </td><td>shone</td></tr></table><p>or</p><table><tr><td>उच्चरड्भूरिकीलालः - </td><td>having a vast expanse of water</td></tr><tr><td>वाहिनीपतिः - </td><td>The lord of the rivers (ocean)</td></tr><tr><td>शुशुभे - </td><td>shone</td></tr></table><p>The commander of the army, Bhishma, shone by the profuse effusion of blood</p><p>or</p><p>The Lord of the rivers, the ocean, shone by the vast expanse of water.</p><p>Here, the commander Bhishma is the object on. hand and the ocean is the object not on hand.</p>'
            }
          ]
        }
      ]
    },
    {
      title_sans: 'अप्रस्तुतप्रशंसा  ',
      title_eng: 'अप्रस्तुतप्रशंसा - Indirect Description.',
      id: 26,
      slokas: [
        {
          sloka: 'अप्रस्तुतप्रशंसास्यात्सायत्रप्रस्तुताश्रया।',
          sloka_explanation: {
            sans:
              'तत्रा प्रस्तुत प्रशंसास्यादितियोजना- प्रथमंज्ञेयाकुत्रेत्यत्राहसेति- यत्रसा अप्रस्तुत प्रशंसा अप्रस्तुतवृत्तांत वर्णनं प्रस्तुताश्रया प्रस्तुतवृत्तांतप्रतीति परुअवसायिनीस्यादिति संबंधः – यत्र प्रस्तुत वृत्तांत प्रत्यायनाया प्रस्तुत वृत्तांतो वर्ण्यतेतत्रा प्रस्तुत प्रशंसाख्योलंकार इति निष्कर्षः',
            eng:
              '<h3>Word meanings</h3><table><tr><td>यत्र - </td><td>where</td></tr><tr><td>सा - </td><td>That (description of an object not on hand)</td></tr><tr><td>प्रस्तुताश्रया - </td><td>Referring to an object on hand</td></tr><tr><td>अप्रस्तुतप्रशंसा स्यात् - </td><td>Is called Indirect Description</td></tr></table><h3>Definition</h3><p>When the description of an object not on hand conveys a reference to an object on hand, it is called Indirect Description.</p>'
          },
          examples: [
            {
              text: 'एकःकृतीशकुन्तेषुयोऽन्यंशक्रान्नयाचते॥',
              explanation: {
                sans:
                  'सर्वं सहा पतितमंबुन चातकानामिति वचनादिंद्रोयदान वर्षतितावत्पर्यंतं प्रतीक्ष्यतत्सृष्टोदकमंतराळ एवचातको गृह्णातीति प्रसिद्धिः – सः एक एव चातकः शकुंतेषु पक्षिषु मध्येकृतिनिपुणः नत्वन्येपक्षिण इत्यर्थः – अत्र सार्वभौमं विनान्यं क्षुद्रं राजानंन प्रार्धयामीत्यभिमानशालिनो वृत्तांतस्य वर्णनीयस्य प्रत्यायनार्थं तत्सरूपा प्रस्तुत चारकवृत्तांतोवर्णित इतीयम प्रस्तुत प्रशंसा उदाहरणांतराण्यूह्यानि ॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>शकुन्तेषु - </td><td>Among the birds</td></tr><tr><td>एकः - </td><td>One only</td></tr><tr><td>(चातकः) - </td><td>Chataka bird</td></tr><tr><td>कृती - </td><td>Fortunate one</td></tr><tr><td>यः - </td><td>Who</td></tr><tr><td>शक्रादन्यं - </td><td>Other than Indra</td></tr><tr><td>न याचते - </td><td>Never begs</td></tr></table><p>(The chataka bird) is the only fortunate one, among the birds, which never begs of any other than Indra.</p><p>It is a known fact that chataka bird lives on rain drops and that Indra is the bestower of rain.</p><p>Here, the object in question is a noble man who never begs of any man except the Indra -like king and this is conveyed through the description of a chataka bird which is not the object on hand.</p><p>This is not समासोक्ति where a description of an object on hand conveys a reference to an object not on hand ; whilst, in this figure, it is quite contrary.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'प्रस्तुतांकुरः ',
      title_eng: 'प्रस्तुतांकुरः -The Sprout of Direct Description',
      id: 27,
      slokas: [
        {
          sloka: 'प्रस्तुतेनप्रस्तुतस्यद्योतनेप्रस्तुताङ्कुरः।',
          sloka_explanation: {
            sans:
              'प्रस्तुतेन प्रस्तुत वर्णनेन प्रस्तुतस्य प्रस्तुत वृत्तांतस्यद्योतने सति  प्रस्तुतांकुरालंकारः – यत्र प्रस्तुत वृत्तांत प्रत्यायनाय प्रस्तुतांतरवृत्तंत एव वर्ण्यते- तत्र प्रस्तुतांकुरालंकारः ॥ ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>प्रस्तुतेन - </td><td>By (description of) an object on hand</td></tr><tr><td>प्रस्तुतस्य - </td><td>Of (another) object on hand</td></tr><tr><td>द्योतने - </td><td>In the apprehension</td></tr><tr><td>प्रस्तुतांकुरः - </td><td>(it is) the Sprout of Direct Description</td></tr><h3>Definition</h3><p>When the description of an object on hand conveys a, reference to another object on hand, it is called Prastutankura.</p>'
          },
          examples: [
            {
              text: 'किंभृंगसत्यांमालत्यांकेतक्याकण्टकेद्धया॥',
              explanation: {
                sans:
                  'हे भृंगमालत्यां सुमनोलतायां सत्यांविद्यमानायां कंटकैस्सूचिकल्पै सूक्ष्मावयवैरिदस्तुतांकुरः । किंभृंगसत्यांघलत्यां केतक्याकंटकेद्धया ॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>भृंग ! - </td><td>O bee !</td></tr><tr><td>मालत्यां सत्यां -When there is the Malati flower</td></tr><tr><td>कण्टकेड्बया - </td>Full of thorns</td></tr><tr><td>केतक्या - </td><td>By the Ketaki</td></tr><tr><td>किं - </td><td>What is the use.</td></tr></table><p>O Bee! What (is the use of thy amusement) with the (un blown) Ketaki full of thorns while thou hast here the Malati (Jasamine) flower.</p><p>Here, a lady, by the description of the bee’s act with the unblown  Ketaki bud witnessed by her in her pleasure garden indirectly intimates the same to her lover, the subject of discourse, who is at present in love with a maiden who has not yet arrived at puberty. </p><p>N. B. The bee and the lover are both objects on hand. </p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'पर्य्यायोक्तम् ',
      title_eng: 'पर्य्यायोक्तम् - Periphrasis',
      id: 28,
      slokas: [
        {
          sloka: 'पर्यायोक्तंतुगम्यस्यवचोभङ्ग्यन्तराश्रयम्।',
          sloka_explanation: {
            sans:
              'पर्यायोक्तं तदप्याहुर्यद्व्याजेनेष्टसाधनम् । गम्यस्य भंग्यंतराश्रयं रूपांतर प्रतिपादकं वचनं वर्णनमित्यर्धः – पर्यायोत्तरयोयद्रूपेण गम्यः तस्यैवरूपांतरेण वर्ननमितियत्तत्पर्यायोक्तं ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>गम्यस्य - </td><td>Of the fact intended to be expressed</td></tr><tr><td>भंग्यंतराश्रयम् - </td><td>Referring to another by a turn of speech</td></tr><tr><td>वचः तु - </td><td>The description</td></tr><tr><td>पर्य्यायोक्तम् - </td><td>Periphrasis</td></tr></table><h3>Definition</h3><p>When a fact intended to be intimated is conveyed by a. circumlocutory speech, or in other words, when a fact intended to be described is expressed by a turn of speech, or if the intended fact is expressed in a different manner it is Periphrasis.</p>'
          },
          examples: [
            {
              text: 'नमस्तस्मैकृतौयेनमुधाराहुवधूकुचौ॥',
              explanation: {
                sans:
                  'तस्मै- वासुदेवाय नमः – योराहुं स्वचक्रेण शिरोमात्रावशेषं कृत्वातं तदंगनालिंगनजनित सुखान्निवर्त्यतद्वधूस्तनयोर्वैयर्ध्यं संपादितवान्- तस्मै राहुवधू स्तनवैयर्ध्यकारणे भगवतेनम इत्यर्थः – अस्य वासुदेवस्य आ साधारणधर्मेण लक्ष्मीपतित्वादिना गम्यस्य राहुवधूकुचवैयर्ध्यकारुत्वेन प्रतिपादनं पर्यायोक्तम् ॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>तस्मै - </td><td>To him</td></tr><tr><td>नमः - </td><td>Homage</td></tr><tr><td>येन - </td><td>By whom</td></tr><tr><td>राहुवधूकुचौ - </td><td>The breast of Rahu’s spouse</td></tr><tr><td>सुधा - </td><td>Useless</td></tr><tr><td>कृतौ - </td><td>Were made</td></tr></table><p>Homage to him (God Vishnu) by Whom the breasts of Rahu’s spouse were rendered useless.</p><p>Here, the intended fact is that homage is to the God Vishnu only, because he was the killer of Rahu and thus rendered the breasts of Rahu’s spouse useless and this fact has been expressed by a turn of speech, i.e., by different words which do not express it but by words which suggest it, simply for the purpose of giving a particular strikingness to the description.</p>'
              }
            }
          ]
        }
      ],
      types: 1,
      type: [
        {
          sloka:
            '<h3>Periphrasis- A second kind</h3>पर्यायोक्तंतदप्याहुर्यद्व्याजेनेष्टसाधनम्।',
          sloka_explanation: {
            sans:
              'व्याजेनान्यकार्यच्छलेन- इष्टस्यार्थन्व साधनमितियत्- तदपिपर्यायोक्तं कवय आहुरित्यर्थः – यत्र स्वाभीष्टकार्यं कार्यांतर व्याजेन साध्यते- तदपि पर्यायोक्तमिति निष्कर्षः ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>व्याजिन - </td>Under a pretext</td></tr><tr><td>यत् इष्टसाधनम् - </td><td>The fulfillment of one’s own wish</td></tr><tr><td>तदपि - </td><td>Even that</td></tr><tr><td>पर्य्यायोक्तम् - </td><td>Periphrasis</td></tr><tr><td>आहुः - </td><td>(some) call</td></tr><tr><td>अहम् - </td><td>I</td></tr><tr><td>चूतलताम् - </td><td>The mango creeper</td></tr><tr><td>यामि - </td>Go</td></tr><tr><td>युवाभ्याम् - </td><td>By you both</td></tr><tr><td>इह - </td><td>Here</td></tr><tr><td>आस्यताम् - </td><td>Shall be stayed</td></tr></table><h3>Definition</h3><p>Even the fulfillment of one’s own wish under an artful pretext of doing some thing else is also called Periphrasis by some.</p>'
          },
          examples: [
            {
              text: 'यामिचूतलतांद्रष्टुंयुवाभ्यामास्यतामिह॥',
              explanation_sans:
                'कस्याश्चित्सख्याः स्वसन्निधौ लज्जापरयोर्दंपत्योः स्वस्यचूतलता दर्शनार्थंगमन व्याजेन यथेच्छाविहार संपादनमिच्छंत्या इदं वचनं – अहं चूतलतां सहकारशाखां द्रष्टुंयामिगच्छामि- युवाभ्यांभवद्भ्यामत्त्रेव कुसुमितनीरंध्र कुंजेगृहे अन्यतांस्थीयतां ॥',
              explanation_eng:
                '<h3>Word meanings</h3><table><tr><td>अहम् - </td><td>I</td></tr><tr><td>चूतलताम् - </td><td>The mango creeper</td></tr><tr><td>द्रष्टुं - </td><td>to see</td></tr><tr><td>यामि - </td>Go</td></tr><tr><td>युवाभ्याम् - </td><td>By you both</td></tr><tr><td>इह - </td><td>Here</td></tr><tr><td>आस्यताम् - </td><td>Shall be stayed</td></tr></table><p>Lovers! I depart hence for the purpose of seeing (my) mango creeper and it shall be stayed here by you both.</p><p>Here, the speaker is a female messenger who having united her mistress with her intended lover departs from that place under the pretext of seeing her own chuta creeper so that the couple may freely enjoy in the absence of a third person.</p>'
            }
          ]
        }
      ]
    },
    {
      title_sans: 'व्याजस्तुतिः',
      title_eng: 'व्याजस्तुतिः - Artful Praise or Irony',
      id: 29,
      slokas: [
        {
          sloka: 'उक्तिर्व्याजस्तुतिर्निन्दास्तुतिभ्यांस्तुतिनिन्दयोः।',
          sloka_explanation: {
            sans:
              'निंदास्तुतिभ्यां स्तुतिनिंदयिरुक्ति व्याजस्तुत्यलंकारः – यत्र निंदा व्याजेन स्तुतिरेव क्रियते- यत्र स्तुतिव्याजेन विंदैव क्रियते- सापि व्याजस्तुतिरित्यर्धः ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>निंदास्तुतिभ्याम् - </td><td>By (apparent) censure and praise</td></tr><tr><td>स्तुतिनिंदयोः - </td><td>Of the praise and censure</td></tr><tr><td>उक्तिः - </td><td>speech</td></tr><tr><td>व्याजस्तुतिः - </td><td>Artful Praise</td></tr><tr><td>स्वर्धुनि ! - </td><td>Celestial Ganges !</td></tr><tr><td>ते - </td><td>Thy</td></tr><tr><td>विवेकः - </td><td>Judgment</td></tr><tr><td>कः - </td><td>What</td></tr><tr><td>यत् - </td><td>Because</td></tr><tr><td>पापिनः - </td><td>The sinners</td></tr><tr><td>दिवम् - </td><td>To the heaven</td></tr><tr><td>नयसे - </td><td>Take</td></tr></table><h3>Definition</h3><p>when (1) the praise is understood by apparent censure and (2) censure by apparent praise, it is termed Artful Praise.</p>'
          },
          examples: [
            {
              text:
                '<h3>Example of No. 1 - when the praise is understood by apparent censure</h3>कःस्वर्धुनि! विवेकस्तेपापिनोनयसेदिवम्॥',
              explanation: {
                sans:
                  'हे स्वर्धिनि गंगे- तेतवको विवेकः – विवेको नास्तीत्यर्थः – यद्यस्मात्पापिनः पापनिलयान् दिवं स्वर्गं नयने- प्रापयसे- पापिनो पिष्वजलनय सेपापिनोदिनम् ॥',
                eng:
                  '<p>O celestial river Ganga! Thou art devoid of judgment in that thou conveyest the sinners to the heaven.</p><p>Here, the real praise has resulted by the apparent censure and it consists in representing the Ganga as taking the sinners to heaven provided they once bathe in her waters.</p><p>N.B. - व्याजस्तुतिः = व्याजेन स्तुतिः  Praise by an artifice-when praise is understood by apparent censure.</p><p>When censure is understood by apparent praise, व्याजस्तुतिः  is explained as व्याजरूपा स्तुतिः  praise consisting in an artifice or a pretended praise.</p>'
              }
            },
            {
              text:
                'साधुदूतिपुनःसाधुकर्तव्यंकिमतःपरम्।<br>यन्मदर्थेविलूनासिदन्तैरपिनखैरपि॥',
              explanation: {
                sans:
                  'प्रियविरहमसहमानाका चिन्नायिकानायकं समानेतुंदूतीम् । प्रेषयित्वा तदुपभुक्तां नखचिह्नादिभिः ज्ञात्वास्तुतिव्याजेनता मुपालभते- हे दूतिसाधुसम्यक् पुनरपि साधुत्वया साध्वाचरितं- अत श्श्लाघ्यासीत्यर्धः ',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>दूति! - </td><td>Messenger !</td></tr><tr><td>साधु - </td><td>Well</td></tr><tr><td>अतःपरम् - </td><td>Than this</td></tr><tr><td>किम् - </td><td>What other</td></tr><tr><td>साधु - </td><td>Good</td></tr><tr><td>पुनः - </td><td>Again</td></tr><tr><td>कर्तव्यम् - </td><td>To be done</td></tr><tr><td>यत् - </td><td>Because</td></tr><tr><td>मदर्थे - </td><td>On my account</td></tr><tr><td>दंतैरपि - </td><td>Even by the teeth</td></tr><tr><td>नखैरपि - </td><td>Even by the nails</td></tr><tr><td>विलूना असि - </td>Wast injured</td></tr></table><h3>Well (done) messenger ! What other good than this can again be done; because thou, on my account, wast injured even by (my lover’s) teeth and nails.</p><p>Here, the speaker a lady pining under separation sent her maid-servant as a messenger to her lover and on seeing her returning with marks, in her body, of her having toyed with her (lady‘s) lord, censures her under pretext of Praise saying that she (lady) was saved by her (the maid servant) from the injury by her lord’s teeth and nails ; whereas in fact she was angry when she saw her servant coming single without her lord and was more angry when she observed on her body the marks of sexual intercourse with her own lord. Hence a censure resulted in the apparent praise.</p><p>N. B.-This is not अप्रस्तुतप्रशंसा (XXVII),  for, in it, there is no strikingness consisting either in censure or praise.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'व्याजनिन्दा',
      title_eng: 'व्याजनिन्दा - Artful Censure',
      id: 30,
      slokas: [
        {
          sloka: 'निन्दायानिन्दयाव्यक्तिर्व्याजनिन्देतिगीयते।',
          sloka_explanation: {
            sans:
              'निंदयान्य निंदायाः व्यक्तिः प्रतीतिस्सव्याजनिंदाख्योलंकार इति गीयते कथ्यते इत्यर्थः ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>निंदया - </td><td>By censure</td></tr><tr><td>निंदायाः - </td><td>Of censure</td></tr><tr><td>व्यक्तिः - </td><td>Manifestation</td></tr><tr><td>व्याजनिंदा - </td><td>Artful Censure</td></tr><tr><td>इति - </td><td>As</td></tr><tr><td>गीयते - </td><td>Is called</td></tr></table><h3>Definition</h3><p>When an apparent censure (of an object not on hand) results in the censure (of an object not on hand), it is Artful Censure.</p>'
          },
          examples: [
            {
              text: 'विधेसनिन्द्योयस्तेप्रागेकमेवाहरच्छिरः॥',
              explanation: {
                sans:
                  'संसार निर्विण्नस्तत्प्रवर्तकं विधिमुपालभते- हे विधे ब्रह्मन् सहरः निंद्यः निंदार्हः – कुतः –यतः – प्राक् पूर्वकालेतव एकमेवशिरः – अहरत् चिच्छेद- नतुमस्तक चतुष्टयमित्यर्थः – समस्तमस्तकच्छेदेतु पुनस्संसार निर्मातुर भावात्सर्वेपि संसारभार क्लेशविमुक्तास्संतः सुखमाप्नुयुरित्यर्थः – तवनिर्मूलनमकृतवान् शिव एव निंद्य इति श्लोक तात्पर्यं- अत्रहरविंदया विषम संसार स्रष्टुर्विथेः निंदाभिव्यज्यत इति व्याजनिंदा भवति ॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>विधे - </td><td>Creator !</td></tr><tr><td>सः - </td><td>He</td></tr><tr><td>निम्द्यः - </td><td>Is to be censured</td></tr><tr><td>यः - </td><td>who</td></tr><tr><td>ते - </td><td>Thy </td></tr><tr><td>प्राक् - </td><td>Formerly</td></tr><tr><td>एकमेव - </td><td>Only one</td></tr><tr><td>शिरः - </td><td>Head</td></tr><tr><td>अहरत् - </td><td>Took away</td></tr></table><p>O Creator 1 he (Siva) is to be censured-he that has lopped off only one head of thine formerly.</p><p>Here, the speaker, a poor man in very distressed circumstances, fancies himself that, if all the five heads of the God Brahmi were lopped off by Siva, then both the creator and the sufferings of the created would have been simultaneously put an end to. </p><p>Instead of directly censuring the God Brahma, the creator, the object on hand, the speaker censured the God Siva, the object not on hand, in having imprudently suffered the other four heads of Brahmi to remain.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'आक्षेपः',
      title_eng: 'आक्षेपः - Hint',
      id: 31,
      slokas: [
        {
          sloka: 'आक्षेपःस्वयमुक्तस्यप्रतिषेधोविचारणात्।',
          sloka_explanation: {
            sans:
              'स्वयमुक्तस्य स्वेनैवोक्तस्य अर्थस्य विचारणात्प्रतिषेदः विचारं कृत्या प्रतिषेद इत्यर्थः – ल्यच्लोपे पंचमीन आक्षेपोलंकार इत्यर्थः – कश्चित्कंचिदर्धं पूर्वं संप्रार्थ्यपुनस्स्वयमेव अन्यस्यसत्त्वेन तद्वैयर्थ्यं विचार्यतं निषेधतीति यदयमाक्षेप इति इष्कर्षः ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>स्वयम् -</td><td>By self</td></tr><tr><td>उक्तस्य - </td><td>Told or expressed</td></tr><tr><td>विचारणात् - </td><td>On deliberation</td></tr><tr><td>प्रतिषेधः - </td><td>Denial</td></tr><tr><td>आक्षेपः - </td><td>Hint</td></tr></table><h3>Definition</h3><p>A denial, after some deliberation, of what has been expressed, is called Hint. </p>'
          },
          examples: [
            {
              text: 'चन्द्र ! संदर्शयात्मानमथवास्तिप्रियामुखम्॥',
              explanation: {
                sans:
                  'हे सखेत्व मात्मानं मां चंद्रं संदर्शययधाहं चंद्रं पश्येयं तथा कुर्वित्यर्थः – श्वगृहदश्यांद्विकर्मकत्वादात्मानमिति द्वितीया वस्तु वस्तु चंद्र संदर्शयेति पायात्मानमधवास्ति प्रयामुखम् ॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>चंद्र ! - </td><td>O moon !</td></tr><tr><td>आत्मानम् - </td><td>Self</td></tr><tr><td>संदर्शय - </td><td>Show or discover</td></tr><tr><td>अथवा - </td><td>Or, or why</td></tr><tr><td>प्रियामुखम् - </td><td>Face of (my) beloved</td></tr><tr><td>अस्ति - </td><td>Is</td></tr></table><p>O moon ! Discover thy self (to me). Why? Here is the face of (my) beloved.</p><p>Here, we see only a semblance of denial. This figure is distinct from the Concealment (XI) Where the property of an object on hand is denied and that of another not on hand is superimposed upon it.</p>'
              }
            }
          ]
        }
      ],
      types: 2,
      type: [
        {
          sloka:
            '<h3>A second kind of Hint</h3>निषेधाभासमाक्षेपंबुधाःकेचनमन्वते।',
          sloka_explanation: {
            sans:
              'केचनबुधाः निषेधाभासं आभासरूपं निषेधमाक्षेपं मन्वते अंगीकुर्वंतीत्यर्धः – तेषामाशयः स निषेधमात्रमाक्षेपः चमत्काराभवात्- किंतुयोनिषेधोबाधितत्वेन आभास स्सन् अर्धांतरेपर्यवस्यन् कथं चिद्विशेष माक्षिपतिन अक्षेप इति ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>केचन - </td><td>Some poets</td></tr><tr><td>बुधाः - </td><td>Learned people</td></tr><tr><td>निषेधाभासम् - </td><td>Semblance of a denial</td></tr><tr><td>आक्षेपम् - </td><td>Hint</td></tr><tr><td>अन्वते - </td><td>Regard</td></tr><h3>Definition</h3><p>Some learned people regard the semblance of a denial as the figure Hint.</p>'
          },
          examples: [
            {
              text: 'नाहंदूतीतनोस्तापस्तस्याह्कालानलोपमः॥',
              explanation_sans:
                'कयाचिद्विरहतप्तया प्रेषिताकाचिच्चातुर्यशालिनी दूतीकंचिन्नायकमुद्दिश्याह- हे नायक अहं दूतीनास्मि वक्ष्यमाण वाग्विषये दूतीनभवामि- अतो मयायद्वक्ष्यते तत्सर्वं सत्यमेव- अत इयं दूतीत्वात्तत्कालोचित मृषावादिनीति शंकान कार्येति भावः – अथवक्तव्यांशमाह- तनोरिति- तस्यास्त्वत्प्रियायाः तनोश्शरीरस्य तापः विरहसंतापः कालानलोपमः प्रळयकालवह्नितुल्यः अत्रदूत्युक्तावेवनाहं दूतीतिनिषेधः – बाधितत्वाभा सरूपस्सन् अहमनुनय कालोचितकैतवादिनीन भवामि- किंतु तथ्यवादिन्येवास्मीत्यर्धे पर्यवस्यन्निदानी मेवागत्यत्व याजीवनीया अन्यधामृतिमीयादिति विशेष माक्षिपतीतिभवत्याक्षेपः ॥',
              explanation_eng:
                '<h3>Word meanings</h3><table><tr><td>अहम् - </td><td>I</td></tr><tr><td>दूतौ - </td><td>Go- between</td></tr><tr><td>न - </td><td>Not</td></tr><tr><td>तस्याः - </td><td>Of her</td></tr><tr><td>तनोः - </td><td>Of the body</td></tr><tr><td>कालानलोपमः - </td><td>Resembling the destructive fire at the end of the world</td></tr><tr><td>तापः - </td><td>Fever of separation</td></tr></table><p>I am no go-between but the love-fever (residing in ) her (mistress) body, resembling the destructive fire at the end of the world.</p><p>Here, the character of a person- that of the go- between, is denied. The fact of excessive hardship, experienced by the lady under the pangs of separation, which was intended to be conveyed by the go-between, the speaker, is suppressed in order to suggest more strikingly that the lady is sure to die if her lover delays even for a moment in meeting her.</p>'
            }
          ]
        },
        {
          sloka:
            '<h3>A third kind of Hint</h3>आक्षेपोऽन्योविधौव्यक्तेनिषेधेचतिरोहिते।',
          sloka_explanation: {
            sans:
              'विधौविधानेव्यक्तेस्फुटे सति- निषेधे प्रतिषेधे तिरोहिते अस्फुटे सति अव्य आक्षेपः – यत्राभिमतनिषेधानुद्घाटन पूर्वकमनभिमतं विधिं प्रकटीकृत्यभंग्यंतरेणाभिमत प्रतिषेधोगर्भीकृतस्स्यात् तत्राक्षेप उच्यत इत्यर्धः',
            eng:
              '<h3>Word meanings</h3><table><tr><td>विधौ - </td><td>Command or permission</td></tr><tr><td>व्यक्ते - </td><td>When apparent</td></tr><tr><td>निषेधे च - </td><td>And the denial</td></tr><tr><td>तिरोहिते - </td><td>When hidden</td></tr><tr><td>अन्यः - </td><td>Another kind</td></tr><tr><td>आक्षेपः - </td><td>Hint</td></tr><h3>Definition</h3><p>When the permission (to do some thing) is apparent (in words) but the denial (to do that thing) is hidden, it is a third kind of Hint.</p>'
          },
          examples: [
            {
              text: 'गच्छगच्छसिचेत्कान्ततत्रैवस्याज्जनिर्मम॥',
              explanation_sans:
                'काचित्स्वाकांतगमनमनिच्छतीत्व यानगंतव्यमितिकं रतोनुक्त्वेवस्वोक्ति चातुर्येण तद्गमननिषेधं सूचयति- हेतां तत्वंगच्छ- अहंगच्छामि चेत्तवमरणं भवेदतोगृहंगच्छेय मित्याशंकायामाह ॥ गच्छसिचेदिति॥ त्वंगच्छसिचेत्तत्रैवत्वदुद्देश्य देश एवमजनिः जन्मस्यात् भवेत्- प्रार्धनायां लिङ् तस्मिन् देशे पुनर्जन्म प्रारयामीत्यर्थः – मृत्वास्यन्यस्मिन् जन्मनितवैव प्रियास्यां नान्यस्येतिभावः – अतो मरणान्निबि भेमीत्यनेनस्व मरनसूचकवचनेन मज्जीवुतमिच्छसिचेत्त्वं मागच्छेति निषेधोगर्भीकृतः – अत्रगमन निषेधं प्रच्छाद्यविधेरेव स्फुटीकरणादाक्षेपः ॥',
              explanation_eng:
                '<h3>Word meanings</h3><table><tr><td>कांत ! - </td><td>Lover !</td></tr><tr><td>गच्छसि चेत् - </td><td>If thou goest</td></tr><tr><td>गच्छ - </td><td>Goest</td></tr><tr><td>मम - </td><td>My</td></tr><tr><td>जनिः - </td><td>Birth</td></tr><tr><td>तत्रैव - </td><td>In that same place</td></tr><tr><td>स्यात् - </td><td>May be</td></tr></table><p>Departest (thou), my love, if thou art determined to go, and may my rebirth take place in that same place (where thou hast gone).</p><p>Here, the apparent permission of going granted by the lady suggests a clear prohibition, the meaning conveyed thereby being that the lover ought to desist from departing from her presence.</p>'
            }
          ]
        }
      ]
    },
    {
      title_sans: 'विरोधाभासः',
      title_eng: 'विरोधाभासः or विरोधः - Contradiction',
      id: 32,
      slokas: [
        {
          sloka: 'आभासत्वेविरोधस्यविरोधाभासइष्यते।',
          sloka_explanation: {
            sans:
              'विरोधन्याभासत्वे भाधेसति - सः विरोधाभास उच्यते- यत्रापाततो हारेणवक्षोजौतवहारिणौ ॥ अकारणात्कार्यजन्म चतुर्धिस्यानुस्फुरतो विरोधस्य पर्यवसाने परिहारः क्रियते तत्र विरोधाभास इति निष्कर्षः ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>विरोधस्य - </td><td>Of incongruity</td></tr><tr><td>आभासत्वे - </td><td>When apparent</td></tr><tr><td>विरोधाभासः - </td><td>Contradiction</td></tr><tr><td>इष्यते - </td><td>Is called</td></tr></table><h3>Definition</h3><p>When an incongruity (between two things) is apparent (in Words), then it is called Contradiction.</p>'
          },
          examples: [
            {
              text: 'विनापितन्वि !हारेणवक्षोजौतवहारिणौ॥',
              explanation: {
                sans:
                  'हेतन्वि सुंदरि- तववक्षोजौकुचौ- हारेणमुक्ताहारेन विनापि- हारिणौहारवंतौ हृद्यौ च भवतः – अत्रहाररहितावपि हारसहितावित्यापाततः – प्रतीतस्य विरोधस्य हाररहितावपि मनोहारावितिश्लेषभंग्यार्थांतर स्वीकारेन परिहृतत्वाद्विरोधाभासः ॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>तन्वि ! - </td><td>O slender woman !</td></tr><tr><td>तव - </td><td>thy</td></tr><tr><td>वक्षोजौ - </td><td>Breasts</td></tr><tr><td>हारेणा - </td><td>By the pearl- necklace</td></tr><tr><td>विनापि - </td><td>Though devoid of</td></tr><tr><td>हारिणौ - </td><td>Are charming or lit. possesses of necklace</td></tr></table><p>O slender lady ! thy breasts though devoid of pearl necklace are yet possessed of pearl necklaces, i.e., are yet charming.</p><p>Here, the apparent contradiction is to be explained by taking the word हारिणौ in the sense of ‘charming’ only.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'विभावना',
      title_eng: 'विभावना - Peculiar Causation',
      id: 33,
      slokas: [
        {
          sloka: 'विभावनाविनापिस्यात्कारणंकार्यजन्मचेत्।',
          sloka_explanation: {
            sans:
              'कारणं विनाकार्यजन्मकार्योत्पत्तिर्वर्ण्यते चेद्विभावनास्यात्',
            eng:
              '<h3>Word meanings</h3><table><tr><td>कारणम् विना अपि - </td><td>Though without cause</td></tr><tr><td>कार्यजन्म चेत् - </td><td>If the production of the  effect take place</td></tr><tr><td>विभावना - </td><td>Peculiar Causation</td></tr><tr><td>स्यात् - </td><td>Is called</td></tr><h3>Definition</h3><p>When the production of an effect is represented as being without cause, it is Peculiar Causation.</p>'
          },
          examples: [
            {
              text: 'अपिलाक्षारसासिक्तंरक्तंत्वच्चरणद्वयम्॥',
              explanation: {
                sans:
                  ' हे कांतेत्वच्चरणद्वयं अलाक्षारसापिक्तं लाक्षारसलेपन लहितमपिरक्तं लोहितं जातं लक्षारसलेपनकारणं विनाकांतापादयुगळे रक्तिमरूपकार्योत्पत्ति वर्णनाद्विभावना- लौहित्यं नैसर्गिकमितिविरोधपरिहारः ॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>त्वच्चरणाड्बयम् - </td><td>Thy two feet</td></tr><tr><td>लाक्षारसासिक्तम् अपि - </td><td>Though not dyed with red lac</td></tr><tr><td>रक्तम् - </td><td>Red</td></tr></table><p>Lady! thy two feet are red though they were not dyed with red lac.</p><p>Here, the contradiction in the red feet without its cause, the lac, is due to the redness of the lady’s feet being natural. Therefore, we see that the production of an effect in the absence of its cause is not inconsistent in as much as the denial of a known cause suggests that the effect produced must be natural or is due to some other hidden cause.</p>'
              }
            }
          ]
        }
      ],
      types: 5,
      type: [
        {
          sloka:
            '<h3>A second kind of Peculiar Causation </h3>हेतूनामसमग्रत्वेकार्योत्पत्तिश्चसामता।',
          sloka_explanation: {
            sans:
              'हेतूनां कारणानाम समग्रत्वेपि अपूर्णत्वेपि विकलत्वेपीतियावत्- कार्योत्पत्तिश्चकार्योत्पत्तिरपि- साविभावनामता कविसम्मता॥ ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>हेतूनाम् - </td><td>Of the causes</td></tr><tr><td>अमग्रत्वे - </td><td>When incomplete</td></tr><tr><td>कार्य्योत्पत्तिः - </td><td>The production of an effect</td></tr><tr><td>च - </td><td>Also</td></tr><tr><td>सा मता - </td><td>Is termed that Peculiar Causation</td></tr><h3>Definition</h3><p>When the production of an effect is represented as having taken place while its causes are apparently incomplete, (to produce such an effect), then it is the second kind of Peculiar Causation.</p>'
          },
          examples: [
            {
              text: 'अस्त्रैरतीक्ष्णकठिनैर्जगज्जयतिमन्मथः॥',
              explanation_sans:
                'मन्मथः अतीक्ष्णकठिनैरतीक्ष्णैरकठिनैश्च अस्त्रैररविंदादिभिः पंचभिः बाणैः – जगल्लोकं जयतिवशीकरोतीत्यर्धः – लोकतीक्ष्णकठिनान्येव जय संपूर्णसाधनानि- अत्रत्वनंगस्यचास्त्राणि अनिशितमृदुत्वाद्विकलानि तथापि जगज्जयरूपकार्यवर्णनाद्विभवना ॥',
              explanation_eng:
                '<h3>Word meanings</h3><table><tr><td>मन्मथः - </td><td>God of love</td></tr><tr><td>अतीक्ष्णाकठिनैः - </td><td>Neither sharp nor hard</td></tr><tr><td>अस्त्रैः - </td><td>By weapons</td></tr><tr><td>अगत् - </td><td>The world</td></tr><tr><td>जयति - </td><td>Conquers</td></tr></table><p>By weapons, neither sharp nor hard, the God of love conquers the whole world.</p><p>Here, the conquest of the world by the God of love is represented as having taken place though his weapons are neither sharp nor hard (being only five flowers) and are therefore quite inadequate to produce such an effect. The contradiction here must be removed by the supposition of some superhuman cause specially gifted by the Supreme Spirit.</p>'
            }
          ]
        },
        {
          sloka:
            '<h3>A third kind of Peculiar Causation.</h3> कार्योत्पत्तिस्तृतीयासासत्यपिप्रतिबन्धके।',
          sloka_explanation: {
            sans:
              'प्रतिबंधके सत्यपि कार्योत्पत्तिस्स्याच्चेत्वातृतीया विभावनेत्यर्थः ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>प्रतिबंधके - </td><td>When an impediment</td></tr><tr><td>सत्यपि - </td><td>Though present</td></tr><tr><td>कार्य्योत्पत्तिः - </td><td>Production of an effect</td></tr><tr><td>तृतीया - </td><td>Third kind</td></tr><tr><td>सा - </td><td>That - “ Peculiar Causation”</td></tr><h3>Definition</h3><p>When the production of an effect is said to have taken place though there was an impediment (to such an effect), it is the third kind of Peculiar Causation.</p>'
          },
          examples: [
            {
              text: 'नरेन्द्रानेवतेराजन्दशत्यसिभुजङ्गमः॥',
              explanation_sans:
                'हे राजन् रामचंद्र- तेतव असिः खड्ग एव भुजंगमः सर्पः – नरेंद्रान् राज्ञः विषवैद्यांश्च ॥ नरेंद्रोविषवैद्योनीति रत्नमालायां- दशतितद्दशनंकरोति- अत्र श्लेषेनमणिमंत्रौषध शालिनामपि विषवैद्यानां सर्पदष्टतावर्ण्यते- लोकेमणिमंत्रादिभिस्सर्पदशनं प्रतिबध्यते- इहतु तेषुप्रतिबंधकेषु सत्स्वपि सर्वदशनरूपकार्योत्पत्ति वर्णनाद्विभावना॥',
              explanation_eng:
                '<h3>Word meanings</h3><table><tr><td>राजन् - </td><td>O king !</td></tr><tr><td>ते - </td><td>Thy</td></tr><tr><td>असिभुजंगमः - </td><td>Sword serpent i.e., the serpent in the form of thy sword</td></tr><tr><td>नरेंद्रान् एव - </td><td>Only the cures of poisons or kings</td></tr><tr><td>दशति - </td><td>Bites</td></tr></table><p>O king! thy sword-serpent bites only Narendran, i.e., curers of poisons only (lit. kings).</p><p>नरेन्द्र = king =dealer in antidotes. Here, serpent biting the curers of poison implies an impediment to the effect.</p>'
            }
          ]
        },
        {
          sloka:
            '<h3>Fourth kind of Peculiar Causation. </h3>अकारणात्कार्यजन्मचतुर्थीस्याद्विभावना।',
          sloka_explanation: {
            sans:
              'अकारणात्कारणभिन्नादपि- कार्यजन्मकार्योत्पत्तिश्चेत्सा चतुर्थीविभावनेत्यर्थः',
            eng:
              '<h3>Word meanings</h3><table><tr><td>अकारणात् - </td><td>From a different cause</td></tr><tr><td>कार्यजन्म - </td><td>Production of an effect</td></tr><tr><td>चतुर्थी - </td><td>Fourth kind</td></tr><tr><td>विभावना - </td><td>Peculiar Causation</td></tr><tr><td>स्यात् - </td><td>Is</td></tr></table><h3>Definition</h3><p>When the production of an effect is represented as being from a different cause, or, more literally, from a similar cause, it is the fourth kind of Peculiar Causation.</p>'
          },
          examples: [
            {
              text: 'शङ्खाद्वीणानिनादोऽयमुदेतिमहदद्भुतम्॥',
              explanation_sans:
                'अत्र कामिनी कंठः शंखत्वेन तदीयगानं च वीणानादत्वेनाध्ववसेयते- हे सखि शंखात्कंबोः द्विभावना। शंखाद्वीणानिनादो यमुदेति महदद्भुतम् ॥',
              explanation_eng:
                '<h3>Word meanings</h3><table><tr><td>शंखात् - </td><td>From a conch- shell</td></tr><tr><td>अयम् - </td><td>This</td></tr><tr><td>वीणानिनादः - </td><td>Sound of a lute</td></tr><tr><td>उदेति - </td><td>Proceeds</td></tr><tr><td>महदद्भुतम् - </td><td>Great wonder</td></tr></table><p>It is a great wonder that this musical sound of a lute proceeds from a. conch- shell(i.e., conch-shell-like neck of a damsel).</p><p>We know that a conch-shell cannot produce the sound of a lute and therefore this is a. Peculiar Causation.</p><p>N.B.- We have a Metaphorical Hyperbole in शंख , the upamana, because it was used For its upameya, the neck of a damsel.</p>'
            }
          ]
        },
        {
          sloka:
            '<h3>Fifth kind of Peculiar Causation. </h3>विरुद्धात्कार्यसंपत्तिर्दृष्टाकाचिद्विभावना।',
          sloka_explanation: {
            sans:
              'विरुद्धाद्विरुद्धकारणात् कार्यनिष्पत्तिः कार्योत्पत्तिरपि काचिद्विभावना- दृष्टाप्रसिद्धेत्यर्थः ॥ ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>विरुड्वात् - </td><td>From an incongruous cause</td></tr><tr><td>कार्यसंपत्तिः - </td><td>Production of an effect</td></tr><tr><td>काचित् - </td><td>A certain kind</td></tr><tr><td>विभावना - </td><td>Peculiar Causation</td></tr><tr><td>दृष्टा - </td><td>Is seen</td></tr><tr><td>हंत - </td><td>Alas !</td></tr></table><h3>Definition</h3><p>When the production of an effect is produced from an incongruous cause, i.e., from a cause quite opposite to the real one, it is the fifth kind of Peculiar Causation.</p>'
          },
          examples: [
            {
              text: 'शीतांशुकिरणास्तन्वींहन्तसंतापयन्तिताम्॥',
              explanation_sans:
                'शीतांशुकिरणाश्चंद्रकराः – तांतन्वींसुंदरीं संतापयति परितप्तां कुर्वंति हंतेतिविषादे- अत्र तापनिवर्तकत्वेन तापविरुद्धैश्शीतांशुः किरणैः तपोत्पत्तिकथनाद्विभावना॥',
              explanation_eng:
                '<h3>Word meanings</h3><table><tr><td>शीतांशुकिरणाः - </td><td>Moon’s (cool-rayed) rays</td></tr><tr><td>ताम् - </td><td>That</td></tr><tr><td>तन्वीम् - </td><td>The slender lady</td></tr><tr><td>संतापयन्ति - </td><td>Inflame</td></tr></table><p>Alas ! the rays of the moon (lit. cool-rayed) inflame that slender lady.</p><p>This is the state of a damsel, the object on hand, pining under separation from her lover. The rays of the moon have a peculiar charm of exciting the passions of such women and therefore it is said so.</p>'
            }
          ]
        },
        {
          sloka:
            'Sixth kind of Peculiar Causation. कार्यात्कारणजन्मापिदृष्टाकाचिद्विभावना।',
          sloka_explanation: {
            sans:
              'कार्यात्कारणजन्मापि कारणोत्पत्तिरपिकाचि द्विभावनादृष्टा- लोके कारणात्कार्यजन्मेति मर्यादा- तामुल्लंघ्यकार्यादेवकारणोत्पर्वर्णिता चेद्विभावनाकाचिद्दृष्टेत्यर्थः ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>कार्यात् - </td><td>From an effect</td></tr><tr><td>कारणजन्म - </td><td>Production of a cause</td></tr><tr><td>अपि - </td><td>Also</td></tr><tr><td>काचित् - </td><td>A certain kind</td></tr><tr><td>विभावना - </td><td>Peculiar Causation</td></tr><tr><td>दृष्टा - </td><td>Is seen</td></tr><h3>Definition</h3><p>When the cause is said to have been produced from its effect, it is also termed Peculiar Causation.</p>'
          },
          examples: [
            {
              text: 'यशःपयोराशिरभूत्करकल्पतरोस्तव॥',
              explanation_sans:
                'हे राजन् तवकर एवकल्पतरुः – तस्माद्य्श एवपयोराशिः अंबुधिरभूत्- समुद्रात्कल्पतरूत्पत्तेश्शास्त्र प्रसिद्धत्वात्समुद्रः कारणं कल्पवृक्षः कार्यं- अत्रतुकार्यभूत कल्पतरोरेवकारणभूत समुद्रोत्पत्तिवर्णनाद्विभावना॥',
              explanation_eng:
                '<h3>Word meanings</h3><table><tr><td>तव - </td><td>Thy</td></tr><tr><td>करकल्पतरोः - </td><td>Hand-kalpa-tree i.e., wish-yielding tree in the form of the hand</td></tr><tr><td>यशः पयोराशिः - </td><td>Ocean of fame</td></tr><tr><td>अभूत् - </td><td>Is produced</td></tr></table><p>O king! An ocean of fame has been formed out of thy hand-kalpataru (wish-yielding tree in the form of thy hand).</p><p>Here, the king referred to is Karna renowned for his liberal donations.</p><p>The kalpa tree was produced from the ocean at the time of churning. Here, the kalpa tree in the form of the king’s hand is said to be the cause of the ocean in the form of the kings fame for his unusual liberality.</p>'
            }
          ]
        }
      ]
    },
    {
      title_sans: 'विशेषोक्तिः',
      title_eng: 'विशेषोक्तिः  Peculiar Allegation',
      id: 34,
      slokas: [
        {
          sloka: 'कार्याजनिर्विशेषोक्तिःसतिपुष्कलकारणे।',
          sloka_explanation: {
            sans:
              'संपूर्णकारणे सत्यपि- कार्याजनिः कार्यानिष्पत्तिः विशेषोक्तिः ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>पुष्कलकारणे - </td><td>Abundant cause</td></tr><tr><td>सति - </td><td>When there is</td></tr><tr><td>कार्याजनिः - </td><td>Non-production of an effect</td></tr><tr><td>विशेषोक्तिः - </td><td>Peculiar Allegation</td></tr><h3>Definition</h3>The non-production of an effect when there existed abundant cause (for the same) is called Peculiar Allegation.</p>'
          },
          examples: [
            {
              text: 'हृदिस्नेहक्षयोनाभूत्स्मरदीपेज्वलत्यपि॥',
              explanation: {
                sans:
                  'स्मर एवदीपः तस्मिन् ज्वलत्यपि- हृदिकांता हृदये- स्नेहस्य प्रेष्णुः तैलस्य चक्षयोनाभूत् लोकेदीपज्वलने सतिस्नेहक्षयोभवति अत्रतुस्मरदीपज्वलने सत्यपि तैलंन क्षीणमितितैलनाशकारणे दीपज्वलने सत्यपि तदनिष्पत्तिवर्णनाद्विशेषोक्तिः ॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>स्मरदीपे - </td><td>Cupid-lamp</td></tr><tr><td>हृदि - </td><td>In the heart</td></tr><tr><td>ज्वलत्यपि - </td><td>Though burning</td></tr><tr><td>स्नेहक्षयः - </td><td>Diminution of oil (affection)</td></tr><tr><td>न अभूत - </td><td>Did not take place</td></tr></table><p> The diminution of oil (lit affection) did not take place in the heart (of this lady pining under separation) even though the cupid lamp is burning (there).</p><p>Here, the burning of the cupid-lamp, the cause, is present and yet the effect, the diminution of oil, is represented as not taking place. The contradiction can, however, be removed by explaining the Word स्नेह in the sense of ‘affection’ only.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'असंभवः',
      title_eng: 'असंभवः - Improbability',
      id: 35,
      slokas: [
        {
          sloka: 'असंभवोऽर्थनिष्पत्तेरसंभाव्यत्ववर्णनम्।',
          sloka_explanation: {
            sans:
              'असंभव इति अर्धनिष्पत्तेः कार्यसिद्धेरसभाव्यत्व वर्णनं संभावनाशक्यत्व वर्णनमसंभवालंकारः –यस्यकस्य चित्कार्यस्य निष्पत्तौ विषये इदं संभावयितुमेव नशक्यत इति यत्र वर्ण्यते तत्रा संभवः ॥ ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>अर्थनिष्पत्तेः - </td><td>Of the accomplishment of an object</td></tr><tr><td>असंभाव्यत्ववर्णनम् - </td><td>The description of impossibility</td></tr><tr><td>असंभवः - </td><td>Improbability</td></tr><h3>Definition</h3><p>Improbability is the description of the accomplishment of a truly impossible act.</p>'
          },
          examples: [
            {
              text: 'कोवेदगोपशिशुकःशैलमुत्पाटयेदिति॥',
              explanation: {
                sans:
                  'गोपशिशुः गोपबालकः कृष्णः- शैलमुत्पाटयेत् उन्मूलयिष्यतीति- कोवेदकोवाजानाति- नकोपि संभावयितुं शक्नुयादितित्यर्थः – अत्र शिशुकृतस्य गोत्रोद्धारस्य कोवेदेत्य संभाव्यत्ववर्णनाद संभवालंकारः ॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>गोपशिशुकः - </td><td>This shepherd boy</td></tr><tr><td>शैलम् - </td><td>The mountain</td></tr><tr><td>गोवर्धन उत्पाटयेदिति - </td><td>Would have eradicated</td></tr><tr><td>कः - </td><td>Who</td></tr><tr><td>वेद - Knew</td></tr></table><p>Who knew that this shepherd boy would have eradicated the Mountain Govardhana.</p><p>The shepherd boy is the Lord Krishna. who held up the Mountain Govardhana. for seven days as a large umbrella. to shelter his beloved Gopis and their cattle from the heavy and incessant rain caused by Indra to deluge the Gokula, the land of the shepherds.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'असंगतिः',
      title_eng: 'असंगतिः - Disconnection',
      id: 36,
      slokas: [
        {
          sloka: 'विरुद्धंभिन्नदेशत्वंकार्यहेत्वोरसंगतिः।',
          sloka_explanation: {
            sans:
              'ययोः कार्यहेत्वोः भिन्नदेशत्वं भिन्नदेशावस्थानं विरुद्धमनुपपन्नंतयोः तद्वर्ण्यते चेत्- सः असंगत्यलंकारः',
            eng:
              '<h3>Word meanings</h3><table><tr><td>कार्यहेत्वोः - </td><td>Of the effect and the cause</td></tr><tr><td>विरुड्वं - </td><td>Inconsistent</td></tr><tr><td>भिन्नदेशत्वम् - </td><td>Different location</td></tr><tr><td>असंगतिः - </td><td>Disconnection</td></tr><h3>Definition</h3><p>The description of the effect and the cause as inconsistent and as occupying different locations, is termed Disconnection.</p>'
          },
          examples: [
            {
              text: 'विषंजलधरैःपीतंमूर्च्छितापथिकाङ्गनाः॥',
              explanation: {
                sans:
                  'जलधरैर्मेघैः- विषंकलंकालकूटश्चपीतम्- पधिकांगनाः वियोगिवध्वः- मूर्छिताः- जलपूर्णमेघानामुद्दीपकत्वात्तद्दर्शनान्मूर्च्छा क्रांताबभूवुरित्यर्थः – अत्रविषमितिश्लेषमूलाभेदाध्यवसायेन मेघानां कालकूटपाने सतिपधिक स्त्रीणां मूर्छेति प्रतीयते- लोकेही यस्य विषपानं तस्यैवमूर्छेति विषमूर्छयोस्समान देशत्वमुचितं भिन्नदेशत्वंतु विरुद्धं- इहतुमेघानां विषपानं स्त्रीणां मूर्छेतितयोर्विरुद्धभिन्नदेशत्व वर्णनाद संगतिः ॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>जलधरैः - </td><td>By the clouds</td></tr><tr><td>विषम् - </td><td>Poison (lit. water)</td></tr><tr><td>पीतम् - </td><td>Was drunk</td></tr><tr><td>पथिकांगनाः - </td><td>The consorts of the travelers</td></tr><tr><td>मूर्छिताः - </td><td>Fainted</td></tr></table><p>The poison (lit. water) was drunk by the clouds and the consorts of the travelers fainted.</p><p>This figure is only an exception to the ornament of Contradiction (XXXIII) and not Contradiction itself, where the mutual inconsistency of two objects resides in one place ; but in this figure in two different places.</p><p>The drinking of poison (water) by the clouds and its effect, the fainting of the consorts, take place in two different localities. It is a. convention of poets that the women are affected at the sight of the clouds in the rainy season being separated from their lovers who therefore hasten to meet their beloved.</p>'
              }
            }
          ]
        }
      ],
      types: 2,
      type: [
        {
          sloka:
            '<h3>Second kind of Disconnection </h3>अन्यत्रकरणीयस्यततोऽन्यत्रकृतिश्चसा।',
          sloka_explanation: {
            sans:
              'अन्यत्रकरणीयस्य कर्तुमर्हस्यततस्तस्मादुचित देशात्- अन्यत्रानुचितस्थले कृतिः करणं चान्या संगतिः',
            eng:
              '<h3>Word meanings</h3><table><tr><td>अन्यत्र - </td><td>In another place</td></tr><tr><td>करणीयस्य - </td><td>Of a thing to be done</td></tr><tr><td>ततः - </td><td>Other than</td></tr><tr><td>अन्यत्र - </td><td>Another place</td></tr><tr><td>कृतिः च - </td><td>Accomplishment too</td></tr><tr><td>सा - </td><td>That i.e., Disconnection</td></tr></table><p>When the accomplishment or effect of an object to be produced in a certain locality is represented as having taken place in a quite different locality, it is called the second kind of Disconnection.</p>'
          },
          examples: [
            {
              text: 'अपारिजातांवसुधांचिकीर्षन्द्यांतथाऽकृथाः।',
              explanation_sans:
                'अपारिजातामिति- पारिजातवृक्षं भूमिं नयंतं कृष्णमुद्दिश्य शक्रस्येदं सोपालं भवचनम्- हे कृष्णवसुधांभूमिं- अपारिजातां अपगतशत्रुकां पारिजातरहितां च चिकीर्षन् विधातुमिच्छन् द्यां स्वर्गं तथा अपारिजातां पारिजातरहितां- अकरोः कृतवान्- अत्र श्लेषमूलाभेदाध्यवसायेन भुवमपारिजातां कर्तुमिच्छन् स्वर्गमेवतादृशं कृतवानिति- अन्यत्रभुविकर्तव्यस्या पारिजातत्वस्यततोन्यत्र स्वर्गे क्रियावर्णनाद संगतिः ॥',
              explanation_eng:
                '<h3>Word meanings</h3><table><tr><td>(कृष्णाः) - </td><td>(Lord Krishna)</td></tr><tr><td>वसुधां - </td><td>The earth</td></tr><tr><td>अपारिजाताम् - </td><td>Devoid of परिजात or अरिजात</td></tr><tr><td>चिकीर्षन् - </td><td>Wishing to do</td></tr><tr><td>द्यां - </td><td>The paradise</td></tr><tr><td>तथा अकृथाः - </td><td>Did so</td></tr></table><p>Lord Krishna who wished to make the earth Aparijata devoid of the multitude of foes made the celestial world so i.e. अपारिजाता devoid of Parijata tree.</p><p>Parijata is a celestial tree produced at the churning of the milky-ocean. Krishna at the request of one of his wives Satyabhama carried off this tree from Indra’s garden (Nandana). A conflict ensued between Indra and Krishna in which the latter was victorious. The tree was brought to the city Dvaraka and was planted in the Satyabhama’ s pleasure-garden.</p><p>N. B.-This figure is possible only under a pun.</p>'
            }
          ]
        },
        {
          sloka:
            '<h3>Third kind of Disconnection </h3> अन्यत्कर्तुंप्रवृत्तस्यतद्विरुद्धकृतिस्तथा॥',
          sloka_explanation: {
            sans:
              'अन्यत्कार्यं कर्तुं प्रवृत्तस्य- तद्विरुद्धकृतिः कार्यविरुद्धकार्यकरणं च सा असंगतिः ॥ ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>अन्यम् - </td><td>Another (thing)</td></tr><tr><td>कर्तुं - </td><td>To do</td></tr><tr><td>प्रवृत्तस्य - </td><td>Of a person engaged</td></tr><tr><td>तत् विरुड्वकृतिः - </td><td>The accomplishment quite contrary to the above</td></tr><tr><td>तथा - </td><td>So i.e., the figure Disconnection</td></tr></table><p>An incongruous effect of an object obtained by an agent engaged to do a quite different thing is termed a third kind of Disconnection.</p>'
          },
          examples: [
            {
              text: 'गोत्रोद्धारप्रवृत्तोऽपिगोत्रोद्भेदंपुराऽकरोः॥',
              explanation_sans:
                'गोत्रोद्धार प्रवृत्तोपि गोत्राया ऊर्व्याः उद्धाराय उद्धरणाय प्रवृत्तोपित्वं- गोत्रोद्भेदं गोत्राणां पर्वतानामुद्भेदंखुर घट्टनैर्दळनं भुवोदळनं च- पुरावराहावतारे अकरोकृतवानसीत्यर्थः – इदमपितदानी मेव कृष्नमुद्दिश्य शक्रन्यसोपालंभ वचनम्- अत्रापि श्लेषमूलाभेदाध्यवसायेनैव भूम्युद्धरण प्रवृत्तोपि  तद्दळनमेवकृतवानिति- अन्यद्भूम्युद्धरणं कर्तुं प्रवृत्तस्य कृष्णस्य तद्विरुद्धकृतिः भूम्युद्धरणरूपकार्य विरुद्धतद्धनरूपकार्यकरणं वर्णितमितिलक्षणसंगतिः ॥',
              explanation_eng:
                '<h3>Word meanings</h3><table><tr><td>(विष्णो) - </td><td>(O Lord Vishnu)</td></tr><tr><td>गोत्रोद्वारप्रवृत्तः अपि - </td><td>Though engaged in raising the earth</td></tr><tr><td>गोत्रोद्भेदम् - </td><td>The splitting of the earth</td></tr><tr><td>पुरा - </td><td>Formerly</td></tr><tr><td>अकरोः - </td><td>Thou didst.</td></tr></table><p>O Lord Vishnu; formerly though thou wert engaged in the raising of the earth, thou didst (the opposite, i.e.) the splitting of the earth (by the foot-prints of the Varaha).</p><p>This refers to the third incarnation of Vishnu in the form of a boar in order to raise the earth which was immersed in water. After raising the earth he walked on the earth and the foot prints made by him are referred to here.</p>'
            }
          ]
        }
      ]
    },
    {
      title_sans: 'विषमम्',
      title_eng: 'विषमम्- Incongruity',
      id: 37,
      slokas: [
        {
          sloka: 'विषमंवर्ण्यतेयत्रघटनाऽननुरूपयोः।',
          sloka_explanation: {
            sans:
              'यत्राननुरूपयोर्विसदृशयोर्घटना संबंधोवर्ण्यते तद्विषममित्यर्थः ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>यत्र - </td><td>where</td></tr><tr><td>अननुरूपयोः - </td><td>Of two incongruous (things)</td></tr><tr><td>घटना - </td><td>Combination</td></tr><tr><td>वर्ण्यते - </td><td>Is described</td></tr><tr><td>विषमम् - </td><td>Incongruity</td></tr></table><h3>Definition</h3><p>Vishama is a figure where a combination of two incongruous things is described.</p>'
          },
          examples: [
            {
              text: 'क्वेयंशिरीषमृद्वङ्गीक्वतादृङ्मदनज्वरः॥',
              explanation: {
                sans:
                  'शिरीषमृद्वंगीशिरीष कुसुममृदुलगात्री इयं क्व- कुत्र- तादृक्तथाविधः मदनज्वरश्चक्व अतिमृदुलत्वेन अतिदुस्सहत्वेन चाननुरूपत्वादनयोर्घटनात्तादृक्संतापं कथं सोढुं शक्नुयोः । क्वेयं शिरीषमृद्वंगीक्वतादृङ्मदनज्वरः ॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>शिरीषमृद्वङ्गी - </td><td>Having the body soft as the Sirisha flower</td></tr><tr><td>इयम् - </td><td>This (lady)</td></tr><tr><td>क्व - </td><td>Where</td></tr><tr><td>तादृक् - </td><td>That</td></tr><tr><td>मदनज्वरः - </td><td>Love-fever or torments of God of love</td></tr><tr><td>क्व - </td><td>Where</td></tr></table><p>Where this lady with body as soft as the Sirisha flower and where these torments or fever of the God of love.</p><p>Here, we see the incongruity or incompatible relation of two things which are opposed to each other, i.e., the nature of the God of love is quite opposed to the nature of the lady, under description, whose body is soft as the Sirisha flower.</p>'
              }
            }
          ]
        }
      ],
      types: 2,
      type: [
        {
          sloka:
            '<h3>Second kind of Incongruity.</h3>विरूपकार्यस्योत्पत्तिरपरंविषमंमतम्।',
          sloka_explanation: {
            sans:
              'विरूपकार्यस्यकारणविरुद्धकार्य्स्य उत्पत्तिर्जननमप्यपरमन्यद्विषमं- मतमिष्टं',
            eng:
              '<h3>Word meanings</h3><table><tr><td>विरूपकार्यस्य - </td><td>Of the opposite effect</td></tr><tr><td>उत्पत्तिः - </td><td>Production</td></tr><tr><td>अपरम् - </td><td>Another kind</td></tr><tr><td>विषमम् - </td><td>Incongruity</td></tr><tr><td>मतम् - </td><td>Is considered</td></tr></table><h3>Definition</h3><p>The production of an effect from an incongruous cause is considered a second kind of Incongruity. Or in other words, when the quality of the effect is opposed to that of its cause, it is Incongruity.</p>'
          },
          examples: [
            {
              text: 'कीर्त्तिंप्रसूतेधवलांश्यामातवकृपाणिका॥',
              explanation_sans:
                'हे राजन् तवश्यामानीलवर्णाकृपाणिखड्गः दवळां शुभ्रांकीर्तिं प्रसूते- भवत्खड्गमहिम्ना शुभ्राकीर्तिर्जातेत्यर्थः – कारणं यद्गुणकंकार्यं तद्गुणकमेवेतिलोकस्थितिः – अत्रश्यामखड्गरूपकारणे नतद्विरुद्ध शुभ्रकीर्तिजननवर्णनाद्द्वितीयं विषमम्॥',
              explanation_eng:
                '<h3>Word meanings</h3><table><tr><td>तव - </td><td>Thy</td></tr><tr><td>श्यामा - </td><td>Dark</td></tr><tr><td>कृपाणिका - </td><td>Sword</td></tr><tr><td>धवलाम् - </td><td>White</td></tr><tr><td>कीर्त्तिं - </td><td>Fame</td></tr><tr><td>प्रसूते - </td><td>Produces</td></tr></table><p>O king ! Thy dark sword produces a white fame. </p><p>Here, We have White fame arising from the dark sword which has been figured here as the cause in contravention to the general convention-that the quality of an effect must conform to its cause.</p>'
            }
          ]
        },
        {
          sloka:
            '<h3>Third kind of Incongruity.</h3>अनिष्टस्याप्यवाप्तिश्चतदिष्टार्थसमुद्यमात्।',
          sloka_explanation: {
            sans:
              'इष्टार्थ समुद्यमात् अभिलषितार्धोद्योगादनिष्टस्यानर्थस्य अवाप्तिश्च प्राप्तिरपितद्द्विषमित्यर्थः – यत्रेष्टलाभाशयाप्रवृत्तौ सत्यांन केवलमिष्टानवाप्तिः- प्रत्युतानर्थावाप्तिरपियस्मात्- तदव्यपरं विषममितिनिष्कर्षः ',
            eng:
              '<h3>Word meanings</h3><table><tr><td> इष्टार्थसमुद्यमात् - </td><td>From an endeavor made for a desired object</td></tr><tr><td>अनिष्टस्य अपि - </td><td>Of an undesired object</td></tr><tr><td>अवाप्तिः - </td><td>Attainment</td></tr><tr><td>तत् - </td><td>It i.e., Incongruity</td></tr></table><h3>Definition</h3><p>The attainment of an undesired object from an Endeavour made for a desired one is termed the third kind of Incongruity. Or in other words, when a desired object for which an endeavor is made is not obtained but, on the contrary, an unfavorable result is obtained, it is the third kind of Incongruity.</p>'
          },
          examples: [
            {
              text: 'भक्ष्याशयाहिमञ्जूषांदृष्ट्वाखुस्तेनभक्षितः॥',
              explanation_sans:
                'आखुर्मूषिकः भक्ष्याशयाभक्षणार्ह द्रव्यलाभकृष्णया- अहिमंजूषां सर्पपेटिकां दष्ट्वादंतैश्छित्वा- तेन सर्पेणभक्षितः- भक्ष्यभ्रमेण सर्पपेटिकां दष्ट्वातद्विवरेण मुखं प्रसार्यतत्रस्थसर्पेण स्वयमेवदष्टस्सन् मृत्योभूदित्यर्धः- अत्र भक्ष्यार्धं प्रवृत्तेन केवलं भक्ष्यानवाप्तिः – प्रत्युतस्वमरणरूपानर्थावाप्तिरपि जातेतितृतीयं विषमम्॥',
              explanation_eng:
                '<h3>Word meanings</h3><table><tr><td>आखुः - </td><td>Rat</td></tr><tr><td>भक्ष्याशया - </td><td>With the hope of getting some eatables</td></tr><tr><td>अहिमंजूषाम् - </td><td>The snake basket</td></tr><tr><td>दृष्ट्वा - </td><td>Having seen</td></tr><tr><td>(प्रविष्टः) - </td><td>(entered)</td></tr><tr><td>तेन - </td><td>By it</td></tr><tr><td>भक्षितः - </td><td>Was devoured</td></tr></table><p>The rat seeing the snake-basket (entered into the same) in the hope of obtaining some eatables and was itself devoured by it (snake).</p><p>Here, the object of the rat to obtain some eatables for it by boring the basket was not attained and it became a pray to the hungry snake lying in the basket.</p>'
            }
          ]
        }
      ]
    },
    {
      title_sans: 'समम्',
      title_eng: 'समम्- The Equal',
      id: 38,
      slokas: [
        {
          sloka: 'समंस्याद्वर्णनंयत्रद्वयोरप्यनुरूपयोः ।',
          sloka_explanation: {
            sans:
              'यत्रानुरूपयोर्वर्णनं क्रियतेतत्र समालंकारः- यत्र अनुपयोर्द्वयोः घटनं वर्ण्यते तत्र सममितिनिष्कर्षः ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>यत्र - </td><td>Where</td></tr><tr><td>अनुरूपयोः ड्वयोः - </td><td>Of two agreeable objects</td></tr><tr><td>वर्णनम् - </td><td>Description</td></tr><tr><td>समम् - </td><td>The Equal</td></tr><tr><td>स्यात् - </td><td>Is</td></tr></table><h3>Definition</h3><p>सम is the description of the combination of two agreeable objects.</p>'
          },
          examples: [
            {
              text: 'स्वानुरूपंकृतंसद्महारेणकुचमण्डलम् ॥',
              explanation: {
                sans:
                  'हारेणमुक्ताहारेणकुचंडलं स्वानुरूपं स्वसदृशं सद्मथानं कृतं- अस्यांगस्य तदाश्रयण योग्यत्वादितिभावः- अत्रमुक्ताहारस्य कुचमंडलमनुरूपं स्थानमित्यनुरूपयोर्घटनं वर्णितमतस्समम् ॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>हारेण - </td><td>By the pearl-necklace</td></tr><tr><td>कुचमण्डलम् - </td><td>The circular bosoms</td></tr><tr><td>स्वानुरूपम् - </td><td>Worthy of itself</td></tr><tr><td>सद्म - </td><td>Place</td></tr><tr><td>कृतम् - </td><td>selected</td></tr></table><p>The circular bosoms were selected by the pearl-necklace as the (fit) place worthy of itself.</p>'
              }
            }
          ]
        }
      ],
      types: 2,
      type: [
        {
          sloka:
            '<h3>Second kind of समम्</h3>सारूप्यमपिकार्यस्यकारणेनसमंविदुः ।',
          sloka_explanation: {
            sans: 'कार्यस्य कारणेन सारूप्यं आनुरूप्यवर्ननमपि समं विदुः ॥ ',
            eng:
              '<h3>Word meanings</h3><table><tr><td> कार्य्यस्य - </td><td>Of the effect</td></tr><tr><td>कारणेन - </td><td>By the cause</td></tr><tr><td>सारूप्यम् अपि - </td><td>Sameness also</td></tr><tr><td>समम् - </td><td>Equal</td></tr><tr><td>विदुः - </td><td>Know</td></tr></table><h3>Definition</h3><p>The sameness of an effect with its cause is termed a second kind of Sama.</p>'
          },
          examples: [
            {
              text: 'नीचप्रवणतालक्ष्मि !जलजायास्तवोचिता ॥ ',
              explanation_sans:
                'प्रायशः नीचानुवर्तनशीलां लक्ष्मिमुद्दिश्य इदं सोत्प्रास वचनं- हे लक्ष्मीः जलजायास्समुद्रोत्पन्नायास्तवनी च प्रवणता निकृष्टानुसरणशीलत्वं निम्नदेधाभिमुख्यं च- उचिता आर्हा जलेनीच प्रावण्यस्य स्वाभाविकत्वात्तदुत्पन्ना यास्तवापिनी च प्रवणता कथं नस्यात्- अतः कारणगुण क्रमागत नीचप्रावण्यविषयेत्वं नोपालभ्येतिभावः- अत्रजलस्यनीच प्रावण्यं निम्नदेशाभिमुख्यं लक्ष्म्यास्तुनिस्तवोचिता॥ ',
              explanation_eng:
                '<h3>Word meanings</h3><table><tr><td>लक्ष्मि ! - </td><td>O Goddess of riches!</td></tr><tr><td>जलजायाः - </td><td>born of water</td></tr><tr><td>तव - </td><td>thy</td></tr><tr><td>नीचप्रवणता - </td><td>Resorting to the low people</td></tr><tr><td>उचिता - </td><td>Is worthy</td></tr></table><p>O Goddess of riches ! Thy character of resorting to the low (people) is worthy of thyself born of water.</p><p>The Goddess Lakshmi was produced at the churning of the Ocean. Here, the character of Lakshmi is said to be the same as that of its cause, the Water which naturally flows in a low direction.</p>'
            }
          ]
        },
        {
          sloka:
            '<h3>Third kind of  समम् ।</h3>विनानिष्टं च तत्सिद्धिर्यमर्थंकर्तुमुद्यतः ।',
          sloka_explanation: {
            sans:
              'यदर्थं यत्कार्यसिद्ध्यर्थं कर्तुरुद्यमः प्रयत्नः अनिष्टं विनातस्य सिद्धिर्यदितदपि सममित्यर्थः – यत्कार्यसिद्ध्यर्थं कर्ता प्रवर्तते- तत्कार्यमनिष्टं विनासीध्यति चेत्तदपि सममितिनिष्कर्षः ',
            eng:
              '<h3>Word meanings</h3><table><tr><td> यम् अर्थम् - </td><td>Which thing</td></tr><tr><td>कर्तुम् - </td><td>To do</td></tr><tr><td>उद्यमः - </td><td>Endeavour</td></tr><tr><td>अनिष्टम् विना - </td><td>Without an obstacle</td></tr><tr><td>तत्सिड्विः - </td><td>The accomplishment of that</td></tr><tr><td>समम् - </td><td>The equal</td></tr></table><h3>Definition</h3><p>The accomplishment, without any obstacle, of an object for which an effort has been made, is termed a third kind of Sama.</p>'
          },
          examples: [
            {
              text: 'युक्तोवारणलाभोऽयंस्यान्नतेवारणार्थिनः ॥',
              explanation_sans:
                'मह्यं वारणं देहीति चिरात्प्रभृति राजानुवर्तनशीलं द्वारिदार्स्थैः कृतनिवारणं स्यालकंदृष्ट्वा राज्ञस्सोपहान वचनमिदं- हे स्यालवारणार्धिनः गजार्थिनः निवारणार्धिनश्चते तवायं वारणालाभः युक्तः चिरेण भवत्प्रार्थितस्य वारणस्य अनायासेनैवलब्धस्यै वेप्सितवारणरूपकत्वा दनिष्टं विनातल्लाभाच्च समम् ॥',
              explanation_eng:
                '<h3>Word meanings</h3><table><tr><td>वारणार्थिनः - </td><td>Seeking for an elephant</td></tr><tr><td>ते - </td><td>Thy</td></tr><tr><td>अयम् - </td><td>This </td></tr><tr><td>वारणालाभः - </td><td>Attainment of वारणा (impediment)</td></tr><tr><td>युक्तः स्यात् न - </td><td>Is it not worthy</td></tr></table><p>Friend! Is not this acquisition of (वारणा) impediment worthy of thee that sought for an elephant (वारणा).</p><p>This is possible only under a pun.</p><p>The speaker here is a person that went to his king for an elephant. He was obstructed by the door- keeper of the king’s palace and this was addressed in jest by his (speaker’s) brother-in-law who accompanied him saying that this वारणा (impediment) is equal to hat वारणा (elephant) sought for.</p>'
            }
          ]
        }
      ]
    },
    {
      title_sans: 'विचित्रम् ',
      title_eng: 'विचित्रम् - Strange',
      id: 39,
      slokas: [
        {
          sloka: 'विचित्रंतत्प्रयत्नश्चेद्विपरीतःफलेच्छया ।',
          sloka_explanation: {
            sans:
              'विपरीत फलेफ्सया विपरीतफलं प्राप्तुमिच्छया प्रयत्नश्चेत्प्रवृत्तिर्यदिति प्रवर्तनं चित्रमित्यर्थः – यद्वातत्प्रयत्नः तद्विपरीतफलं प्राप्तुमिति यत्रवर्ण्यते तत्र चित्रमितिनिष्कर्षः ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>चेत् विपरीतफलेच्छया - </td><td>With a desire to obtain its opposite effect</td></tr><tr><td>प्रयत्नः - </td><td>An Endeavour</td></tr><tr><td>तत् - </td><td>That</td></tr><tr><td>विचित्रम् - </td><td>Strange</td></tr></table><h3>Definition</h3><p>If an endeavour is made by a person desiring to attain the exact opposite effect, it is called the Strange.</p>'
          },
          examples: [
            {
              text: 'नमन्तिसन्तस्त्रैलोक्यादपिलब्धुंसमुन्नतिम् ॥',
              explanation: {
                sans:
                  'नंतस्सत्पुरुषाः- त्रैलोक्यात् त्रैलोक्याधिपत्यादपि समुन्नति मौन्नत्यं लब्धुं प्राप्तुं- नमंति प्रणमं तिनम्रीभवंति च- अत्र नमनं प्रयत्नविषयः तस्यतुफलमथोदेश संयोगः त्रैलोक्याधिकौन्नत्यंतु तद्विपरीतफलं तत्प्राप्तुमिच्छयान मनमिति वर्णितत्वाद्भवतिचित्रम् । औद्धत्यं विहाय श्रीरामचंद्र प्रवणामेत्युन्नत पदप्राप्तिर्भवेदन्य धाधोगतिरितिविवेकेन सत्पुरुषान्तं प्रणमंतीति तात्पर्यम् ',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>संतः - </td><td>Good people</td></tr><tr><td>त्रिलोक्यादपि - </td><td>Higher than the tripled world</td></tr><tr><td>समुन्नतिम् - </td><td>Exalted position</td></tr><tr><td>लब्धुम् - </td><td>To attain</td></tr><tr><td>नमन्ति - </td><td>Bow down</td></tr></table><p>The good people bow down for the purpose of attaining an exalted position higher than’ the triple World.</p><p>Here, the act is bowing down and the desired effect is elevation over the triple world.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'अधिकम् ',
      title_eng: 'अधिकम् - Exceeding',
      id: 40,
      slokas: [
        {
          sloka: 'अधिकंपृथुलाधारादाधेयाधिक्यवर्णनम् ।',
          sloka_explanation: {
            sans:
              'पृथुलाधारादति विस्तृतत्वेन प्रसिद्धाधारादाधेयस्य तदाश्रितस्याधिक्य वर्णनमिति यत्तदधिकमित्यर्थः ॥ ',
            eng:
              '<h3>Word meanings</h3><table><tr><td> पृथुलाधारात् - </td><td>Than the more spacious containment</td></tr><tr><td>आधेयाधिक्यवर्णनम् - </td><td>The description of the contained as greater</td></tr><tr><td>अधिकम् - </td><td>The exceeding</td></tr><tr><td>यत्र जले - </td><td>In which water</td></tr><tr><td>ब्रह्मांडानि - </td><td>The mundane worlds</td></tr><tr><td>तत्र - </td><td>In that</td></tr><tr><td>ते - </td><td>Thy</td></tr><tr><td>गुणाः - </td><td>Merits</td></tr><tr><td>न मांति - </td><td>Do not contain</td></tr></table><h3>Definition</h3><p>When the object contained is described as vaster than the containant itself (which is really more spacious), it is termed the Exceeding.</p>'
          },
          examples: [
            {
              text: 'ब्रह्माण्डानिजलेयत्रतत्रमान्ति न तेगुणाः ॥ ',
              explanation: {
                sans:
                  'हे रामयत्र जले ब्रह्मांडा निवर्तंते बुद्बुदप्रायाणि तिष्ठंति तत्र महाजलेतवगुणा अनंतकळ्याणगुणाः नमांतिन निलीयंते तत्परिच्छिन्नान भवंतीत्यर्धः – तादृश जलप्यापर्याप्तत्वात्कियंत एवगुणास्तत्र नमांतिकिं पुनस्सर्वे गुणा इत्यर्धः – अत्र पृथुलत्वेन प्रसिद्ध जलरूपाधारादाधेयानां गुणानामाधिक्यवर्णनात्प्रधमाधिकभेदः ॥',
                eng:
                  '<p>Lord ! The waters which contain these mundane worlds could not contain (within themselves all) thy good qualities.</p>'
              }
            }
          ]
        }
      ],
      types: 1,
      type: [
        {
          sloka:
            '<h3>Second kind of Exceeding.</h3>पृथ्वाधेयाद्यदाधाराधिक्यंतदपितन्मतम् ।',
          sloka_explanation: {
            sans:
              'अति पृथुलत्वेन प्रसिद्धादाधेयादाधारस्य तदाश्रयस्याधिक्य वर्णनमितिय दधिकं मतम् ॥ ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>पृथ्वाधेयात् - </td><td>Than the vast contained</td></tr><tr><td>यत् - </td><td>Which</td></tr><tr><td>आधाराधिक्यम् - </td><td>The description of the containant as exceeding</td></tr><tr><td>तदपि - </td><td>It too</td></tr><tr><td> तत् - </td><td>That i.e., Exceeding</td></tr><tr><td>मतम् - </td><td>Is regarded</td></tr></table><h3>Definition</h3><p>When the containant itself is described as vaster than the vast contained, then we have a second kind of Exceeding.</p>'
          },
          examples: [
            {
              text: 'कियद्वाग्ब्रह्मयत्रैतेविश्राम्यन्तिगुणास्तव ॥ ',
              explanation_sans:
                'हे सीताधीश वाग्ब्रह्म कियत्परिद्वाब्रह्म यत्रैते विश्राम्यंतिगुणा स्तव ',
              explanation_eng:
                '<h3>Word meanings</h3><table><tr><td>यत्र - </td><td>Where</td></tr><tr><td>एते - </td><td>These</td></tr><tr><td>तव - </td><td>Thy</td></tr><tr><td>गुणाः - </td><td>Good qualities</td></tr><tr><td> विश्राम्यंति - </td><td>Come to an end</td></tr><tr><td>वाग्ब्रह्म - </td><td>The speech Brahman= Vedas</td></tr><tr><td>कियत् - </td><td>How great</td></tr></table><p>How great is the speech Brahman =Vedas, where all these thy good qualities come to an end, i.e., become completely described.</p>'
            }
          ]
        }
      ]
    },
    {
      title_sans: 'अल्पम् ',
      title_eng: 'अल्पम् - Smallness',
      id: 41,
      slokas: [
        {
          sloka: 'अल्पंतुसूक्ष्मादाधेयाद्यदाधारस्यसूक्ष्मता ।',
          sloka_explanation: {
            sans:
              'सूक्ष्मादल्पत्वेन प्रसिद्धादाधेयादाधारस्य सूक्ष्मता वर्णनमिति यत्तदल्पं ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>सूक्ष्मात् - </td><td>Small</td></tr><tr><td>आधेयात् - </td><td>Than the object contained</td></tr><tr><td>यत् - </td><td>Which</td></tr><tr><td>आधारस्य - </td><td>Of the containant</td></tr><tr><td>सूक्ष्मता - </td><td>Smallness</td></tr><tr><td>अल्पम् - </td><td>Smallness</td></tr></table><h3>Def. When the containant is described as smaller than the object contained which is really very small, it is called Smallness.</p>'
          },
          examples: [
            {
              text: 'मणिमालोर्मिकातेऽद्यकरेजपवटीयते ॥',
              explanation: {
                sans:
                  'विरहिणी प्रतिसखी वचनमिदं- हे सखितेमणीमालोर्मिकामणि मायंगुळीयकम्- अद्यास्मिन्विरह कालेकरेभवत्पाणौ जपपटायते जपमाले वाचरति- पूर्वं रत्नमालोर्मिकांगुळु परित्छेन्नत्वात्सूक्ष्मा इदानींतु करेणपरिच्छिन्ना तत्रापि जपमालेयमितिविज्ञेयम् ॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>अद्य - </td><td>To-day</td></tr><tr><td>ते - </td><td>Thy</td></tr><tr><td>करे - </td><td>In the hand</td></tr><tr><td>मणिमालोर्मिका - </td><td>Ring inlaid with precious stones</td></tr><tr><td>जपमालायते - </td><td>Becomes a rosary</td></tr></table><p>Lady I Thy ring inlaid with precious stones has become to-day a rosary in thy hand.</p><p>Here, the thinness of the hand or the finger which contained the ring is meant. The lady under description was suffering from the pangs of separation from her lover on a certain day and so her hand or finger, the containant, became so thin that the ring, the object contained, became greater than the hand, the containant, and served as a rosary.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'अन्योन्यम् ',
      title_eng: 'अन्योन्यम् - The Reciprocal',
      id: 42,
      slokas: [
        {
          sloka: 'अन्योन्यंनामयत्रस्यादुपकारःपरस्परम् ।',
          sloka_explanation: {
            sans: 'यत्र परस्वरमुपकारोवर्ण्यते तत्रान्योन्यं नामालंकारः ',
            eng:
              '<h3>Word meanings</h3><table><tr><td> यत्र - </td><td>where</td></tr><tr><td>परस्परम् - </td><td>Mutual</td></tr><tr><td>उपकारः - </td><td>Benefit</td></tr><tr><td>स्यात् - </td><td>Is</td></tr><tr><td>(तत्र) - </td><td>There</td></tr><tr><td>अन्योन्यम् नाम - </td><td>The figure called Reciprocal</td></tr></table><h3>Definition</h3><p>When two things benefit each other (by doing the same act causing each other’s beauty), it is the Reciprocal.</p>'
          },
          examples: [
            {
              text: 'त्रियामाशशिनाभातिशशीभातित्रियामया ॥',
              explanation: {
                sans:
                  'शशिना चंद्रेण प्रयामारात्रिः भाति- त्रियामाया शशीभाति- अत्र शशिनारात्रिरुपकृतातयाशशी- एवम् परस्परमुपकार वर्णनादन्योन्यालंकारः ॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>त्रियामा - </td><td>the night</td></tr><tr><td>शशिना - </td><td>By the moon</td></tr><tr><td>भाति - </td><td>Looks splendid</td></tr><tr><td> शशी - </td><td>The moon</td></tr><tr><td>     त्रियामया - </td><td>By the night</td></tr><tr><td>भाति - </td><td>Looks splendid</td></tr></table><p>The night is splendid by (the presence of ) the moon and the moon looks splendid on account of the night.</p><p>Here, the night and the moon beautify each other. The night is the cause of the moon looking splendid and the moon is the cause of the night looking splendid.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'विशेषः ',
      title_eng: 'विशेषः - The Extraordinary',
      id: 43,
      slokas: [
        {
          sloka: 'विशेषःख्यातमाधारंविनाप्याधेयवर्णनम् ।',
          sloka_explanation: {
            sans:
              'ख्यातं प्रसिद्धमाधारं विनाप्यादेयवर्णनं दाधेयस्य यत्रकुत्र चित् स्थितिवर्णन स विशेष उच्यत इत्यर्धः ॥ ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>ख्यातम् - </td><td>Well-known</td></tr><tr><td>आधारम् - </td><td>The containant</td></tr><tr><td>विनापि - </td><td>Even without</td></tr><tr><td>आधेयवर्णनम् - </td><td>The description of the object contained</td></tr><tr><td>विशेषः - </td><td>Extraordinary</td></tr></table><h3>Definition</h3><p>The description of something dependent, i,e., the object contained as existing without its well-known supporter, i.e., the containant, or in other words, the representation of the independent existence of the object contained without its supporter on which it depends, is termed the Extraordinary.</p>'
          },
          examples: [
            {
              text: 'गतेऽपिसूर्येदीपस्थास्तमश्छिन्दन्तितत्कराः ॥',
              explanation: {
                sans:
                  'सूर्येगते अस्तंगते सत्यपिदीपस्थाः दीपाश्रितास्संतः तत्करास्सूर्यकिरणास्तमस्तिमिरं छिंदंतिनाशयंति- अत्र प्रसिद्धस्य सूर्यरूपाधारस्य अभावेपितत्किरणानां दीपसमाश्रितत्वोक्त्या विशेष प्रभेदः॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>सूर्ये - </td><td>The sun</td></tr><tr><td>गते अपि  - </td><td>Though set</td></tr><tr><td>दीपस्थाः - </td><td>Abiding in the lamp</td></tr><tr><td>तत्कराः - </td><td>Its (sun’s) rays</td></tr><tr><td>तमः - </td><td>The darkness</td></tr><tr><td>छिंदंति - </td><td>Expel</td></tr></table><p>Though the sun has set in, yet its rays abiding in the lamp expel the darkness.</p><p>The statement that lamps expel the darkness only by the rays of the sun which has gone to the other side of the earth is Extraordinary.</p><p>N.B.-The Vedas declare that the lustre of the sun enters the ﬁre in the evening. Compare Raghu-vansa, IV. 1.</p><p>स राज्यं गुरूणादत्तं प्रतिपद्याधिकं बभौ ।<br>दिनान्ते निहितं तेजः सवित्रेव हुताशनः ॥</p><p>He (Raghu) obtained the kingdom given by (his) father and shone the more just as the ﬁre that got the lustre deposited with (it) by the sun at the close of the day.</p>'
              }
            }
          ]
        }
      ],
      types: 2,
      type: [
        {
          sloka:
            '<h3>Second kind of the Extraordinary.</h3>विशेषःसोऽपियद्येकंवस्त्वनेकत्रवर्ण्यते ।',
          sloka_explanation: {
            sans:
              'एकमेव वस्तु अनेकत्रवर्ण्यते यदि- सोपितद्वर्णमपि विशेष प्रभेद एवेत्यर्थः ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>यदि - </td><td>if</td></tr><tr><td>एकं - </td><td>One</td></tr><tr><td>वस्तु - </td><td>Object</td></tr><tr><td>अनेकत्र - </td><td>In many places</td></tr><tr><td>वर्ण्यते - </td><td>Is described</td></tr><tr><td>सोऽपि - </td><td>That too</td></tr><tr><td>विशेषः - </td><td>The Extraordinary</td></tr></table><h3>Definition</h3><p>If one and the same object is described as existing in many places, it is also termed the Extraordinary.</p>'
          },
          examples: [
            {
              text: 'अन्तर्बहिःपुरःपश्चात्सर्वदिक्ष्वपिसैवमे ॥',
              explanation_sans:
                'कस्यचिद्विरहिणो वचनमिदं- मेमम अंतरभ्यंतरे- बहिर्बाह्य देशेपुरः पूर्वभागेपश्चात्पृष्ठ देशेतधासर्वदिक्ष्यपि समस्ताशान्वपिनैव प्रियैव दृश्यते नाव्यदित्यर्थ अत्रैकस्या एवकारितायाः सकलदेष्वपिस्थितिवर्णनाद्विशेष भेदः ॥',
              explanation_eng:
                '<h3>Word meanings</h3><table><tr><td> अंतः - </td><td>In</td></tr><tr><td>बहिः - </td><td>Out</td></tr><tr><td> पुरः - </td><td>In the front</td></tr><tr><td>पश्चात् - </td><td>Behind</td></tr><tr><td>मे सर्वदिक्षु अपि - </td><td>In all the directions</td></tr><tr><td> सैव - </td><td>Only she</td></tr></table><p>In my mind, in the outside, in the front, behind my back, in all the directions too (wherever I turn my face), only she (my beloved) appears (to me).</p><p>Here, one single object is said to exist uniformly in many places.</p><p>N.B.- A1though these as well as certain other representations are impossible and opposed to ordinary experience, yet they are said to have been represented as possible only metaphorically.</p>'
            }
          ]
        },
        {
          sloka:
            '<h3>Third kind of the Extraordinary.</h3>किंचिदारम्भतोऽशक्यवस्त्वन्तरकृतिश्चसः ।',
          sloka_explanation: {
            sans:
              'किंचित् यत्किंचित्क्रियामारभतः उपक्रममाणस्य अशक्यवस्त्वंतर कृतिरसाध्य कार्यांतरकरणं च विशेषः- यत्र यत्किंचित्कार्यसिद्ध्यर्थं प्रवृत्तस्य दैवादसाध्यवस्त्वंतरकरणं च य लब्धं कल्पवृक्ष निरीक्षणम् ॥',
            eng:
              '<h3>Word meanings</h3><table><tr><td>किंचित् - </td><td>A certain (act)</td></tr><tr><td>आरंभतः - </td><td>Commencing to do</td></tr><tr><td>अशक्यस्त्वंतरकृतिश्च - </td><td>Even the performance of another impossible act</td></tr><tr><td>सः - </td><td>The Extraordinary</td></tr></table><h3>Definition</h3><p>When some one who has commenced to do an act chances to do another impossible act (unconnected with the former), it is the third kind of the Extraordinary.</p>'
          },
          examples: [
            {
              text: 'त्वांपश्यतामयालब्धंकल्पवृक्षनिरीक्षणम् ॥',
              explanation_sans:
                'हे राजन् त्वां पश्यतामयाकल्पवृक्ष निरीक्षणमपि- लब्धं प्राप्तं- त्वद्दर्शनार्थं मयिप्रवृत्ते सति अतिवितरणशालिभूपतावेव कल्पवृक्षत्वाध्यवसायात्तिद्धर्शने नैव अर्थाद्दुर्लभ कल्पवृक्षदर्शनमपि निष्पन्नमित्यर्धः – अत्र राजदर्शनोद्देशेन प्रवृत्तस्य दैनादसाध्यकल्पतरुदर्शन प्राप्ति वर्णनाद्विशेषभेदः- अतस्सोयं त्रिविध इति विज्ञेयः ॥',
              explanation_eng:
                '<h3>Word meaning</h3><table><tr><td>त्वां - </td><td>Thee</td></tr><tr><td>पश्यता - </td><td>Seeing</td></tr><tr><td>मया - </td><td>By me</td></tr><tr><td>कल्पद्रुमनिरीक्षणम् - </td><td>The sight of the Kalpa tree</td></tr><tr><td>लब्धम् - </td><td>Was got</td></tr></table><p>By seeing you, (O king !) I got the sight of the Wish-yielding tree of the paradise.</p><p>Here, the speaker who ﬁrst commenced to do an act, i.e., seeing the king, the liberal donor, says that he has seen the kalpa tree (instead of seeing the king himself who has now been identiﬁed by the speaker with the kalpa tree) of the paradise very difﬁcult to obtain.</p>'
            }
          ]
        }
      ]
    },
    {
      title_sans: 'व्याघातः',
      title_eng: 'व्याघातः - Frustration',
      id: 44,
      slokas: [
        {
          sloka: 'स्याद्व्याधातोऽन्यथाकारितथाकारिक्रियेतचेत् ।',
          sloka_explanation: {
            sans:
              'तथाकारि तथाभूतकार्यसाधनं अतधाकारि अभूतकार्यसाधनं क्रियेत चेद्व्याघातस्स्यात्- यद्वायद्यत्साधनतया केवचिदुपात्तं तदेवान्येन तत्प्रतिभटेन तद्विरुद्धसाधनं क्रियते चेत्सोपि व्याघात इति निष्कर्षः – आद्यमुदाहरति॥ ',
            eng:
              '<h3>Word meanings</h3><table><tr><td></td>चेत् - <td></td>if</td></tr><tr><td>तथाकारि - </td><td>The thing which produces its natural effect</td></tr><tr><td>अन्यथाकारि - </td><td>As the one which produces another effect</td></tr><tr><td>क्रियेत - </td><td>Is represented</td></tr><tr><td>व्याघातः स्यात् - </td><td>It is Frustration</td></tr></table><h3>Definition</h3><p>When a thing which produces the established result, i.e., the effect natural to its cause is represented to have produced the exact opposite result, it is called Frustration.</p>'
          },
          examples: [
            {
              text: 'यैर्जगत्प्रीयतेहन्तितैरेवकुसुमायुधः ॥',
              explanation: {
                sans:
                  'यैः कुसुमैः जगल्लोकः प्रीयते तृप्तिमत्क्रियते- तैरेजगदानंददकरै रेवकुसुमैः- कुसुमायुधह् जगत् हंतिबाधते- अत्रजगत्प्रीति साधनान्येव कुसुमानिमन्मथेन तद्विरुद्ध जगत्पीडासाधना निकृतानीति प्रथमव्याघात भेदः ॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>यैः (पुष्पैः) - </td><td>By which (flowers)</td></tr><tr><td>जगत् - </td><td>The world</td></tr><tr><td>प्रीयते - </td><td>Is pleased</td></tr><tr><td>तैः एव - </td><td>By the same (flowers)</td></tr><tr><td>कुसुमायुधः - </td><td>The flower-shafted God of love</td></tr><tr><td>हंति - </td><td>Torments</td></tr></table><p>By the (same) ﬂowers by which the people of the world become pleased, Cupid (lit. ﬂower-shafted God of love) torments the world.</p><p>Here, the effect, i.e., tormenting is produced by the ﬂowers- the cause, which are well-known to produce a quite opposite one, i.e., pleasure. Hence this is called Frustration on account of the frustration of an established effect already fulﬁlled in an object.</p>'
              }
            }
          ]
        }
      ],
      types: 1,
      type: [
        {
          sloka:
            '<h3>Second kind of Frustration</h3>सौकर्येणनिबद्धापिक्रियाकार्यविरोधिनी ।',
          sloka_explanation: {
            sans:
              'कार्यस्यनियुक्त कार्यस्य विरोधिनी क्रियाकरणं- निबद्धाचेत्सोपि व्याघात इति॥ अयमर्थः- येन साधनेन यत्कार्यक्रियाकेन चिद्धृढीकृता- तेनैवसाधनेन तत्कार्यविरोधिक्रियै वसुकरसमर्धिता चेत्सोपिव्याघात एवेति॥ ',
            eng:
              '<h3>Word meanings</h3><table><tr><td></td>सौकर्येण - </td><td>With facility</td></tr><tr><td>निबड्वा - </td><td>Begun</td></tr><tr><td>क्रिया - </td><td>An act</td></tr><tr><td>कार्यविरोधिनी - </td><td>The contrary of that act</td></tr><tr><td>अपि - </td><td>(here)also</td></tr><tr><td>(व्याघातः) - </td><td>Frustration</td></tr></table><h3>Definition</h3><p>If a certain act commenced (by one) on the ground of its being facile turns out contrary, it is the second kind of Frustration.</p>'
          },
          examples: [
            {
              text: 'दयाचेद्वालइतिमय्यपरित्याज्यएवते ॥ ',
              explanation_sans:
                ' केनचिज्जैत्रयात्रोन्मुखेन राज्ञाबालत्वाद्युवराजं राज्य एवसंस्थाप्य गंतुं प्रयत्नेन कृतेसति- बालत्वादहंन परित्याज्यः- किंतु सहैवनेतव्य इति तद्वियोगा सहिष्णोर्युवराजस्य वचनमिदं- हे राजन् बाल इति तेतवमयिदया चेत्तर्हि आहंते अपरित्याज्यः किंतु सहैवनेतव्यः प्रत्युतविचार्यमणे एतावत्पर्यंत मवियुक्तस्य परित्याग एवनयुक्तः – अतोमत् स्थापनं त्वन्मनसि कथंरोचत इति वाक्य तात्पर्यं- अत्र राज्ञोबालत्व हेतुनायुवराजस्य राज्यस्थापने निष्कष्टे सतिते नैमय्य परित्व्याज्य एवर्ते ॥ ',
              explanation_eng:
                '<h3>Word meaning</h3><table><tr><td>मयि - </td><td>On me</td></tr><tr><td>बाल इति - </td><td>On account of being a boy</td></tr><tr><td>दया चेत् - </td><td>It (thou hast) compassion</td></tr><tr><td>ते - </td><td>By thee</td></tr><tr><td>अपरित्याज्य एव - </td><td>Cannot be abandoned</td></tr></table><p>O King! If thou hast compassion on me, then I, being a. boy, should not be abandoned here (now by thee going to battle-ﬁeld).</p><p>This is said by a crown-prince to this king going to war. The king seems to have asked him to stay at home for he being a boy could not bear the terrible toils of a battle ﬁeld. The crown-prince mentions the same reason to accompany the king for he being a youth must go to the war and become skilled in the arts of war, or, as one commentator says, he (the youth) could not bear the separation from the king. Thus We see the frustration of the object which the king had at ﬁrst.</p>'
            }
          ]
        }
      ]
    },
    {
      title_sans: 'कारणमाला ',
      title_eng: 'कारणमाला -  Garland of Causes',
      id: 45,
      slokas: [
        {
          sloka: 'गुम्फःकारणमालास्याद्यथाप्राक्प्रान्तकारणैः ।',
          sloka_explanation: {
            sans:
              'प्राक्प्रांतौ पूर्वोत्ततदेशौ अनतिक्रम्य यथा प्राक्प्रांतं यानिकारणानितैर्गुंभः ग्रंधनं कारणमालेत्युच्यते- उत्तरोत्तरकारणभूतैः पूर्वपूर्ववस्तुभिः पूर्वपूर्वकारणभूतैरुत्तरोत्तर वस्तुभिर्वाक्यतो यस्संदर्भस्साकारण मालेत्युच्यत इति निश्कर्षः',
            eng:
              '<h3>Word meanings</h3><table><tr><td></td>यथाप्राक्प्रांतकारणैः - </td><td>By the causes in which a preceding object is spoken of as the cause of the succeeding one</td></tr><tr><td>गुंफः - </td<td>Arrangement</td></tr><tr><td> कारणमाला - </td><td>Garland of causes</td></tr><tr><td> स्यात् - </td><td>Is called</td></tr></table><h3>Definition</h3><p>When a preceding object is spoken of as the cause of one succeeding it, which in turn is spoken of as the cause of what comes next and so on, it is termed the Garland of Causes.</p>'
          },
          examples: [
            {
              text: 'नयेनश्रीःश्रियात्यागस्त्यागेनविपुलंयशः ॥',
              explanation: {
                sans:
                  'नयेननीत्याश्रीः लक्ष्मीः बह्वतीतिविशेषः – श्रीयात्यागः वितरणं विद्यत  इतीशेषः त्यागेन विपुलं विस्तृतं यशः विद्यत इति विशेषः – अत्र नयन्यस्वोत्तर श्रीहेतुत्वाच्छ्रियस्स्वोत्तर वितरण हेतुत्वाद्वितरणस्य स्वोत्तरयशोहेतुत्वादुत्तरोत्तर कारण पूर्वपूर्वगुंभः सकारणमालाभेदः ॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>नयेन - </td><td>By morality</td></tr><tr><td>श्रीः - </td><td.Wealth</td></tr><tr><td>श्रिया - </td><td>By wealth</td></tr><tr><td> त्यागः - </td><td>Donation</td></tr><tr><td>त्यागेन - </td><td>By donation</td></tr><tr><td> विपुलं यशः - </td><td>Wide fame</td></tr></table><p>From morality wealth (is acquired); from wealth, the donation ; from donation, the wide fame.</p><p>Here, the morality mentioned ﬁrst is spoken of as the cause of the succeeding object, the Wealth, which in turn is spoken of as the cause of donation, etc.</p><p>This ﬁgure occurs also when one object, mentioned afterwards, is spoken of as the cause of what precedes and so on.</p><p>Ex . भवन्ति नरकाः पापात् पाप दारिद्रासंभवम् ।<br>दारिद्रामप्रदानेन तस्माद्दानपरो भव ॥</p><p>(People) go to hell on account of (their) sin; sin results from poverty; poverty from non giving. Therefore (friend) be always muniﬁcient.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'एकावली ',
      title_eng: 'एकावली -  The Necklace',
      id: 46,
      slokas: [
        {
          sloka: 'गृहीतमुक्तरीत्यार्थश्रेणिरेकावलिर्मता ।',
          sloka_explanation: {
            sans:
              'उत्तरोत्तरस्य पूर्वपूर्वविशेषणत्वं पूर्वपूर्वस्यवा उत्तरोत्तरविशेषणत्वं गृहीतमुक्तरीतिः तया अर्थ श्रेणिः पदार्थपङ्क्तिः- सा एकावळी मता- ततः उत्तरोत्तरस्यपूर्वपूर्वविशेषणत्वं यत्रवर्ण्यते तत्र एकापूर्वपूर्वस्य उत्तरोत्तर विशेषणत्वं यत्रवर्ण्यते तत्रान्येतिद्विधाभवति- तत्राद्यामेवसार्थ श्लोकेनोदाहरति॥ ',
            eng:
              '<h3>Word meanings</h3><table><tr><td></td>गृहीतमुक्तरीत्यार्थश्रेणिः - </td><td>A series of statements in which each succeeding thing is taken as an attribute of each preceding thing and then made to cease as such</td></tr><tr><td>एकाकली मता - </td><td>Is considered the Necklace</td></tr></table><h3>Definition</h3><p>A successive series of statements made in a manner in which each succeeding thing is taken (गृहीत  as an attribute of each preceding thing and that thing which was ﬁrst taken as an attribute is made to cease (मुक्त )  as such by being afterwards made a. subject and qualiﬁed by another succeeding thing and so on, it is the Necklace.</p>'
          },
          examples: [
            {
              text:
                'नेत्रेकर्णान्तविश्रान्तेकर्णौदोःस्तम्भदोलितौ ॥<br>दोस्तम्भौजानुपर्यन्तप्रलम्बनमनोहरौ ।<br>जानुनीरत्नमकुराकारेतस्यहिभूभुजः ॥',
              explanation: {
                sans:
                  'नेत्रे इति॥ तस्यमहीभुजः श्रीरामचंद्रस्य नेत्रेकर्णांतयोः विश्रांते- तत्पर्यंतं अयते इत्यर्थः – कर्णौदोस्तंभडोलिनौ भुजपर्यंतं लंबमानावित्यर्धः ॥<br> दोस्त्संभाविति॥ दोस्त्संभौ- जानुपर्यंत प्रलंबनेन तत्पर्यंतमायतत्वेन मनोहरौ- जानुनीरत्न मुकुराकारेमणिदर्पण सदृशे विद्येते इतिशेषः अत्रपूर्वेनेत्रे प्रत्युत्तरयोः कर्णयोर्विशेषणत्वं- कर्णौ प्रतिदोस्तंभयोर्विशेषत्वं दोस्तंभौ प्रतिजानुनोर्विशेषणत्वं जानुनी प्रतिरत्नमुकुरयोर्विशेषणत्व मित्येवोत्तरोत्तरस्य पूर्वपूर्वविशेषणत्वादाद्यैकावळिः लंबनोमनोहरौ । ',
                eng:
                  '<h3>Word meanings</h3><table><tr><td></td>तस्य महीभुजः - </td><td>Of that king</td></tr><tr><td>नेत्रे - </td><td>Eyes</td></tr><tr><td>कर्णां तविश्रांते - </td><td>Extending as far as the ears</td></tr><tr><td>कर्णौ - </td><td>Ears</td></tr><tr><td>दोस्तंभदोलितौ - </td><td>Extending as far as the post-like arms</td></tr><tr><td>दोस्तभौ - </td><td>Post-like arms</td></tr><tr><td>जानुपर्यंतप्रलंबनमनोहरौ - </td><td>Charming on account of their extension as far as the knees</td></tr><tr><td>जानुनौ - </td><td>Knees</td></tr><tr><td>रत्नमुकुराकारे - </td><td>Appearing like jeweled mirrors</td></tr></table><p>The eyes of that king extend as far as the ears. His ears extend as far as his post-like arms. His post-like arms are charming by their extension as far his knees. And his kness are, in appearance, jewelled mirrors.</p><p>Here, the ears are taken as an attribute of the preceding thing, the eyes; arms, of the ears; knees, of arms; and the mirrors, of the knees.</p><p>In this example, a preceding thing is qualiﬁed by the succeeding thing aﬂirmatively. In the following example, the thing mentioned ﬁrst is qualiﬁed negatively by what follows.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'मालादीपकम् ',
      title_eng: 'मालादीपकम् The Serial Illuminator',
      id: 47,
      slokas: [
        {
          sloka: 'दीपकैकावलीयोगान्मालादीपकमिष्यते ।',
          sloka_explanation: {
            sans:
              'दीपकैकावळ्योर्योगान्मालादीपक मुच्यते- पंडितैरंगीक्रियते इत्यर्थः – यत्र दीपकैकावळ्योरलंकारयोः लक्षणेसंभवतः तत्रमालादीपकं नामालंकार इति निष्कर्षः ॥ ',
            eng:
              '<h3>Word meanings</h3><table><tr><td></td>दीपकैकावलीयोगात् - </td><td>From a combination of the figures the Illuminator and the Necklace</td></tr><tr><td>मालादीपकम् - </td><td>The Serial Illuminator</td></tr><tr><td>उच्यते - </td><td>Is called</td></tr></table><h3>Definition</h3><p>A combination of the ﬁgures, दीपकम् (Illuminator XV) and एकावली (Necklace XLII), is called the Serial Illuminator.Or, in other words, the Serial Illuminator is that wherein a number of different objects is successively associated with one and the same attribute.</p>'
          },
          examples: [
            {
              text: 'स्मरेणहृदयेतस्यास्तेनत्वयिकृतास्थितिः ॥',
              explanation: {
                sans:
                  'काचित्प्रियया प्रेषितातत्प्रियं प्रत्याह- तस्याः भवत्प्रियायाः हृदये स्मरेस्थितिः कृतात्वद्विरहात्तस्याः महती मन्मथपीडा जातेत्यर्थः – तेन प्रियाहृदयेनत्वयिस्थितिः कृतामन्मथपरवशा सतीत्वय्येवमनो निवेशितवतीत्यर्थः – अत्र पूर्वोत्तरवाक्ययोस्थितिरेक एवधर्म इतिवर्ण्यावर्ण्यतोरेक धर्मान्वय रूपं दीपकम्- गृहीतमुक्तरीति सद्भावादेकावळिश्च- तयोर्योगान्मालादीपकम् ॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td></td>स्मरेण - </td><td>By Cupid</td></tr><tr><td>तस्याः हृदये - </td><td>In her heart</td></tr><tr><td>थितिः - </td><td>Setting one’s foot</td></tr><tr><td>कृता - </td><td>Was made</td></tr><tr><td>तेन - </td><td>By him</td></tr><tr><td>त्वयि - </td><td>In thee</td></tr></table><p>Cupid set his foot in the heart of that lady, and by it, i.e., the heart of the lady, in thee.</p><p> This is addressed to a lover by a go-between sent by her mistress pining under separation.</p><p>Here, the one and the same attribute स्थितिः कृता being associated with two objects प्रकृत and अप्रकृत, it is the Illuminator ; and by गृहीतमुक्तरीत्या of the lady’s heart, it is the Necklace (see the preceding ﬁgure). Thus, we have a blending of the two.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'सारः ',
      title_eng: 'सारः - The Climax',
      id: 48,
      slokas: [
        {
          sloka: 'उत्तरोत्तरमुत्कर्षःसारइत्यभिधीयते ।',
          sloka_explanation: {
            sans:
              'पूर्वापूर्वापेक्षया उत्तरोत्तरं प्रत्युत्कर्षोवर्ण्यते चेत्तर्हिसार इत्यभिधीयते- सार इत्यलंकारः कविभिरंगीकृत्यत इत्यर्थः – यत्रपूर्वपूर्वापेक्षया उत्तरोत्तरस्य उत्कर्षः प्रतिपाद्यते- तत्र सारालंकार इति निष्कर्षः ॥ ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>उत्तरोत्तरम् - </td><td>successively</td></tr><tr><td>उत्कर्षः - </td><td> Excellence</td></tr><tr><td>सार इति - </td><td> The figure Climax</td></tr><tr><td>अभिधीयते - </td><td> Is called</td></tr></table><h3>Definition</h3><p>Excellence (rising) successively is termed the Climax.</p>'
          },
          examples: [
            {
              text: 'मधुरंमधुतस्माच्चसुधातस्याःकवेर्वचः ॥',
              explanation: {
                sans:
                  'मधुक्षौद्रंमधुरं मधुररस संयुक्तं – तस्मान्मधुनः पीय्यूषममृतं मधुरम्- तस्मापियूषात्कवेर्वचो मधुरम्- अत्रपूर्वपूर्वापेक्षया उत्तरोइत्तरस्य उत्कर्षवर्णनात्सारालंकारः ॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>मधु - </td><td>Honey</td></tr><tr><td>मधुरम् - </td><td>Sweet</td></tr><tr><td>तस्मात् - </td><td>Than that</td></tr><tr><td>पीयुषम् - </td><td>The nectar</td></tr><tr><td>तस्मात् - </td><td>Than that</td></tr><tr><td>कवेः वचः - </td><td>Poet’s speech</td></tr></table><p>The honey is sweet ; the nectar is sweeter than that ; and, than that, poet’s speech.</p><p>Here, each succeding thing, nectar etc., rises gradually in excellence.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'यथासंख्यम् ',
      title_eng: 'यथासंख्यम् - The Relative Order',
      id: 49,
      slokas: [
        {
          sloka: 'यथासंख्यंक्रमेणैवक्रमिकाणांसमन्वयः ।',
          sloka_explanation: {
            sans:
              'यत्रत्रमिकाणां समान संख्याकानाम्- क्रमेण प्रथमं प्रथमेन द्वितीयेनेत्यादि क्रमेण समन्वयोवर्ण्यंते तत्र यथासंख्यालंकारः',
            eng:
              '<h3>Word meanings</h3><table><tr><td>क्रमिकाणाम् - </td><td>of serial objects</td></tr><tr><td>क्रमेणैव - </td><td>In due order</td></tr><tr><td>समन्वयः - </td><td>Mitual connection</td></tr><tr><td>यथासंख्यम् - </td><td>The relative order</td></tr><tr></table><h3>Definition</h3><p> The Relative Order is a mutual connection of a series of objects mentioned in their due order.</p>'
          },
          examples: [
            {
              text: 'शत्रुंमित्रंविपत्तिं च जयरञ्जयभञ्जय ॥ ',
              explanation: {
                sans:
                  'हे राजन् त्वंशत्रुंजयमित्रं रंजय आनंदय- विपत्तिंभंजयनिवारय- अत्रक्रमिकानां यथाक्रमेण वर्णनाद्यथासंख्यम्॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>शत्रुम् - </td><td>The foe</td></tr><tr><td>जव - </td><td>Conquer</td></tr><tr><td>मित्रम् - </td><td>The friend</td></tr><tr><td>रंजय - </td><td>Gratify</td></tr><tr><td>विपत्तिम् - </td><td>The calamity</td></tr><tr><td>भंजय - </td><td>Destroy</td></tr></table><p> O king! Conquer, gratify, destroy (thy) foe, friend and the calamity respectively.</p><p>Here, a series of objects शत्रुम्, मित्रम् and विपत्तिम् is respectively connected with जय, रञ्जय and भञ्जय in their due order.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'पर्यायः ',
      title_eng: 'पर्यायः -The Sequence',
      id: 50,
      slokas: [
        {
          sloka: 'पर्यायोयदिपर्यायेणैकस्यानेकसंश्रयः ।',
          sloka_explanation: {
            sans:
              'एकस्यैववस्तुनः पर्यायेणानेक संश्रयः अनेकाश्रयवर्णनं यदितर्हि पर्यायालंकारः ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>यदि - </td><td>if</td></tr><tr><td>एकस्य - </td><td>Of one object</td></tr><tr><td>पर्यायेण - </td><td> In succession</td></tr><tr><td>अनेकसंशयः - </td><td> Residing in many places</td></tr><tr><td>पर्यायः - </td><td> The Sequence</td></tr></table><h3>Definition</h3><p>When one object is described as residing in many places in succession, it is termed the Sequence.</p>'
          },
          examples: [
            {
              text: 'पद्मंमुक्त्वागताचन्द्रंकामिनीवदनोपमा ॥',
              explanation: {
                sans:
                  ' कामिनीवदन प्रभासुंदरीमुखकांतिः – पद्मं मुक्त्वाचंद्रं गता प्राप्ता- अत्रैकस्या एवकामिनी वदनप्रभायाह् क्रमेणपद्म चंद्ररूपानेकाश्रय वर्णनात्पर्यायः – यद्यपि प्रभायाः पद्माश्रयणंकं रतोनोक्तम्- तथापि पद्मं मुक्त्वागतेत्युक्त्या प्राक्पद्माश्रयणं लभ्यते वियोगस्य प्राप्तिपूर्वकत्वात्- अतोह्निपद्मेस्थित्वारात्रौ चंद्रं गतेत्यर्थः ',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>कामिनीवदनप्रभा - </td><td>The lusture of this lovely woman’s face</td></tr><tr><td>पद्मम् - </td><td>The lotus</td></tr><tr><td>मुक्त्वा - </td><td>Having left</td></tr><tr><td>चंद्र - </td><td> The moon</td></tr><tr><td>गता - </td><td>Resorted to.</td></tr></table><p>Having left the lotus, the lustre of this lovely wornarfs face now resorted to the moon.</p><p>Here, the lustre which is stated as one is said to reside in many places in succession.,</p>'
              }
            }
          ]
        }
      ],
      types: 1,
      type: [
        {
          sloka:
            '<h3>Second kind of the Sequence</h3>एकस्मिन्यद्यनेकंवापर्यायःसोऽपिसंमतः ।',
          sloka_explanation: {
            sans:
              'एकस्मिन्नादारे क्रमेणवाक्रमेणैव अनेक माधेयं भवति यदिसोपि पर्यायस्सम्मतः – यत्र एकस्मिन्नाधारे क्रमेणानेकाधेया निवर्ण्यंते- तत्र पर्यायभेद इतिनिष्कर्षः ॥',
            eng:
              '<h3>Word meanings</h3><table><tr><td>यदि वा - </td><td>Or if</td></tr><tr><td>एकस्मिन् - </td><td> In one object</td></tr><tr><td>अनेकम् - </td><td>Many</td></tr><tr><td>सोऽपि - </td><td>That too</td></tr><tr><td>पर्यायः - </td><td>The sequence</td></tr><tr><td>संमतः - </td><td>Is regarded</td></tr></table><p>Or, if many objects are said to reside in one and the same place in succession, that too is regarded as the Sequence.</p>'
          },
          examples: [
            {
              text: 'अधुनापुलिनंतत्रयत्रस्रोतःपुराजनि ॥ ',
              explanation_sans:
                'यत्रनद्यां स्रोतः प्रवाहः पुराजनितत्रनद्यां- अधुनापुलिनं दृष्टं अत्र एकस्यामेवनद्यां क्रमेणस्रोतः पुलिनरूपाधेय वर्णनात्पर्यायभेदः ॥',
              explanation_eng:
                '<h3>Word meanings</h3><table><tr><td>यत्र - </td><td>Where</td></tr><tr><td>पुरा - </td><td>Formerly</td></tr><tr><td>सोतः - </td><td>Water</td></tr><tr><td>अजनि - </td><td>Was</td></tr><tr><td>अधुना - </td><td>Now</td></tr><tr><td>तत्र - </td><td>There</td></tr><tr><td>पुलिनम् - </td><td>Sand bank</td></tr></table><p>Sand bank is now seen in the place where there was water formerly.</p><p>Here, the water and the sand bank are said to be successively residing in the same place.</p>'
            }
          ]
        }
      ]
    },
    {
      title_sans: 'परिवृत्तिः',
      title_eng: 'परिवृत्तिः -The Return',
      id: 51,
      slokas: [
        {
          sloka: 'परिवृत्तिर्विनिमयो न्यूनाभ्यधिकयोर्मिथः ।',
          sloka_explanation: {
            sans:
              'न्यूनाभ्यधिकयोः अल्पाधिकयोस्तु- मिथोन्योन्यं विनिमयः परिवृत्तिः – यत्रस्वल्पव्ययेन अधिकस्वीकरणं अधिकव्ययेन स्वल्पस्वीकरणं- किंचसमेन समस्वीकरणंवा वर्ण्यते तत्र परिवृत्तिनामालंकार इतिनिष्कर्षः ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>न्यूनाभ्यधिकयोः - </td><td>Of lesser and greater things</td></tr><tr><td>मिथः - </td><td>Mutual</td></tr><tr><td>विनिमयः - </td><td>Exchange</td></tr><tr><td>परिवृत्तिः - </td><td>The return</td></tr></table><p>The Return is a mutual exchange of things lesser or greater.</p>'
          },
          examples: [
            {
              text: 'जग्राहैकं शरं मुक्त्वा कटाक्षात्स रिपुश्रियम् ॥',
              explanation: {
                sans:
                  'सराजा एकमेवशरं बाणं मुक्त्वारिपुश्रियां कटाक्षान् जग्राह- एकबाणमोचन पूर्वकं शत्रुलक्ष्मीकटाक्षान् स्वीकृतवानित्यर्थः राज्~झोस्यपराक्रमशालित्वादेक बाणेनैवरणे शत्रून् हत्वातद्राज्यलक्ष्मीं प्रापेतिश्लोकतात्पर्यम्- अत्रैकबाणरूप स्वल्पवस्तुव्ययेन लक्ष्मीकटाक्षरूपाधिक वस्तुस्वीकरण वर्णनात्प्रथम परिवृत्तिः – एवम् द्वितीयतृतीयेज्ञेये ॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>(स राजा) - </td><td>That king</td></tr><tr><td>एकम् शरम् - </td><td>One arrow</td></tr><tr><td>मुक्त्वा - </td><td>Having discharged</td></tr><tr><td>रिपुश्रियः - </td><td>Of the enemy’s Goddess of wealth</td></tr><tr><td>कटाक्षात् - </td><td>(many) side-glances</td></tr><tr><td>जग्राह - </td><td>Received</td></tr></table><p>The king discharged (i.e., gave) one arrow and received (in turn, many) side-glances of the Goddess of wealth of his foes.<p><p>Here, we have an exchange for what is greater, i.e. giving the lesser (शरम्) for the greater (कटाक्षान्).</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'परिसङ्ख्या',
      title_eng:
        'परिसङ्ख्या-The Special Mention or The Exclusion of Speciﬁcation.',
      id: 52,
      slokas: [
        {
          sloka: 'परिसंख्या  निषिध्यैकमेकस्मिन्वस्तुयन्त्रणम् ।',
          sloka_explanation: {
            sans:
              'एकम् वस्तुनिषिध्य एकत्र प्रतिषिध्य एकस्मिन्नन्यस्मन्नियंत्रणम् नियमनं यत्सापरिसंख्येत्यर्थः – यत्रैकमेव वस्तु एकनिषिध्य अन्यत्र नियम्यते तत्र परिसंख्यालंकार इति निष्कर्षः ॥ ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>एकस्मिन् - </td><td>In one object on hand</td></tr><tr><td>एकम् वस्तु - </td><td>One object</td></tr><tr><td>निषिध्य - </td><td>Having denied</td></tr><tr><td>यन्त्रणाम् - </td><td>Restriction</td></tr><tr><td>परिसङ्ख्या - </td><td>The Special Mention</td></tr></table><p>The denial of the existence of something in a certain object and the restriction of its existence in another object constitutes the ﬁgure the Special Mention.</p>'
          },
          examples: [
            {
              text: 'स्नेहक्षयः प्रदीपेषु न स्वान्तेषु नतभ्रुवाम् ॥',
              explanation: {
                sans:
                  'प्रदीपेषुदीप पात्रेषु स्नेहक्षयस्तैलनाशः अभिलाषनाशश्चनाभूत्- नतभ्रुवामंगनानां स्वांतेषु हृदयेषु स्नेहक्षयः प्रेमनाशः अभूत् अभिवृद्धिरेवाभूदित्यर्थः- अत्र श्लेषमूलाभेदध्यवसायेनैकस्यैव स्नेहस्यदीपेषु निषेधात्तस्यैव स्त्रीचित्तेषु नियमयनाच्च भवति परिसंख्या ॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>स्नेहक्षयः - </td><td>Diminution of oil</td></tr><tr><td>                प्रदीपेषु - </td><td>In the lamps</td></tr><tr><td>नतभ्रुवाम् - </td><td>Of women of curved eye-brows</td></tr><tr><td>स्वान्तेषु - </td><td>In the hearts</td></tr><tr><td>न - </td><td>Not</td></tr></table><p>The diminution of oil (i.e. aﬁection) was in the lamps and not in the hearts of Women of curved eye-brows.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'विकल्पः',
      title_eng: 'विकल्पः-The Alternative',
      id: 53,
      slokas: [
        {
          sloka: 'विरोधे तुल्यबलयोर्विकल्पालंकृतिर्मता ।',
          sloka_explanation: {
            sans:
              'तुल्यबलयोस्सम प्रमाणकयोर्विरोधे सतियुगपत्कर्तुमशक्यत्वे सति- विकल्पालंकृतिर्मत्वा- यत्रतुल्य प्रमाणकयोः पदार्थयोर्युगपत्प्राप्तौ सत्यांतयोर्विरोधेन युगपत्कर्तुमशक्यत्वात्तयोरन्यतर एवार्थः कर्तव्यतयानिश्चीयते- तत्र विकल्पालंकार इति निष्कर्षः ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>तुल्यबलयोः - </td><td>Of equal probability</td></tr><tr><td> विरोधे - </td><td>When there is opposition</td></tr><tr><td>विकल्पालंकृतिः - </td><td>The Alternative</td></tr><tr><td>मता - </td><td>Is considered</td></tr></table><p>When there is an opposition of two things of equal probability, or, in other words, when the performance of two such things becomes impossible at the same time and thus restricts the agent to have recourse to only one of them, it is called the Alternative. </p>'
          },
          examples: [
            {
              text: 'सद्यः शिरांसि चापान्वा नमयन्तु महीभुजः ॥',
              explanation: {
                sans:
                  'महीभुजो राजानस्सद्यस्तत्क्षणे शिरांसिमस्तकान् चापान् धनूंषिवानमयंतु- संधिरभिमतश्चेन्नम्र शिरस्काभूत्वातूष्णीं तिष्ठंतु- युद्धमभिमतं चेदौद्धत्येन चापापारोप्य युद्धसन्नधाभवंत्वि त्रिसमुच्चयोयं वाक्यार्थः अत्रसंधिवशान्मान परित्यागपूर्वकं शिरोनमनस्य विग्रहवशात्साहंकारं धनुष्कोटौ र्विकल्पालंकृतिर्मता । सद्यश्शिरांसिचा पान्वानमयंतु महीभुजः ॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>महीभुजः - </td><td>The kings</td></tr><tr><td>सद्यः - </td><td>At once</td></tr><tr><td> शिरांसि - </td><td>Their heads</td></tr><tr><td>नमयन्तु - </td><td>Let bend</td></tr><tr><td>चापान् वा - </td><td>Or their bows</td></tr></table><p>Let the kings bend at once their heads or their bows.</p><p>Here, we see the impossibility of simultaneous action of the bending of the heads and that of the bows which are opposed to each other, the former being the mark of surrender and the latter, of war.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'समुच्चयः',
      title_eng: 'समुच्चयः -The Conjunction',
      id: 54,
      slokas: [
        {
          sloka: 'बहूनां युगपद्मावभाजां गुम्फः समुच्चयः ।',
          sloka_explanation: {
            sans:
              'युगपद्भावभाजांयौग पद्यार्हाणामविरुद्धानामिति यावत् तादृशां बहूनामनेक पदार्थानां गुंभस्संदर्भ स्समुच्चय स्स्यात्- यत्रविरुद्धाभावेन युगपत्संहर्तुमशक्यानां बहुपदार्थानामेकदा प्राप्तिवर्ण्यते तत्र समुच्चयालंकार इति निष्कर्षः ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>यगपड्भावभाजाम् - </td><td>Of actions of simultaneously</td></tr><tr><td>वड्वनाम् - </td><td>Of many</td></tr><tr><td>गुम्फः - </td><td>Combination</td></tr><tr><td>समुच्चयः - </td><td>The Conjunction</td></tr></table><p>The Conjunction is a combination of many actions that are described as being simultaneously produced.</p>'
          },
          examples: [
            {
              text: 'नश्यन्ति पश्चात्पश्यन्ति त्रस्यन्ति च भवद्द्विषः ॥',
              explanation: {
                sans:
                  'हे राजन् तवद्विषः नश्यंति- क्षयिष्णवोभवंति- तथापश्यंतीतिपलायन समये भूयः परावर्त्य- पश्यंतीत्यर्थः – तथाभ्रमंतिकांदिशीकास्संत स्सर्वत्रभ्रमणं कुर्वंतित्यर्थः – भ्रश्यंतीतिपाठे भ्रष्टाभवंतीत्यर्थः – अत्र शत्रुषुनाश पश्चादवलोकन भ्रमण क्रियाणां विरोधाभावेन युगपद्गुंभवर्णना द्भवतिसमुच्चयः ॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>नश्यन्ति - </td><td>Take flight</td></tr><tr><td>पश्चात् - </td><td>On back</td></tr><tr><td> पश्यन्ति - </td><td>See</td></tr><tr><td>भ्रश्यन्ति च - </td><td>And fall down</td></tr></table><p>O King! thy enemies ﬂee, turning their backs, see thee and fall down.</p><p>Here, though the actions of ﬂeeing, seeing, falling down took place in succession, yet we have the simulteniety of those actions considering their speedy performance.</p><p>Compare the celebrated laconic report which Caesar sent to Rome concerning his victory over Pharnaces at Tela ‘I came, saw, conquered’ (veni, vedi, vici).</p>'
              }
            }
          ]
        }
      ],
      types: 1,
      type: [
        {
          sloka: 'अहंप्राथमिकाभाजामेककार्यान्वयेऽपि सः ।',
          sloka_explanation: {
            sans:
              'अहं प्रथमिकाभाजामहं पूर्विकाभाजां- अहमेव कारुअंकर्तुं शक्नोमीत्येवं प्रकारेण अहंकारयुक्तानामित्यर्थः – कारणानामितिशेषः – एककार्यान्वयोपि एकस्मिन्कार्ये साधनत्वेन अन्वयोपिन समुच्चयालंकारः – यत्रैकस्मिन् कारणेकार्यसिद्धि हेतुत्वेन प्रक्रांते सति अन्येपि हेतवोयद्यहमहमिकया खलेकपोतन्यायेन कार्यंसाधयंतीति वर्ण्यते तत्र समुच्चयस्स्यादिति निष्कर्षः ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>अहंप्राथमिकाभाजाम् - </td><td>Of things with emulation</td></tr><tr><td>एककार्यान्वयः - </td><td>That go to effect one thing</td></tr><tr><td> अपि - </td><td>Also</td></tr><tr><td>सः - </td><td>That i.e., the conjunction</td></tr></table><p>A combination of many things that go to effect a thing with emulation or competition, is also termed the Conjunction. Or, in other words, a combination of many things independent of each other but represented as simultaneously producing the same common effect is called the Conjunction.</p>'
          },
          examples: [
            {
              text: 'कुलं रूपं वयो विद्या धनं च मदयन्त्यमुम् ॥',
              explanation_sans:
                'कुलंसद्वंशः रूपं सौंदर्यं- वयस्तारुण्यं- विद्यावेदशास्त्रादि संपत्तिः – धनं प्रभूतरत्न कनकादिकं च- अमुंपुरुषं मदयंतिदृप्तं कुर्वंति- अत्रमदरूपकार्येष्वाभि जात्यादिषु एकमेव संपूर्णं कारणम्- तादृशानामपिकारणानां अहमहमिकया मदरूपकार्यसाधनत्व वर्णनाद्भवति समुच्चयभेदः ॥',
              explanation_eng:
                '<h3>Word meanings</h3><table><tr><td>कुलम् - </td><td>Noble birth</td></tr><tr><td>रूपम् - </td><td>Handsome appearance</td></tr><tr><td>वयः - </td><td>The pime of youth</td></tr><tr><td>विद्या - </td><td>Learning</td></tr><tr><td>धनं च - </td><td>And the wealth</td></tr><tr><td>असुम् - </td><td>Him</td></tr><tr><td>मदयन्ति - </td><td>Exhilarate</td></tr></table><p>Noble birth, handsome appearance, the prime of youth, learning and the wealth exhilarate him.</p>'
            }
          ]
        }
      ]
    },
    {
      title_sans: 'कारकदीपकम्',
      title_eng: 'कारकदीपकम् -The Case-llluminator',
      id: 55,
      slokas: [
        {
          sloka: 'क्रमिकैकगतानां तु गुम्फः कारकसीपकम् ।',
          sloka_explanation: {
            sans:
              'क्रमिकाः क्रमप्राप्ताः एकगताः एककार्यान्विताश्चयाः क्रियास्तासांगुंभः – ग्रधनंकारकदीपकम् – यत्रैक कारकमनेक क्रियाः क्रमेणानुयंति- तत्रकारकदीपकम्- यत्रयौगपद्येन बहूनामेकत्रान्वयः तत्र समुच्चय इतिभेदो द्रष्टव्यः – तत्सूवनायैवैतल्लक्षणेतु शब्दः',
            eng:
              '<h3>Word meanings</h3><table><tr><td>क्रमिकैकगतानाम् - </td><td>Of actions connected with one Karaka in succession</td></tr><tr><td>गुम्फः - </td><td>Combination</td></tr><tr><td>कारकदीपकम् - </td><td>The Case-Illuminator</td></tr></table><p>Acombination of actions that are successively connected with one Karaka (case-noun) is called कारकदीपकम्. Or, in other words, when the same Karaka. (case-noun) is connected with many verbs in succession, it is कारकदीपकम्.</p>'
          },
          examples: [
            {
              text: 'गच्छत्यागच्छति पुनः पान्थः पश्यति पृच्छति ॥',
              explanation: {
                sans:
                  'पांथः प्रियांत्यक्त्वागंतुम सहमानः कश्चित्पथिकः – गच्छति यथाकथं चिद्व्रजति- पुनरागच्छतितद्विरह मसहमानः भूय एवागच्छति- ततः पश्यति प्रियामुखमनिमेपांधः पश्यतिपृच्छति ॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>पान्थः - </td><td>Traveler</td></tr><tr><td>गच्छति - </td><td>Goes</td></tr><tr><td>पुनः - </td><td>Again</td></tr><tr><td>आगच्छति - </td><td>Comes</td></tr><tr><td>पश्यति - </td><td>Sees</td></tr><tr><td> पृच्छति - </td><td>Asks</td></tr></table><p>The traveller goes, again comes, sees and asks (something).</p><p>Here, पान्थः -a noun in the nominative case, is connected with 4 verbs गच्छति, etc, in Succession but not simultaneously as in the preceding ﬁgure समुच्चयः where simultaniety is desired.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'समाधिः',
      title_eng: 'समाधिः -The Convenience',
      id: 56,
      slokas: [
        {
          sloka: 'समाधिः कार्यसौकर्यं कारणान्तरसंनिधेः ।',
          sloka_explanation: {
            sans:
              'कारणांतरस्य आरंभकारणापेक्षया अन्यकारणस्य सन्निधेस्सन्निदाना त्कार्यस्यारब्ध कार्यस्य सौकर्यं सुलभत्वं समाधिरुच्यते- येनकेनचित्कारणेन एककार्यान्वयः – इहतु एकेनैव प्रकृत कार्यारंभे सतिकाकताळीया गतेन कारणांतरेण कार्यसौकर्यमात्र मितिभेदः ॥ ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>कारणान्तरसन्निधेः - </td><td>Through the presence of some other cause</td></tr><tr><td>कार्य्यसौकर्य्यम् - </td><td>Facility of an act</td></tr><tr><td>समाधिः - </td><td>The Convenience</td></tr></table><p>When the accomplishment of an act is facilitated by the presence of some other cause, or in other Words, when the facilitation of an act is obtained through the accidental operation of another agency, it is called the Convenience.</p>'
          },
          examples: [
            {
              text: 'उत्कण्ठिता च तरुणी जगामास्तं च भानुमान् ॥',
              explanation: {
                sans:
                  'कुलटाजारस्त्री उत्कंठितान्वतो गंतु मुत्सुकाभूत् अतोस्मिन्नेव समये भानुमांत्सूर्योप्यस्तं जगामास्तंगतोभूत् अत्र प्रियाभिसरणेकुलटोत्कंठैव पर्याप्तं कारणमत्रांतरे सूर्येस्तंगते सति अंधकारोदयादभिसरण सौकर्यं जातमितिसमाधिकलंकारः ॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>तरुणी - </td><td>Young lady</td></tr><tr><td>उत्कण्ठिता - </td><td>Lodged for (her lover)</td></tr><tr><td>भानुमान् - </td><td>The sun</td></tr><tr><td>अस्तम् जगाम - </td><td>Set in</td></tr></table><p>No sooner did this young lady long for her lover than the sun set in.</p><p>Here, we see the simultaneous occurrence of two actions-the lady’s longing for her lover and the sun’s setting (expressed by the two च in the two sentences).</p><p>The lady longed for her lover and was about to go to meet him; and this was easily accomplished by the accidental operation of another cause-the ,setting of the sun, which enabled the lady to set out freely under the protecting mantle of the dark.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'प्रत्यनीकम्',
      title_eng: 'प्रत्यनीकम् - The Rivalry',
      id: 57,
      slokas: [
        {
          sloka: 'प्रत्यनीकं बलवतः शत्रोः पक्षे पराक्रमः ।',
          sloka_explanation: {
            sans:
              'बलवतः प्रबलस्यशत्रोस्संबंधि निपक्षे मित्रादिसहाये पराक्रमः प्रत्यनीकमित्युच्यते- यत्र कश्चित्साक्षात्स्वशत्रौ पराक्रमितुमशक्तस्सन् तदनुवर्तिनं जनंतिरस्करोतीतिवर्ण्यते तत्र प्रत्यनीकालंकार इति निष्कर्षः ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>बलवतः - </td><td>strong</td></tr><tr><td>शत्रोः - </td><td>Of the enemy</td></tr><tr><td>पक्षे - </td><td>On any partisan</td></tr><tr><tdपराक्रमः - </td><td>Attempt</td></tr><tr><td>प्रत्यनीकम् - </td><td>The Rivalry</td></tr></table><h3>Definition</h3><p>When any act of injury or mortiﬁcation is attempted on a partisan of one’s powerful enemy (by somebody who is unable to avenge himself directly on his enemy), it is called the Rivalry.</p>'
          },
          examples: [
            {
              text: 'जैत्रनेत्रानुगौ कर्णावुत्पलाभ्यामधःकृतौ ॥',
              explanation: {
                sans:
                  'उत्पलाभ्यामिंदीवराभ्यां- जैत्रनेत्रानुगौ स्वबेतृ नयनानुवर्तिनौ कर्णौ अर्थःकृतौ अथः प्रदेशेकृतौ तिरस्कृतौ च – अत्र श्लेषमूलाध्यवसायेन उत्पलाभ्यां साक्षात्स्वजेतृ नेत्राभिभवे सामार्थ्या भावत्कर्णांत विश्रांत नेत्रानुसरण शीले शोत्रे अथः कृते इतिवर्णनाद्भवति प्रत्यनीकम् ॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>उत्पलाभ्याम् - </td><td>By the lilies</td></tr><tr><td>जैत्रनेत्रानुगौ - </td><td>The servants of the victorious eyes</td></tr><tr><td> कर्णौ - </td><td>The ears</td></tr><tr><td>अधः कृतौ - </td><td>Made to bow down</td></tr></table><p>The ears, the servants (lit. neighbours) of the victorious eyes, have been made to bow down by the lilies. Women’s eyes and lilies are often compared to each other, the one excelling the other in beauty.</p><p>Here, the lilies unable to conquer the eyes avenge themselves on their neighbours, the ears, by making them bend down.</p><p>N.B.-The lilies are usually worn as ornaments on the ears which bend by their weight. </p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'काव्यार्थपत्तिः',
      title_eng: 'काव्यार्थपत्तिः-The Necessary Conclusion',
      id: 58,
      slokas: [
        {
          sloka: 'कैमुत्येनार्थसंसिद्धिः काव्यार्थापत्तिरिष्यते ।',
          sloka_explanation: {
            sans:
              'कैमुत्येनकैमुतिकन्यायेन अर्धसंसिद्धिः वस्त्वंतर सिद्धिः काव्यार्थापत्तिरिष्यते ॥ यत्रदुस्साधार्धवर्णने अन्यस्यसुकर्त वस्तुनसिद्धिः दंडापूपिकान्यायेन वर्णिता चेत्तत्र काव्यार्धापत्तिर्नामालंकार इत्यर्थः ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>कैमुत्येन - </td><td>By the expression how much more</td></tr><tr><td>अर्थसंसिड्विः - </td><td>Accomplishment of an act</td></tr><tr><td>काव्यार्थापत्तिः - </td><td>The Necessary conclusion in the province of Poetry</td></tr><tr><td>इष्यते - </td><td>Is called</td></tr></table><p>The accomplishment of an act founded upon the popular maxim कैमुतिकन्यायः ‘argument with a stronger reason’, is termed the Necessary Conclusion.</p><p>कैमुत्य is the abstract noun of किमुत ‘how much more’. कैमुतिकन्यायः is usually called दण्डापूपन्यायः  the maxim of the stick and the cakes. When a stick and some cakes are tied together and, when the stick has been eaten away by a rat, we are naturally led to believe that the cakes also have been eaten by the rat, the two things being so closely connected. Thus, when we say something of the one of two such things, the same naturally applies to the other thing also. </p>'
          },
          examples: [
            {
              text: 'स जितर्स्त्वन्मुखेनेन्दुः का वार्ता सरसीरुहाम् ॥',
              explanation: {
                sans:
                  'हे सखिनः प्रसिद्धः जेतुमशक्य इतिभावः – इंदु स्त्वन्मुखेन जितः अभिभूतः – नरसीरुहां पद्मानां कावार्ताकाकथा- त्वन्मुखेन पद्मानिजितानीति किमुवक्तव्यमित्यर्थः – अत्र दुर्जयेंदु जयेवर्णिते सतिसुजयसरसीरुहाम् जयस्यकैमुत्यान्वये नैवलब्धत्वात्काव्यार्था पत्तिः काव्यपदं पिनोदेवदत्तः रात्रौभुङ्क्तै इत्याद्यर्थापत्ति निवारणायात्र प्रवृत्तम् ',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>त्वन्मुखेन - </td><td>By thy face</td></tr><tr><td>सः इन्दुः - </td><td>That moon</td></tr><tr><td>जितः - </td><td>Was conquered</td></tr><tr><td>सरसीरूहाम् - </td><td>Of the lotuses</td></tr><tr><td>का - </td><td>What</td></tr><tr><td>वार्ता - </td><td>Mention</td></tr></table><p>(Lady !) That moon has been conquered by thy face. What necessity is there to speak of (or why we speak of ) lotuses.</p><p>It is an acknowledged fact that lotuses begin to shrink and become faded on the rise of the moon. When that moon, the subduer of the lotuses, has been conquered, the fact that lotuses too have been conquered much more becomes a necessary conclusion.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'काव्यलिंगम् ',
      title_eng: 'काव्यलिंगम् -  The Poetical Reason.',
      id: 59,
      slokas: [
        {
          sloka: 'समर्थनीयस्यार्थस्य काव्यलिङ्गं समर्थनम् ।',
          sloka_explanation: {
            sans:
              'अलि दुष्करत्वात्समर्धन सापेक्षः समर्थनीमर्थनम् । यः तस्यार्धस्य समर्थनं समर्थक हेतु प्रदर्शकं काव्यलिंगं दुष्करार्थमुपपाद्य तस्या संभाव्यत्वेन समर्थनापेक्ष यावाक्यार्थं पदार्थं वा हेतुं प्रदर्श्यसोर्थस्समर्थ्यते चेत्तत्काव्यलिंगमित्यर्थः – तथा च वाक्यार्थ हेतु कंपदार्थ  हेतुकं चेति काव्यलिंगालंकार स्यद्वैविध्यमबगंतव्यं ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>समर्थनीयस्य - </td><td>To be established</td></tr><tr><td>अर्थस्य - </td><td>Of a fact</td></tr><tr><td>समर्थनम् - </td><td>Justifying</td></tr><tr><td>काव्यलिंगम् - </td><td>The Poetical Reason</td></tr></table><p>The Poetical Reason is a reason justifying a statement which requires to be established.</p>'
          },
          examples: [
            {
              text: 'जितोऽसि मन्द कन्दर्प मच्चित्तेऽस्ति त्रिलोचनः ॥',
              explanation: {
                sans:
                  'हेमंद जडकंदर्प मन्मथजितोसि मयापराजितो सीत्यर्थः – कुतः – मच्चितैत्रिलोचनश्शिवोस्ति- त्वदीयदेहदाहक ल्प्चनशालि हरसन्निधानान्ममभवज्जयः क्रियानितिभावः – अत्र दुष्करमदन विजयस्वरूपार्थस्य मच्चित्तेस्ति त्रिलोचन इति वाक्यार्थेन समर्थनाद्भवति काव्यलिंगभेदः – एवं पदार्थ हेतुकमूह्यम् ॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>मन्द - </td><td>Foolish</td></tr><tr><td>कन्दर्प - </td><td>Cupid</td></tr><tr><td>जितः असि - </td><td>Thou hast been conquered</td></tr><tr><td>मच्चित्ते - </td><td>In my mind</td></tr><tr><td>विलोचनः - </td><td>Three-eyed God Siva</td></tr><tr><td>अस्ति - </td><td>Resides</td></tr></table><p>O foolish God of love ! Thou hast been conquered (by me). For, in my mind, there resides the three-eyed God Siva.</p><p>Here, the fact of the presence of the God Siva. in the mind of the speaker is a reason for the speaker’s conquest of the God of Love who has once been burnt by Siva. </p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'अर्थान्तरन्यासः',
      title_eng: 'अर्थान्तरन्यासः -The Transition',
      id: 60,
      slokas: [
        {
          sloka: 'उक्तिरर्थान्तरन्यासः स्यात्सामान्यविशेषयोः ।',
          sloka_explanation: {
            sans:
              'सामान्य विशेषयोरुक्रिरर्थांतरन्यासस्स्यात्- यत्र विशेषे प्रस्तुते सतितेन सह अप्रस्तुत सामान्यस्य अद्धांतरस्यन्यासः न्यसनम्- तथा सामान्ये प्रस्तुते सतितेन सहा प्रस्तुत विशेषस्यन्यसनंचयत्र भवति सर्वत्र समर्धनार्थमितिज्ञेयं तत्र द्विविधोर्धांतरन्यास इत्यर्थः ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>सामान्यविशेषयोः - </td><td>Of a universal proposition and a particular instance</td></tr><tr><td>उक्तिः - </td><td>assertion</td></tr><tr><td>अर्थान्तरन्यासः - </td><td>The Transition</td></tr></table><p>The assertion of a universal (proposition) and a particular (instance) is termed the Transition. Or, in other words, when a universal proposition is introduced to support a particular instance, or a particular instance to support a universal proposition, it is called the Transition.</p>'
          },
          examples: [
            {
              text: 'हनूमानब्धिमतरद्दुष्करं किं महात्मनाम् ॥',
              explanation: {
                sans:
                  'हनूमान् अब्धिं समुद्रं अतरत् व्यलंघयत्- एवम् प्रस्तुतं विशेषं दुःखेनापितरितुमशक्यं किंन किमपीत्यर्थः – अतो हनूमतो पिलोकाति क्रांतप्रधावत्वात्समुद्रतरणं तस्य क्रियदिति सामान्येन समर्थ्यत इति भवति प्रथमोर्थांतरन्यासः ॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>हनूमान् - </td><td>The monkey- God Hanuman</td></tr><tr><td>अब्धिम् - </td><td>The ocean</td></tr><tr><td>अतरर् - </td><td>Crossed</td></tr><tr><td>महात्मनाम् - </td><td>Of great men</td></tr><tr><td>दुष्करम् - </td><td>Impossible</td></tr><tr><td>किम् - </td><td>What</td></tr></table><p>Hanuman crossed the ocean ; what is impossible for great men ?</p><p>Here, a particular instance is conﬁrmed by a universal proposition.</p><p>Example of a universal proposition supported by a particular instance.</p>'
              }
            },
            {
              text:
                'गुणवद्वस्तुसंसर्गाद् याति स्वल्पोऽपि गौरवम् ।<br>पुष्पमालानुषंगेण सूत्रं शिरसि धार्यते ॥',
              explanation: {
                sans:
                  'स्वल्पोपिनिकृष्टोपिगुणवद्वस्तु संसर्गात् गुणवदर्ध संपर्काद्गौरवं गुरुत्वं याति प्राप्नोति- तथाहि पुष्पमालानुषंगेण सुरभिमाल्यसंपर्केण सूत्रं तंतुः निर्गुणोपीतिभावः- शिरसाधार्यते शिरसावहनेन बहूक्रियत इत्यर्थः- अत्रगुणवदित्यादिना पूर्वार्थेन प्रस्तुतं सामान्यं निर्दिश्य तत्समर्धकत्वेन तेन सहपुष्पमलानुषंगेणेत्यत्र अप्रस्तुत विशेषस्यन्यसनमिति द्वितीयोर्थांतरन्यासः ॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>गुणवद्वस्तुसंसर्गाद् - </td><td>By association of the meritorious</td></tr><tr><td>स्वल्पोऽपि - </td><td>Even the meanest creature</td></tr><tr><td>गौरवम् - </td><td>Greatness</td></tr><tr><td>याति - </td><td>Attains</td></tr><tr><td>पुष्पमालानुषंगेण - </td><td>By the union with a wreath of flowers</td></tr><tr><td>सूत्रं - </td><td>Thread</td></tr><tr><td>शिरसि - </td><td>On the head</td></tr><tr><td>धार्यते - </td><td>Is worn</td></tr></table><p>Even the meanest creature, by the association of the meritorious, attains to the greatness. A thread united with a wreath of ﬂowers is worn on the head.</p><p>Here, a universal proposition is conﬁrmed by a particular instance.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'विकस्वरः',
      title_eng: 'विकस्वरः - The Expansion',
      id: 61,
      slokas: [
        {
          sloka: 'यस्मिन्विशेषसामान्यविशेषाः स विकस्वरः ।',
          sloka_explanation: {
            sans:
              'यस्मिन् यत्र विशेष सामान्यविशेषा स्समर्थ्य समर्थकभावेन यत्र वर्ण्यंते तत्र द्विविधो विकस्वराख्योलंकारः',
            eng:
              '<h3>Word meanings</h3><table><tr><td>यस्मिन् - </td><td>In which</td></tr><tr><td>विशेषसामान्यविशेषाः - </td><td>Particular, general and particular assertions</td></tr><tr><td>सः - </td><td>That</td></tr><tr><td>विकस्वरः - </td><td>The Expansion</td></tr></table><p>When a particular is supported by a general which again is supported by a particular, it is called the Expansion. Or, in other words, when a Transition in which a particular instance is supported by a general proposition with a Simile, it is termed the Expansion (of the Transition).</p>'
          },
          examples: [
            {
              text: 'स न जिग्ये महान्तो हि दुर्धर्षोः सागरा इव ॥',
              explanation: {
                sans:
                  'स प्रसिद्धोराजानजिग्ये केनापि जितोनाभूत्- कुतः हियस्मान्महांतः अत्युत्कृष्टाः दुर्थर्षाः दुर्जया इत्यर्थः कुत इत्याशंक्य उपमादर्शन मुखेन महद्दुर्धर्षत्वं सामान्यं निर्दिश्यतस्तापि सागरौपम्येन विढोक्तिस्स्यात्क्रियोत्कर्षा हेतौ हेतुत्वकल्पनम् । कचाः कळिंदजातीरतमालस्तोममेचकाः ॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>सः - </td><td>That (King)</td></tr><tr><td>न जिग्ये - </td><td>Was not conquered</td></tr><tr><td>हि - </td><td>Because</td></tr><tr><td>महान्तः - </td><td>Great men</td></tr><tr><td>सागरा इव - </td><td>Like the oceans</td></tr><tr><td> दुर्ड्वर्षाः - </td><td>Unassailable</td></tr></table><p>That (king) was not conquered (by his enemies). For the great men are as unassailable as the oceans.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'प्रौढोक्तिः',
      title_eng: 'प्रौढोक्तिः-The Bold Speech',
      id: 62,
      slokas: [
        {
          sloka: 'प्रौढोक्तिरुत्कर्षाहेतौ तद्धेतुत्वप्रकल्पनम् ।',
          sloka_explanation: {
            sans:
              'उत्कर्षा हेतौकार्यातिशयो हेतौ तद्धेतुत्व प्रकल्पनंते तत्र प्रौढोक्तिरिति निष्कर्षः ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>उत्कर्षाहेतौ - </td><td>Which connot form as a cause of excellence</td></tr><tr><td>तड्वेतुत्वप्रकल्पनम् - </td><td>Attribution of a certain cause to it</td></tr><tr><td>प्रौढोक्तिः - </td><td>The Bold Speech</td></tr></table><p>The attribution of a certain cause, to a statement asserted, which cannot form the cause of excellence (of the object described) is called the Bold Speech.</p>'
          },
          examples: [
            {
              text: 'कचाः कलिन्दजातीरतमालस्तोममेचकाः ॥',
              explanation: {
                sans:
                  'कचाः कांताचिकुराः – कळिंद जातीरेयमुनारोधसियेत मालस्तोमाः तापिं छ वृक्षसंघातद्वन्मेचकाः श्याम लाभवंतीत्यर्थः – अत्र केवलतमालानां वैल्यसत्वेपि अतिशयिततन्नैल्य सिध्यर्थं कळिंदजातीरस्धत्व विशेषणमुपात्तम्- अन्यथातद्विशेषण मनर्थकंस्यात् नैल्यातिशयेतु तत्तीरस्थत्वं न हेतुः – तधापितदेतुत्वकल्पनात्प्रौढोक्तिः ॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>कचाः - </td><td>The tresses</td></tr><tr><td>कलिन्दजातीरतमालस्तोममेचकाः - </td><td>As black as the Tamala group grown on the bank of the Yamuna river.</td></tr></table><p>The tresses (of the Lord Krishna) are as black as the group of tamala trees grown on the banks of Kalinda’s daughter Yamuna.</p><p>The water of the Yamuna is naturally black as also the tamala trees. The blackness of the tamala trees cannot therefore be attributed to their having grown on the banks of the Yamuna river. Still, it is asserted to be so here. Hence it is called the Bold Speech.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'संभावना',
      title_eng: 'संभावना-The Supposition',
      id: 63,
      slokas: [
        {
          sloka: 'संभावना यदीत्थं स्यादित्यूहोऽन्यस्य सिद्धये ।',
          sloka_explanation: {
            sans:
              'अन्यस्य विवक्षितार्धस्य सिद्धये निष्पत्तये- इत्थं स्यादेवं स्यादित्यूहस्तर्क इतियत्तत्संभावन मित्यर्धः',
            eng:
              '<h3>Word meanings</h3><table><tr><td>अन्यस्य - </td><td>Of another act</td></tr><tr><td>सिड्बये - </td><td>For the accomplishment</td></tr><tr><td>यदि इत्थं स्यात् - </td><td>If it were so</td></tr><tr><td>इति - </td><td>So</td></tr><tr><td>ऊहः - </td><td>Conjecture</td></tr><tr><td>संभावना - </td><td>The Supposition</td></tr></table><p>A conjecture assumed through the use of the expression ‘if it were so’ for the accomplishment of another (impossible) act, is termed the Supposition.</p>'
          },
          examples: [
            {
              text: 'यदि शेषो भवेद्वक्ता कथिताः स्युर्गुणास्तव ॥',
              explanation: {
                sans:
                  'हे राजन् शेषोनंतोवक्तायदि भवदीयगुणवर्णना परस्स्याव्वैत्तर्हि- तवगुणाश्शौर्यादार्यादिगुणाः कधितास्स्युः निश्शेषं कीर्तितास्स्युः – अतोहमेकमुखत्वात्तान् साकल्येनस्तोत्तुं कधंशक्नुयामितिभावः अत्र राजगुणानामपरिमितत्वसिद्धये शेषोवक्ताचेद्गुणाः कधिताभवेयुरित्यूह वर्णनात्संभावनम् ॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>यदि - </td><td>If</td></tr><tr><td>शेषः - </td><td>Lord of serpents</td></tr><tr><td>वक्ता - </td><td>Narrater</td></tr><tr><td>भवेत् - </td><td>Happen</td></tr><tr><td>तव - </td><td>Thy</td></tr><tr><td>गुणाः - </td><td>Merits</td></tr><tr><td>कथिताः स्युः - </td><td>Would have been described</td></tr></table><p>O God! If the Lord of the serpents were to be the narrater, then all thy merits would have been described. </p><p>This form of supposition introduced by a subjunctive clause is reckoned by the author of Kavyaprakasa as the third kind of अतिशयोक्ति.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'मिथ्याध्यवसितिः',
      title_eng: 'मिथ्याध्यवसितिः — The False Determination',
      id: 64,
      slokas: [
        {
          sloka: 'किंचिन्मिथ्यात्वसिद्ध्यर्थं मिथ्यार्थान्तरकल्पनम् ।',
          sloka_explanation: {
            sans:
              'किंचिन्मिथ्यात्वसिध्यर्थं किंचित्प्रकृतस्य मिध्याभूतत्व सूचनाय मिथ्यार्धांतर कल्पनं मिध्याभूता प्रकृतार्ध कल्पनमितियत्सामिध्याध्यवसितिरित्यर्धः ॥ ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>किञ्चिन्मिथ्यात्वसिड्ब्यर्थं - </td><td>For the purpose of establishing false assertion</td></tr><tr><td>मिथ्यार्थान्तरकल्पनम् - </td><td>A statement of another absolute false thing</td></tr></table><p>When, for purposes of establishing a false assertion, another absolute false one is introduced, or, in other words, if one false assertion is made to depend upon another absolute false one, then it "is called the False Determination. (Reductio ad absurdum= reducing a position to an absurdity).</p>'
          },
          examples: [
            {
              text: 'मिथ्याध्यवसितिर्विश्यां वशयेत्खस्रजं वहन् ॥',
              explanation: {
                sans:
                  'योहि वेश्यांवशीकर्तुमिच्छति- स पुरुषः खस्रजंगगन पुष्पमालां वहन् सन्- वेश्यांवशयेत्- वशिकुर्यात्- गगनकुसुममालिकाधारणं संभावितं चेद्वेश्यावशीकरणं संभावितमित्यर्धः – गगनकुसुममालिकाधारणं यथात्यंतानुपपन्नंतथा वेश्यावशीकरमपीति मिथ्यार्थांतरेण तद्वशीकरणमिध्यात्वसिद्धिर्भवतीति मिध्याध्यवसितिः ॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>मिथ्याध्यवसितिः - </td><td>The False Determination</td></tr><tr><td>खस्रजम् - </td><td>Garland of sky-flowers</td></tr><tr><td>वहन् - </td><td>Wearing</td></tr><tr><td>वेश्याम् - </td><td>The prostitute</td></tr><tr><td>वशयेत् - </td><td>Can win over.</td></tr></table><p>Wearing a garland of sky-ﬂowers, one can Win over a prostitute.</p><p>Sky-ﬂower is an absolute nonentity and does not exist in any period, past, present or future. So the winning over a prostitute becomes also a non-entity. This ornament is also reckoned as one of the kinds of अतिशयोक्ति by the author of K. P.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'ललितम्',
      title_eng: 'ललितम् — The Artful Indication',
      id: 65,
      slokas: [
        {
          sloka: 'वर्ण्ये स्याद्वर्णवृत्तान्तप्रतिबिम्बस्य वर्णनम् ।',
          sloka_explanation: {
            sans:
              'प्रस्तुते धर्मिणियोवर्ण्य वाक्यार्थः तत्प्रतिबिंबस्य तत्सदृशावर्ण्य वाक्यार्थस्यवर्णनं ललितं- प्रकृते नायिकादि धर्मिणितदीय प्रस्तुत वृत्तांत मवर्णयित्वा तत्सदृशा प्रस्तुतं वर्ण्यते चेत्तर्हि ललिताख्योलंकार इति निष्कर्षः ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>वर्ण्ये - </td><td>In the object on hand</td></tr><tr><td>वर्ण्यवृत्तान्तप्रतिबिम्बस्य - </td><td>Of the reflective representation of an incident on hand</td></tr><tr><td>वर्णनम् - </td><td>Delineation</td></tr><tr><td>ललितम् स्यात् - </td><td>Is the Artful Indication</td></tr></table><p>ललितम् is a delineation of an incident not on hand which ends in a reﬂective comparison to an incident on hand.</p>'
          },
          examples: [
            {
              text: 'ललितं निर्गते नीरे सेतुमेषा चिकीर्षति ॥',
              explanation: {
                sans:
                  'निर्गत इति एषानायिका- निरे उदके निर्गते सति अतिक्रांते सतिनेतुं जलबंधनम्- चिकीर्षति कर्तुमिच्छति- स्वतत्समागतं कंचिद्दक्षिणनायकं कोपादुपेक्ष्यतस्मिन् गत्वान्यासक्ते सति पुनस्तदा नयनार्थं यत्नं करोतीति वर्णनीयं वा निर्गतेनीरे सेतुमेषाचिकीर्षति ॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>एषा - </td><td>This (maiden)</td></tr><tr><td>नीरे - </td><td>When water</td></tr><tr><td>निर्गते - </td><td>Had gone out</td></tr><tr><td>सेतुम् - </td><td>Bund</td></tr><tr><td>चिकीर्षति - </td><td>Wishes</td></tr></table><p>This (maiden) wishes to raise a bund when all the water had gone out. </p><p>This is said by a maid to her mistress who wanted to send for her once neglected lover. The maid instead of telling her mistress that she missed the opportunity and now foolishly wants to bring her lover who has now fallen in love with another lady indirectly intimates the same meaning which is reﬂectively represented in the expression given in the text</p><p>The sending for the lover who once came to the lady and was neglected by  is the same as the raising of at bund after all the water had gone out.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'प्रहर्षणम्',
      title_eng: 'प्रहर्षणम्-The Enrapturing',
      id: 66,
      slokas: [
        {
          sloka: 'उत्कण्ठितार्थसंसिद्धिर्विना यत्नं प्रहर्षणम् ।',
          sloka_explanation: {
            sans:
              'सर्वेंद्रिय सुखास्वादो यत्र भवतितद्द्विषयक भावविशेष उत्कंठेत्युच्यते- तद्विषयोयोर्थः तत्संसिद्धिर्नत्नं विनास्याद्यदितर्हि प्रहर्षणं स्यादित्यर्धः ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>यत्नम् विना - </td><td>without an effort</td></tr><tr><td>उत्कण्ठितार्थसंसिड्बिः - </td><td>Accomplishment of a thing longed for</td></tr><tr><td>प्रहर्षणम् - </td><td>The Enrapturing</td></tr></table><p>When the accomplishinent of a. thing eagerly longed for takes place without any effort for it, or, in other words, when the desired object is obtained by chance, it is called the Enrapturing.</p>'
          },
          examples: [
            {
              text: 'तामेव ध्यायते तस्मै निसृष्टा सैव दूतिका ॥',
              explanation: {
                sans:
                  'या यस्य परम प्रेमास्पदी भूता- तामेवध्यायते तत्प्राप्तिः कदावास्यादिति चिंतयते- तस्मैनायका यस्मैव चिंतितैवदूतिका सती- विसृष्टा प्रेषिता- नायिकास्वकांता नयनाय तदभिलषिता मेवदूतं नियुज्यदैवात्म स्मैप्रेषितवतीत्यर्धः यस्यां नायकस्यात्यंतानुरागः – सैवदैवान्नायिक दूतिका सतीतस्मै प्रेक्षितेति यत्नं विना ईफ्सितार्थ सिद्धिवर्णनात्प्रहार्षणम् ॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>ताम् एव - </td><td>Only her</td></tr><tr><td>ध्यायते तस्मै - </td><td>To him thinking</td></tr><tr><td>सैव दूतिका - </td><td>That same messenger</td></tr><tr><td>निसृष्टा - </td><td>Was sent</td></tr></table><p>That same messenger-a conﬁdante-was sent (by a, lady) to him (her lover) who was thinking of her only.</p><p>This incident took place without any effort on the part of the lover. He was thinking that her lady would send him a disagreeable messenger and, when he saw his own conﬁdante coming as a messenger to him, he could not contain for joy and hence this is called the Enrapturing—the delight beyond measure.</p>'
              }
            }
          ]
        }
      ],
      types: 2,
      type: [
        {
          sloka:
            '<h3>The Second kind of the Enrapturing.</h3>वाञ्छितादधिकार्थस्य संसिद्धिश्च प्रहर्षणम् ।',
          sloka_explanation: {
            sans:
              'वांछितात् स्वाभिमतात्- अधिकार्थस्य संसिद्धिश्च प्रहर्षणम्- केनचित्कधं चिदर्धमपेक्ष्ययत्नेकृते सतितस्य तस्मादप्यधिकार्धो लब्धश्चेत्तदपि प्रहर्षणमित्यर्थः',
            eng:
              '<h3>Word meanings</h3><table><tr><td>वाच्छितात् - </td><td>Than the desired</td></tr><tr><td>अधिकार्थस्य - </td><td>Of something more</td></tr><tr><td>संसिड्विः - </td><td>Attainment</td></tr><tr><td>प्रहर्षणम् - </td><td>The Enrapturing</td></tr></table><p>The attainment of something more than what was desired is called the second kind of the Enrapturing.</p>'
          },
          examples: [
            {
              text: 'दीपमुद्द्योजयेद्यावत्तावदभ्युदितो रविः ॥',
              explanation_sans:
                'यावद्दीपमुद्योजयेद्वस्तु प्रकाशाय दीपमुज्ज्वलयेत्तावत्त दैवरविस्सूर्यः अभ्युदितः अत्र पदार्थ प्रकाशार्थं दीपोद्योतन प्रयत्ने सतिदैवात्त दैवदीपादप्यधिक प्रकाशस्य सूर्यस्योदयात्प्रार्धितार्थादधिकार्थ सिद्धिरूपमिदं प्रहर्षणम् ॥',
              explanation_eng:
                '<h3>Word meanings</h3><table><tr><td>यावत् - </td><td>No sooner</td></tr><tr><td>दीपम् - </td><td>The lamp</td></tr><tr><td>उद्योजयेत् - </td><td>Kindle</td></tr><tr><td>तावत् - </td><td>Than</td></tr><tr><td>रविः - </td><td>The sun</td></tr><tr><td>अभ्युदितः - </td><td>Rose</td></tr></table><p> No sooner did she kindle the lamp, than the sun rose.</p><p>Here the lady rose and wanted to kindle the lamp and, when she came out of her room, she saw the sun risen. This is more than what was desired.</p>'
            }
          ]
        },
        {
          sloka:
            '<h3>Third kind of the Enrapturing.</h3>यत्नादुपायसिद्ध्यर्थात्साक्षाल्लाभः फलस्य च । ',
          sloka_explanation: {
            sans:
              'उपायसिध्यर्थादुपाय प्राप्ति हेतुभूताद्यत्नात्साक्षात्फलस्य कार्यस्यैवलाभः प्रहर्षणमित्यर्थः – फलं प्राप्तुं तदुपाय संपादनाय यत्नेकृते सतितत्रैवयदिलान्जस्स्यात् तदा प्रहर्षणमिति निष्कर्षः ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>उपायसिड्व्यर्थात् - </td><td>to get the object desired</td></tr><tr><td>यत्नात् - </td><td>Attainment of a means</td></tr><tr><td>साक्षात् फलस्य - </td><td>Of the object itself</td></tr><tr><td>लाभः च - </td><td>Attainment also</td></tr></table><p>When, by an effort made for the attainment of a means to get the object desired, the desired object itself is obtained, it is the third kind of the Enrapturing.</p>'
          },
          examples: [
            {
              text: 'निध्यञ्जनौषधीमूलं खनता साधितो निधिः ॥',
              explanation_sans:
                'निध्यंजनस्य निक्षेप प्रदर्शनां जनस्य यदोषधीमूलम्- तत्खनताखन केन अंजन  प्रकृतिभूतमोषधी मूलमुद्धरतेत्यर्धः – निधिर्निक्षेप एवसाधितः – निध्युपायांजन मूलमुद्धर्तुं यत्ने कृते सतिदैवात्तत्रैव निधिर्दृष्टोभूदित्युपायार्ध यत्नात्फलमेव साक्षात्प्राप्त मितिभवति तृतीयं प्रहर्षणम् ॥',
              explanation_eng:
                '<h3>Word meanings</h3><table><tr><td>निध्यंजनौषधीमूलम् - </td><td>The root of a magic plant</td></tr><tr><td>खनता - </td><td>By a digger</td></tr><tr><td>निधिः - </td><td>Treasure</td></tr><tr><td>साधितः - </td><td>Was obtained</td></tr></table><p>By him who dug the root of the magic plant for the purpose of discovering the treasure hidden under the earth, the treasure itself was obtained.</p>'
            }
          ]
        }
      ]
    },
    {
      title_sans: 'विषादनम्',
      title_eng: 'विषादनम् - The Despondency',
      id: 67,
      slokas: [
        {
          sloka: 'इष्यमाणविरुद्धार्थसंप्राप्तिस्तु विषादनम् ।',
          sloka_explanation: {
            sans:
              'इष्यमाणस्य प्रार्ध्यमानस्य विरुद्धोयोर्धस्त त्संपादनं विषादनमित्युच्यते- यत्रेफ्सितार्थ सिध्यर्थं- यत्ने कृतेसति- दैवात्तद्द्विरुद्धानिष्टार्थ प्राप्तिर्भवति- तत्र विषादनमिति निष्कर्षः ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>इष्यमाणविरुड्वार्थसंप्राप्तिः तु - </td><td>The attainment of a thing opposed to what was desired</td></tr><tr><td>विषादनम् - </td><td>The Despondency</td></tr></table><p>The attainment of a thing quite opposed to what was desired is termed the Despondency.</p>'
          },
          examples: [
            {
              text: 'दीपमुद्योजयेद्यावन्निर्वाणस्तावदेव सः ॥',
              explanation: {
                sans:
                  'यावद्यादापीप मुद्योजियेदुद्योतनाययत्नं कुर्यात्तदैव सदीपः निर्वाणः नष्टोभवत्- अत्रेष्यमाण दीपद्योतन यत्नेन सतितद्विरुद्धा निष्टनिर्वापणमापति तमितिभवति विषादनम् ॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>यावत् - </td><td>No sooner</td></tr><tr><td>दीपम् - </td><td>The lamp</td></tr><tr><td>उद्योजयेत् - </td><td>Kindles</td></tr><tr><td>तावदेव - Than</td></tr><tr><td>सः - That</td></tr><tr><td>निर्वाणः - </td><td>Extinguished</td></tr></table><p>No sooner did she kindle the lamp, than it extinguished.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'उल्लासः',
      title_eng: 'उल्लासः - Abandonment',
      id: 68,
      slokas: [
        {
          sloka: 'एकस्य गुणदोषाभ्यामुल्लासोऽन्यस्य तौ यदि ।',
          sloka_explanation: {
            sans:
              'एकस्यगुण दोषाभ्यां हेतुभ्या मन्यस्यतौ यदिगुणदोषौस्यातां चेत्तदोल्लासः – अयमत्र निष्कर्षः – अन्यगुणेन तदन्यस्य गुणोत्पत्तिवर्णने- अन्यदोषेण तदन्यस्य दोषोत्पत्ति वर्नने अन्यगुणेन तदन्यस्य दोषोत्पत्ति वर्नने अन्यदोषेण तदन्यस्य गुणोत्पत्ति वर्णने च तुर्विध उल्लास स्स्यादिति',
            eng:
              '<h3>Word meanings</h3><table><tr><td>एकस्य - </td><td>Of one object</td></tr><tr><td>गुणादोषाभ्याम् - </td><td>By merit and demerit</td></tr><tr><td>अन्यस्य - </td><td>Of another object</td></tr><tr><td>यदि तौ - </td><td>If those two</td></tr><tr><td>उल्लासः - </td><td>Abandonment</td></tr></table><p>If the delineation of merit and demerit of one object conveys a reference to the merit and demerit of another object, or, in other words, if: <ol><li>the merit of one object refer to the merit of another object</li><li>the demerit, to the demerit</li><li>the merit, to the demerit,</li><li>the demerit, to the merit, then it is called the Abandonment</li></ol></p.'
          },
          examples: [
            {
              text:
                '<h3>1. The merit of one object refer to the merit of another object</h3>अपि मां पावयेत्साध्वी स्नात्वेतीच्छति जाह्नवी ॥',
              explanation: {
                sans:
                  'इयं साध्वीपतिव्रता- स्नात्वामत्प्रवाहे स्नासंकृत्वा- पापयेदिति स्नानेनमां पवित्रां कुर्यादिति जाह्नवी गंगेच्छेति – जगत्पावन्याः गंगाया अपिपतिव्रता महिमगुणेन पावनकरत्वात्तदीय स्नानात्पावनत्वं गुणोवर्णित इति भवति प्रथमोल्लासः ॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>साध्वी - </td><td>Chaste woman</td></tr><tr><td>स्नात्वा - Having bathed</td></tr><tr><td>माम् अपि - </td><td>Me also</td></tr><tr><td>पावयेत् - </td><td>May purify</td></tr><tr><td>इति - </td><td>So</td></tr><tr><td>जाह्नवी - </td><td>The river Ganga</td></tr><tr><td>इच्छति - </td><td>Desires</td></tr></table><p>‘Will not a chaste woman (come and) bathe (in my waters) and purify me also’, so the river Ganga desires.</p><p>Here the merit-the purificating character of a chaste woman refers to the merit of the Ganga who prays for purification. Hence this is the example of  No. 1 merit referring to a merit.</p>'
              }
            },
            {
              text:
                '<h3>(2) Demerit reffering to a demerit.</h3>काठिन्यं कुचयोः स्रष्टुं वाञ्छन्त्यः पादपद्मयोः ।<br>निन्दन्ति च विधातारं त्वद्धटीष्वरियोषितः ॥',
              explanation: {
                sans:
                  'तद्धाटीषु अरियोषितः पादचारेण पलायमानश्शत्रु स्त्रियः कुचयोस्सृष्टं यत्काठिन्यं तत्पादपद्मयोस्स्वकीय मृदुचरणयोर्वां छंत्यः चरणयोरेव काठिन्यं स्याच्चेज्जीवेमेतीच्छंत्यस्सत्यः विश्वस्रष्टारंजगद्धातारं निंदंति अयं विधिः कुचयोः काठिन्यमसृष्ट्वा पादयोरेव तत्सृजेद्यदितर्ह्यस्मिन्पाद संचार समये बहूपकारीस्यात्- तधान निर्मितवानत स्तंधिगितिनिंदां कुर्वंतीत्यर्धः – अत्रधाटीषुवनभूमौ पलायमानाना मरिस्त्रीणां धावन विरोधिचरणमार्दव दोषेणतयोः काठिन्यमसृष्ट्वाव्यर्धं कुचयोरेव सृष्टवतो विधेर्निंदा दोषोवर्णित इति द्वितीयोल्लासः ॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>कुचयोः - </td><td>Of the bosoms</td></tr><tr><td>काठिन्यम् - </td><td>Hardness</td></tr><tr><td>पादपद्मयोः - </td><td>Lotus like feet</td></tr><tr><td>सृष्टम् - </td><td>Created</td></tr><tr><td>वाच्छन्त्यः - </td><td>Desiring</td></tr><tr><td>अरियोषितः - </td><td>The women of (thy) foes</td></tr><tr><td>त्वड्वाटीषु - </td><td>In thy cavalry</td></tr><tr><td>विधातारम् - </td><td>The Creator</td></tr><tr><td>निन्दंति - </td><td>Censure</td></tr></table><p>O king ! the widows of thy foemen desiring, (when they are pursued by) thy cavalry, the hardness created for their bosoms to be created for their lotus- like feet censure the Creator (Brahma).</p><p>Here, the widows of the foemen censure the creator for not having created the hardness of their bosoms in their soft feet, the former being useless because of their Widow-hood and the latter being now useful to enable them to flee away from the pursuing cavalry of the king. The demerit of the bosoms in their widow-hood refers to the demerit of their soft feet unfit for fleeing away from the enemy.</p>'
              }
            },
            {
              text:
                '<h3>3. Merit referring to at demerit</h3>तदभाग्यं धनस्यैव यन्नाश्रयति सज्जनम् ।',
              explanation: {
                sans:
                  'धनं निष्टमाश्रयति- सज्जनंतु नाश्रयतीतियत्तद्धनस्यैव अभाग्यं सज्जनस्यतु नकोपिदोष इतिभावः- अत्र सज्जनगुणेन तदनाश्रयणं धनस्यदोषत्वेन वर्णित मिति भवत्यन्यगुणेन अन्यदोषोत्पत्तिरूप उल्लासः ',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>यत् - </td><td>because</td></tr><tr><td>सज्जनम् - </td><td>The good man</td></tr><tr><td>न आश्रयति - </td><td>Does not resort to</td></tr><tr><td>तत् - </td><td>that</td></tr><tr><td>धनस्य एव - </td><td>Of the riches only</td></tr><tr><td>अभाग्यम् - </td><td>Misfortune</td></tr></table><p>It is the misfortune of riches themselves in that they do not resort to the good people.</p><p>Here, the merit of the good people refers to the demerit of the riches in their not resorting to the good people.</p>'
              }
            },
            {
              text:
                '<h3>4. Demerit reffering to a merit</h3>लाभोऽयमेव भूपालसेवकानां न चेद्वधः ॥',
              explanation: {
                sans:
                  'इत्थं हिताचरण तत्पराणां सेवकानां राज्ञा- न किंचिदपिदीयते चेत्तत्कथमिति केनचित्पृष्टे सतिकस्य चिदिदमुत्तरम् – हे सखेभूपालसेबकानां राजभृत्यानां वधोनचेत्तत्कृत हिंसानाभूद्यदि- अयमहिंसकरूप एवलाभः इतर लाभिमास्त्वितिभावः – अत्र राजकार्यदोषेण सेवकानां वधंधं विना प्राणै स्सहविनिर्गमनं गुणत्वेन वर्णितमिति भवति दोषेणगुणवर्णन रूप उल्लासः ॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>चेत् - </td><td>if</td></tr><tr><td>भूपालसेवकानाम् - </td><td>Of the servants of the king</td></tr><tr><td>वधः - </td><td>Killing</td></tr><tr><td>न - </td><td>Not</td></tr><tr><td>अयम् एव - </td><td>This itself</td></tr><tr><td>लाभः - </td><td>A boon</td></tr></table><p>If the servants of this king are not killed, then it itself is a boon (to them).</p><p>The king referred to is such a cruel man that non- killing his servants is considered a great boon even if they do not get their pay. Here, the cruelty, the demrit of the king, refers to the merit on the part of his servants, i.e., their continuance without being killed.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'अवज्ञालंकृतिः',
      title_eng: 'अवज्ञालंकृतिः - Non-Abandonment',
      id: 69,
      slokas: [
        {
          sloka: 'ताभ्यां तौ यदि न स्यातामवज्ञालंकृतिस्तु सा ।',
          sloka_explanation: {
            sans:
              'ताभ्यांगुणदोषाभ्यांतौ गुणदोषौन स्यातां यदिसा अवज्ञालंकृतिः – मतेष्टा – अन्यगुणेन अन्यगुणाभावः अन्यदोषेणान्य दोषाभावश्च वर्ण्यते यदितदाद्विविधावज्ञेत्यर्थः ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>यदि - </td><td>if</td></tr><tr><td>ताभ्याम् - </td><td>By those two</td></tr><tr><td>तौ - </td><td>Those two</td></tr><tr><td>न स्याताम् - </td><td>Do not occur</td></tr><tr><td>सा - </td><td>That</td></tr><tr><td>अवज्ञालंकृतिः - </td><td>Non- Abandonment</td></tr></table><p>If, by the delineation of them, i.e., merit and demerit of one object, they-the merit and demerit of another object-do not occur, then it is called the Non-Abandonment.</p>'
          },
          examples: [
            {
              text: 'स्वल्पमेवाम्बु लभते प्रस्थं प्राप्यापि सागरम् ॥',
              explanation: {
                sans:
                  'प्रस्थोनामव्रीह्यादि परिच्छेदको दारुविशेषः-न सागरं प्राप्यापि सल्पमेव अंबुलभते प्राप्नोति- बहुजल पूर्णार्णव प्रवेशे सत्यपि प्रस्थस्यस्वपरिमित जलमात्रलाभः – नतु बहुळ जललाभ इति समुद्रवृध्या तत्प्रविष्ट प्रस्धस्य वृध्यलाभ वर्णनादन्य गुणेनाध्य गुणालाभ वर्णनरूपावज्ञा ॥ ',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>प्रस्थम् - </td><td>A measure</td></tr><tr><td>सागरम् - </td><td>Ocean</td></tr><tr><td>प्राप्यापि - </td><td>Though reached</td></tr><tr><td>स्वल्पमेव - </td><td>Only a small quantity</td></tr><tr><td>अंबु - </td><td>Water</td></tr><tr><td>लभते - </td><td>Gets</td></tr></table><p>This measure (of 32 palas) gets only a small quantity into it even though it reached the ocean. </p><p>The particular measure holds the same quantity of water even in the ocean which is the receptacle of immense water and which is not able to supply more water.</p><p>Here, the merit of the measure refers to no merit of the ocean.</p>'
              }
            },
            {
              text:
                '<h3>Example of demerit occasioning no demerit.</h3>मीलंति यदि पद्मानि का हानिरमृतद्युतेः ॥',
              explanation: {
                sans:
                  'पद्मानिमीलंति यदि संकुचितंति चेत् अमृतद्युतेश्चंद्रस्य काहानिः सकल कनानंदकरे सुधाकरेभ्युदिते सति सकल जनानामानं ददर्शनान्मुख विकासो भवति एवं सति कमलानामेव मुकुळीभावश्चेत्तावता चंद्रस्यकानिंदेत्यर्थः अत्र कमलमुकुळीभावदोषेण चंद्रस्य तद प्राप्ति वर्णनादन्य दोषेणान्यदोषाभाव वर्णनरूपाद्वितीया ॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>यदि - </td><td>it</td></tr><tr><td>पद्मानि - </td><td>Lotuses</td></tr><tr><td>मीलंति - </td><td>Contract</td></tr><tr><td>अमृतद्युतेः - </td><td>To the moon</td></tr><tr><td>का - </td><td>What</td></tr><tr><td>हानिः - </td><td>Detriment</td></tr></table><p>If the lotuses were to contract (at night), then what detriment accrues to the moon (nectar-rayed).</p><p.Here, the demerit of the lotus refers to no demerit of the moon.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'अनुक्षा',
      title_eng: 'अनुक्षा - The Permission',
      id: 70,
      slokas: [
        {
          sloka: 'दोषस्याभ्यर्थनानुज्ञा तत्रैव गुणदर्शनात् ।',
          sloka_explanation: {
            sans:
              'तत्रैवदोषस्थल एवगुणदर्शनाद्धेतोः दोषस्याभ्यर्थना याज्ञानुज्ञेत्युच्यते',
            eng:
              '<h3>Word meanings</h3><table><tr><td>दोषस्य - </td><td>Of an undesired object</td></tr><tr><td>अभ्यर्थना - </td><td>Praying for</td></tr><tr><td>तत्रैव - </td><td>In itself</td></tr><tr><td>गुणदर्शनात् - </td><td>On account of the result of good qualities</td></tr><tr><td>अनुज्ञा - </td><td>The Permission</td></tr></table><p>The praying for an undesired object on the ground of the acquirement of virtuous qualities resulting from it, is called the Permission.</p>'
          },
          examples: [
            {
              text: 'विपदः सन्तु नः शश्वद्यासु संकीर्त्यते हरिः ॥',
              explanation: {
                sans:
                  'नोस्माकं विपद आपदश्वश्वत्सदासंतु भवंतु- यासु विपत्सुहरिस्संकीर्त्यते संपन्नास्तु धनमदांधत्वात्कदाचिदपि हरिंनस्मरंति- आपन्नस्तुतद्रक्षकं हरिं संस्मरंतीति हरिसंकीर्तन  रूपरक्षणगुणदर्शना दनिष्टापि विपत्प्रार्धितेति भवत्यनुज्ञा- इदंतुवीतरागाणां वचनम् ॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>नः - </td><td>To us</td></tr><tr><td>शश्वत् - </td><td>Always</td></tr><tr><td>विपदः - </td><td>Calamities</td></tr><tr><td>सन्तु - </td><td>Let occur</td></tr><tr><td>यासु - </td><td>In which</td></tr><tr><td>हरिः - </td><td>God Vishnu</td></tr><tr><td>संकीर्त्यते - </td><td>Is glorified</td></tr></table><p>Lord Krishna ! Let calamities always occurto us-the calamities in which the God Hari is gloriﬁed.</p><p>This is a request made to Krishna by Kunti, the mother of the Pandavas.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'लेशः',
      title_eng: 'लेशः-The Suggestion',
      id: 71,
      slokas: [
        {
          sloka: 'लेशः स्याद्दोषगुणयोर्गुणदोषत्वकल्पनम् ।',
          sloka_explanation: {
            sans:
              'दोषगुणयोः क्रमेणगुणदोषत्वकल्पनं स्यादनुकूलत्वाद्दोषस्यापि गुणत्वं प्रतिकूलत्वाद्गुणस्यापि दोषत्वं यत्र कल्प्यते तत्र द्विविधो लेश इत्यर्धः ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>दोषगुणयोः - </td><td>Of demerit and merit</td></tr><tr><td>गुणादोषत्वकल्पनम् - </td><td>Attribution of merit and demerit</td></tr><tr><td>लेशः स्यात् - </td><td>Is the suggestion</td></tr><tr><td>लेशः - </td><td>is a ﬁgure in which the merit and demerit of one thing are respectively construed to be the demerit and merit of the other.</td></tr></table>'
          },
          examples: [
            {
              text:
                'अखिलेषु विहङ्गेषु हन्त स्वच्छन्दचारिषु ॥ <br>शुक पञ्जरबन्धस्ते मधुराणां गिरां फलम् ॥',
              explanation: {
                sans:
                  'राजबहुमानलाभेन चिरकालं राजधान्यां विदुषिपुत्रे निवसतिसति तद्दर्शनोत्सुकसुअ स्वगृहस्थस्य पितुर प्रस्तुत प्रशंसारूपमिदं वचनं हे शुक अखिलेषु सर्वेषु विहंगेषु पक्षीषु स्वगृहेषु सुखंतिष्ठत्सुनत्सुत्वदन्य सर्वमूक पक्षिषु स्वच्छंदचरिषु यथेच्छं चरत्सु सत्सुतेतव पंजरबंधः निरोधनमितियत् तन्मधुराणां श्राव्याणां गिरां वाचां फलम्- हे पुत्रत्वदन्येष्व पंडित जनेषु सर्वेषु स्वगृहेषु सुखंतिष्ठत्सुतवायं राजधान्यां चिरकालवासः त्वदीयपांडित्य मूलक इतित्वत्पांडित्यमेव प्रतिकूलभूदिति वक्तव्येतत्प्रत्याय नायतत्सरूपशुकवृत्तांतो वर्णितः – अत्र प्रथमार्धे सर्वविहंगेषु दोषभूतमवाग्मित्वं स्वच्छंदचार हेतुत्वाद्गुणत्वे पंजरबंधस्तै मधुराणांगिरां फलम् ॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>हन्त - </td><td>Alas !</td></tr><tr><td>अखिलेषु विहंगेषु - </td><td>When all the birds</td></tr><tr><td>स्वच्छन्दचारिषु - </td><td>Freely wander</td></tr><tr><td>शुक ! - </td><td>Parrot !</td></tr><tr><td>ते - </td><td>Thy</td></tr><tr><td>पञ्चरबन्धः - </td><td>Confinement in a cage</td></tr><tr><td>मधुराणाम् - </td><td>Melodious</td></tr><tr><td>गिराम् - </td><td>Of songs</td></tr><tr><td>फलम् - </td><td>Result</td></tr></table><p>Alas ! parrot ! when all other birds freely wander about at their will, thy confinement in the cage is the result of thy melodious songs. </p><p>Here, the utterance of melodious sounds is construed to be a demerit in a parrot and the non-utterance is construed to be a merit in other birds.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'मुद्रा',
      title_eng: 'मुद्रा - The Sealing',
      id: 72,
      slokas: [
        {
          sloka: 'सूच्यार्थसूचनं मुद्रा प्रकृतार्थपरैः पदैः ।',
          sloka_explanation: {
            sans:
              'सूच्यार्धस्य सूचनीयस्य वस्तुनः प्रकृतार्थपरैः प्रकृतार्थ प्रतिपादनाय प्रयुक्तैः पदैरेव सूचनं मुद्रेत्युच्यते- प्रकृतार्थ प्रतिपादकैरेवपदैः प्रकृतस्य सूच्यस्य यत्र सूचनं वर्ण्यते- तत्र मुद्राख्योलंकारः ॥ ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>प्रकृतार्थपरैः - </td><td>Serving the sense on hand</td></tr><tr><td>पदैः - </td><td>By words</td></tr><tr><td>सूच्यार्थसूचनम् - </td><td>Intimation of the object to be hinted at</td></tr><tr><td>मुद्रा - </td><td>The Sealing</td></tr></table><p>If the words that serve to signify the sense on hand intimate also the object to be hinted at, than it is called the Sealing.</p>'
          },
          examples: [
            {
              text: 'नितम्बगुर्वी तरुणी दृग्युग्मविपुला च सा ॥',
              explanation: {
                sans:
                  'नितंबगुर्वीति- सा प्रकृतानायिकानितंब गुर्वीस्थूरनितंबेत्यर्थः – तधारुणीयुवतिः दृग्युग्मेलोचनयुगळे विपुलाविशालाक्षियुगळेत्यर्थः – अत्रनयिका संपत्ति प्रतिपादनपरेवचने लोचन वैपुल्यप्रतिपादनपरेण दृग्युग्मविपुलेतिपदेन एतद्वृत्तस्य युग्मविपुला नामधेयमिति प्रकृतिसूच्यवृत्तनाम्नोपि सूचनाद्भवतिमुद्रा॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>सा तरुणी - </td><td>That young maiden</td></tr><tr><td>नितंबगिर्वीं - </td><td>Having large buttocks</td></tr><tr><td>दृग्युग्मविपुला च - </td><td>Having a couple of spacious eyes</td></tr></table><p>This maiden has large buttocks and a couple of spacious eyes.</p><p>Here, युग्मविपुला serves to signify the sense required for the description of the lady the subject on hand. The same word is also the name of a metre of अनुष्टुम् class containing 8 syllables for each quarter wherein the seventh syllable of the 2nd and 4th quarters must be short. Thus, we see that the same word that served the purpose on hand- the description of the lady-also names the metre of the verse to be hinted at by the poet, the stanza being the illustration of that metre. </p><p>It is usual among the Sanskrit prosodians to illustrate a metre, deﬁned, by a stanza containing the name of that metre which will also serve to explain the sense contained in the stanza. Hence the ﬁgure is called मुद्रा an expression of things by their right names.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'रत्नावली',
      title_eng: 'रत्नावली-The Jewelled Necklace',
      id: 73,
      slokas: [
        {
          sloka: 'क्रमिकं प्रकृतार्थानां न्यासं रत्नावलीं विदुः ।',
          sloka_explanation: {
            sans:
              'क्रमिकाः लोकप्रसिद्धपौर्वापर्ययुक्ताः ये अप्रकृतार्धाः तेषां व्यासं क्रमेणैव निवेशनं रत्नावळिं रत्नावळिनामकमलंकारविदुः – अयमत्र निष्कर्षः यत्र प्रकृतस्य प्रसिद्धा प्रकृत ब्रह्मादितादात्म्य प्रत्यायनाय प्रकृतार्ध प्रतिपादन समथैः प्रसिद्ध क्रममविसृज्यैव आप्रकृतार्थो नोर्दिश्यते तत्र रत्नावळिरिति॥ ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>प्रकृतार्थानाम् - </td><td>Of the words serving the sense on hand </td></tr><tr><td>क्रमिकं - </td><td>Serial</td></tr><tr><td>न्यासम् - </td><td>Putting</td></tr><tr><td>रत्नावलीम् - </td><td>The Jewelled Necklace</td></tr><tr><td>विदुः - </td><td>(poets) know</td></tr></table><p>Ratnavali is a ﬁgure containing a number of  words serving the sense on hand but put in an established order of succession (with reference to objects not on hand).</p>'
          },
          examples: [
            {
              text: 'चतुरास्यः पतिर्लक्ष्म्याः सर्वज्ञस्त्वं महीपते ॥',
              explanation: {
                sans:
                  'हे महीपतेत्वं चतुरास्यः ब्रह्माचारुवदनश्च- तथालक्ष्म्याह् पतिः विष्णुः राज्यलक्ष्मीश्वरश्च तथासर्वज्ञः शिवः अशेषविशेषज्ञश्च अत्र ब्रह्मविष्णु महेश्वरा इति प्रसिद्ध सहवादानांवाचकैः पदैः प्रसिद्धपाठ क्रमेणैव प्रकृतस्य राज्ञः प्रतिपादनाद्रत्नावळिः- अत्र राज्ञः प्रसिद्ध ब्रह्मादितादात्म्यं च प्रतीयते ॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>महीपते - </td><td>O king !</td></tr><tr><td>त्वम् - </td><td>Thou</td></tr><tr><td>चतुराम्यः - </td><td>Having handsome face or four headed God Brahma</td></tr><tr><td>लक्ष्म्याः - </td><td>Of riches = of Goddess Lakshmi</td></tr><tr><td>पतिः - </td><td>Lord                सर्वज्ञः - </td><td>Omniscient or God Siva.</td></tr></table><p>O Lord of earth! thou hast a handsome face (art god Brahma) ; thou art the lord of wealth (the Lord Vishnu) ; thou art omniscient (Lord Siva).</p><p>Here, the words चतुरास्यः etc., serve the sense on hand in describing the king and are also names of <br> चतुरं आस्यं यस्य सः <br> चत्वारि आस्यानि यस्य सः<br>The Hindu Triad, in their order-Brahma, Vishnu and Siva, the objects not on hand to which the king is identiﬁed in succession.</p><p>The difference between this ﬁgure and the ﬁgure मुद्रा is that in this figure the sense of the words referring to objects not on hand - i. e. the sense to be hinted at—also serves to explain the sentence in another way under a pun, but it is not so in the Mudra.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'तद्गुणः ',
      title_eng: 'तद्गुणः  -The Borrower',
      id: 74,
      slokas: [
        {
          sloka: 'तद्गुणः स्वगुणत्यागादन्यदीयगुणग्रहः ।',
          sloka_explanation: {
            sans:
              'तद्गुण इति स्वगुणत्यागादन्यदीय गुणस्य ग्रहः स्वीकारः तद्गुण इत्युच्यते ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>स्वगुणात्यागात् - </td><td>By quitting one’s own quality</td></tr><tr><td>            अन्यदीयगुणाग्रहः - </td><td>Assuming the quality of another</td></tr><tr><td>तद्गुणाः - </td><td>The Borrower</td></tr></table><p>When a thing quits its own quality and assumes that of another (excellent one), it is the Borrower.</p>'
          },
          examples: [
            {
              text: 'पद्मरागायते नासामौक्तिकं तेऽधरत्विषा ॥',
              explanation: {
                sans:
                  'हे सखितेना सामौक्तिकं नासिकाभूषणमुक्तामणिः – अधरत्विषा ओष्ठकांत्या पद्मराकायते पद्मरागमणिरिवाचरति- अत्रनासामौक्तिकस्य स्वथावळ्यत्यागेन अन्याधररक्तता स्वीकारवर्णनाद्भवति तद्गुणः ॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>ते - </td><td>Thy </td></tr><tr><td>नासामौक्तिकम् - </td><td>Nose-pearl</td></tr><tr><td>अधरत्विषा - </td><td>By the luster of the lower lip.</td></tr><tr><td> पद्मरागायते - </td><td>Becomes Padmaraga (ruby of lotus colour)</td></tr></table><p>O Lady! The pearl of the nose-ornament becomes a padmaraga ruby by coming in contact with the luster of thy (red) lower lip.</p><p>Here, the colour of the lady’s lower lip, being superior, makes the white pearl of her nose ornament appear like a padmaraga ruby. </p><p>The pearl has been eclipsed by the lady’s lip.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'पूर्वरूपम्',
      title_eng: 'पूर्वरूपम् -The Original',
      id: 75,
      slokas: [
        {
          sloka: 'पुनः स्वगुणसंप्राप्तिः पूर्वरूपमुदाहृतम् ।',
          sloka_explanation: {
            sans:
              'पुनस्स्वगुणस्यनं प्राप्तिः स्वीकारः पूर्वरूपमित्युच्यते स्वगुणत्यागेन अन्यगुणस्वीकारे सरिकुतश्चिद्धेतोः पुनस्स्वकीय गुणमेव प्राप्नुयाद्यदितदा पूर्वरूपं नामालंकार इतिनिष्कर्षः ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>पुनः - </td><td>again</td></tr><tr><td>स्वगुणासंप्राप्तिः - </td><td>Assumption of one’s own quality</td></tr><tr><td>पूर्वरूपम् - </td><td>The original</td></tr><tr><td>उदाहृतम् - </td><td>Is called</td></tr></table><p>When an object that has quitted its form as in the preceding figure is again restored to its original state by the presence of some other agency, it is called the Original.</p>'
          },
          examples: [
            {
              text: 'हरकण्ठांशुलिप्तोऽपि शेषस्त्वद्यशसा सितः ॥',
              explanation: {
                sans:
                  'हे रामचंद्रशेषोनंतः हरकंठां शुभिः शिवगळ पुनस्स्वगुण संप्राप्तिः पूर्वरूपमुदाहृतम् । हरकंट्ःआंशु लिप्तोपिशेषस्त्वद्यशसासितः ॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>हरकण्ठांशुलिप्तोऽपि - </td><td>Though covered with the luster of Siva’s neck</td></tr><tr><td>शेषः - </td><td>The present lord</td></tr><tr><td>त्वद्यशसा - </td><td>By thy fame</td></tr><tr><td>सितः - </td><td>White</td></tr></table><p>O king! The lord of the serpents शेषः, though covered with the lustre of Siva’s neck, is made white by thy fame.</p><p>Here, the serpentlord worn round Siva’s neck of dark-blue colour-on account of the existence of the Kalakuta poison in it-changed his colour and thus became a borrower and by the operation of another agency- the white fame of the king-he is restored to his former state.</p>'
              }
            }
          ]
        }
      ],
      types: 1,
      type: [
        {
          sloka:
            '<h3>Second kind of the Original.</h3>पूर्वावस्थानुवृत्तिश्च विकृते सति वस्तुनि ।',
          sloka_explanation: {
            sans:
              'वस्तुनिविकृते विकारयुक्ते सत्यपि-पूर्वावस्थायाह् प्रागवस्थायाश्च अनुवृत्तिरनुसृतिः निष्पत्तिरित्यर्थः – साचपूर्व रूपमित्युच्यते',
            eng:
              '<h3>Word meanings</h3><table><tr><td>वस्तुनि - </td><td>An object</td></tr><tr><td>विकृते सति - </td><td>When disappeared</td></tr><tr><td>पूर्वावस्थानुवृत्तिः - </td><td>Continuity of the original state</td></tr><tr><td>च - </td><td>Also</td></tr></table><p>The continuity of the original condition, not with standing the disappearance of an object the cause of such continuance, by the operation of another agency, is called the second kind of the Original.</p>'
          },
          examples: [
            {
              text: 'दीपे निर्वापितेऽप्यासीत्काञ्चीरत्नैर्महन्महः ॥',
              explanation_sans:
                'दीपे निर्वापिते सत्यपिकयाचिन्मुग्धयेति शेषः – कांचीरत्नैः तदीयमेखलाखचितमणिभिः महद्दीपादप्युत्कृष्टं महः कांतिरासीत्- अविरभूदित्यर्धः – कयाचिन्मुग्धया लज्जावशाद्रतीकाले दीपेनष्टीकृते सत्यपिकांचीरत्नै रेवपूर्वावस्थापर प्रकाशकत्व लक्षणानिवृत्तिरहिताभूदिति वर्णनाद्भवति पूर्वरूपभेदः ॥',
              explanation_eng:
                '<h3>Word meanings</h3><table><tr><td>दीपे - </td><td>Lamp</td></tr><tr><td>निर्वापिते अपि - </td><td>Though extinguished</td></tr><tr><td>कांचीरत्नैः - </td><td>By the jems inlaid in the girdle of a lady</td></tr><tr><td>महत् - </td><td>Ample </td></tr><tr><td>महः - </td><td>Light</td></tr><tr><td>आसीत् - </td><td>Was</td></tr></table><p> Although the lamp was put out (by a lady in the bed chamber), still there was ample light issuing from the jerns of the girdle (of that lady).</p><p>Here, a pretty young maiden but an artless one ( मुग्धा ) put out the lamp of the bed chamber through bashfulness; still the light continued as before by the lustre of the jems inlaid in the girdle of that maiden.</p>'
            }
          ]
        }
      ]
    },
    {
      title_sans: 'अतद्गुणाः',
      title_eng: 'अतद्गुणाः- The Non-Borrower',
      id: 76,
      slokas: [
        {
          sloka: 'संगतान्यगुणानङ्गीकारमाहुरतद्गुणम् ।',
          sloka_explanation: {
            sans:
              'संगतः स्वसंयुक्तः योन्य पदार्थस्तस्ययोगुणस्त स्यानंगीकारः अस्वीकरणमतद्गुणाख्य मलंकारमाहुः स्वसंयुक्तान्य निष्ठगुनस्य स्वस्मिंत्संक्रमणयोग्यस्यापि यत्रासंक्रमणं वर्ण्यते तत्र तद्गुण इति निष्कर्षः ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>संगतान्यगुणानंमीकारम् - </td><td>Non-assuming the quality of another object though connected with it.</td></tr><tr><td>अतद्गुणम् - </td><td>Non-Borrower</td></tr><tr><td>आहः - </td><td>Call</td></tr></table><p>The non-assuming, by an object, of the quality of another though connected with it (or in other words, when an object does not borrow the quality of another object, it) is called the Non- Borrower.</p>'
          },
          examples: [
            {
              text: 'चिरं रागिणि मच्चित्ते निहितोऽपि न रञ्जसि ॥',
              explanation: {
                sans:
                  'स्निह्यमपिनायकमुपेक्ष्य कुपितां नायिकामुद्दिश्यनायकवचनमिदम्- हे नायिके रागिणित्वद्विषयक प्रेमयुक्ते अरुणे च मच्चित्ते- चिरंचिरकालं निहितास्थापितात्वं नरज्यसि अनुरक्तालोहिता च नभवसि- चिरमनुसरंतमपिमां किमिति नानु गृह्णासीतितात्पर्यम्- अत्ररक्ते मनसिसितायां नायिकायां स्वन्वंयुक्रमनोनिषरागा संक्रमणोक्तिरतद्गुणः ॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>चिरम् - </td><td>For a long time</td></tr><tr><td>रागिणि - </td><td>Red (affectionate)</td></tr><tr><td>मच्चित्ते - </td><td>In my mind</td></tr><tr><td>निहितोऽपि - </td><td>Though seated</td></tr><tr><td>न रञ्जसि - </td><td>Dost not become red (affectionate)</td></tr></table><p>O Lover! though seated long in my red (affectionate) mind, yet thou dost not become red (affectionate).</p><p>The strikingness of this example rests upon the use of the word राग which means both redness and affection.</p><p>Here, the lover does not become red (affectionate) though he is seated in the red (more affectionate) mind of the lady. Hence it is the Non Borrower</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'अनुगुणाः',
      title_eng: 'अनुगुणाः -The Conformity',
      id: 77,
      slokas: [
        {
          sloka: 'प्रक्सिद्धत्वगुणोत्कर्षोऽनुगुणः परसंनिधेः ।',
          sloka_explanation: {
            sans:
              'प्राक्सिद्धः गुणवत्सन्निधानात्पूर्वं सित्थःयोगुणः तस्य परसंणिधेः गुणवदन्यसन्निधानाद्योगुणोत्कर्षो गुणातिशयस्सोनुगुण इत्युच्यते॥ ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>परसन्निधेः - </td><td>By the presence of another object</td></tr><tr><td>प्राक्सिड्वस्वगुण्त्कर्षः - </td><td>The pre-eminence of one’s own previously settled quality</td></tr><tr><td>अनुगुणाः - </td><td>The Conformity</td></tr></table><p>The pre-eminence, of ones own previously settled quality, by the presence of another agency, (or, in other words, when the original quality of an oject is made pre-eminent by the proximity of another object, it) is called the Conformity</p>'
          },
          examples: [
            {
              text: 'नीलोत्पलानि दधते कटाक्षैरतिनीलनम् ॥',
              explanation: {
                sans:
                  'नीलोत्पलानि नायिकाकर्णांत गतेंदीवराणि- कटाक्षैः नायिकाकटाक्षवीक्षणैः अतिनीलतां पूर्वादभ्यधिकनैल्यंदधते बिभ्रति- अत्र स्वतोनीलानामप्युत्पलानां कटाक्ष प्रसारेणातिनैल्यवर्णनाद्भवत्य नुगुणालंकारः ॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>नीलोत्पलानि - </td><td>Blue lotuses</td></tr><tr><td>कटाक्षैः - </td><td>By the side-glances</td></tr><tr><td>अतिनीलताम् - </td><td>Extreme blueness</td></tr><tr><td>दधते - </td><td>Bear</td></tr><tr><td>The blue lotuses attain more blueness by the side-glances (of a lady falling on them)</td></tr></table><p>Here, the dark blue lustre of the lotuses is increased by the pre-eminent blue side-glances. of the lady falling on them.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'मिलितम्',
      title_eng: 'मिलितम्-The Lost',
      id: 78,
      slokas: [
        {
          sloka: 'मीलितं यदि सादृश्याद्भेद एव न लक्ष्यते ।',
          sloka_explanation: {
            sans:
              'सादृश्याद्गुणादिस्यान्य सदृशत्वाद्भेदः उभयवैलक्षण्यं न लक्ष्यते यदितदामीलितमित्यर्धः ॥ ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>यदि - </td><td>if</td></tr><tr><td>सादृश्यात् - </td><td>On account of resemblance</td></tr><tr><td>भेदः - </td><td>A distinction</td></tr><tr><td>एव - </td><td>Alone</td></tr><tr><td>न लक्ष्यते - </td><td>Is not perceived</td></tr><tr><td>मीलितम् - </td><td>The Lost</td></tr></table><p>When distinction alone p is net perceived (between two objects on hand) on account of their resemblance, then it is the Lost.</p>'
          },
          examples: [
            {
              text: 'रसो नालक्षि लाक्षायाश्चरणे सहजारुणे ॥',
              explanation: {
                sans:
                  'सह जारुणेस्वभाव रक्तेचरणेनायिकापदे- लाक्षायायावकस्य रसोनालक्षि चरणापेक्षयाव्यक्तं तरत्वेन नालक्ष्य इत्यर्थः – अत्रचरणालक्तक रसयोरारुण्यगुणसा सोनालक्षिलाक्षायाश्चरणे सहजारुणे ॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>सहजारुणे - </td><td>Naturally red</td></tr><tr><td>चरणे - </td><td>In the foot</td></tr><tr><td>लाक्षायाः - </td><td>Of the red lac</td></tr><tr><td>रसः - </td><td>Dye</td></tr><tr><td>न अलक्षि - </td><td>Was not perceived</td></tr></table><p>The dye of the red lac was not perceived in the naturally red feet (of this beautiful maiden).</p><p>Here, we see the disappearance of the dye of the red lac on account of its having been eclipsed by the natural redness of the maiden’s feet.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'सामान्यम्',
      title_eng: 'सामान्यम्-The Sameness',
      id: 79,
      slokas: [
        {
          sloka: 'सामान्यं यदि सादृश्याद्विशेषो नोपलक्ष्यते ।',
          sloka_explanation: {
            sans:
              'सादृश्यात्साधर्म्यात् कांत्येति विशेषः- विशेषः उपमानोपमेययोः परस्परव्यावर्तक धर्मः – नोपलभ्यते नावधार्यते यदि- तर्हि सामान्यमित्युच्यत इत्यर्थः ॥ ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>यदि - </td><td>if</td></tr><tr><td>सादृश्यात् - </td><td>On account of resemblance</td></tr><tr><td>विशेषः - </td><td>Distinguishable peculiarity</td></tr><tr><td>नैव लक्ष्यते - </td><td>Is not at all perceived</td></tr><tr><td>सामान्यम् - </td><td>The Sameness</td></tr></table><p>When any distinguishable peculiarity what- ever is not perceived (between two objects coming in contact) on account of their close resemblance, it is called the Sameness.</p>'
          },
          examples: [
            {
              text: 'पद्माकरप्रविष्टानां मुखं नालक्षि सुभ्रुवाम् ॥',
              explanation: {
                sans:
                  'पद्माकर प्रविष्टानां सरोमध्यगतानां सुभ्रुवां सुंदरीणां मुखं जातावेक वचनं मुखानित्यर्धः – ना लक्षिनावधारितं सरः प्रविष्टस्त्रीमुखानामत्यंत सादृश्येनव्यावर्तक धर्मानुपलंभाद्भवति सामान्यम् ॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>पद्माकरप्रविष्टानाम् - </td><td>That entedred the lotus-pool</td></tr><tr><td>सुभ्रुवाम् - </td><td>Of women of beautiful eye-brows</td></tr><tr><td>मुखम् - </td><td>Face</td></tr><tr><td>न अलक्षि - </td><td>Was not perceived</td></tr></table><p>The faces of the women of beautiful eye-brows that entered the lotus-pool are not perceived.</p><p>Here, the faces of the women were not distinguishable from the lotuses in the absence of any dis- criminative quelity between the two which are spoken of as having become identical.</p><p>In the मिलित (LXXLX), one of the objects is inferior in quality and is not apprehended by its being eclipsed by the superior quality of the other.</p><p>In this ﬁgure, the two objects could not be discriminated through their close resemblance. In the मीलित, the inferior object gives up its own quality. Here both the objects do not give up their qualities.</p><p>Hence, this ﬁgure is different from the मीलित.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'उन्मीलितम् & विशेषकः',
      title_eng: 'उन्मीलितम्-The Un-Lost and विशेषकः-The Un-Sameness',
      id: 80,
      slokas: [
        {
          sloka: 'भेदवैशिष्ट्ययोः स्फूर्तावुन्मूलितविशेषकौ ।',
          sloka_explanation: {
            sans:
              'भेदवैशेष्ययोर्भिन्नत्व विशेषधर्मयोः स्फूर्तौ प्रकाशने सति- क्रमेणोन्मीलितविशेषकाख्यावलंकारौ भवत इत्यर्थः – द्वयोस्सादृश्येनभेदेंदि रोहिते सति दैवात्कारणांतराद्यत्र भेदोपलंभस्तत्रोन्मीळितम्- भिन्नत्वेन गृहीतुमपि विशेषास्फूर्तौ सत्यांदैवाद्विशेष धर्म ग्रहणादिदमेव मुखमित्यादि विवेकोभवति चेत्तत्रविशेषक इति निष्कर्षः ॥ ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>भेदवैशिष्ट्ययोः - </td><td>Of any distinction and of any discriminating peculiarity</td></tr><tr><td>स्फूर्तौ - </td><td>In the manifestation</td></tr><tr><td>उन्मीलित विशेषकौ - </td><td>The Un-Lost and The Un-Sameness</td></tr></table><h3>Definition</h3><p>If any distinction prohibited in the मीलित(LXXIX) become manifest afterwards, it is called the उन्मीलितम्.</p><h3>Definition</h3><p>If any discriminating peculiarity prohibited in the सामान्य become manifest afterwards, it is called the विशेषकः .</p>'
          },
          examples: [
            {
              text:
                '<h3>Example of the figure उन्मीलित</h3>हिमाद्रिं त्वद्यशो मग्नं सुराः शीतेन जानते ॥',
              explanation: {
                sans:
                  'हे श्रीरामचंद्रसुरादेवास्त्वव्यशोमग्नं भवत्कीर्त्यंतरित्तं सादृश्यात्तदेकतापन्नमित्यर्थः हिमाद्रिं शैत्येनशैत्यगुणेन जानतेतदुभयभेदं निश्चिव्यंतीत्यर्थः – अत्र यशसा अभिन्नस्य हीमाद्रेश्शैत्यधर्मेभ भिन्नत्वेन स्फुरणादुन्मीलितम् ॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>सुराः - </td><td>The celestial beings</td></tr><tr><td>त्वद्यशोमग्नम् - </td><td>Eclipsed by thy fame</td></tr><tr><td>हिमाद्रिम् - </td><td>The Himalaya mountain</td></tr><tr><td>शीतेन - </td><td>By chilliness</td></tr><tr><td>जानते - </td><td>Recognize</td></tr></table><p>O king ! The celestial beings recognize the Himalaya mountain, eclipsed by thy (all-pervading) fame, through its chillness.</p><p>Here, the Himalaya which is white was lost in the whiter fame of the king and was afterwards recognized by the Gods on account of its chillness.</p>'
              }
            },
            {
              text:
                '<h3>Example of the figure विशेषकः </h3>लक्षितान्युदिते चन्द्रे पद्मानि च मुखानि च ॥',
              explanation: {
                sans:
                  'चंद्र उदिते सति- पद्मानिमुखानि च इमानि पद्मानि इमानि स्त्रीमुखानीति विविच्यगृहीतानीत्यर्थः – मुखानां पद्मानां विशेषास्फूर्तौ सत्यां चंद्रोदयकृत मुकुळनेन इमानिपद्मानि चंद्रोदयेपि विकासयुक्तत्वादिमानि स्त्रीमुखानीति विविच्यगृहीतानीति कारणात् विशेषः ॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>चन्द्रे उदिते - </td><td>When the moon had risen</td></tr><tr><td>पद्मानि - </td><td>Lotuses</td></tr><tr><td>मुखानि च - </td><td>And the faces</td></tr><tr><td>लक्षितानि - </td><td>Became distinguishable</td></tr></table><p>After the rise of the moon, the lotuses and the faces of the damsels became distinguishable.</p><p>In the सामान्य, the faces of the damsels that entered the lotus-pool were undistinguishable from the lotuses on account of their likeness but after the rise of the moon the lotuses faded and the faces began to appear more beautiful and hence they became discriminated.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'उत्तरम्',
      title_eng: 'उत्तरम् -The Reply',
      id: 81,
      slokas: [
        {
          sloka: 'किंचिदाकूतसहितं स्याद्गूढोत्तरमुत्तरम् ।',
          sloka_explanation: {
            sans:
              'किंचिदाकूतेनाशयेन महितं च मत्कृतंयुदुत्तरं तद्गूढोत्तरं स्यादित्यर्थः – केनचित्किंचिद्विषयक प्रश्नेकृते सति तत्र केनचित्स्वाशय गर्भमुत्तरं दीयते चेत्तद्गूढोत्तरं स्यादित्यर्धः ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>किंचिदाकूतसहितम् - </td><td>Containing some import</td></tr><tr><td>गूढोत्तरम् - </td><td>A secret reply</td></tr><tr><td>उत्तरं स्यात् - </td><td>Is The Reply</td></tr><tr><td>पान्थ ! - </td><td>O traveler !</td></tr></table><p>A secret reply containing some indirect import (of the speaker) is called the Reply. Or, in other words, when the speaker indirectly expresses his or her own intention in a reply made to a query previously put by some person (which query is to be inferred from the answer), it is called the Reply.</p>'
          },
          examples: [
            {
              text: 'यत्रासौ वेतसी पान्थ तत्रेयं सुतरा सरित् ॥',
              explanation: {
                sans:
                  'अस्यास्सरितः कुत्रवातरणमार्ग इति पृच्छंतं पांथमुद्दिश्यतत्संगमे साभिलाषायाः कस्याश्चिदिदम्मुतरम् ॥ हे पांथ असावदूरे परिदृश्यमानः  वेतसोवंहुळकुंजः यत्रयस्मिदेशेवर्तते तत्र देशे इयं पुरोवर्तिनी सरित् नदीसुतरासुखेन तरितुं शक्या- तंदेशंगच्छ- जनसम्म द्गूढोत्तरमुत्तरम् । ',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>यत्र - </td><td>Where</td></tr><tr><td>असौ वेतसौ - </td><td>That rattan</td></tr><tr><td>तत्र - </td><td>There</td></tr><tr><td>इयं सरित् - </td><td>This river</td></tr><tr><td>सुतरा - </td><td>Is fordable</td></tr></table><p>O Traveller! (the place) where that ratan is seen-there this river is fordable.</p><p>From this, we understand theta traveller has asked the speaker, a lady here, the place where a particular river can be crossed. The lady becoming enumoured of him makes this reply by showing a particular place which was also indirectly named by her as a place of assignatiou for their meeting.</p>'
              }
            }
          ]
        }
      ],
      types: 1,
      type: [
        {
          sloka:
            '<h3>Second kind of the Reply.</h3>पश्नोत्तरान्तराभिन्नमुत्तरं चित्रमुच्यते ।',
          sloka_explanation: {
            sans:
              'प्रश्नोत्तरांतराभिन्नं प्रश्नाभिन्नमुत्तरांतराभिन्नं च यदुत्तरंतच्चित्रोत्तरमित्यर्धः – केनचित्किंचिद्विषौअक प्रश्नेकृते सत्यन्येन चतुरजनेन तत्प्रश्नवाक्यमेवोत्तरत्वेन दत्तं चेत्तत्प्राश्नाभीन्नोत्तरमित्यर्थः – केनचिदर्धद्वय विषयक प्रश्नेकृते सतितस्योत्तरद्वये वाच्येन्येन निपुणजनेन एकमेवोत्तरमुत्तराभिन्नत्वेन दत्तं चेत्प्रश्नद्वयस्याप्येकमेव समर्थतिमुत्तरंदत्तं यदितदुत्तरांतराभिन्नोत्तरमित्युच्यत इत्यर्थः',
            eng:
              '<h3>Word meanings</h3><table><tr><td>प्रश्न+उत्तरान्तर+अभिन्नम् - </td><td>Consisting of same words of the query and its two replies</td></tr><tr><td>चित्रमुत्तरम् - </td><td>A skilful reply</td></tr><tr><td>उत्तरम् - </td><td>The Reply</td></tr></table><p>When a skilful reply is not different from the query, or in other words, when a reply made consists of the same words of the question asked, and when one reply made serves for two queries asked, then it is called also the Reply.</p>'
          },
          examples: [
            {
              text: 'के दारपोषणरताः के खेटाः किं चलं वयः ॥',
              explanation_sans:
                'केदारपोषणरताः भार्यापोषणासक्ताः केवास्युः अन्येतु केदारपोषणरता इत्यखंडमेव वाक्यं- केदाराणां व्रीह्याद्युत्पादक क्षेत्राणां पोषणेवर्थने येरताः आसक्ताह् कृषिजीवना इत्यर्थः – अत एवदारपोषण रता इत्युत्तरवाक्यार्धः – कृषितोनास्तिदुर्भिक्षमितिन्यायेन तेषामेवकुटुंबरक्षण शक्तिरित्यर्थः',
              explanation_eng:
                '<h3>Word meanings</h3><table><tr><td>के - </td><td>Who</td></tr><tr><td>दारपोषणरताः - </td><td>Those that are engaged in maintaining their wives</td></tr><tr><td>केदारपोषणरताः - </td><td>Those that are bent upon bringing the lands to perfection= husbandmen</td></tr><tr><td>के खेटाः - </td><td>Who move in the air</td></tr><tr><td>किं चलम् - </td><td>Which is transitory</td></tr><tr><td>वयः - </td><td>(1) Birds (2) the age</td></tr></table><p>Q. Who are those that are engaged in maintaining their wives ?</p><p>R. Those that are bent upon bringing the lands to perfection or husbandmen.</p><p>Q. Who move in the air and which is transitory-</p><p>R. वयः (1) birds (2) age.</p><p>केदारः = a ﬁeld. The ﬁrst question के दारपोषणरताः and its answer केदारपोषणरताः consist of the same words (lit. letters). वयः is the one reply made to the two questions asked. वयः when it means, ‘birds’ is the nominative plural of the word वि; and when it means ‘the age’ it is the nominative singular of the neuternoun वयस्. Hence these are styled the skilful replies. </p>'
            }
          ]
        }
      ]
    },
    {
      title_sans: 'सूक्ष्मम्',
      title_eng: 'सूक्ष्मम्-The Subtle',
      id: 82,
      slokas: [
        {
          sloka: 'सूक्ष्मं पराशयाभिज्ञे तरसाकूतचेष्टितम् ।',
          sloka_explanation: {
            sans:
              'पराशयाभिज्ञः अन्याभिप्रायवेदी इतरोयस्तस्य साकूतचेष्टितं साभिप्रायचेष्टाविशेष स्सूक्ष्ममित्युच्यते- केनचिच्चतुरजनेनलोचनादि चेष्टयैवस्वाभीष्टे प्रार्थिते सति तदभिप्रायवेदिनः कस्यचिज्जनस्यतदुचित स्वाभिप्रायसूचक चेष्टाविशेष स्सूक्ष्माख्योलंकार इतिनिष्कर्षः ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>परा+चेष्टितम् - </td><td>Skilled in understanding the import of another</td></tr><tr><td>इतरः - </td><td>A second person</td></tr><tr><td>तस्य - </td><td>His</td></tr><tr><td>साकूतचेष्टितम् - </td><td>A significant act</td></tr><tr><td>सूक्ष्मम् - </td><td>The Subtle</td></tr></table><p>A signiﬁcant act or gesture, of a person, intimated to another who is able to understand such gestures of others is called the Subtle.</p>'
          },
          examples: [
            {
              text: 'मयि पश्यति सा केशैः सीमन्तमणिमावृणोत् ॥',
              explanation: {
                sans:
                  'प्रिहितं परवृत्तांत ज्ञातुस्साकूतचेष्टितम् । प्रियेगृहागते प्रातः कांतातल्पमकल्पयत् ॥व्याजोक्तिरन्य हेतूक्त्यायदाकारस्यगोपनम् । सखिपश्यगृहारामपरागै रस्मिधूसरा ॥ गूढोक्ति                यिकयाकिमाचरित मितिकेन चत्सलाख्यापृष्टस्य कस्यचिदेवं वचनं- मयिपश्यतिसाभिप्रायं विलोकयति सतिसानायिकासीमंतमणिं स्वीयकेश बद्धभूषण रत्नं केशैरावृणोदाच्छादितवती- आवयोस्संकेतकालः क इत्याशयेन तत्परिज्ञानार्थं मयिसाकूतं पश्यतिसतिसामदाशयं ज्ञात्वास्सूर्यास्तमया नंतर मंधकारोदये सति आवयोस्संकेत काल इत्यभिप्रायसूचकं स्वकीय केशैस्सीमंतमणि तिरोधानरूपं चेष्टाविशेषं कृतवतीत्यर्थः – अत्रनायकाभिप्रायं जानंत्यानायिकायास्पाकूतं केशैर्मण्यावरणं कृतमिति भवति सूक्ष्मम् ॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>सा - </td><td>That (maiden)</td></tr><tr><td>मयि पश्यति - </td><td>When I was looking</td></tr><tr><td>केशैः - </td><td>By the tresses</td></tr><tr><td>सीमन्तमणिम् - </td><td>The crest-jewel</td></tr><tr><td>आवृणोत् - </td><td>Concealed</td></tr></table><p>( Friend ! ) When I was seeing (her anxiously for time of assignation), she concealed her crest jewel under her tresses.</p><p>Here, the time of assignation eagerly inquired for by the lover is guessed from the lady’s act of concealing her bright crest-jewel under her dark tresses-a mark indicating the time of night when the bright sun is concealed under the darkness of the night.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'पिहितम्',
      title_eng: 'पिहितम् - The Covering',
      id: 83,
      slokas: [
        {
          sloka: 'पिहितं परवृत्तान्ताज्ञातुः साकूतचेष्टितम् ।',
          sloka_explanation: {
            sans:
              'परवृत्तांतज्ञातुः परकीयवृत्तांतज्ञस्या साकूतचेष्टितं साभिप्राय चेष्टाविशेषः पिहितमित्युच्यते- परवृत्तांतंतदीयलक्षणैः ज्ञात्वाकं रतोद्घाट्यैवस्वस्य ॥ तदभिज्ञतास्थित्यभिप्रायगर्भः इतर जनचेष्टा विशेषः पिहितमित्युच्यते ॥',
            eng:
              '<h3>Word meanings</h3><table><tr><td>परवृत्तान्तज्ञातुः - </td><td>Of one that knows the secret of the other</td></tr><tr><td>साकूतचेष्टितम् - </td><td>Significant act or an insinuation</td></tr><tr><td>पिहितम् - </td><td>The Covering</td></tr></table><p>A signiﬁcant act or an insinuation of a person that he or she knows the secret of another is called The Covering.</p>'
          },
          examples: [
            {
              text: 'प्रिये गृहागते प्रातः कान्ता तल्पमकल्पयत् ॥',
              explanation: {
                sans:
                  'प्रियेकांते प्रातः प्रातः कालेगृहागते स्वगृहं प्रत्यागतेसति कांतातप्रियातल्पं शय्यां अकल्पयत् आस्तरणादिना सज्जीकृतवतीत्यर्थः – रात्रौ स पत्नीगृहेयधेष्ट विहारेण जागरणं कृत्वा प्रातः काले प्रियेसापराध इवस्वकीय गृहं प्रत्यागते सतितद्गत कुंकुमादि चिह्नैस्तदीयवृत्तांतं ज्ञात्वा गांभीर्यात्कं रतस्तमनुद्घाट्यैव रात्रौ मत्सपत्नीगृहे जागरणाच्छ्रांतोसि- अतोस्यांशय्यायां सुखंशेष्वे त्यभिप्रायेणेयं तल्पकल्पन चेष्टेति भवति पिहितम् ॥ ',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>प्रातः - </td><td>In the morning</td></tr><tr><td>प्रिये गृहागते - </td><td>When the lover came to the house</td></tr><tr><td>कान्ता - </td><td>The lady</td></tr><tr><td>तल्पम् - </td><td>The bed</td></tr><tr><td>अकल्पयत् - </td><td>Prepared</td></tr></table><p>Early in the morning, when the lover came to the house, his lady prepared bed (for him).</p><p>Here, a lady when she saw her husband coming to her house in the morning with the marks of his having toyed with another lady, a rival one, at once prepared bed for his rest thus intimating to him that she has known his secrets.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'व्याजोक्तिः',
      title_eng: 'व्याजोक्तिः - The Disembler',
      id: 84,
      slokas: [
        {
          sloka: 'व्याजोक्तिरन्यहेतूक्त्या यदाकारस्य गोपनम् ।',
          sloka_explanation: {
            sans:
              'अन्यहेतूक्त्या हेत्वंतरकथनेन आकारगोपनं स्वीयविलक्षणाकार निगूहनमितियत्साव्याजोक्तिः यत्र केनचिन्निपुणे नगोप्य हेतुकृतमाकारवैलक्षण्यं हेत्वंतरकल्पनेन निगूह्यते- तत्र व्याजोक्तिरिति निष्कर्षः',
            eng:
              '<h3>Word meanings</h3><table><tr><td>अन्यहेतूक्त्या - </td><td>By an attribution to a different cause</td></tr><tr><td>यत् - </td><td>Which</td></tr><tr><td>आकारस्य - </td><td>Of the appearance</td></tr><tr><td>गोपनम् - </td><td>Concealment</td></tr><tr><td>व्याजोक्तिः - </td><td>The Disembler</td></tr></table><h3>Definition</h3><p>The Disembler is the dissimulation of ones appearance hy attributing to a different cause.</p>'
          },
          examples: [
            {
              text: 'सखि पश्य गृहारामपरागैरस्मि धूसरा ॥',
              explanation: {
                sans:
                  'चौर्यकृतरतिकालेभूतललुं रनेनलग्नधूळिधूसरित स्वांगविकारः सख्यामाविज्ञेय इति हेत्वंतरकथनेन  तद्गोपनं कुर्वंत्याः कस्याश्चिदिदं वचनं – हे सखि अहंगृहारामपरागैः गृहोपवनपुष्परेणुभिः धूसराधूसरवर्णाकृतास्मिमां पश्य- अत्र चौर्यकृतसुरत हेतुकं स्वांगवैवर्ण्यमारामविहारकालीन पुष्पपराग रूपहेत्वंतरकल्पने नाच्छादितमिति भवति व्याजोक्तिः ॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>सखि! - </td><td>Friend !</td></tr><tr><td>पश्य - </td><td>See</td></tr><tr><td>गृहारामपरागैः - </td><td>By the pollens of the house-garden</td></tr><tr><td>धूसरा अस्मि - </td><td>I am made grayish</td></tr></table><p>Friend ! See I am made grayish by the pollens of (my) house-garden. </p><p>Here, a lady, the speaker, having her body made dirty by the dust in her toying with her lover, artfully conceals the same by saying that she was made greyish by the pollens, i.e., by attributing it to some different cause. Her first state was not expressed and then denied and so this is different from the ornament of Concealment (XI) where an object is ﬁrst mentioned by a person who then conceals it.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'गूढोक्तिः',
      title_eng: 'गूढोक्तिः-The Secrecy',
      id: 85,
      slokas: [
        {
          sloka: 'गूढोक्तिरन्योद्देश्यं चेद्यदन्यं प्रति कथ्यते ।',
          sloka_explanation: {
            sans:
              'अन्यः उद्देश्योयस्यास्सा अन्यं प्रतिवक्तव्येत्यर्थः- गीर्वाक्यं अन्यं प्रत्युदेश्यं कंचिदप्रकृतं प्रतिकध्यत इतियत् सागूढोक्तिः यमुद्दिश्य किंचिद्वक्तुमर्हं तद्गोप्यत्वं परैर्माव्यज्ञायीति तदेववाक्यंतदन्यमप्रकृतमुद्दिश्य श्लेषभंग्याकथ्यते चेत्सागूढोक्तिंति निष्कर्षः कन्योद्देश्यागीर्यदन्यं प्रतिकथ्यते । ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>चेद् - </td><td>if</td></tr><tr><td>अन्योद्देश्यम् - </td><td>Intended for another</td></tr><tr><td>अन्यम् प्रति - </td><td>To another</td></tr><tr><td>कथ्यते - </td><td>Is told</td></tr><tr><td>गूढोक्तिः - </td><td>The Secrecy</td></tr></table><p>When a speech intended to be communicated to a particular person is addressed to another whoyis also before the speaker, and when that speech conveys also the intended meaning of the speaker, it is termed the Secret Speech.</p> '
          },
          examples: [
            {
              text: 'वृषापेहि परक्षेत्रादायाति क्षेत्ररक्षकः ॥',
              explanation: {
                sans:
                  'कस्मिंश्चित्कामुके परकळत्रमुपभुंजाने सति तत्पत्युरागमनं दूरतो दृष्ट्वा- ह हेटविटत्वं परकळत्र मुत्सृज्यागच्छ तत्पतिरयमायातीति साक्षादुक्त्यातटस्थानां प्रकाशस्व्यादितिमनपि कृत्वाददन्यं परक्षेत्रस्य भक्षकं समीपस्थं कंचिदृषभमुद्दिश्यत द्रहस्यस्थल समीपस्थायादूत्या इयमुक्तिः – हे वृषभ बलीवर्द परक्षेत्रात्परकीय सस्यभूमैः परकळत्राच्चत्वमपेह्यपसर- कुतः क्षेत्रपालकः सस्यभूमीश्वरः – कळत्रस्वामी च आयात्यागच्छति अत्रश्लेषभंग्यागूषमिममर्थं कामुकोजानीयान्नान्य इत्याशयेनतं प्रति साक्षादनुक्त्वातदुद्देश्यकमेव वाक्यमिदं तटस्थवंचनार्धमन्यं प्रतिकथनमिति भवतिगूढोक्तिः ॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>वृष ! - </td><td>O bull ! or luster !</td></tr><tr><td>परक्षेत्रात् - </td><td>From another’s field or wife</td></tr><tr><td>अपेहि - </td><td>Begone</td></tr><tr><td>क्षेत्ररक्षकः - </td><td>The land-lord or husband</td></tr><tr><td>मायाति - </td><td>Comes</td></tr></table><p>O bull! begone, yonder comes the land-lord.</p><p>This speech is intended to be communicated to a person toying with the wife of another person and this is addressed to the bull that was grazing in a third man’s field. The intended meaning to be conveyed is :-</p><p>O Luster ! begone, yonder comes the husband of the lady with whom thou art boldly toying.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'विवृतोक्तिः',
      title_eng: 'विवृतोक्तिः - Open Speech',
      id: 86,
      slokas: [
        {
          sloka: 'विवृतोक्तिः श्लिष्टगुप्तं कविनाविष्कृतं यदि ।',
          sloka_explanation: {
            sans:
              'श्लिष्टगुप्तमुक्तरीत्याश्लेष निगूहितं वस्तुकविनाविष्कृतं स्पष्टीकृतं यलितदानिवृतोक्तिः ॥ ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>श्लिष्टगुप्तम् - </td><td>Hidden under a pun</td></tr><tr><td>कविना - </td><td>By the poet</td></tr><tr><td>आविष्कृतम् यदि - </td><td>If purposely expressed</td></tr><tr><td>विहितोक्तिः - </td><td>Open Speech</td></tr></table><p>Open Speech is that which is hidden under spun as in the preceding figure but purposely expressed by the poet by some kind of indication.</p>'
          },
          examples: [
            {
              text: 'वृषापेहि परक्षेत्रादिति वक्ति ससूचनम् ॥',
              explanation: {
                sans:
                  'हे वृषत्वं परक्षेत्रादपेहि अपसर इतिन सूचसंकामुकस्य प्रकाशनं यथा स्यात् तधावक्तिवदति- तद्भर्त्रागमनात्प्रागेवत्व मपसरेति तत्सहचरः कश्चित्तमुद्दिश्यहित मुपदिशतीत्यर्थः – अत्र श्लेषिगुप्तार्थस्यक विनैवसूचनमिति स्पष्टीकृतत्वाद्भवति विवृतोक्तिः ॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>वृष ! - </td><td>Bull ! or luster !</td></tr><tr><td>परक्षेत्रात् - </td><td>From another’s field or wife</td></tr><tr><td>अपेहि - </td><td>Begone</td></tr><tr><td>इति - </td><td>So</td></tr><tr><td>ससूचनम् - </td><td>With a gesticulation</td></tr><tr><td>वक्ति - </td><td>(he) speakes</td></tr></table><p>“O bull! begone from another’s ﬁeld", so the speaker speaks with a gesticulation.</p><p>By use of the word वृषापेहि, this is also hidden under a pun; and, by the employment of the word ससूचनम्, in the example by the poet, the secrecy becomes expressed. </p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'युक्तिः',
      title_eng: 'युक्तिः - Covert Speech',
      id: 87,
      slokas: [
        {
          sloka: 'युक्तिः पराभिसन्धानं क्रियया मर्मगुप्तये ।',
          sloka_explanation: {
            sans:
              'मर्मगुप्तयेस्वरहस्य गोपनायक्रिययास्व मर्मच्छादकभ्रम संपादकव्याजेन पराभिसंधानमाप्त पुरुषवंचनं युक्तिरत्युच्यते व्यळीकंछाभिसंधानमित्यमरः – अतिरहस्ये कर्मणिप्रवृत्तेन केरचित्स्वरहस्य प्रकाशभीरुणामध्येकस्मिन्नप्यनापै समागते स्वमर्म प्रकाशोमाभूदितिकया चित्प्रिययातस्य भ्रांतिं संपाद्य यत्र वचनं क्रियते तत्र युक्तिरितिनिष्कर्षः ॥',
            eng:
              '<h3>Word meanings</h3><table><tr><td>मर्मगुप्तये - </td><td>For concealment of one’s own design</td></tr><tr><td>क्रियया - </td><td>By an act</td></tr><tr><td>परातिसंधानम् - </td><td>Deception played upon another</td></tr><tr><td>युक्तिः - </td><td>Covert speech</td></tr></table><p>Covert Speech is a deception of a. person by an act played upon another for concealment of his or her own design.</p>'
          },
          examples: [
            {
              text: 'त्वामालिखन्ती दृष्ट्वान्यं धनुः पौष्पं करेऽलिखत् ॥',
              explanation: {
                sans:
                  'विरहातुरां नायिकामुपेक्षमाणं नायकमुद्दिश्य सखीवचनमिदं- हे नायकत्वत्प्रियात्वामालिखंती विनोदार्थं तत्प्रतिनिधिं पटादौलिखंती सती अन्यामनाप्तां कांचिद्दृष्ट्वाकरे पौष्पंधनुः मन्मथचापमलिखदित्यनेन लेखनेन हेतुना इयं मन्मथं लिखतीतस्य भ्रमं निष्पाद्यस्वकीय प्रियविषयाति कामनामाच्छादितवतीत्यर्थः अत्र रहस्यनिगूहनाय पौष्पनुसु र्नर्माणक्रियया तटस्थायाः वंचनं कृतमिति भवतियुक्तिः ॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>त्वाम् - </td><td>Thee</td></tr><tr><td>आलिखन्ती - </td><td>painting</td></tr><tr><td>अन्यं दृष्ट्वा - </td><td>Seeing another (lady)</td></tr><tr><td>पौष्पं धनुः - </td><td>Flowery bow</td></tr><tr><td>करे - </td><td>In the hand</td></tr><tr><td>अलिखत् - </td><td>Draw</td></tr></table><p>Lover! Thy lady painted thee and, seeing another person coming to her at that time, drew the ﬁgure of a flowery bow in the hand, thus intimating to that stranger than she painted the cupid and not thee.</p><p>This is said by a go-between.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'लोकोक्तिः',
      title_eng: 'लोकोक्तिः - Popular Saying',
      id: 88,
      slokas: [
        {
          sloka: 'लोकप्रवादानुकृतिर्लोकोक्तिरिति भण्यते ।',
          sloka_explanation: {
            sans:
              'लोकप्रवादस्य लौकिक सुभाषणस्यानुकृतिरनुकरणं तदनुकरणालाप इतियावत्- सालोकोक्तिरिति कथ्यत इत्यर्थः ॥',
            eng:
              '<h3>Word meanings</h3><table><tr><td>लोकप्रवादानुकृतिः - </td><td>Resembling a pro- verb</td></tr><tr><td> लोकोक्तिरिति - </td><td>Popular Saying</td></tr><tr><td>भण्यते - </td><td>Is called</td></tr></table><p>An expression resembling a proverb is called the Popular Saying.</p>'
          },
          examples: [
            {
              text: 'सहत्व कतिचिन्मासान्मीलयित्वा विलोचने ॥',
              explanation: {
                sans:
                  'सुदूरवर्ति भर्तृकां तद्दर्शनोत्सुकां नायिकामुद्दिश्यकस्याश्चित्सख्या इयमुक्तिः हे सखिलोचने नेत्रेमीलयित्वाविलोचने ॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>विलोचने - </td><td>The eyes</td></tr><tr><td> मीलयित्वा - </td><td>Having closed</td></tr><tr><td> कतिचित् मासान् - </td><td>A few months</td></tr><tr><td>सहस्व - </td><td>Wait or be patient</td></tr></table><p>Lady ! wait for a few months with thy eyes closed.</p><p>This is one of the messages sent by a separated lover to his lovely wife. The Full meaning is :-</p><p>“Lady ! Let a few months be spent unmarked by thee ; and then we shall both meet, and have full scope to reward our desires entertained in our separation, “</p><p>With thy eyes closed is even now more current in the sphere of the lovers and distressed people.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'छेकोत्किः',
      title_eng: 'छेकोत्किः -The Skilful Speech',
      id: 89,
      slokas: [
        {
          sloka: 'छेकोक्तिर्यदि लोकोक्तेः स्यादर्थान्तरगर्भिता ।',
          sloka_explanation: {
            sans:
              'यत्रलोकोक्तिरर्थांतरगर्भितास्यात्तत्र छेकोक्तिः – यत्रलोकवादानुकारि वाक्यमेब अर्थांतरगत्भिताकारेण प्रयुज्यते तत्रछेकोक्तिरितिनिष्कर्षः ॥ ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>लोकोक्तेः - </td><td>Of the Popular Saying</td></tr><tr><td>अर्थान्तरगर्भिता - </td><td>Containing another sense</td></tr><tr><td>यदि स्यात् - </td><td>If</td></tr><tr><td>छेकोक्तिः - </td><td>Skilful Speech</td></tr></table><p>If the Popular Saying were to contain another sense, then it is called the Skilful Speech.</p>'
          },
          examples: [
            {
              text: 'भुजङ्ग एव जानीते भुजङ्गचरणं सखे ॥',
              explanation: {
                sans:
                  'केनचित्कस्यचिद्वृत्तांते पृष्टे सतिन्वयमजानन्निवस्व समीपवर्तिनं कंचिन्निर्दिश्य अयमेव तद्वृत्तांतं जानातीतियस्सोपहासं क्रियते तस्योक्तिरियं हे सखेभुजंग एच सर्प एवभुजंगचरणं सर्पपादं जानातिनकोप्यन्यस्तत्पादं वेत्ति अतोयमेवधनार्जनादौ तत्सहचारित्वात्तद्वृत्तां मपिजानातीतिलोक प्रवादाभिप्रायेनति भुजंगशब्दस्य विटवाचित्वात्सचायं द्वावपिविटावतस्तदीय व्यभिचारादिरहस्यं सर्वमप्ययमेववेत्तीत्यर्थांतर गर्भितेयं लोकोक्तिर्भवति॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>सखे ! - </td><td>Friend !</td></tr><tr><td>भुजंगः एव - </td><td>Only the serpent or villain</td></tr><tr><td>भुजंगचरणम् - </td><td>The feet of the serpent or the behavior of a villain</td></tr><tr><td>जानीते - </td><td>Knows</td></tr></table><p>A serpent alone knows the feet of a serpent.</p><p>Another sense is - A villain alone knows the behaviour of a villain.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'वक्रोक्तिः',
      title_eng: 'वक्रोक्तिः - The Crooked Speech',
      id: 90,
      slokas: [
        {
          sloka: 'वक्रोक्तिः श्लेषकाकुभ्यामपरार्थप्रकल्पनम् ।',
          sloka_explanation: {
            sans:
              'श्लेषेणकाक्वा अपरार्थ प्रकल्पनं वक्त्रभिप्रेतादन्यार्थे वाक्यकल्पनं वक्रोक्तिः केनचिदृजुबुद्ध्येव वाक्ये प्रयुक्ते सति कोपादिवशादन्येन तद्वचनस्यार्थांतरं कल्पयित्वा यत्र वक्रभाषणं क्रियते तत्र वक्रोक्तिरिति निष्कर्षः ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>श्लेषकाकुभ्याम् - </td><td>By means of a pun or by an affected change of voice</td></tr><tr><td>अपरार्थ प्रकल्पनम् - </td><td>Construing one’s speech differently</td></tr><tr><td>वक्रोक्तिः - </td><td>The Crooked Speech</td></tr></table><p>When a person construes aspeech of another in a different sense by means of a pun or by an affected change of voice, it is called the Crooked Speech.</p>'
          },
          examples: [
            {
              text: 'मुञ्च मानं दिनं प्राप्तं नेह नन्दी हरान्तिके ॥',
              explanation: {
                sans:
                  'अन्य संगादिकृतोकोपवशेन सुरत सुखपराङ्मुखीं कांचिन्नायुकामुद्दिश्यकश्चिन्नायकः प्राहमुंचेति॥ हे प्रियेदिनमः प्राप्तं प्रभातसमयः प्राप्त इत्यर्थह् अतोमानं कोपं मुंचत्यजेत्येवमृजुमतिना नायकेन वाक्ये प्रयुक्ते सतिकोपवशान्नायिकान्य वाक्यासार्थं प्रकल्प्यवक्रोक्त्योत्तरमाह ॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>मुञ्च मानम् - </td><td>Remove thy anger</td></tr><tr><td> दिनं प्राप्तम् - </td><td>Day appeared</td></tr><tr><td>इह - </td><td>Here</td></tr><tr><td>नन्दी न - </td><td>No Nandin</td></tr><tr><td> हरान्तिके - </td><td>Near the God Siva</td></tr></table><p> Lady! Remove thy anger as day has appeared.</p><p>Here the lady construing it otherwise by at division of words मानं दिनम् into मा नन्दिनम् and reading it thus "मुञ्च मा नन्दिनं प्राप्तम् =leavest not the Nandin that has arrived here ” angrily replies thus, “No Nandin here; but he is near the God Siva."</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'स्वभावोक्तिः',
      title_eng: 'स्वभावोक्तिः - Description of Nature',
      id: 91,
      slokas: [
        {
          sloka: 'स्वभावोक्तिः स्वभावस्य जात्यादिस्थस्य वर्णनम् ।',
          sloka_explanation: {
            sans:
              'जात्यादिस्थस्य कुरंगत्वादि जातौवर्तमानस्य- अत्रादिशब्देन क्रियादिः गृहते स्वभावस्यवर्णनं यदितदा स्वभावोक्तिरित्युच्यते यत्र यथार्थ वस्तुवर्णनं चारु यथातथा क्रियतेतत्र स्वभाक्तिर्नामालंकार इति निष्कर्षः ॥ ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>जात्यादिस्थस्य - </td><td>Belonging to a genus &c., i.e., quality, an action and a subastance</td></tr><tr><td>            स्वभावस्य - </td><td>Of one’s own state</td></tr><tr><td>            वर्णनम् - </td><td>Description</td></tr><tr><td>            स्वभावोक्तिः - </td><td>Description of Nature</td></tr></table><p>        Description of Nature is the delineation of of a peculiar state of an object belonging to a genus etc., i.e., a quality, an action and a substance.</p>'
          },
          examples: [
            {
              text: 'कुरङ्गैरुत्तरङ्गाक्षैः स्तब्धकर्णैरुदीक्ष्यते ॥',
              explanation: {
                sans:
                  'ऊट्तरंगाक्षैः उद्गततरंगलोचनैरति चंदललोचनैरित्यर्धः – स्तब्धकर्णैर चांचल्यं यथातधोर्ध्व प्रसारितकणैरित्यर्धः – कुरुगैरुदीक्षितं दृष्टं व्यारंगाक्षैः स्तब्धकर्णैरुदीक्षितम् ',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>उत्तरङ्गाक्षैः - </td><td>Tremulous eyes</td></tr><tr><td>                स्तब्धकर्णैः - </td><td>Pricking up ears</td></tr><tr><td>                कुरङ्गः - </td><td>By antelopes</td></tr><tr><td>                उदीक्ष्यतं - </td><td>Is looked at</td></tr></table><p>             These antelopes having tremulous eyes and pricking up their ears behold !</p><p>As the term ‘antelopes’ denotes many, we have here the description of nature of a genus.</p><p>Another name of this ﬁgure is जातिः according to Dandi. This kind of description is considered the best by the poets.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'भाविकम्',
      title_eng: 'भाविकम्-The Vision',
      id: 92,
      slokas: [
        {
          sloka: 'भाविकं भूतभाव्यर्थसाक्षात्कारस्य वर्णनम् ।',
          sloka_explanation: {
            sans:
              'भूतभाव्यर्थ साक्षात्कारस्य गतार्थस्य भविष्यदर्थस्य च यस्साक्षात्कारस्तस्य वर्णनं यत्तद्भाविकमित्युच्यते – यत्रातीतानागते प्रत्यक्षत्वेन महाश्चर्यकरार्ध वर्णनाल्लक्ष्येते- तत्र द्विविधोभाविकालंकार इति निष्कर्षः ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>भूत भावि अर्थ-साक्षात्कारस्य - </td><td>Of perception of things pas or future</td></tr><tr><td>            वर्णनम् - </td><td>Description</td></tr><tr><td>            भाविकम् - </td><td>The vision</td></tr></table><p>          When something past or future is delineated by a poet in such a manner as can bring the subject of descviption vividly before the mind’s eye, it is called the Vision.</p>'
          },
          examples: [
            {
              text: 'अहं विलोकयेऽद्यापि युध्यन्तेऽत्र सुरासुराः ॥',
              explanation: {
                sans:
                  'सुरासुराः देवदानवा अत्रप्रदेशे युद्ध्यंते युद्धं कुर्वंति- अहमद्यापि विलोकये- अत्रकस्यापि कर्तुमशक्यत्वेन महाश्चर्यकरदेवदानव युद्धरूपार्थोक्त्याभाविकानां हृदिभावनमित्याशयेन तत्प्रत्यक्षत्वेन वर्णितत्वाद्भाविकालंकारोभवत्येव- एवम् द्वितीयमव्यूह्यम् ॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>अत्र - </td><td>In this place</td></tr><tr><td>                सुरासुराः - </td><td>The gods and demons</td></tr><tr><td>                युध्यन्ते - </td><td>Fight</td></tr><tr><td>                अहम् - </td><td>I</td></tr><tr><td>                अद्यापि - </td><td>Even now</td></tr><tr><td>                विलोकये - </td><td>Behold</td></tr><tr></table><p>The gods and demons ﬁght in this place-even now I seem to behold it!</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'उदात्तम्',
      title_eng: 'उदात्तम् - The Exalted',
      id: 93,
      slokas: [
        {
          sloka: 'उदात्तमृद्धेश्चरितं श्लाघ्यं चान्योपलक्षणम् ।',
          sloka_explanation: {
            sans:
              'श्लाघ्यं श्लाघार्हं बुद्धिस्समृद्धिमच्चरितं वाकाकवद्देवदत्त गृहमित्यादिवद्वाच्योप लक्षणं सद्वर्ण्यते यदितदुदात्तमित्युच्यते',
            eng:
              '<h3>Word meanings</h3><table><tr><td>ऋड्वेः - </td><td>Of prosperity</td></tr><tr><td>            चरितम् - </td><td>Description</td></tr><tr><td>            उदात्तम् - </td><td>The Exalted</td></tr><tr><td>            च - </td><td>Also</td></tr><tr><td>            श्लाघ्यम् - </td><td>Commendable action</td></tr><tr><td>            अन्यस्य - </td><td>of another</td></tr><tr><td>            उपलक्षणम् - </td><td>Indirect representation of importance</td></tr></table><p>        A description of prosperity of an object is termed the Exalted. </p><p>And any commendable action of some great personage represented indirectly or collaterally to the object under delineation is termed also the Exalted. </p>'
          },
          examples: [
            {
              text: 'सानौ यस्याभवद्युद्धं तद्धूर्जटिकिरीटिनोः ॥',
              explanation: {
                sans:
                  'धूर्जटिकिरीटिनोश्शिवार्जुनयोः यत्रसानौयुद्धमभवत्- तत्सानुमयादृष्टमिति कस्यचिदिदं वचनं- अत्र शौर्यादि समृद्धिमच्छिवार्जुन युद्धरूपचरितं सानुरूपवाच्यार्थस्य उपलक्षणं नद्वर्णितमिति भवत्युदात्तालंकारः ॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>यस्य - </td><td>Of which (Himalaya mountain)</td></tr><tr><td>               सानौ - </td><td>In the summit</td></tr><tr><td>                तत् - </td><td>That= celebrated</td></tr><tr><td>                धूर्जटिकिरीटिनोः - </td><td>Between God Siva and Arjuna</td></tr><tr><td>                युड्वम् - </td><td>Fight</td></tr><tr><td>                अभवत् - </td><td>Took place</td></tr></table><p>         This is that Himalaya Mountain in whose summit that celebrated fight between the God Siva and Arjuna took place.</p><p>Here, the celebrated fight of the great God Siva. with Arjuna is represented collaterally to the Himalaya Mountain-the object under delineation.</p><p>This kind of representation attaches much importance to the subject on hand-now the Himalaya Mountain.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'अत्युक्तिः',
      title_eng: 'अत्युक्तिः - The Exaggeration',
      id: 94,
      slokas: [
        {
          sloka: 'अत्युक्तिरद्भुतातथ्यशौर्यौदार्यादिवर्णनम् ।',
          sloka_explanation: {
            sans:
              'अद्भुता तथ्य शौर्यादिवर्णनमाश्चर्यकरमिध्याभूत शौर्यौदार्यादिगुणवर्णनं यदितदात्युक्तिरित्युच्यते',
            eng:
              '<h3>Word meanings</h3><table><tr><td>अद्भुत - </td><td>marvellous</td></tr><tr><td>अतथ्य - </td><td>False</td></tr><tr><td>शौर्य - </td><td>Valour</td></tr><tr><td>औदार्यादि - </td><td>Generosity etc</td></tr><tr><td>वर्णनम् - </td><td>Description</td></tr><tr><td>अत्युक्तिः - </td><td>Exaggeration</td></tr></table><p>A description of marvellous and also false statement of ones valour, generosity, etc., is called the Exaggeration.</p>'
          },
          examples: [
            {
              text: 'त्वयि दातरि राजेन्द्र याचकाः कल्पशाखिनः ॥',
              explanation: {
                sans:
                  'हे राजेंद्रत्वयिदातरि सकलाभीष्टप्रदेसति- याचकाः अर्धिनः कल्पशाखिनस्सुरतरवो भवन्- त्वद्दत्तापरिमित धनादिपरिपूर्णास्संतः याचका अपिस्वार्थिभ्योभीष्टान् ददुरित्यर्थः – अत्र राजदानस्य याचकाः कल्पशाखिन इत्युक्त्याऽ परिमितत्वं प्रतिपादितमतोद्भुतत्वं मिध्याभूतत्वं तथाचाद्भुतमिध्याभूत दानगुणोवर्णित इति भवत्यत्युक्त्यलंकारः ',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>राजेन्द्र ! - </td><td>O King !</td></tr><tr><td> त्वयि दातरि - </td><td>When thou art a donor</td></tr><tr><td> कल्पशाखिनः - </td><td>Kalpa tree</td></tr><tr><td>   याचकाः - </td><td>Mendicants</td></tr><tr><td>   भवन्ति - </td><td>Become</td></tr></table><p>O king! When thou art a donor, even the wish-yielding (kalpa) trees of paradise become thy mendicants.</p><p>This is a false exaggeration of a king’s liberal munificence. </p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'निरुक्तिः',
      title_eng: 'निरुक्तिः -Exposition',
      id: 95,
      slokas: [
        {
          sloka: 'निरुक्तिर्योगतो नाम्नामन्यार्थत्वप्रकल्पनम् ।',
          sloka_explanation: {
            sans:
              'योगतः अवयवशक्तिवशात् नाम्नांदोषाकरादि नामधेयानां अन्यार्धत्व  प्रकल्पनं यदितदानिरुक्तिरित्युच्यते ',
            eng:
              '<h3>Word meanings</h3><table><tr><td>नाम्नाम् - </td><td>Of words</td></tr><tr><td>योगतः - </td><td>By derivation</td></tr><tr><td> अन्यार्थत्वप्रकल्पनम् - </td><td>Construing in a sense different from what is intended</td></tr><tr><td>निरुक्तिः - </td><td>Exposition</td></tr></table><p>Exposition consists in construing words, in a sense different from what is intended, by an artificial derivation of those Words.</p>'
          },
          examples: [
            {
              text: 'ईदृशैश्चरितैर्जाने सत्यं दोषाकरो भवान् ॥',
              explanation: {
                sans:
                  'चंद्रोपालंभन परंविरहिण्या वचनमिदं- हे चंद्र र्योगता नाम्नामन्यार्थत्व प्रकल्पनम् । ईदृशैश्चरितैर्जाने सत्यं दोषाकरोभवान् ',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>चन्द्र ! - </td><td>O moon !</td></tr><tr><td> ईदृशैः - </td><td>These</td></tr><tr><td>  चरितैः - </td><td>By acts of thine</td></tr><tr><td>भवान् - </td><td>Thy honour</td></tr><tr><td>दोषाकरः - </td><td>Maker of night or faulty</td></tr><tr><td> सत्यम् - </td><td>Verily</td></tr><tr><td> जाने - </td><td>I know</td></tr></table><p>O Moon! By these acts of thine, I know, truly, as much that thou art faulty (lit. the mine of faults).</p><p>This is addressed to the moon by a damsel pining under separation.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'प्रतिषेधः',
      title_eng: 'प्रतिषेधः -Prohibition',
      id: 96,
      slokas: [
        {
          sloka: 'प्रतिषेधः प्रसिद्धस्य निषेधस्यानिकीर्तनम् ।',
          sloka_explanation: {
            sans:
              'प्रसिद्धस्य विज्ञातस्य निषेधस्य अनुवर्णनमनुभाषणं प्रतिषेधः – यत्रकथ्यमानो निषेधः निर्ज्ञातत्वेन स्वतोनुपयोगादर्थांतरगर्भतया चमत्कारकारी- भवति तत्र निषेधालंकार इति निष्कर्षः',
            eng:
              '<h3>Word meanings</h3><table><tr><td>प्रसिड्वस्य - </td><td>Well-known</td></tr><tr><td>निषेधस्य - </td><td>Of prevention</td></tr><tr><td>अनुकीर्तनम् - </td><td>Announcement</td></tr><tr><td>प्रतिषेधः - </td><td>Prohibition</td></tr></table><p>Prohibition is the announcement of preven- tion of a well-known act. </p>'
          },
          examples: [
            {
              text: 'न द्यूतमेतत्कितव क्रीडनं निशितैः शरैः ॥',
              explanation: {
                sans:
                  'युद्धरंगेसन्नद्धं शकुनिमुद्दिश्यसोपहास वचनमिदम्- हेकितवधूर्त शकुने  एतत्परिदृश्यमानं युद्धकर्मम्यातमक्षदेवं नभवति- किंतुनिशितैस्तीक्ष्णेः शरैः क्रीडनं विहारः – अत्र युद्धस्य द्यूतत्वनिषेधोज्ञात एवतथापिनज्ञात इति निषेधः पुनः कीर्त्यमानस्सन् तवद्यूतकर्मण्येव प्रागल्भ्यंनतु युद्धरंग इति परिहासगर्भत्वेन चारुता हेतुर्भवतीति भवति प्रतिषेधालंकारः – एतच्चकितव पदेन स्पष्टं कृतम् ॥',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>कितव ! - </td><td>Gambler !</td></tr><tr><td>एतत् द्यूतम् न - </td><td>This is not the playing at dice</td></tr><tr><td> निशितैः शरैः - </td><td>By sharpened arrows</td></tr><tr><td> क्रीडनम् - </td><td>Playing</td></tr></table><p>O Gambler Sakuni ! This is not the playing at dice but this is the playing by sharpened arrows (the famous battle of Kurukshetra).</p><p>This is addressed by a true warrior to Sakuni, the uncle of Duryodhana, who at the celebrated gambling match threw the dice, won the game and obliged the good Pandavas to go into exile and thus became the cause of that dreadful war. The statement that this is not the place of gambling but of war-an expression of a true fact-conveys the intended meaning of the speaker that Sakuni could do well at the gambling and not at this battle ﬁeld.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'विधिः',
      title_eng: 'विधिः -Fitness',
      id: 97,
      slokas: [
        {
          sloka: 'सिद्धस्यैव विधानं यत्तदाहुर्विध्यलंकृतिम् ।',
          sloka_explanation: {
            sans:
              'सिद्धस्यैवज्ञातस्यैव विधानमितियत्तां विध्यलंकृतिमाहुः कधयंति यत्र विज्ञातस्यैव वस्तुनो विधिरनुपयुक्त स्सन्नर्धांतरगर्भत्वेन चमुत्कार हेतुर्भवति तत्र विध्यलंकृतिरिति निष्कर्षः',
            eng:
              '<h3>Word meanings</h3><table><tr><td>यत् - </td><td>which</td></tr><tr><td>सिड्वस्य एव - </td><td>Of that thing previously effected</td></tr><tr><td>विधानम् - </td><td>Declaration</td></tr><tr><td>तत् - </td><td>That</td></tr><tr><td>विधि+अलंकृतिम् - </td><td>The figure Fitness</td></tr><tr><td>आहुः - </td><td>The learned call</td></tr></table><p>A declaration of a thing previously effected, the learned call as the figure Fitness.</p> '
          },
          examples: [
            {
              text: 'पञ्चमोदञ्चने काले कोकिलः कोकिलोऽभवत् ॥',
              explanation: {
                sans:
                  'पंचमोदंचनेपंचमस्वरोत्पादके कालेवसंते- कोकिलः कोकिलोभवेदि दानीमेवकोकिल इति व्यपदेशार्होभवति- नत्वितरकाले तथा पंचमस्वरोत्पत्त्यभावादितिभावः – अत्र कोकिलत्वे सिद्धेतस्यैव पुनः कोकिलेविधानं निरर्थकं सद्वसंतसमये पंचमस्वरशालितया सर्वजन हृद्योभवतीत्यर्थांतरं गर्भीकरोतीतिभवति विधिः',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>पञ्चम+उदञ्जने काले - </td><td>In the spring season</td></tr><tr><td>कोकिलः - </td><td>Kokila bird or the Indian cuckoo</td></tr><tr><td>कोकिलः - </td><td>Kokila, i.e., charming</td></tr><tr><td>भवेत् - </td><td>Shall become</td></tr></table><p>Only in the spring season, the kokila bird shall become a kokila, i.e., charming.</p><p>Here, the re-declaration of kokila bird, a thing already effected, is to show its extreme charmingness in the spring season-a season for singing in the panchama tone.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'हेतुः',
      title_eng: 'हेतुः - The Cause',
      id: 98,
      slokas: [
        {
          sloka: 'हेतोर्हेतुमता सार्धं वर्णनं हेतुरुच्यते ।',
          sloka_explanation: {
            sans:
              'हेतोः कारणस्य हेतुमताकार्येण वर्णनं संबंधवर्णनं यदितदा हेत्वलंकृतिरित्युच्यते',
            eng:
              '<h3>Word meanings</h3><table><tr><td>हेतोः - </td><td>Of a cause हेतुमता सार्धम् - </td><td>Along with its effect</td></tr><tr><td>वर्णनम् - </td><td>Description</td></tr><tr><td>हेतुः - </td><td>The cause</td></tr><tr><td>उच्यते - </td><td>Is termed</td></tr></table><p>The description of a cause along with its intended effect is termed the Cause.</p>'
          },
          examples: [
            {
              text: 'असावुदेति शीतांशुर्मानच्छेदाय सुभ्रुवाम् ॥',
              explanation: {
                sans:
                  'असौशीतांशुश्चंद्रः सुभ्रुवां स्त्रीणां मानभेदायकोपशमनाय- उदेति- अत्र विधूदयरूपहेतो श्मानभेदनरूपकातिशीतां शुर्मानभेदाय सुभ्रुवाम् ',
                eng:
                  '<h3>Word meanings</h3><table><tr><td>असौ शीतांशुः - </td><td>That moon</td></tr><tr><td>सुभ्रुवाम् - </td><td>Of women of beautiful eye-brows</td></tr><tr><td>मानच्छेदाय -</td><td>For quelling the pride</td></tr><tr><td>उदेति - </td><td>Rises</td></tr></table><p>That moon rises for quelling the pride of women of beautiful eye-brows.</p>'
              }
            }
          ]
        }
      ],
      types: 1,
      type: [
        {
          sloka:
            '<h3>Second sort of  हेतुः</h3>हेतुहेतुमतोरैक्यं हेतुं केचित्प्रचक्षते ।',
          sloka_explanation: {
            sans:
              'यस्य च संबंधवर्णनाद्भवति हेतुः । हेतुमतोः कारणकार्ययोरैक्यमभेदं केचित्कवयः हेतुं प्रचक्षते कथयंति- यत्रकार्यावश्यंभावतश्शैघ्य्रादि सूचनाय हेतुकार्ययोरभेदो वर्ण्यते सापि हेत्वलंकृतिरिति केचिदाहुरित्यर्थः ।',
            eng:
              '<h3>Word meanings</h3><table><tr><td>हेतुहेतुमतोः - </td><td>Of cause and effect</td></tr><tr><td>ऐक्यम् - </td><td>Identity</td></tr><tr><td>प्रचक्षते - </td><td>Call</td></tr><tr><td>केचित् - </td><td>Certain rhetoricians</td></tr><tr><td>हेतुम् - </td><td>As the figure Reason</td></tr></table><p>The identity of a cause with its effect is reckoned by some as the figure the Cause.</p>'
          },
          examples: [
            {
              text: 'लक्ष्मीविलासा विदुषां कटाक्षा वेङ्कटप्रभोः ॥',
              explanation_sans:
                'हे वेंकट प्रभोवेंकटस्वामिन् – तेतव कटाक्षाः विदुषां पंडितानां सदात्वत्पदकमल ध्यानवतामित्यर्थः – लक्ष्मीविलासास्संपत्समृद्धयोभवंतीत्यर्थः – अत्र भवत्कटाक्षमात्रेणैव ज्ञानिनां समृद्धयो भवंतीतिवक्तव्ये कार्यशैघ्र्यादि सूचनायकटाक्षा एवलक्ष्मीविलासा इत्यभेद वर्णनाद्भवति हेत्वंलंकारः ॥',
              explanation_eng:
                '<h3>Word meanings</h3><table><tr><td>वेङ्कटप्रभोः - </td><td>Of the Lord of the mount Venkata</td></tr><tr><td>कटाक्षाः - </td><td>Glances</td></tr><tr><td>विदुषाम् - </td><td>Of learned poets</td></tr><tr><td>लक्ष्मीविलासाः - </td><td>Graces of the Goddess of Fortune</td></tr></table><p>The glances of the God Vishnu (lit. the Lord of the Mount Venkata) are the graces of the Goddess of Furtune to the learned.</p><p>Here, the glance, the cause, is mentioned as identical with its effect, the graces of the Goddess of Fortune. This representation rests on the complete identiﬁcation and indicates the speedy simultaneous effect.</p>इत्थं शतमलंकारा लक्षयित्वा निदर्शिताः ।<br>प्राचामाधुनिकानां च मतान्यालोच्य सर्वशः ॥<p>These one hundred figures of speech have been thus defined and exemplified (by the author) after having studied all the dogmas of the rhetoricians, ancient as well as modern.</p><p>Or the King Venkata, the patron of our author Appaya Dikshita.</p>'
            }
          ]
        }
      ]
    },
    {
      title_eng: 'Continue to Exercises ',
      id: 99
    }
  ],
  chandraloka_titles: [
    {
      title: 'Introduction',
      sl_num: '1',
      to: '/chandraloka/lessons/1',
      value: false
    },
    {
      title: 'उपमालङ्कारः',
      sl_num: '2',
      to: '/chandraloka/lessons/2',
      value: false
    },
    {
      title: 'अनन्वयालङ्कारः',
      sl_num: '3',
      to: '/chandraloka/lessons/3'
    },
    {
      title: 'उपमेयोपमालङ्कारः',
      sl_num: '4',
      to: '/chandraloka/lessons/4'
    },
    {
      title: 'प्रतीपालङ्कारः',
      sl_num: '5',
      to: '/chandraloka/lessons/5'
    },
    {
      title: 'रुपकालङ्कारः',
      sl_num: '6',
      to: '/chandraloka/lessons/6'
    },
    {
      title: 'परिणामालङ्कारः',
      sl_num: '7',
      to: '/chandraloka/lessons/7'
    },
    {
      title: 'उल्लेखालङ्कारः',
      sl_num: '8',
      to: '/chandraloka/lessons/8'
    },
    {
      title: 'स्मृति-भ्रान्ति-संदेहालङ्काराः',
      sl_num: '9',
      to: '/chandraloka/lessons/9'
    },
    {
      title: 'अपह्नुत्यलङ्कारः',
      sl_num: '10',
      to: '/chandraloka/lessons/10'
    },
    {
      title: 'उत्प्रेक्षालङ्कारः',
      sl_num: '11',
      to: '/chandraloka/lessons/11'
    },
    {
      title: 'अतिशयोक्त्यलङ्कारः',
      sl_num: '12',
      to: '/chandraloka/lessons/12'
    },
    {
      title: 'तुल्ययोगितालङ्कारः',
      sl_num: '13',
      to: '/chandraloka/lessons/13'
    },
    {
      title: 'दीपकालङ्कारः',
      sl_num: '14',
      to: '/chandraloka/lessons/14'
    },
    {
      title: 'आवृत्तिदीपकालङ्कारः',
      sl_num: '15',
      to: '/chandraloka/lessons/15'
    },
    {
      title: 'प्रतिवस्तुपमालङ्कारः',
      sl_num: '16',
      to: '/chandraloka/lessons/16'
    },
    {
      title: 'दृष्टान्तालङ्कारः',
      sl_num: '17',
      to: '/chandraloka/lessons/17'
    },
    {
      title: 'निदर्शनालङ्कारः',
      sl_num: '18',
      to: '/chandraloka/lessons/18'
    },
    {
      title: 'व्यतिरेका',
      sl_num: '19',
      to: '/chandraloka/lessons/19'
    },
    {
      title: 'सहोक्तिः',
      sl_num: '20',
      to: '/chandraloka/lessons/20'
    },
    {
      title: 'विनोक्तिः',
      sl_num: '21',
      to: '/chandraloka/lessons/21'
    },
    {
      title: 'समासोक्तिः',
      sl_num: '22',
      to: '/chandraloka/lessons/22'
    },
    {
      title: 'परिकरः',
      sl_num: '23',
      to: '/chandraloka/lessons/23'
    },
    {
      title: 'परिकरांकुरः',
      sl_num: '24',
      to: '/chandraloka/lessons/24'
    },
    {
      title: 'श्लेषः',
      sl_num: '25',
      to: '/chandraloka/lessons/25'
    },
    {
      title: 'अप्रस्तुतप्रशंसा',
      sl_num: '26',
      to: '/chandraloka/lessons/26'
    },
    {
      title: 'प्रस्तुतांकुरः',
      sl_num: '27',
      to: '/chandraloka/lessons/27'
    },
    {
      title: 'पर्य्यायोक्तम्',
      sl_num: '28',
      to: '/chandraloka/lessons/28'
    },
    {
      title: 'व्याजस्तुतिः',
      sl_num: '29',
      to: '/chandraloka/lessons/29'
    },
    {
      title: 'व्याजनिन्दा',
      sl_num: '30',
      to: '/chandraloka/lessons/30'
    },
    {
      title: 'आक्षेपः',
      sl_num: '31',
      to: '/chandraloka/lessons/31'
    },
    {
      title: 'विरोधाभासः',
      sl_num: '32',
      to: '/chandraloka/lessons/32'
    },
    {
      title: 'विभावना',
      sl_num: '33',
      to: '/chandraloka/lessons/33'
    },
    {
      title: 'विशेषोक्तिः',
      sl_num: '34',
      to: '/chandraloka/lessons/34'
    },
    {
      title: 'असंभवः',
      sl_num: '35',
      to: '/chandraloka/lessons/35'
    },
    {
      title: 'असंगतिः',
      sl_num: '36',
      to: '/chandraloka/lessons/36'
    },
    {
      title: 'विषमम्',
      sl_num: '37',
      to: '/chandraloka/lessons/37'
    },
    {
      title: 'समम्',
      sl_num: '38',
      to: '/chandraloka/lessons/38'
    },
    {
      title: 'विचित्रम्',
      sl_num: '39',
      to: '/chandraloka/lessons/39'
    },
    {
      title: 'अधिकम्',
      sl_num: '40',
      to: '/chandraloka/lessons/40'
    },
    {
      title: 'अल्पम्',
      sl_num: '41',
      to: '/chandraloka/lessons/41'
    },
    {
      title: 'अन्योन्यम्',
      sl_num: '42',
      to: '/chandraloka/lessons/42'
    },
    {
      title: 'विशेषः',
      sl_num: '43',
      to: '/chandraloka/lessons/43'
    },
    {
      title: 'व्याघातः',
      sl_num: '44',
      to: '/chandraloka/lessons/44'
    },
    {
      title: 'कारणमाला',
      sl_num: '45',
      to: '/chandraloka/lessons/45'
    },
    {
      title: 'एकावली',
      sl_num: '46',
      to: '/chandraloka/lessons/46'
    },
    {
      title: 'मालादीपकम्',
      sl_num: '47',
      to: '/chandraloka/lessons/47'
    },
    {
      title: 'सारः',
      sl_num: '48',
      to: '/chandraloka/lessons/48'
    },
    {
      title: 'यथासंख्यम्',
      sl_num: '49',
      to: '/chandraloka/lessons/49'
    },
    {
      title: 'पर्यायः',
      sl_num: '50',
      to: '/chandraloka/lessons/50'
    },
    {
      title: 'परिवृत्तिः',
      sl_num: '51',
      to: '/chandraloka/lessons/51'
    },
    {
      title: 'परिसङ्ख्या',
      sl_num: '52',
      to: '/chandraloka/lessons/52'
    },
    {
      title: 'विकल्पः',
      sl_num: '53',
      to: '/chandraloka/lessons/53'
    },
    {
      title: 'समुच्चयः',
      sl_num: '54',
      to: '/chandraloka/lessons/54'
    },
    {
      title: 'कारकदीपकम्',
      sl_num: '55',
      to: '/chandraloka/lessons/55'
    },
    {
      title: 'समाधिः',
      sl_num: '56',
      to: '/chandraloka/lessons/56'
    },
    {
      title: 'प्रत्यनीकम्',
      sl_num: '57',
      to: '/chandraloka/lessons/57'
    },
    {
      title: 'काव्यार्थपत्तिः',
      sl_num: '58',
      to: '/chandraloka/lessons/58'
    },
    {
      title: 'काव्यलिंगम्',
      sl_num: '59',
      to: '/chandraloka/lessons/59'
    },
    {
      title: 'अर्थान्तरन्यासः',
      sl_num: '60',
      to: '/chandraloka/lessons/60'
    },
    {
      title: 'विकस्वरः',
      sl_num: '61',
      to: '/chandraloka/lessons/61'
    },
    {
      title: 'प्रौढोक्तिः',
      sl_num: '62',
      to: '/chandraloka/lessons/62'
    },
    {
      title: 'संभावना',
      sl_num: '63',
      to: '/chandraloka/lessons/63'
    },
    {
      title: 'मिथ्याध्यवसितिः',
      sl_num: '64',
      to: '/chandraloka/lessons/64'
    },
    {
      title: 'ललितम्',
      sl_num: '65',
      to: '/chandraloka/lessons/65'
    },
    {
      title: 'प्रहर्षणम्',
      sl_num: '66',
      to: '/chandraloka/lessons/66'
    },
    {
      title: 'विषादनम्',
      sl_num: '67',
      to: '/chandraloka/lessons/67'
    },
    {
      title: 'उल्लासः',
      sl_num: '68',
      to: '/chandraloka/lessons/68'
    },
    {
      title: 'अवज्ञालंकृतिः',
      sl_num: '69',
      to: '/chandraloka/lessons/69'
    },
    {
      title: 'अनुक्षा',
      sl_num: '70',
      to: '/chandraloka/lessons/70'
    },
    {
      title: 'लेशः',
      sl_num: '71',
      to: '/chandraloka/lessons/71'
    },
    {
      title: 'मुद्रा',
      sl_num: '72',
      to: '/chandraloka/lessons/72'
    },
    {
      title: 'रत्नावली',
      sl_num: '73',
      to: '/chandraloka/lessons/73'
    },
    {
      title: 'तद्गुणाः',
      sl_num: '74',
      to: '/chandraloka/lessons/74'
    },
    {
      title: 'पूर्वरूपम्',
      sl_num: '75',
      to: '/chandraloka/lessons/75'
    },
    {
      title: 'अतद्गुणाः',
      sl_num: '76',
      to: '/chandraloka/lessons/76'
    },
    {
      title: 'अनुगुणाः',
      sl_num: '77',
      to: '/chandraloka/lessons/77'
    },
    {
      title: 'मिलितम्',
      sl_num: '78',
      to: '/chandraloka/lessons/78'
    },
    {
      title: 'सामान्यम्',
      sl_num: '79',
      to: '/chandraloka/lessons/79'
    },
    {
      title: 'उन्मीलितम् & विशेषकः',
      sl_num: '80',
      to: '/chandraloka/lessons/80'
    },
    {
      title: 'उत्तरम्',
      sl_num: '81',
      to: '/chandraloka/lessons/81'
    },
    {
      title: 'सूक्ष्मम्',
      sl_num: '82',
      to: '/chandraloka/lessons/82'
    },
    {
      title: 'पिहितम्',
      sl_num: '83',
      to: '/chandraloka/lessons/83'
    },
    {
      title: 'व्याजोक्तिः',
      sl_num: '84',
      to: '/chandraloka/lessons/84'
    },
    {
      title: 'गूढोक्तिः',
      sl_num: '85',
      to: '/chandraloka/lessons/85'
    },
    {
      title: 'विवृतोक्तिः',
      sl_num: '86',
      to: '/chandraloka/lessons/86'
    },
    {
      title: 'युक्तिः',
      sl_num: '87',
      to: '/chandraloka/lessons/87'
    },
    {
      title: 'लोकोक्तिः',
      sl_num: '88',
      to: '/chandraloka/lessons/88'
    },
    {
      title: 'छेकोत्किः',
      sl_num: '89',
      to: '/chandraloka/lessons/89'
    },
    {
      title: 'वक्रोक्तिः',
      sl_num: '90',
      to: '/chandraloka/lessons/90'
    },
    {
      title: 'स्वभावोक्तिः',
      sl_num: '91',
      to: '/chandraloka/lessons/91'
    },
    {
      title: 'भाविकम्',
      sl_num: '92',
      to: '/chandraloka/lessons/92'
    },
    {
      title: 'उदात्तम्',
      sl_num: '93',
      to: '/chandraloka/lessons/93'
    },
    {
      title: 'अत्युक्तिः',
      sl_num: '94',
      to: '/chandraloka/lessons/94'
    },
    {
      title: 'निरुक्तिः',
      sl_num: '95',
      to: '/chandraloka/lessons/95'
    },
    {
      title: 'प्रतिषेधः',
      sl_num: '96',
      to: '/chandraloka/lessons/96'
    },
    {
      title: 'विधिः',
      sl_num: '97',
      to: '/chandraloka/lessons/97'
    },
    {
      title: 'हेतुः',
      sl_num: '98',
      to: '/chandraloka/lessons/98'
    }
  ],
  vrittaratnakara_lessons: [
    {
      title_sans: 'छन्दःशास्त्रम् - भूमिका',
      title_eng: 'Introduction to Sanskrit Prosody',
      id: 1,
      definition_sans: '',
      definition_eng: '',
      common:
        '<p>Sanskrit prosody or Chandas refers to one of the six Vedāṅgās, or limbs of Vedic studies. It is the study of poetic metres and verse in Sanskrit.<br> Almost all Sanskrit poetry is based on following a certain meter, or arrangement of syllables. The Chandas or the metre is an essential element of versified poetry. Rigorous description of the form of the poems helps to preserve their shape over time. This description evolved into the formal study of meter. Both meter and the study of meter are called chandas.<br>A poetical stanza or verse in Sanskrit is called <em>padya</em>. Generally a <em>padya</em> or verse contains four <em>pādas</em> or quarters or metrical lines. Sanskrit verses are classified into groups and sub-groups according to: <br><br>a. The number of syllables or syllabic instants they contain in each quarter <br><br>b. The position or placement of short or long syllables within the verse<br><br>Such groups and sub-groups are called <em>chandas</em></p>',
      example_sans: ''
    },
    {
      title_sans: 'गुरुलक्षणम्',
      title_eng: 'Identifying a Guru',
      id: 2,
      definition_sans:
        '<ul><li>अनुस्वारेण सहितो वर्णः – अं, कं, खं, गं…</li><li>विसर्गान्तः – अः, कः,..</li><li>दीर्घः – आ, ई, ऊ,…</li><li>संयुक्तपदः – ष्ण, क्त, ...</li><li>पद्यस्य चरणान्ते स्थितो लघुः</li></ul>',
      definition_eng:
        '<ul><li>Vowel or consonant followed by anusvāra - aṃ, kaṃ, khaṃ, gaṃ, etc  </li><li>Vowel or consonant followed by Visarga - aḥ, kaḥ, etc </li><li>The vowels ā, ī, ū, etc… are long. Whenever any of these is used in a verse separately or with one or more consonants, it will be considered as long. Eg: kā, kī, etc are long syllables </li><li>A conjunct consonant – ṣṇa, kta, etc</li><li>At the end of a quarter a short syllable can be considered as long.</li></ul>',
      example_sans: ''
    },
    {
      title_sans: 'लघुलक्षणम्',
      title_eng: 'Identifying a Laghu',
      id: 3,
      definition_sans:
        '<ul><li>एकमात्रिकः</li><li>ह्रस्वः – अ, इ, उ,..</li></ul>',
      definition_eng:
        '<ul><li>Laghu consists of a single syllabic instant (1 mātrā).</li><li>The  vowels a, i, u, ṛ, lṛ are short. Whenever any of these is used in a verse separately or with one or more consonants it will be considered as a short syllable. Eg: ka, ki, etc.</li></ul>',
      example_sans: ''
    },
    {
      title_sans: 'छन्दोविभागाः',
      title_eng: 'Classification of Chandas',
      id: 4,
      definition_sans: '',
      definition_eng: '',
      treeData: {
        name: 'Classification of Chandas',
        children: [
          {
            name: 'वर्णछन्दः Varṇa Chandas',
            children: [
              {
                name: 'Samam',
                children: [
                  {
                    name: 'Uktā',
                    children: [{ name: 'śrīḥ' }]
                  },
                  {
                    name: 'Atyuktā',
                    children: [
                      {
                        name: 'Strī'
                      }
                    ]
                  },
                  {
                    name: 'Madhyā',
                    children: [
                      {
                        name: 'Nārī'
                      },
                      {
                        name: 'Mṛgī'
                      }
                    ]
                  },
                  {
                    name: 'Pratiṣṭā',
                    children: [
                      {
                        name: 'Kanyā'
                      }
                    ]
                  },
                  {
                    name: 'Supratiṣṭā',
                    children: [
                      {
                        name: 'Paṅkti (Supratiṣṭā)'
                      }
                    ]
                  },
                  {
                    name: 'Gāyatrī',
                    children: [
                      {
                        name: 'Tanumadhyā'
                      },
                      {
                        name: 'śaśivadanā'
                      },
                      {
                        name: 'Vidyullekhā'
                      },
                      {
                        name: 'Vasumatī'
                      }
                    ]
                  },
                  {
                    name: 'Uṣṇik',
                    children: [
                      {
                        name: 'Madalekhā'
                      }
                    ]
                  },
                  {
                    name: 'Anuṣṭup',
                    children: [
                      {
                        name: 'Citrapadā'
                      },
                      {
                        name: 'Vidyunmālā'
                      },
                      {
                        name: 'Māṇavakam'
                      },
                      {
                        name: 'Hamsarutam'
                      },
                      {
                        name: 'Samānikā'
                      },
                      {
                        name: 'Pramāṇikā'
                      }
                    ]
                  },
                  {
                    name: 'Bṛhatī',
                    children: [
                      {
                        name: 'Halamukhī'
                      },
                      {
                        name: 'bhujagaśiśubhṛtā'
                      }
                    ]
                  },
                  {
                    name: 'Paṅkti',
                    children: [
                      {
                        name: 'śuddhavirāṭ'
                      },
                      {
                        name: 'paṇavanāmakam'
                      },
                      {
                        name: 'mayūrasāriṇī'
                      },
                      {
                        name: 'Rukmavatī'
                      },
                      {
                        name: 'Mattā'
                      },
                      {
                        name: 'Manoramā'
                      },
                      {
                        name: 'Upasthitā'
                      }
                    ]
                  },
                  {
                    name: 'Triṣṭup',
                    children: [
                      {
                        name: 'Indravajrā'
                      },
                      {
                        name: 'Upendravajrā'
                      },
                      {
                        name: 'Upajāti'
                      },
                      {
                        name: 'Sumukhī'
                      },
                      {
                        name: 'Dodhakavṛttam'
                      },
                      {
                        name: 'śālinī'
                      },
                      {
                        name: 'Vātormī'
                      },
                      {
                        name: 'śrīḥ'
                      },
                      {
                        name: 'Bhramaravilasitā'
                      },
                      {
                        name: 'Rathoddhatā'
                      },
                      {
                        name: 'Svāgatā'
                      },
                      {
                        name: 'Vṛttā'
                      },
                      {
                        name: 'Bhadrikā'
                      },
                      {
                        name: 'śyenikā'
                      },
                      {
                        name: 'Mouktikamālā'
                      },
                      {
                        name: 'Upasthitam'
                      }
                    ]
                  },
                  {
                    name: 'Jagatī',
                    children: [
                      {
                        name: 'Candravartma'
                      },
                      {
                        name: 'vaṃśasthaṃ'
                      },
                      {
                        name: 'indravaṃśāḥ'
                      },
                      {
                        name: 'Toṭakam'
                      },
                      {
                        name: 'Drutavilambitam'
                      },
                      {
                        name: 'Puṭaḥ'
                      },
                      {
                        name: 'Pramuditavadanā'
                      },
                      {
                        name: 'Kusumavicitrā'
                      },
                      {
                        name: 'Jaloddhatagatiḥ'
                      },
                      {
                        name: 'bhujaṅgaprayātaṃ'
                      },
                      {
                        name: 'sragviṇī'
                      },
                      {
                        name: 'priyaṃvadā'
                      },
                      {
                        name: 'maṇimālā'
                      },
                      {
                        name: 'Lalitā'
                      },
                      {
                        name: 'Mouktikadāma'
                      },
                      {
                        name: 'Vibhāvarī'
                      },
                      {
                        name: 'pramitākṣarā'
                      },
                      {
                        name: 'Ujjvalā'
                      },
                      {
                        name: 'vaiśvadevī'
                      },
                      {
                        name: 'Jaladharamālā'
                      },
                      {
                        name: 'Navamālinī'
                      },
                      {
                        name: 'Prabhā'
                      },
                      {
                        name: 'Mālatī'
                      },
                      {
                        name: 'Tāmarasam'
                      }
                    ]
                  },
                  {
                    name: 'Atijagatī',
                    children: [
                      {
                        name: 'kṣamā'
                      },
                      {
                        name: 'praharṣiṇī'
                      },
                      {
                        name: 'Rucirā'
                      },
                      {
                        name: 'mattamayūram'
                      },
                      {
                        name: 'mañjubhāṣiṇī'
                      },
                      {
                        name: 'Candrikā'
                      }
                    ]
                  },
                  {
                    name: 'śakkarī',
                    children: [
                      {
                        name: 'Asambādhā'
                      },
                      {
                        name: 'Aparājitā'
                      },
                      {
                        name: 'Praharaṇakalikā'
                      },
                      {
                        name: 'Vasantatilakā'
                      }
                    ]
                  },
                  {
                    name: 'atiśakkarī',
                    children: [
                      {
                        name: 'śaśikalā'
                      },
                      {
                        name: 'Srak'
                      },
                      {
                        name: 'Maṇiguṇanikara'
                      },
                      {
                        name: 'Kāmakrīḍā'
                      },
                      {
                        name: 'Mālinī'
                      },
                      {
                        name: 'Prabhadrakam'
                      },
                      {
                        name: 'Elā'
                      }
                    ]
                  },
                  {
                    name: 'aṣṭiḥ',
                    children: [
                      {
                        name: 'ṛṣabhagajavilasitam'
                      },
                      {
                        name: 'vāṇinī'
                      },
                      {
                        name: 'pañcacāmaraṃ'
                      }
                    ]
                  },
                  {
                    name: 'atyaṣṭiḥ',
                    children: [
                      {
                        name: 'śikhariṇī'
                      },
                      {
                        name: 'pṛthvī'
                      },
                      {
                        name: 'vaṃśapatrapatitaṃ'
                      },
                      {
                        name: 'hariṇī'
                      },
                      {
                        name: 'mandākrāntā'
                      },
                      {
                        name: 'Narkuṭakam'
                      }
                    ]
                  },
                  {
                    name: 'dhṛtiḥ',
                    children: [
                      {
                        name: 'kusumitalatāvellitā'
                      }
                    ]
                  },
                  {
                    name: 'atidhṛtiḥ',
                    children: [
                      {
                        name: 'Medhavisphūrjitā'
                      },
                      {
                        name: 'śārdūlavikrīḍitam'
                      }
                    ]
                  },
                  {
                    name: 'kṛtiḥ',
                    children: [
                      {
                        name: 'Suvadanā'
                      },
                      {
                        name: 'vṛttaṃ'
                      }
                    ]
                  },
                  {
                    name: 'Prakṛtiḥ',
                    children: [
                      {
                        name: 'Sragdharā'
                      }
                    ]
                  },
                  {
                    name: 'ākṛtiḥ',
                    children: [
                      {
                        name: 'Bhadrakam'
                      }
                    ]
                  },
                  {
                    name: 'vikṛtiḥ',
                    children: [
                      {
                        name: 'Aśvalalitam'
                      }
                    ]
                  },
                  {
                    name: 'saṃkṛtiḥ',
                    children: [
                      {
                        name: 'Tanvī'
                      }
                    ]
                  },
                  {
                    name: 'atikṛtiḥ',
                    children: [
                      {
                        name: 'Krauñcapadā'
                      }
                    ]
                  },
                  {
                    name: 'utkṛtiḥ',
                    children: [
                      {
                        name: 'bhujaṅgavilasitam'
                      },
                      {
                        name: 'Apavāha'
                      }
                    ]
                  },
                  {
                    name: 'Daṇḍaka',
                    children: [
                      {
                        name: 'caṇḍavṛṣṭiprapātaḥ'
                      },
                      {
                        name:
                          'arṇa-arṇava-vyāla-jīmūta-līlākara-uddāma-śaṅkhā-etc'
                      },
                      {
                        name: 'pracitakasamabhidhaḥ'
                      }
                    ]
                  }
                ]
              },
              {
                name: 'Ardhasamam',
                children: [
                  {
                    name: 'Upacitram'
                  },
                  {
                    name: 'drutamadhyā'
                  },
                  {
                    name: 'vegavatī'
                  },
                  {
                    name: 'bhadravirāṭ'
                  },
                  {
                    name: 'ketumatī'
                  },
                  {
                    name: 'ākhyānakī'
                  },
                  {
                    name: 'viparītākhyānakī'
                  },
                  {
                    name: 'hariṇaplutā'
                  },
                  {
                    name: 'aparavaktram'
                  },
                  {
                    name: 'puṣpitāgrā'
                  },
                  {
                    name: 'yavamatī'
                  }
                ]
              },
              {
                name: 'Viṣamam',
                children: [
                  {
                    name: 'padacaturūrdhvam'
                  },
                  {
                    name: 'āpīḍam'
                  },
                  {
                    name: 'kalikā'
                  },
                  {
                    name: 'lavalī'
                  },
                  {
                    name: 'amṛtadhārā'
                  },
                  {
                    name: 'udgatā'
                  },
                  {
                    name: 'saurabhakam'
                  },
                  {
                    name: 'Lalitam'
                  },
                  {
                    name: 'upasthitapracupitam'
                  },
                  {
                    name: 'vardhamānam'
                  },
                  {
                    name: 'śuddhavirāḍārṣabham'
                  },
                  {
                    name: 'Gāthā'
                  }
                ]
              }
            ]
          },
          {
            name: 'मात्राछन्दः Mātrā Chandas',
            children: [
              {
                name: 'āryā',
                children: [
                  {
                    name: 'Pathyā'
                  },
                  {
                    name: 'Vipulā'
                  },
                  {
                    name: 'Capalā',
                    children: [
                      {
                        name: 'Mukhacapalā'
                      },
                      {
                        name: 'Jaghanacapalā'
                      }
                    ]
                  }
                ]
              },
              {
                name: 'Gīti',
                children: [
                  {
                    name: 'Upagīti'
                  },
                  {
                    name: 'Udgīti'
                  },
                  {
                    name: 'āryāgīti'
                  }
                ]
              },
              {
                name: 'Vaitālīya',
                children: [
                  {
                    name: 'Aupacchandasikam'
                  },
                  {
                    name: 'āpātalika'
                  },
                  {
                    name: 'Dakṣiṇāntikā'
                  },
                  {
                    name: 'Udicyavṛtti'
                  },
                  {
                    name: 'Prācyavṛtti'
                  },
                  {
                    name: 'Pravṛttakam'
                  },
                  {
                    name: 'Aparāntikā'
                  },
                  {
                    name: 'Cāruhāsinī'
                  }
                ]
              },
              {
                name: 'Vaktram',
                children: [
                  {
                    name: 'Pathyāvaktram'
                  },
                  {
                    name: 'Viparītapathyāvaktram'
                  },
                  {
                    name: 'capalāvaktram'
                  },
                  {
                    name: 'yugmavipulā'
                  },
                  {
                    name: 'bhavipulā'
                  },
                  {
                    name: 'ravipulā'
                  },
                  {
                    name: 'navipulā'
                  },
                  {
                    name: 'tavipulā'
                  }
                ]
              },
              {
                name: 'mātrāsamavṛttam',
                children: [
                  {
                    name: 'acaladhṛtivṛttam'
                  },
                  {
                    name: 'mātrāsamakam'
                  },
                  {
                    name: 'viślokavṛttam'
                  },
                  {
                    name: 'vānavāsikāvṛttam'
                  },
                  {
                    name: 'citrāvṛttam'
                  },
                  {
                    name: 'upacitrāvṛttam'
                  },
                  {
                    name: 'pādākulakavṛttam'
                  },
                  {
                    name: 'śikhāvṛttam'
                  },
                  {
                    name: 'khañjāvṛttam'
                  },
                  {
                    name: 'anaṅgakrīḍāvṛttam'
                  },
                  {
                    name: 'rucirāvṛttam'
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    {
      title_sans: 'वर्णछन्दः',
      title_eng: 'Varṇa Chandas or Metres regulated by syllables',
      id: '4.1',
      definition_sans:
        '<p>त्रयाणां वर्णानां समूहो गणशब्देन व्यपदिष्यते ।</p><p>अष्टगणाः - यमताराजभानसलगौ</p>अष्टगणानां लक्षणम् - <p>आदिमध्यावसानेषु भजसा यान्ति गौरवम् ।<br> यरता लाघवं यान्ति मनौ तु गुरुलाघवम् ।</p>',
      definition_eng:
        '<h3>Gaṇa in Varṇa Chandas:</h3><p>Group of three syllables is called Gaṇa or syllabic feet. 8 Gaṇas are used by Sanskrit prosodians.</p>',
      common:
        '<table  style="width: 100%; text-align: center"  border="2"><tbody><tr><td>Sl. No.</td><td>गणनाम<br>Name of Gaṇa&nbsp;</td><td>Symbol</td><td >Example</td></tr><tr ><td>1</td><td>मगण</td><td>ऽऽऽ</td><td>धी श्री स्त्री dhī śrī strī</td></tr><tr><td  style="width: 63.25px;">2</td><td>यगण</td><td>।ऽऽ</td><td>व रा सा va rā sā</td></tr><tr><td>3</td><td>रगण</td><td>ऽ।ऽ</td><td>का गु हा kā gu hā<br></td></tr><tr><td>4</td><td>सगण</td><td>॥ऽ</td><td>&nbsp;व सु धा va su dhā<br></td></tr><tr><td>5</td><td>तगण</td><td>ऽऽ।</td><td>सा ते क्व sā te kva<br></td></tr><tr><td>6</td><td>जगण</td><td>।ऽ।</td><td>क दा स ka dā sa<br></td></tr><tr><td>7</td><td>भगण</td><td>ऽ॥</td><td>किं व द kiṃ va da<br></td></tr><tr><td>8</td><td>नगण</td><td>॥।</td><td>न ह स na ha sa<br></td></tr><tr><td>9</td><td>ल</td><td>।</td><td>गृ gṛ<br></td></tr><tr><td>10</td><td>ग</td><td>ऽ</td><td>घ gha</td></tr></tbody></table>'
    },
    {
      title_sans: 'समवृत्तम्',
      title_eng: 'Samam',
      id: '4.1.i',
      definition_sans:
        '<p>यस्य पद्यस्य चत्वारः अङ्घ्रयः पादाः तुल्येन समानेन लक्षणेन लक्षिता युक्ताः सन्ति तद् वृत्तं समं ।</p><p>यथा – उपेन्द्रव्रज्रा – सर्वेऽपि पादाः एकादशवर्णात्मकाः समानलक्षणभाजश्च भवन्ति | </p><h3>समवृत्तभेदाः -</h3><p>एकाक्षरात् पादात् आरभ्य एकाक्षरवर्धितैः एकेन-एकेन अक्षरेण वर्धितैः पादैः यावत् षड्विंशति संख्याकं प्रति गतं गमनं भवति, तावत् पृथक् भिन्नं छन्दो भवेत् ।',
      definition_eng:
        '<h2>Even metres</h2><p>Verses in which the quarters contain an equal number of syllables are called Samavṛtta.</p><p>Anuṣṭup, indravajrā, etc are examples of this type.</p><p>This type is divided into 26 vṛttas according to the number of syllables in each of the four quarters. This number varies from one to twenty six. Each of these types has specific name. </p>'
    },
    {
      title_sans: 'उक्ता',
      title_eng: 'Uktā',
      id: '4.1.i.I',
      definition_sans:
        '<h3>श्री</h3>गुः श्रीः - एकाक्षरपादायाम् उक्तायां गुर्वेकश्चेत्पादः तदा श्री नाम वृत्तं भवति |',
      definition_eng:
        '<h3>śrīḥ</h3> When each quarter of a verse contains only one long syllable then the metre is called śrīḥ.',
      common:
        '<h3>उदाहरणम् Example: </h3><table  style="width: 40%"><tbody><tr><td>गु </td><td>गु </td><td>गु </td><td>गु </td></tr><tr><td>ऽ </td><td>ऽ </td><td>ऽ </td><td>ऽ </td></tr><tr><td>वि </td><td>ष्णुं </td><td>व </td><td>न्दे </td></tr></tbody></table>'
    },
    {
      title_sans: 'अत्युक्ता',
      title_eng: 'Atyuktā',
      id: '4.1.i.II',
      definition_sans:
        '<h3>स्त्री</h3><p>गौ स्त्री = द्वौ गुरौ यदि पादे भवतः तदा स्त्री नाम वृत्तं भवति</p>',
      definition_eng:
        '<h3>Strī</h3> When each quarter of a verse contains two long syllables then the metre is called Strī.',
      common:
        '<h3>उदाहरणम् Example: &nbsp; </h3><p><table><tbody><tr><td>गु&nbsp; गु</td><td>&nbsp;गु&nbsp;&nbsp;&nbsp; गु </td><td>&nbsp;&nbsp;गु&nbsp;&nbsp; गु </td><td>&nbsp;गु गु </td></tr><tr><td>ऽ&nbsp; ऽ</td><td>&nbsp;ऽ&nbsp;&nbsp;&nbsp; ऽ </td><td>&nbsp;&nbsp;ऽ&nbsp;&nbsp; ऽ </td><td>&nbsp;ऽ ऽ </td></tr><tr><td>गोप&nbsp; &nbsp; </td><td>स्त्रीभिः</td><td>&nbsp;&nbsp;कृष्णो</td><td>&nbsp;&nbsp;रेमे</td></tr></tbody></table></p>'
    },
    {
      title_sans: 'मध्या',
      title_eng: 'Madhyā',
      id: '4.1.i.III',
      common:
        'This metre contains 3 syllables in each quarter. It consists of 2 types:',
      types: 2,
      type: [
        {
          text_sans:
            '<h3>i. नारी Nārī</h3><p>मो नारी – यदि पादे मगणश्चेत् तदा नारी नाम वृत्तं भवति</p><p>When each quarter of a verse contains three long syllables then the metre is called Nārī.</p><table><tbody><tr><td>&nbsp;&nbsp; म</td><td>&nbsp;&nbsp;&nbsp;&nbsp; म</td><td  style="width: 100.417px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;म</td><td  style="width: 94.0833px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; म</td></tr><tr><td>ऽ&nbsp; ऽ ऽ</td><td>&nbsp;ऽ ऽ ऽ </td><td>&nbsp; ऽ&nbsp;&nbsp; ऽ&nbsp;&nbsp; ऽ</td><td>&nbsp;ऽ&nbsp; ऽ&nbsp; ऽ</td></tr><tr><td>गोपानां&nbsp; </td><td>नारीभिः।</td><td> श्लिष्टोऽव्यात्</td><td> कृष्णो वः ॥</td></tr></tbody></table>'
        },
        {
          text_sans:
            '<h3>ii. मृगी Mṛgī</h3><p>रो मृगी - यदि पादे रगणश्चेत् तदा मगी नाम वृत्तं भवति </p><p>When three syllables of one <em>ra</em> group form each quarter then the metre is called Mṛgī.</p><p> In each quarter the first and third syllables are long and the second is short.</p><table><tr><td>र</td><td>र</td><td>र</td><td>र</td></tr><tr><td>ऽ   | ऽ </td><td> ऽ | ऽ </td><td> ऽ | ऽ </td><td> ऽ | ऽ </td></tr><tr><td>सा मृगी</td><td>लोचना | </td><td> राधिका</td><td>श्रीपतेः ||</td></tr></table>'
        }
      ],
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: 'प्रतिष्ठा',
      title_eng: 'Pratiṣṭā',
      id: '4.1.i.IV',
      definition_sans:
        '<h3>कन्या</h3><p>कन्या - पादश्चतुर्गुरुः चेत् कन्या नाम वृत्तं भवति ।</p>',
      definition_eng:
        '<h2>Metre with 4 syllables in each quarter</h2><h3>Kanyā</h3><p>When four long syllables arranged as one <em>ga</em> syllable and one <em>ma</em> group form each pāda, then the metre is called <em>Kanyā</em>.</p>',
      common:
        'उदाहरणम् Example: <table><tr><td>&nbsp; &nbsp; &nbsp; &nbsp;  म &nbsp; &nbsp; गु</td><td>&nbsp; &nbsp; &nbsp; &nbsp; म &nbsp; गु</td><td>&nbsp; &nbsp; &nbsp; &nbsp; म &nbsp; &nbsp; गु</td><td>&nbsp; &nbsp; &nbsp; &nbsp; म &nbsp; &nbsp; &nbsp; गु</td></tr><tr><td>&nbsp; ऽ&nbsp;  ऽ&nbsp;  ऽ&nbsp;  ऽ&nbsp; </td><td>&nbsp; ऽ ऽ &nbsp;  ऽ ऽ</td><td>ऽ&nbsp; ऽ&nbsp; &nbsp; &nbsp;  ऽ ऽ</td><td>&nbsp; ऽ&nbsp;  ऽ &nbsp; ऽ &nbsp; ऽ</td></tr><tr><td>भास्वत्कन्या </td><td> सैका धन्या | </td><td> यस्याः &nbsp; कूले &nbsp; </td><td> कृष्णो अखेलत् ॥</td></table>'
    },
    {
      title_sans: 'सुप्रतिष्ठा',
      title_eng: 'Supratiṣṭā',
      id: '4.1.i.V',
      definition_sans:
        '<h3>पङ्क्तिः</h3><p>म्गौ गिति पङ्क्तिः – यदि पादे भगण गुरू पुनर्गुरुश्चेत्तर्हि पङ्क्तिः नाम वृत्तं भवति |</p>',
      definition_eng:
        '<h2>Metre with 5 syllables in each quarter</h2><h3>Paṅkti</h3><p>This metre has five syllables of one <em>bha</em> group and two <em>ga</em> groups in each quarter.</p><p>So, here, the 1st, 4th and 5th syllables of each quarter are long and 2nd and 3rd are short.</p>',
      common:
        '<table><tr><td>ऽ &nbsp; ।  । &nbsp; ऽ ऽ &nbsp; ऽ &nbsp; ।  । &nbsp; ऽ ऽ</td><td> &nbsp; &nbsp; ऽ । ।  ऽ ऽ  &nbsp; ऽ ।  &nbsp; ।  ऽ ऽ </td></tr><tr><td>कृष्णसनाथा &nbsp; तर्णकपंक्तिः ।</td><td> &nbsp; यामुनकच्छे चारु चचार ॥</td></tr></table>'
    },
    {
      title_sans: 'गायत्री',
      title_eng: 'Gāyatrī',
      id: '4.1.i.VI',
      types: 4,
      type: [
        {
          text_sans:
            '<h3>i. तनुमध्या Tanumadhyā</h3><p>त्यौ स्तस्तनुमध्या - तगण-यगणौ यदि पादे भवतस्तदा तनुमध्या नाम वृत्तं भवति ।</p><p>This metre contains six syllables of one <em>ta</em> group and one <em>ya</em> group in each quarter.</p><p>So, here the 1st, 2nd, 5th and 6th syllables of each quarter are long and the 3rd and the 4th short.</p><table><tr><td> &nbsp; &nbsp; त &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp;  य &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp;  त &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  य</td><td> &nbsp; &nbsp; त &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp;  य &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp;  त &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  य</td></tr><tr><td>ऽ ऽ । । ऽ ऽ &nbsp; ऽ ऽ  &nbsp; । । ऽ  &nbsp; ऽ</td><td> ऽ ऽ । । ऽ ऽ  &nbsp; ऽ ऽ  । । ऽ ऽ</td></tr><tr><td>तेन प्रविभक्ता कामं वयसा सा । </td><td> येन प्रविलासं धत्ते तनुमध्या ॥</td></tr></table>'
        },
        {
          text_sans:
            '<h3>ii. शशिवदना śaśivadanā</h3><p>यदि पादे नगण-यगणौ भवतस्तदा शशिवदना नाम वृत्तं भवति ।</p><p>This metre contains 6 syllables of one <em>na</em> group and one <em>ya</em> group in each quarter.</p><p>So, here the 1st, 2nd, 3rd and 4th syllables of each quarter are short and the last two long.</p><table><tr><td> &nbsp; &nbsp; न  &nbsp; &nbsp;  &nbsp;  &nbsp; य &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp; न   &nbsp;  &nbsp;  &nbsp; य</td></tr><tr><td> &nbsp; | &nbsp; |  | | ऽ ऽ &nbsp; | | | | ऽ ऽ</td></tr><tr><td>शशिवदनानां व्रजतरुणीनाम् ।</td></tr><tr><td>अधरसुधोमिं मधुरिपुरैच्छत् ॥</td></tr></table>'
        },
        {
          text_sans:
            '<h3>iii. विद्युल्लेखा Vidyullekhā</h3><p>यदि पादे मगणौ स्तस्तदा विद्युल्लेखा नाम वृत्तं भवति । </p><p>This metre has 6 syllables made up of two <em>ma</em> groups in each quarter.</p><p>So, here all the six syllables of each quarter are long. There should be a pause after the 3rd and the last syllables of each quarter.</p><table><tbody><tr><td>&nbsp; &nbsp; &nbsp; &nbsp; म&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; म</td><td>&nbsp; &nbsp; &nbsp; &nbsp; म&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; म</td></tr><tr><td>&nbsp; ऽ ऽ ऽ&nbsp; ऽ&nbsp; &nbsp; ऽ ऽ</td><td  style="width: 383.333px;">&nbsp; ऽ ऽ&nbsp; &nbsp; ऽ&nbsp; ऽ&nbsp; ऽ&nbsp; ऽ</td></tr><tr><td>गोपस्त्रीणां मुख्या । </td><td>विद्युल्लेखा रूपा ॥</td></tr><tr><td>कालिन्दी तीरे सा ।</td><td> रेमे श्रीकृष्णेन ॥</td></tr></tbody></table>'
        },
        {
          text_sans:
            '<h3>iv. वसुमती Vasumatī</h3><p>तगण-सगणौ चेत् पादः तदा वसुमती नाम वृत्तम् ।</p><p>This metre has 6 syllables of one <em>ta</em> group and one <em>sa</em> group in each quarter.</p><table><tbody><tr><td>&nbsp; &nbsp; &nbsp; &nbsp; त&nbsp; &nbsp; &nbsp; स</td><td>&nbsp; &nbsp; त&nbsp; &nbsp; &nbsp; स</td></tr><tr><td  style="width: 117.867px;">&nbsp; ऽ ऽ ।। । ऽ</td><td  style="width: 614.333px;">&nbsp; ऽऽ ।। । ऽ</td></tr><tr><td>राजीवनयना, </td><td>नूनं वसुमती ।</td></tr><tr><td>रामा भवति </td><td> सा नूनं वसुमती ॥</td></tr></tbody></table>'
        }
      ],
      definition_sans: '<p>सर्वेषु पादेषु पादान्ते यतिः ।</p>',
      definition_eng:
        'This metre contains 6 syllables in each quarter. There is a pause at the end of each quarter (after the 6th syllable).',
      common: 'It is of 4 types:'
    },
    {
      title_sans: 'उष्णिक्',
      title_eng: 'Uṣṇik',
      id: '4.1.i.VII',
      definition_sans:
        '<h3>मदलेखा</h3><p>मगण सगण गुरुभिः मदलेखा नाम वृत्तं भवति ।</p>',
      definition_eng:
        '<h2>Metre with 7 syllables in each quarter.</h2><h3>Madalekhā</h3><p>This metre has seven syllables of one <em>ma</em> group, one <em>sa</em> group and one <em>ga</em> group in each quarter.</p><p>So here the 4th and 5th syllables of each quarter are short and the others long.</p><p>There should be a pause after the 3rd and the last syllables of each quarter.</p>',
      common:
        '<table><tbody><tr><td>&nbsp; &nbsp; &nbsp; त&nbsp; &nbsp; &nbsp; &nbsp; स</td><td>&nbsp; &nbsp; &nbsp; &nbsp; त &nbsp; &nbsp; &nbsp; &nbsp; स</td></tr><tr><td>ऽ ऽ&nbsp; ऽ। । ऽ&nbsp; ऽ</td><td  style="width: 614.333px;">&nbsp; ऽ ऽ&nbsp; &nbsp; ऽ ।।&nbsp; ऽ&nbsp; ऽ</td></tr><tr><td>रङ्गे बाहुविरुग्णात्,&nbsp; </td><td>दन्तीन्द्रान्मदलेखा ॥</td></tr><tr><td>लग्नाभून्मुरशत्रौ</td><td> कस्तूरी रसचर्चा ॥</td></tr></tbody></table>'
    },
    {
      title_sans: 'अनुष्टुप्',
      title_eng: 'Anuṣṭup',
      id: '4.1.i.VIII',
      definition_sans: '',
      definition_eng: '',
      common:
        'This category refers to metres with eight syllables. This is the most widely used metre in Sanskrit language. This metre allows great freedom in use of long and short syllables. However, in its usual form, the fifth syllable of each quarter should be short, the sixth long and the seventh alternatively long and short. There being no fixed rule for the other syllables. It is of 6 types:',
      types: 6,
      type: [
        {
          text_sans:
            '<h3>i. चित्रपदा Citrapadā</h3><p>भगणौ गुरू च यत्र पादे सा चित्रपदा भवति ।</p><p>This metre has 8 syllables of two <em>bha</em> and two <em>ga</em> groups in each quarter. So here the 1st, 4th, 7th and 8th syllables of each quarter are long and the others short.<table><tbody><tr><td>&nbsp; &nbsp; भ&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; भ&nbsp; &nbsp; &nbsp; &nbsp; गु गु</td><td>&nbsp; &nbsp; &nbsp; भ &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; भ&nbsp; &nbsp; गु गु</td></tr><tr><td>ऽ &nbsp; । &nbsp; । ऽ&nbsp; &nbsp; । । ऽ&nbsp; ऽ</td><td>&nbsp; ऽ । ।&nbsp; &nbsp; ऽ&nbsp; &nbsp; । । ऽ&nbsp; ऽ</td></tr><tr><td>यस्य मुखे प्रियवाणी, </td><td>चेतसि सज्जनता च ।</td></tr><tr><td>चित्रपदाऽपि च लक्ष्मीः</td><td>तं पुरुषं न जहाति ॥</td></tr></tbody></table>'
        },
        {
          text_sans:
            '<h3>2. विद्युन्माला Vidyunmālā</h3><p>यदि पादे मगणौ द्वौ गुरू च भवतस्तदा विद्युन्माला नाम वृत्तं चतुर्भिच्चतुर्भिश्च यतिः ।</p><p>This metre has 8 syllables of two <em>ma</em> and two <em>ga</em> groups in each quarter. So, here all the syllables of each quarter are long</p><table><tbody><tr><td>&nbsp;  &nbsp; &nbsp; भ &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; भ&nbsp; &nbsp; &nbsp; गु गु</td><td>&nbsp; &nbsp; &nbsp; भ&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; भ&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  गु गु</td></tr><tr><td>ऽ ऽ &nbsp; ऽ ऽ &nbsp; &nbsp;  ऽ ऽ ऽ&nbsp; ऽ</td><td>&nbsp; ऽऽ&nbsp; &nbsp; ऽ ऽ &nbsp; &nbsp; ऽ ऽ&nbsp; ऽ ऽ&nbsp; </td></tr><tr><td>मौनं ध्यानं भूमौ शय्या, </td><td>गुर्वी तस्याः कामावस्था ।</td></tr><tr><td>मेघोत्सङ्गे नृत्तासङ्गा, </td><td>यस्मिन्काले विद्युन्माला ॥</td></tr></tbody></table>'
        },
        {
          text_sans:
            '<h3>3. माणवकम् Māṇavakam</h3><p>भाद् गणात् तगण लघुगुरवो यदि तदा माणवकम् </p><p>This is an eight-syllabled metre containing syllables of one <em>Bha</em> group, one <em>ta</em> group, one <em>la</em> group and one <em>ga</em> group in each quarter.</p><p>So here the 1st, 4th, 5th and 8th syllables of each quarter are long and the others short. There should be a pause after the 4th and the last syllables of each quarter.</p><table><tbody><tr><td>&nbsp; &nbsp; भ &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; त &nbsp; &nbsp; &nbsp; ल गु</td><td>&nbsp; &nbsp; &nbsp; भ &nbsp; &nbsp; &nbsp; &nbsp; त &nbsp; &nbsp; &nbsp; ल गु</td></tr><tr><td>&nbsp;ऽ । । ऽ &nbsp; &nbsp; ऽ । । ऽ </td><td>&nbsp; ऽ&nbsp; । । ऽ&nbsp; &nbsp; ऽ। ।&nbsp; ऽ </td></tr><tr><td>माणवकाक्रीडितकं</td><td>&nbsp;यः कुरुते वृद्धवयाः ।</td></tr><tr><td>हास्यमसौ याति जने,</td><td>भिक्षुरिव स्त्रीचपलः ॥</td></tr></tbody></table>'
        },
        {
          text_sans:
            '<h3>4. हंसरुतम् Hamsarutam</h3><p>मगण-नगणौ गुरू च द्वौ</p><p>This eight-syllabled metre contains one <em>ma</em> group, one <em>na</em> group and two <em>ga</em> groups.</p><table><tbody><tr><td>&nbsp; &nbsp; &nbsp; &nbsp; म &nbsp; &nbsp; &nbsp; &nbsp; न &nbsp; &nbsp; &nbsp; गु गु</td><td>&nbsp; &nbsp; म&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; न &nbsp; &nbsp; &nbsp; &nbsp; गु गु</td></tr><tr><td>&nbsp; ऽ&nbsp; ऽ&nbsp; ऽ &nbsp;  ।&nbsp; ।&nbsp; ।&nbsp; &nbsp;  ऽ&nbsp; ऽ &nbsp; &nbsp; &nbsp; </td><td>ऽ &nbsp;  ऽ ऽ &nbsp; ।&nbsp; ।&nbsp; ।&nbsp; ऽ ऽ&nbsp; </td></tr><tr><td>अभ्यागामिशशिलक्ष्मी, </td> <td>मञ्जीरक्वणिततुल्यम् ।</td></tr><tr><td>तीरे राजति नदीनां, </td><td>रम्यं हंसरुतमेतत् ॥</td></tr></tbody></table>'
        },
        {
          text_sans:
            '<h3>5. समानिका Samānikā</h3><p>यदि पादे रगण-जगणौ गुरु-लघू च भवन्ति तदा समानिका नाम वृत्तं भवति ।</p><p> समानी एव समानिका</p><p>This metre has eight syllables of one <em>ga</em> group, one <em>la</em> group, one <em>ra</em> group</p> and one <em>ja</em> group in each quarter. </p><p>So here the 1st, 3rd, 5th and 7th syllables of each quarter are long and the others short. There should be a pause after the 4th and the 8th syllables of each quarter.</p><table><tr><td>&nbsp; &nbsp; &nbsp; &nbsp;  र &nbsp; &nbsp; &nbsp; &nbsp;  ज &nbsp; &nbsp; &nbsp;  गु ल</td><td>&nbsp; &nbsp; &nbsp; &nbsp; र &nbsp; &nbsp; &nbsp;  ज &nbsp; &nbsp; &nbsp;  गु ल</td></tr><tr><td>&nbsp; ऽ । &nbsp; ऽ । &nbsp; ऽ । ऽ ।</td><td>&nbsp; ऽ । &nbsp; ऽ । ऽ । ऽ ।</td></tr><tr><td>यस्य कृष्ण पादपद्मम्</td><td>अस्ति हृत्तडागसद्म ।</td></tr><tr><td>धीः समानिका परेण,</td><td>नोचिताऽत्र मत्सरेण ॥</td></tr></table>'
        },
        {
          text_sans:
            '<h3>6. प्रमाणिका Pramāṇikā</h3><p>जगण-रगणौ लघुगुरू च प्रमाणिका ।</p><p> प्रमाणी एव प्रमाणिका</p><p>This metre has 8 syllables of one <em>ja</em> group, one <em>ra</em> group, one <em>la</em> group and one <em>ga</em> group in each quarter.</p><p>So here the 1st, 3rd, 5th and 7th syllables of each quarter are short and the others long. Places of pause are like Samanika.</p><table><tr><td>&nbsp; &nbsp; ज &nbsp; &nbsp; &nbsp; &nbsp; र &nbsp; &nbsp; &nbsp; ल गु</td><td>&nbsp; &nbsp; &nbsp; ज &nbsp; &nbsp; &nbsp; &nbsp; र &nbsp; &nbsp; ल गु</td></tr><tr><td>। ऽ &nbsp; । ऽ । ऽ । ऽ</td><td>। ऽ &nbsp; । ऽ । ऽ । ऽ</td></tr><tr><td>लघु श्रुतं मदोद्धतं,</td><td>गुरु श्रमाय केवलम् ।</td></tr><tr><td>न यत्परोपकारकृद्,</td><td>वृथैव तत्प्रमाण्यपि ॥</td></tr></table>'
        }
      ]
    },
    {
      title_sans: 'बृहती',
      title_eng: 'Bṛhatī',
      id: '4.1.i.IX',
      definition_sans: '',
      definition_eng: '',
      common:
        'This metre contains 9 syllables in each quarter. It is of 2 types:',
      types: 2,
      type: [
        {
          text_sans:
            '<h3>1. हलमुखी Halamukhī</h3><p>रगणानन्तरं नगण-सगणौ चेत् हलमुखी नाम वृत्तं भवति ।</p><p> त्रिभिः षड्भिः यतिः ।</p><p>The arrangement of Gaṇas in each quarter of this metre is - ra, ga, sa. There is a pause after 3rd and 9th syllable in each quarter. </p><table><tr><td>&nbsp; &nbsp; &nbsp; &nbsp; र &nbsp; &nbsp; &nbsp; &nbsp; न &nbsp; &nbsp; &nbsp; &nbsp; स</td><td>&nbsp; &nbsp; &nbsp; &nbsp; र &nbsp; &nbsp; &nbsp; &nbsp;  न &nbsp; &nbsp; &nbsp; स</td></tr><tr><td>&nbsp; ऽ । ऽ । । । । । ऽ</td><td>&nbsp; ऽ । ऽ । । । । । ऽ</td></tr><tr><td>गण्डयोरतिशयकृशं,</td><td>यन्मुखं प्रकटदशनम् । </td></tr><tr><td>आयतं कलहनिरतां,</td><td>तां स्त्रियं त्यज हलमुखीम् ॥</td></tr></table>'
        },
        {
          text_sans:
            '<h3>2. भुजगशिशुभृता bhujagaśiśubhṛtā</h3><p>द्वाभ्यां नगणाभ्याम् एकेन मगणेन च भुजगशिशुभृता नाम वृत्तं भवति </p><p>सप्तभिः द्वाभ्यां च यतिः ।</p><p>The arrangement of Gaṇas in each quarter of this metre is - na, na, ma. There is a pause after 7th and 9th syllable of each quarter</p><table><tr><td>&nbsp; &nbsp; &nbsp;  न &nbsp; &nbsp; &nbsp; न &nbsp; &nbsp; &nbsp; म</td><td>&nbsp; &nbsp; &nbsp; &nbsp; न &nbsp; &nbsp;  न &nbsp; &nbsp; &nbsp; &nbsp;   म</td></tr><tr><td>। । । । । । ऽ ऽ ऽ</td><td>&nbsp; । । । । । । ऽ ऽ ऽ</td></tr><tr><td>इयमधिकतरं रम्या,</td><td>विकचकुवलय श्यामा ।</td></tr><tr><td>रमयति हृदयं यूनां,</td><td>भुजगशिशुभृता नारी ॥</td></tr></table>'
        }
      ]
    },
    {
      title_sans: 'पङ्क्तिः',
      title_eng: 'Paṅkti',
      id: '4.1.i.X',
      definition_sans: '',
      definition_eng: '',
      common:
        'This metre contains 10 syllables in each quarter. It consists of 7 types:',
      types: 7,
      type: [
        {
          text_sans:
            '<h3>1. शुद्धविराट् śuddhavirāṭ</h3><p>मगण-सगणौ जगण-गुरू च तत् शुद्धविराट् वृत्तम् ।</p><p>पादान्ते यतिः</p><p>The arrangement of Gaṇas in each quarter of this metre is - ma, sa, ja, ga. There is a pause at the end of each quarter.</p><table><tr><td>&nbsp; &nbsp; &nbsp; &nbsp;  म &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  स &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  ज &nbsp; गु</td><td>&nbsp; &nbsp; &nbsp; &nbsp; म &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  स &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  ज &nbsp; गु</td></tr><tr><td>ऽ ऽ &nbsp; ऽ । । &nbsp; &nbsp; ऽ । ऽ । ऽ</td><td>&nbsp; ऽ ऽ &nbsp; ऽ । &nbsp; । ऽ । ऽ । ऽ</td></tr><tr><td>विश्वं तिष्ठति कुक्षिकोटरे,</td><td>वक्त्रे यस्य सरस्वती सदा ।</td></tr><tr><td>अस्मद्वंशपितामहो गुरुः,</td><td>ब्रह्मा शुद्धविराट् पुनातु नः ॥</td></tr></table>'
        },
        {
          text_sans:
            '<h3>2. पणवनामकम् paṇavanāmakam</h3><p>मगण-नगणौ जगण-गुरू च तत् पणवनामकम् नाम वृत्तम् । </p><p>पञ्चभिः पञ्चभिः यतिः </p><p>The arrangement of Gaṇas in each quarter of this metre is - ma, na, ja, ga. There is a pause after 5th and last syllable of each quarter.</p><table><tr><td>&nbsp; &nbsp; &nbsp; &nbsp;  म &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  न &nbsp; &nbsp; &nbsp;  ज &nbsp; &nbsp;  गु</td><td>&nbsp; &nbsp; &nbsp; &nbsp;  म &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  न &nbsp; &nbsp; &nbsp; ज &nbsp; &nbsp;  गु</td></tr><tr><td>&nbsp; ऽ ऽ &nbsp;  ऽ । । । । ऽ । ऽ</td><td>ऽ ऽ &nbsp;  ऽ &nbsp; । । । । ऽ । ऽ</td></tr><tr><td>भक्ता ये शरणमुपागताः,</td><td>तेषां नो चिकुरमपि प्रभुः ।</td></tr><tr><td>छेत्तु कोऽपि जगति हे शिवे ! </td><td>तेऽयं कीर्तिर्पणवनिःस्वनः ॥</td></tr></table>'
        },
        {
          text_sans:
            '<h3>3. मयूरसारिणी mayūrasāriṇī</h3><p>रगण-जगण-रगण-गुरुभिः मयूरसारिणि स्यात् </p><p>The arrangement of Gaṇas in each quarter of this metre is - ra, ja, ra, ga. There is a pause after 1st and last syllable of each quarter.</p><table><tr><td>&nbsp; &nbsp; &nbsp; र &nbsp; &nbsp; &nbsp; &nbsp; ज &nbsp; &nbsp; &nbsp; &nbsp;  र &nbsp; &nbsp; &nbsp; गु</td><td>&nbsp; &nbsp; &nbsp; र &nbsp; &nbsp; &nbsp; &nbsp;  ज &nbsp; &nbsp; &nbsp;  र &nbsp; &nbsp; &nbsp;  गु</td></tr><tr><td>&nbsp; ऽ &nbsp; &nbsp;  । ऽ । ऽ । ऽ । ऽ ऽ</td><td>&nbsp; ऽ । ऽ । ऽ । ऽ । ऽ ऽ</td></tr><tr><td>या वनान्तराण्युपैतिरन्तुं,</td><td>या भुजङ्गभोगमुक्तचित्ता ।</td></tr><tr><td>या द्रुतं प्रयाति सन्नतां सा,</td><td>तां मयूरसारिणीं विजह्यात् ॥</td></tr></table>'
        },
        {
          text_sans:
            '<h3>4. रुक्मवती Rukmavatī</h3><p>भगण-मगण-सगणैः गुरुणा च रुक्मवती नाम वृत्तं भवति । चम्पकमाला इति अन्यनाम । पादान्ते यतिः</p><p>This metre contains one <em>bha</em> group, one <em>ma</em> group, one <em>sa</em> group and one <em>ga</em> group in each quarter. So, the 2nd, 3rd, 7th and 8th syllables of each quarter are short and the others long. There should be a pause after the 5th and the last syllables of each quarter.</p><table><tr><td>&nbsp; &nbsp; &nbsp;  भ &nbsp; &nbsp; &nbsp; &nbsp; म &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  न &nbsp; &nbsp; &nbsp;  गु</td><td>&nbsp; &nbsp; &nbsp; &nbsp; भ &nbsp; &nbsp; &nbsp; &nbsp;  म &nbsp; &nbsp; &nbsp; &nbsp;  न &nbsp; &nbsp;  गु</td></tr><tr><td>ऽ । । ऽ ऽ &nbsp; &nbsp;  ऽ । । ऽ ऽ</td><td>&nbsp;  ऽ । । ऽ ऽ ऽ । । ऽ ऽ</td></tr><tr><td>भग्नमसत्यैः कायसहस्त्रैः,</td><td>मोहमयी गुर्वी तव माया ।</td></tr><tr><td>स्वप्नविलासा योगवियोगा</td><td>रुक्मवती हा कस्य कृते श्रीः ॥</td></tr></table>'
        },
        {
          text_sans:
            '<h3>5. मत्ता Mattā</h3><p>म-भ-स-गण-गुरुयुता मत्ता नामवृत्तं भवति । चतुर्भिः षड्भिः च यतिः ।</p><p>The arrangement of Gaṇas in each quarter of this metre is - ma, bha, sa, ga. So, here the 5th, 6th, 7th and 8th syllables of each quarter are short and the others long. There is a pause after 4th and last syllable of each quarter.</p><table><tr><td>&nbsp; &nbsp; &nbsp; &nbsp;  म &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   भ &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;  स &nbsp; &nbsp;  गु</td><td>&nbsp; &nbsp; &nbsp; &nbsp;  म &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  भ &nbsp; &nbsp; &nbsp; &nbsp;  स &nbsp; &nbsp; गु</td></tr><tr><td>&nbsp; ऽ ऽ &nbsp;  ऽ ऽ &nbsp; । । &nbsp; । । ऽ ऽ</td><td>&nbsp; ऽ ऽ &nbsp;  ऽ ऽ । । । । ऽ ऽ</td></tr><tr><td>पीत्वा मत्ता मधु मधुपाली, </td><td>कालिन्दीये तटवनकुञ्जे ।</td></tr><tr><td>उद्दीव्यन्तीर्व्रजजनरामाः, </td><td>कामासक्ता मधुजिति चक्रे ॥</td></tr></table>'
        },
        {
          text_sans:
            '<h3>6. मनोरमा Manoramā</h3><p>न-र-ज-गणैः गुरुभिश्च मनोरमा नाम वृत्तं भवति । पादान्ते यतिः ।</p><p>The arrangement of Gaṇas in each quarter of this metre is - na, ra, ja, ga. So, here the 4th, 6th, 8th and 10th syllables of each quarter are long and the others short. There is a pause at the end of each quarter.</p><table><tr><td>&nbsp; &nbsp; न &nbsp; &nbsp; &nbsp;  &nbsp; र &nbsp; &nbsp; &nbsp; &nbsp;  ज &nbsp; &nbsp;  गु </td><td>&nbsp; &nbsp; &nbsp; न &nbsp; &nbsp; &nbsp; &nbsp; र &nbsp; &nbsp; &nbsp; &nbsp; ज &nbsp; &nbsp; &nbsp; गु </td></tr><tr><td>। । । ऽ । ऽ । ऽ । ऽ</td><td>। । । &nbsp; ऽ । ऽ &nbsp; । ऽ । ऽ</td></tr><tr><td>तरणिजातटे विहारिणी, </td><td>व्रजविलासिनी विलासतः ।</td></tr><tr><td>मुररिपोस्तनुः पुनातु वः,</td><td>सुकृतशालिनां मनोरमा ॥</td></tr></table>'
        },
        {
          text_sans:
            '<h3>7. उपस्थिता Upasthitā</h3><p>त-ज-जगण-गुरुभिः उपस्थिता नाम वृत्तं भवति । पादान्ते यतिः । द्वाभ्या, अष्टभिश्च इति एके ।</p><p>The arrangement of Gaṇas in each quarter of this metre is - ta, ja, ja, ga. There is a pause after 2nd and last syllable of each quarter.</p><table><tr><td>त ज ज गु </td><td>त ज ज गु </td></tr><tr><td>ऽ ऽ । । ऽ । । ऽ । ऽ</td><td>&nbsp; ऽ ऽ &nbsp; &nbsp; । । ऽ &nbsp; &nbsp; । । ऽ । ऽ</td></tr><tr><td>एषा जगदेकमनोहरा, </td><td>कन्या कनकोज्ज्वलदीधितिः ।</td></tr><tr><td>लक्ष्मीरिव दानवसूदनं, </td><td>पुण्यैर्नरनाथमुपस्थिता ॥</td></tr></table>'
        }
      ]
    },
    {
      title_sans: 'त्रिष्टुप्',
      title_eng: 'Triṣṭup',
      id: '4.1.i.XI',
      definition_sans: '',
      definition_eng: '',
      common:
        'This metre contains 11 syllables in each quarter. It consists of 16 types:',
      types: 16,
      type: [
        {
          text_sans:
            '<h3>1. इन्द्रवज्रा Indravajrā</h3><p>स्यादिन्द्रवज्रा यदि तौ जगौ गः॥</p><p>द्वौ तगणौ ततो जगणगुरु पुनरेको गुरुश्चेत् सा इन्द्रवज्रा नाम</p><p>Each quarter of this meter contains 11 syllables. Here, the 1st, 2nd, 4th, 5th, 8th, 10th and 11th syllables of each quarter are long and the others short. There should be a pause after the 5th and last syllables of each quarter.</p>Example: <br>लोकाभिरामं रणरङ्गधीरं<br>राजीवनेत्रं रघुवंशनाथम् ।<br>कारुण्यरूपं करुणाकरं तं<br>श्रीरामचन्द्रं शरणं प्रपद्ये ॥'
        },
        {
          text_sans:
            '<h3>2. उपेन्द्रवज्रा Upendravajrā</h3><p>उपेन्द्रवज्रा जतजातस्ततो गौ॥</p><p>जगण-तगण-जगणाः स्युः, ततो द्वौ च गुरु स्याताम्, तदा उपेन्द्रवज्रा नाम छन्द उच्यते।</p><p>This metre is similar to the previous one, indravajrā. The difference between two is that in it first syllable of each quarter is short, whereas it is long in indravajrā. The places of pause are also same in both.</p>Example<br>मुकुन्द मूर्ध्ना प्रणिपत्य याचे<br>भवन्तमेकान्तमियन्तमर्थम् ।<br>अविस्मृतिस्त्वच्चरणारविन्दे<br>भवे भवे मेऽस्तु भवत्प्रसादात् ॥'
        },
        {
          text_sans:
            '<h3>3. उपजातिः Upajāti</h3><p>एकः पादः इन्द्रवज्राया एकादिर्वोपेन्द्रवज्रायाः ता “उपजातयो” नाम मताः। </p><p>एताश्चतुरक्षरप्रस्तारवत्प्रस्तारे आद्यन्तयोर्भेदयोः केवलेन्द्रवज्रोपेन्द्रवज्रयोस्त्यागात् चतुर्दश भेदा भवन्ति। तथाहि-</p><ol><li>इ इ इ इ       (इन्द्रवज्रा) </li><li>उ इ इ इ       (कीर्त्तिः) १</li><li>इ उ इ इ        (वाणी) २</li><li>उ उ इ इ       (माला) ३</li><li>इ इ उ इ (शाला) ४</li><li>इ इ उ इ       (हंसी) ५</li><li>इ उ उ इ       (माया) ६</li><li>उ उ उ इ       (जाया) ७</li><li>इ इ इ उ       (बाला) ८</li><li>उ इ इ उ       (आर्द्रा) ९</li><li>इ उ इ उ       (भद्रा) १०</li><li>उ उ इ उ       (रामा) ११</li><li>इ इ उ उ             १२</li><li>उ इ उ उ       (ऋद्धिः) १३</li><li>इ उ उ उ       (बुद्धिः) १४</li><li>उ उ उ उ       (उपेन्द्रवज्रा) </li></ol><br><p>उक्तञ्च वृद्धैः-</p>एकत्र पादे चरणद्वये वापादत्रये वान्यतरः स्थितश्चेत्।<br>तयोरिहान्यत्र तथोहनीयाश्चतुर्दशोक्ता उपजातिभेदाः॥इति॥<br><br><p>उदाहरणं यथा वा-</p>(इ०)      काचिन्मुरारेर्वदनारविन्दं <br>(उ०) संक्रान्तमालोक्य जले निवोढा। <br>   (इ०) व्यक्तं सलज्जा परिचुम्बितुं तत्॥ <br>         (उ०) तदर्थमेवाम्भसि निर्ममज्ज॥(अच्युतचरिते) <br><br><p>इत्येवमस्याश्चतुर्दश भेदाः प्रायो महाकव्येषु सन्तो ज्ञेयाः॥</p><p>This is a mixed metre and usually takes the form of a combination of indravajrā and upendravajrā. The places of pause are same as in the other two. The different combinations of the two metres give rise to 14 types of Upajati metre.'
        },
        {
          text_sans:
            '<h3>4. सुमुखी Sumukhī</h3><p>आदौ नगणः, ततो जगणौ, तत एको लघुः,एको गुरुः स्यात्, सा “सुमुखी” इत्युच्यते। पञ्चभिः षड्भिश्च यतिरिति सम्प्रदायः। </p><p>The arrangement of Gaṇas in each quarter of this metre is - na. two ja groups, la and ga. So here the 5th, 8th and 11th syllables of each quarter are long and others short. There is a pause after 5th and last syllable of each quarter.</p><p>Example:</p><p>तरणिसुतातटकुञ्जगृहे <br>वदनविधुस्मितदीधितिभिः । <br> तिमिरमुदस्य मुखं सुमुखी <br> हरिमवलोक्य चुचुम्ब चिरम् ॥</p>'
        },
        {
          text_sans:
            '<h3>5. दोधकवृत्तम् Dodhakavṛttam</h3><p>भगणत्रयात् ऊर्ध्वे द्वौ गुरु स्यातां चेत् इदं “दोधकवृत्तम्” नाम भवति। पादन्ते यतिः।</p><p>The arrangement of Gaṇas in each quarter of this metre is - 3 bha groups and 2 ga groups. So, here the 1st, 4th, 7th, 10th and 11th syllables of each quarter are long and the others short. There is a pause after 6th and last syllable of each quarter.</p><p>दोधकमर्थविरोधकमुग्रम्<br />स्त्रीचपलं युधि कातरचितम् ।<br />स्वार्थपरं मतिहीनममात्यं<br />मुञ्चति यः नृपतिः स सुखी स्यात् ॥</p>'
        },
        {
          text_sans:
            '<h3>6. शालिनी śālinī</h3><p>मगणः तगणश्च, तगणः गुरुश्च, पुनरप्येको गुरुः अर्थात् म-त-तानामुत्तरं गुरुद्वयञ्चेत् तदा “शालिनी” नाम छन्द उक्तम्। चतुर्भिः सप्तभिश्च यतिरिति शेषः।</p><p>This metre has eleven syllables in each quarter. Here except the sixth and ninth syllables of each quarter, all other syllables are long. There should be a pause after the 4th and last syllables of each quarter.<p>Example:</p>तत्कैशोरं तच्च वक्त्रारविन्दं<br>तत्कारुण्यं ते च लीलाकटाक्षाः।<br>तत्सौन्दर्यं सा च सान्द्रस्मितश्रीः<br>सत्यं सत्यं दुर्लभं दैवतेऽपि॥<br>कोऽयं कान्तिः केशव त्वन्मुखेन्दोः<br>कोऽयं वेषः कापि वाचामभूमिः। <br>सेयं सेयं स्वादुता मञ्जुलश्रीः<br> भूयो भूयो भूयशस्त्वां नमामि॥<br>'
        },
        {
          text_sans:
            '<h3>7. वातोर्मी Vātormī</h3><p>मगणः भगणश्च, तगणः गुरुश्च, पुनरप्येको गुरुश्चेत्, इयम् “वातोर्मी” उच्यते। यतिः शालिनीवत्।</p><p>The arrangement of Gaṇas in each quarter of this metre is - ma, bha, ta and two ga groups. The 5th, 6th and 9th syllables of each quarter are short and the others long. There is a pause after 4th and last syllable of each quarter.</p><p>यात्युत्सेकं सपदि प्राप्य किञ्चित्<br />स्याद्वा यस्याश्चपला चित्तवृत्तिः ।<br />या दीर्घाङ्गी स्फुटशब्दाट्टहासा-<br />त्याज्या सा स्त्री द्रुतवातोर्मिमाला ॥</p>'
        },
        {
          text_sans:
            '<h3>8. श्रीः śrīḥ </h3><p>भगण- तगण- नगणैः द्वाभ्यां गुरुभ्याञ्च “श्रीः” नाम छन्दः। पञ्चभिः षड्भिश्च यतिः।</p><p>The arrangement of Gaṇas in each quarter of this metre is - bha, ta, na and two ga groups. There is a pause after 5th and last syllable of each quarter.</p><p>शोभनवर्णा सुविशदजातिः<br />सुक्रमराजद्गुरुलघुयुक्ता ।<br />सद्यति रम्या बुधहृदि छन्दो<br />मौक्तिकमाला विलसति हृद्या ॥</p>'
        },
        {
          text_sans:
            '<h3>9. भ्रमरविलसिता Bhramaravilasitā</h3><p>मगणभगणौ, नगणलघू, अन्ते गुरुश्चैकश्चेत् सा भ्रमरविलसिता इत्युच्यते। चतुर्भिः, सप्तभिश्च यतिरित्याम्नायः। </p><p>The arrangement of Gaṇas in each quarter of this metre is - ma, ga, two na and ga. So here the 1st, 2nd, 3rd, 4th and 11th syllables of each quarter are long and the others short. There is a pause after 4th and last syllable of each quarter.</p><p>मुग्धे मानं परिहर नचिरात्<br />तारुण्यं ते सफलयतु हरिः ।<br />फुल्ला वल्ली भ्रमरविलसिता<br />अभावे शोभां कलयति किमु ताम् ॥</p>'
        },
        {
          text_sans:
            '<h3>10. रथोद्धता Rathoddhatā</h3><p>रगणात् नगणरगणौ स्याताम्, एको लघुः, एको गुरुश्चेत्, छन्दःशास्त्रे “रथोद्धता” नाम । पादे यतिः ।</p><p>This metre has 11 syllables of one <em>ra</em> group, one <em>na</em> group, one <em>ra</em> group, one <em>la</em> group and one <em>ga</em> group in each quarter. Here the 1st, 3rd, 7th, 9th and 11th syllables of each quarter are long and others short. There should be a pause after the 3rd and last syllables of each quarter.</p><p>Example:</p><p>धेनुपालदयितास्तनस्थली-<br>धन्यकुङ्कुमसनाथकान्तये।<br>वेणुगीतगतिमूलवेधसे<br>ब्रह्मराशिमहसे नमो नमः</p><p>किं त्वया सुभटदूरवर्जितं<br />नात्मनो न सुहृदां प्रियं कृतम् ।<br />यत्पलायनपरायणस्य ते<br />याति घूलिरधुना रथोद्धता ॥</p>'
        },
        {
          text_sans:
            '<h3>11. स्वागता Svāgatā</h3><p>रगण- नगण- भगणेभ्यः परं गुरुद्वयं चेत् सा “स्वागता” ज्ञेया । पादे यतिः।</p><p>The arrangement of Gaṇas in each quarter of this metre is - ra, na, bha and two ga groups. The 1st, 3rd, 7th, 10th and 11th syllables of each quarter are long and the others short. There is a pause after 3rd and last syllable of each quarter.</p><p>रत्नभङ्गविमलैर्गुणतुङ्गै-<br />रर्थिनामभिमतार्पणसक्तैः ।<br />स्वागताभिमुखनम्रशिरस्कैः<br />जीव्यते जगति साधुभिरेव ॥</p>'
        },
        {
          text_sans:
            '<h3>12. वृत्ता Vṛttā</h3><p>यदि द्वौ नगणौ, एकः सगणः, द्वौ गुरु, एतैः रचिता “वृत्ता” सा उच्यते । चतुर्भिः सप्तभिश्च यतिः। अस्यैव छन्दसो “वृत्तम्” इति नामान्तरम्। </p><p>The arrangement of Gaṇas in each quarter of this metre is - 2 na groups, sa, two ga groups. There is a pause after 4th and last syllable of each quarter.</p><p>द्विजगुरुपतिभवकारी यो<br />नरपतिरतिधनलुब्धात्मा ।<br />ध्रुवमिहनिपतति पापाऽसौ<br />फलमिह पवनहतं वृत्तात् ॥</p>'
        },
        {
          text_sans:
            '<h3>13. भद्रिका Bhadrikā</h3><p>द्वाभ्यां नगणाभ्याम् एकेन रगणेन, एकेन च गुरुणा “भद्रिका” नाम भवति । पादे यतिः।</p><p>The arrangement of Gaṇas in each quarter of this metre is - two na, one ra, one ga. There is a pause at the end of each quarter.</p><p>सकलदुरितनाशकारिणी<br />मदभिलषितकामपूरिणी ।<br />भगवति तव मूर्तिरेकिका <br />मम मनसि सदास्तु भद्रिका ॥</p>'
        },
        {
          text_sans:
            '<h3>14. श्येनिका śyenikā </h3><p>रगणजगणौ रगण लघू अर्थात् एको रगणः, एको लघुः, एकश्च गुरुः स्यात् तदा “श्येनिका” इत्युच्यते। श्येनिका । पादे यतिः।</p><p>The arrangement of Gaṇas in each quarter of this metre is - ra, ja, ra, la and ga. The 1st, 3rd, 5th, 7th, 9th and 11th syllables of each quarter are long and the others short. There is a pause at the end of each quarter.</p><p>क्रूरदृष्टिरायताग्रनासिका<br />चञ्चलाकठोरतीक्ष्णनादिनी ।<br />युद्धकाङ्क्षिणी सदाऽऽमिषप्रिया<br />श्येनिकेव सा विगर्हितानना ॥</p>'
        },
        {
          text_sans:
            '<h3>15. मौक्तिकमाला Mouktikamālā</h3><p>भगण-तगण- नगणात् परं द्वौ गुरु स्यातां तदा “मौक्तिकमाला” भवति । पञ्चभिः षड्भिश्च यतिः ।</p><p>The arrangement of Gaṇas in each quarter of this metre is -bha, ta, na and two ga groups. There is a pause after 5th and last syllable of each quarter.</p><p>This metre is same as śrī metre. Therefore refer the example of śrī.</p>'
        },
        {
          text_sans:
            '<h3>16. उपस्थितम् Upasthitam</h3><p>जगणसगणौ, ततः तगणात् परं द्वौ गुरु स्यातां चेत् तदा “उपस्थितम्” इत्युच्यते छन्दः। पादे यतिः । </p><p>The arrangement of Gaṇas in each quarter of this metre is - ja, sa, ta and two ga groups. There is a pause at the end of each quarter.</p><p>जगज्जननो विद्वच्चित्तसंस्थे<br />समग्रजडतानाशैकदक्षे ।<br />सनाथय तव द्वारस्य मध्ये<br />उपस्थितमपाङ्गालोकनेन ॥</p>'
        }
      ]
    },
    {
      title_sans: 'जगती',
      title_eng: 'Jagatī',
      id: '4.1.i.XII',
      definition_sans: '',
      definition_eng: '',
      common:
        '<p>This metre contains 12 syllables in each quarter.</p><p>It has 24 types:</p>',
      types: 24,
      type: [
        {
          text_sans:
            '<h3>1. चन्द्रवर्त्म Candravartma</h3><p>रगण- नगण- भगण- सगणैः कृत्वा “चन्द्रवर्त्म” नाम छन्दो कथितम् । चतुर्भिरष्टभिश्च यतिः।</p><p>The arrangement of Gaṇas in each quarter of this metre is - ra, na, bha and sa. There is a pause after 4th and last syllable of each quarter.</p>चन्द्रवर्त्म विहितं घनतिमिरैः<br />राजवर्त्म रहितं जनगमनैः ।<br />दृष्टवर्त्म तदलङ्कुरु सरसे<br />कुञ्चवर्त्मनि हरिस्तव कुतुकी ॥</p>'
        },
        {
          text_sans:
            '<h3>2. वंशस्थं vaṃśasthaṃ</h3><p>जगणतगणौ जगणरगणौ स्याताम् तदा "वंशस्थं" नाम छन्द उक्तम्। पादे यतिः।</p><p>The 1st, 3rd, 6th, 7th, 9th and 11th syllables of each quarter of this metre are short and the others long. There should be a pause after the 5th and last syllables of each quarter.</p><p>The arrangement of Gaṇas in each quarter of this metre is - ja, ta, ja and ra. There is a pause after 5th and last syllable of each quarter.</p><p>जनस्य तीव्रातपजार्तिवारणा<br />जयन्ति सन्तः सततं समुन्नताः ।<br />सितातप्त्रप्रतिमा विभान्ति ये<br />विशाल वंशस्थतया गुणोचिताः॥</p>'
        },
        {
          text_sans:
            '<h3>3. इन्द्रवंशाः indravaṃśāḥ</h3><p>तगण- तगण- जगणैः, अन्ते रगणोपेतैः तदा “इन्द्रवंशाः” नाम छन्दः स्यात्। पादे यतिः।</p><p>The arrangement of Gaṇas in each quarter of this metre is - two ta groups, one ja and one ra. There is a pause after 5th and last syllable of each quarter.</p><p>कुर्वीत यो देवगुरुद्विजन्मना-<br />मुर्वीपतिः पालनमर्थलिप्सया ।<br />तस्येन्द्रवंशेऽपि गृहीतजन्मनः<br />सञ्जायते श्रीः प्रतिकूलवर्तिनी ॥<br /></p>'
        },
        {
          text_sans:
            '<h3>4. तोटकम् Toṭakam</h3><p>चतुर्भिः सगणैः “तोटकम्” नाम छन्दः प्रसिद्धम्। पादे यतिः।</p><p>The 1st, 2nd, 4th, 5th, 7th, 8th, 10th and 11th syllables of each quarter of this metre are short and others long. There should be a pause after the 4th, 8th and last syllables of each quarter.</p><p>त्यज तोटकमर्थनियोगकरं<br />प्रमदाधिकृतं व्यसनोपहतम् ।<br />उपधाभिरशुद्धमतिं सचिवं<br />नरनायक ! भीरुकमायुधिकम् ॥<br /></p>'
        },
        {
          text_sans:
            '<h3>5. द्रुतविलम्बितम् Drutavilambitam</h3><p>नगण-भगणौ, भगण,-रगणौ चेद् भवेताम् तदा “द्रुतविलम्बितम्” नाम । पादे यतिः।</p><p>The arrangement of Gaṇas in each quarter of this metre is - na, two bha groups, and one ra group. There is a pause after 4th, 8th and last syllable of each quarter.</p><p>यदि भजेत गुरोः पदपङ्कजं<br />क्लमहरं भवरोगमहौषधम् ।<br />अथ नरः परं पदमर्जयेत्<br />जठरघाजठरं न विशेत्पुनः॥<br /></p>'
        },
        {
          text_sans:
            '<h3>6. पुटः Puṭaḥ</h3><p>द्वौ नगणौ, मगणयगणौ चेत्, अयम् “पुट” इति नामोच्यते । अष्टभिः चतुर्भिश्च विरामो ।</p><p>The arrangement of Gaṇas in each quarter of this metre is - two na groups, one ma and ya group. There is a pause after 8th and last syllable of each quarter.</p><p>त्यज! दूरत एव शठं मनुजं<br />परवित्तहरं निजकार्यकरम्।<br />भज! सधु नरं परया दयया<br />सहितं स्वहितं यदि वाञ्छसि शम् ॥<br /></p>'
        },
        {
          text_sans:
            '<h3>7. प्रमुदितवदना Pramuditavadanā</h3><p>द्वौ नगणौ, द्वौ रगणौ च स्याताम् तदा “प्रमुदितवदना” नाम छन्दो भवेत्। पादे यतिः। इयं काचित् “चञ्चलाक्षिका” क्वचित् “मन्दाकिनी” इत्युक्ता। </p><p>The arrangement of Gaṇas in each quarter of this metre is - two na groups, two ra groups. There is a pause at the end of each quarter.</p>बलिदमनविधौ बभौ संगता<br />पदजलरुहि यस्यमन्दाकिनी ।<br />सुरनिहितसिताम्बुजस्रद्निभा<br />हरतु जगदघानि पीताम्बरः॥<br />'
        },
        {
          text_sans:
            '<h3>8. कुसुमविचित्रा Kusumavicitrā</h3><p>नगणयगणसहितौ नगणयगणौ अर्थात् पूर्वे नगणः, ततो यगणः, पुनर्नगणः, पुनरेकः यगणः स्यात् सा “कुसुमविचित्रा” इत्युच्यते ।</p><p>The arrangement of Gaṇas in each quarter of this metre is - na, ya, na, ya. </p>विगलितहारासकुसुममाला<br>सचरणलाक्षाव्लयसुलक्षा ।<br>विरचितवेशं सुरतविशेषं<br>कथयति शय्या कुसुमविचित्रा ॥'
        },
        {
          text_sans:
            '<h3>9. जलोद्धतगतिः Jaloddhatagatiḥ</h3><p>जगण-सगण-जगण-सगणा यत्र सा एवंभूता “जलोद्धतगतिः” नाम । षड्भिः षड्भिर्यतिमती ।</p><p>The arrangement of Gaṇas in each quarter of this metre is - ja, sa, ja, sa. There is a pause after 6th and last syllable of each quarter.</p>भनक्ति समरे बहूनापि रिपून्<br>हरिः प्रभुरसौ, भुजोर्जितबलः।<br>जलोद्धतगतिर्यथैव मकर-<br>स्तनरङ्गनिकरं करेण परितः॥'
        },
        {
          text_sans:
            '<h3>10. भुजङ्गप्रयातं bhujaṅgaprayātaṃ</h3><p>चतुर्भिः यकारैः “भुजङ्गप्रयातं” नाम छन्दो भवेत्। अत्र पादान्ते यतिः। षड्भिः षड्भिश्च यतिरिति वदन् सम्प्रदायविरोधी । एकदेशी वा स्यात्।</p><p>The 1st, 4th, 7th and 10th syllables of each quarter of this metre are short and the others long. There should be a pause after the 6th and last syllables of each quarter.</p>पुरः साधुवद्भाति मिथ्याविनीतः<br>परोक्षे करोत्यर्थनाशं हताशः।<br>भुजङ्गप्रतापोपमं यस्य चित्तं<br>त्यजेत्तादृशं दुश्चरित्रं कुमित्रम्॥'
        },
        {
          text_sans:
            '<h3>11. स्रग्विणी sragviṇī</h3><p>चतुर्भिः अर्थात् चत्वारो रगणा एव सन्ति सा “स्रग्विणी” नाम सम्मता । इह शास्त्र इति शेषः। पादे यतिः।</p><p>The arrangement of Gaṇas in each quarter of this metre is -4 ra groups. There is a pause after last syllable of each quarter.</p>यो रणे युध्यते निर्भर निर्मय-<br>स्त्यागिता यस्य सर्वस्वदानावधिः।<br>तं नरं वीक्ष लक्ष्मीर्यशः स्रग्विणी<br>ननमभ्येति सत्कीर्त्तिशुक्लांशुक्का॥'
        },
        {
          text_sans:
            '<h3>12. प्रियंवदा priyaṃvadā</h3><p>नगण- भगण- जगण- रगणैः लोके “प्रियंवदा” नाम छन्दो भवेत्। पादे यतिः।</p><p>The arrangement of Gaṇas in each quarter of this metre is - na, bha, ja, ra. There is a pause at the end of each quarter.</p>भवति यस्य भवने प्रियंवदा<br>सकलकृत्यकरणे कुशाग्रधीः।<br>रतिषु चाटुवचसां विलासिनी<br>फलति जन्म ननु तस्य हासिनी॥'
        },
        {
          text_sans:
            '<h3>13. मणिमाला maṇimālā</h3><p>अर्थात् तगण-यगण-तगणयगणाश्चेत् स्युः सा “मणिमाला” नाम उच्यते। षड्भिः षड्भिश्च यतिः।</p><p>The arrangement of Gaṇas in each quarter of this metre is - ta, ya, ta, ya. There is a pause after 6th and last syllable of each quarter.</p><p>प्रह्वामरमौलै,  रत्नोपरुक्लृप्ते<br>जातप्रतिबिम्बा शोणा मणिमाला ।<br>गोविन्दपादाब्जे, राजी नखराणा-<br>मास्तां मम चित्ते, ध्वान्तं शमयन्ती॥</p>'
        },
        {
          text_sans:
            '<h3>14. ललिता Lalitā</h3><p>तगण- भगणौ, जगण- रगणौ च स्याताम्, सा पण्डितैः “ललिता” नाम कथिता । पादान्ते यति ।</p><p>The arrangement of Gaṇas in each quarter of this metre is - ta, bha, ja, ra. There is a pause at the end of each quarter.</p>नेत्रे विशालसुषमा कुचे घना<br>पाणौ सरोजरुचिरङ्घ्रियुग्मके।<br>मध्येसुसाम्यमतु बिभर्ति या<br>धीरैरभाणि ललिता नितम्बिनी॥'
        },
        {
          text_sans:
            '<h3>15. मौक्तिकदाम Mouktikadāma</h3><p>यदि पादे चत्वारो जगणाः तदा इह “मौक्तिकदाम” चन्दो भवति । पादे यतिः।</p><p>The arrangement of Gaṇas in each quarter of this metre is - 4 ja groups. There is a pause at the end of each quarter.</p>न यस्य भवेदिह मौक्तिकदाम<br>न रजति तस्य भवे ननु नाम<br>अये ! कुरु यत्नकमर्थधाम<br>मुधैव कुतो रटसि प्रभुनाम॥'
        },
        {
          text_sans:
            '<h3>16. विभावरी Vibhāvarī</h3><p>यत्र जगणरगणौ पुनः जगणरगणौ स्याताम्, सा “विभावरी” नाम छन्दः। पादे यतिः। षट्सु २ वेति केचित् । अस्यैव “स्वमोचचामरम्” इति “सञ्ज्ञान्तरम्”।</p><p>The arrangement of Gaṇas in each quarter of this metre is - ja, ra, ja, ra. There is a pause at the end of each quarter.</p>अशेषपापशोधकाग्र्यगण्यकं<br>श्रुतिस्मृतिप्रसिद्धिसिद्धिधन्यकम्।<br>शिवेति नाम तारकं विभावरी<br>विनास्य कीर्त्तनं सृतिर्महाभया॥'
        },
        {
          text_sans:
            '<h3>17. प्रमिताक्षरा pramitākṣarā</h3><p>सगण- जगण -सगण- सगणैः “प्रमिताक्षरा” कथिता । पादे यतिः।</p><p>The arrangement of Gaṇas in each quarter of this metre is - sa, ja, sa, ja. There is a pause at the end of each quarter.</p>प्रमिताक्षरा सुनयना रुचिरा<br>पतिभावपूर्ण-हृदया विशदा ।<br>गृहनित्यकृत्यकरणे चतुरा<br>चतुराननोपि विजितोस्ति तया॥'
        },
        {
          text_sans:
            '<h3>18. उज्ज्वला Ujjvalā</h3><p>नगण- नगण- भगण- रगणयुता “उज्ज्वला” नाम कथिता । पादे यतिः।</p><p>The arrangement of Gaṇas in each quarter of this metre is - na, na, bha, ra. There is a pause at the end of each quarter.</p>अयि ! निजहितवर्त्तनकामिनः।<br>श्रृणुत मम नराः! वचनं महत्।<br>परिणयत महाकुलसृतिका<br>वरतनुमिह शान्तिमहोज्वलाम्॥'
        },
        {
          text_sans:
            '<h3>19. वैश्वदेवी vaiśvadevī</h3><p>द्वौ मगणौ, द्वौ च यगणौ स्याताम् तदा पञ्चभिः यतिमति “वैश्वदेवी’ नाम छन्दः। </p><p>The arrangement of Gaṇas in each quarter of this metre is - 2 ma groups and 2 ya groups. </p>अर्चामन्येषां, त्वं विहायामराणा-<br>मद्वैतेनैक,विष्णुमभ्यर्च्य भक्त्या।<br>तत्राशेषात्म, न्यर्चिते भाविनी <br>ते भ्रातः! सम्पन्नाराधना वैश्वदेवी॥'
        },
        {
          text_sans:
            '<h3>20. जलधरमाला Jaladharamālā</h3><p>मगण-भगणौ, सगण-मगणौ च चेत् स्याताम् सा “जलधरमाला” नाम । चतुर्भिः, अष्टभिश्च पदयतिः। इयमेव “कान्तोत्पीडा” इति ज्ञेयम्</p><p>The arrangement of Gaṇas in each quarter of this metre is - ma, bha, sa, ma. There is a pause after 4th and 8th syllable of each quarter.</p>या भक्तानां, कलिदुरितोत्तप्तानां<br>तापच्छेदं जलधरमाला नव्या ।<br>भव्याकारा, दिनकरपुत्रीकृले<br>केलीलोला, हरितनुरव्यात्सा वः॥'
        },
        {
          text_sans:
            '<h3>21. नवमालिनी Navamālinī</h3><p>नगणजगणाभ्यां परवर्त्तिनौ भगणयगणौ स्याताम् तदा छन्दःशास्त्रे “नवमालिनी” स्यात्। अष्टाभिः, चतुर्भिश्च यतिरिति वृद्धाः। “नवमालिका” इत्यपि नाम ।</p><p>The arrangement of Gaṇas in each quarter of this metre is - na, ja, bha, ya. There is a pause after 8th and last syllable of each quarter.</p>नववरसङ्गमार्थनयनद्धा<br>चतुरतरालिलोकरसवद्धा ।<br>वद बुध! कीदृशी भवति रामा<br>श्रृणु नवमालिनीयमधिरासा॥'
        },
        {
          text_sans:
            '<h3>22. प्रभा Prabhā</h3><p>द्वौ नगणौ, द्वौ रगणौ चेत् स्याताम् “प्रभा” नाम सा । सप्तभिः पञ्चभिश्च विरतिर्यत्र सा तादृशी ।</p><p>The arrangement of Gaṇas in each quarter of this metre is - na, na, ra, ra. There is a pause after 7th and last syllable of each quarter.</p>रणधरधिगतस्य भीमाकृते-<br>र्भजजकलमणोः प्रतापप्रभोः।<br>यवनवनविदाहवविदाहवह्नेरहो ।<br>कथमित्र कथिता भवेसा प्रभा॥'
        },
        {
          text_sans:
            '<h3>23. मालती Mālatī</h3><p>नगणजगणौ अथ जगणरगणौ स्यतां चेत् सा “मालती” भवति । पञ्चभिः सप्तभिश्च यतिरित्याम्नायः।</p><p>The arrangement of Gaṇas in each quarter of this metre is - na, ja, ja, ra. There is a pause after 5th and last syllable of each quarter.</p>इह कथयाच्युत ! कठकानन<br>मधुरससरैमसारलालुप ।<br>कुसुमकृतस्मितचरुविभ्रमा-<br>मलिरपि चुम्बति मालतीं मुहुः॥'
        },
        {
          text_sans:
            '<h3>24. तामरसम् Tāmarasam</h3><p>नगण- जगण- जगणात् तत् “तामरसम्” इति । पादे यतिः।</p><p>The arrangement of Gaṇas in each quarter of this metre is - na, ja, ja, ya. There is a pause at the end of each quarter.</p>स्फुटसुषममकरन्दमनोजं<br>व्रजललनानयनालिनिपीतम्<br>तव मुखतामरसं मुरशत्रो !<br>हृदय-तडागविकाशि ममास्तु॥इति॥'
        }
      ]
    },
    {
      title_sans: 'अतिजगती',
      title_eng: 'Atijagatī',
      id: '4.1.i.XIII',
      definition_sans: '',
      definition_eng: '',
      common:
        'This metre contains 13 syllables in each quarter. It consists of 6 types:',
      types: 6,
      type: [
        {
          text_sans:
            '<h3>1. क्षमा kṣamā</h3><p>द्वौ नगणौ, द्वौ तगणौ, एको गुरुश्चेत् सा “क्षमा” नामोच्यते। सप्तभिः षड्भिश्च यतिर्यत्र। इमामेव “चन्द्रिका” माहुः। “उत्पलिनी” इत्यपरे।</p><p>The arrangement of Gaṇas in each quarter of this metre is - na, na, ta, ta and one ga. There is a pause after 7th and last syllable of each quarter.</p>इह दूरधिगमे किञ्चवागमैः<br>सततमसतरं वर्णयन्त्यन्तरम्।<br>अममतिविपिन वेददिग्व्यापिन<br>पुरुषमिव परं पद्मयोनिः परम॥ '
        },
        {
          text_sans:
            '<h3>2. प्रहर्षिणी praharṣiṇī</h3><p>मगणनगणौ, जगणरगणौ, एकश्चेद गुरुः तदा इयम् “प्रहर्षिणी” नाम। त्रिभिर्दशभिश्च यतिर्यत्र सा ।</p><p>The 1st, 2nd, 3rd, 8th, 10th, 12th and 13th syllables of each quarter of this metre are long and others short. There should be a pause after the 3rd and last syllables of each quarter.</p>विद्वांसो, यदि मम दोषमुद्गिरेयु-<br>र्यदि वा, गुणगणमव कीर्त्तयेयुः।<br>तत्तुल्यं वत! मनुत मनो मदीयं<br>तत्कष्टं, यदि पुनरेवमाह मन्दः॥'
        },
        {
          text_sans:
            '<h3>3. रुचिरा Rucirā</h3><p>जगणभगणौ, सगणरगणौ, एको गुरुश्चेत् छन्दःशास्त्रे “रुचिरा” नाम सा ज्ञेया। चतुर्भिः नवभिश्च यतिर्ज्ञेया।</p><p>The arrangement of Gaṇas in each quarter of this metre is - ja, bha, sa, ra, ga. There is a pause after 4th and last syllable of each quarter.</p>'
        },
        {
          text_sans:
            '<h3>4. मत्तमयूरम् mattamayūram</h3><p>मगणतगणौ, यगण-सगण-गुरवः ”मत्तमयूरं” नाम छन्द उच्यते। चतुर्भिः नवभिश्च यतिः।</p><p>The arrangement of Gaṇas in each quarter of this metre is - ma, ta, ya, sa, ga. There is a pause after 4th and last syllable of each quarter.</p>लीलानृत्य-न्मतामयूरध्वनिकान्तं<br>नृत्यन्नीपा-मोदिपयोदानीलरम्यम्।<br>रासक्रीडाकृष्टमना गोपबधूभिः<br>कंशध्वंसी निर्जनवृन्दावनमाप॥ '
        },
        {
          text_sans:
            '<h3>5. मञ्जुभाषिणी mañjubhāṣiṇī</h3><p>सगण,जगण,सगणाः, ततः जगणः एको गुरुश्चेत्स्यात्, “मञ्जुभाषिणी” नाम छन्दो ज्ञेयम्। “सुनन्दिनी” ति नामान्तरम् । पञ्चभिः अष्टभिश्चात्र यतिरिति सम्प्रदायः। पादान्तमेव यतिरित्यस्मद्गुरवः।</p><p>The arrangement of Gaṇas in each quarter of this metre is - sa, ja, sa, ja, ga. There is a pause after 5th and last syllable of each quarter.</p>अमृतोर्मीशीतलकरेण लालयं-<br>स्तनुकान्तिरोचितविलोचनो हरे ! <br>नियतं कलानिधिरसीति वल्लवी<br>मुदमच्युते व्यधित मञ्जुभाषिणी॥'
        },
        {
          text_sans:
            '<h3>6. चन्द्रिका Candrikā</h3><p>आदौ द्वौ नगणौ, ततः द्वौ तगणौ, ततः एको गुरुः एतैः कृत्वा “चन्द्रिका” नाम छन्दः। अत्र सप्तभिः षड्भिश्च यतिः।</p><p>The arrangement of Gaṇas in each quarter of this metre is - na, na, ta, ta, ga. There is a pause after 7th and last syllable of each quarter.</p>'
        }
      ]
    },
    {
      title_sans: 'शक्करी',
      title_eng: 'śakkarī',
      id: '4.1.i.XIV',
      definition_sans: '',
      definition_eng: '',
      common:
        'This metre contains 14 syllables in each quarter. It consists of 4 types:',
      types: 4,
      type: [
        {
          text_sans:
            '<h3>1. असम्बाधा Asambādhā</h3><p>मगण-तगणौ, नगण-सगणौ, द्वौ गुरु च एतैः क्रुत्वा “असम्बाधा” नाम छन्द उच्यते। पञ्चभिः नवभिश्च विरतिर्यत्र सा तादृशी।</p><p>The arrangement of Gaṇas in each quarter of this metre is - ma, ta, na, sa, two ga. There is a pause after 5th and last syllable of each quarter.</p>वीर्याग्नि येन ज्वलति रणवशात् क्षिप्ते<br>दैत्यन्द्रे जाता, धरणिरियमसम्बाधा।<br>धर्मस्थित्यर्थ, प्रकटिततनुसम्बन्धः<br>साधना बाधां, प्रशमयतु स कंसारिः॥'
        },
        {
          text_sans:
            '<h3>2. अपराजिता Aparājitā</h3><p>नगण-नगण-रगण-सगण-लघु-गुरुभिश्च “अपराजिता’ भवति। सप्तभिः सप्तभिश्च क्रुत्वा यतिरित्यर्थः</p><p>The arrangement of Gaṇas in each quarter of this metre is - na, na, ra, sa, la and ga. There is a pause after 7th and last syllable of each quarter.</p>यदनवधिभुज-प्रतापकृतास्पदा<br>यदुनिचयचमृः-परैरपराजिता।'
        },
        {
          text_sans:
            '<h3>3. प्रहरणकलिका Praharaṇakalikā</h3><p>नगण-नगण-भगण-नगण-लघु-गुरवश्चेदित्यर्थः, तदा इयं “प्रहरणकलिका” नामोच्यते। यतिश्च पूर्ववत्।</p><p>The arrangement of Gaṇas in each quarter of this metre is - na, na, bha, na, la, ga. There is a pause after 7th and last syllable of each quarter.</p>व्यथयति कुसुम-प्रहरणकलिका<br>प्रमदवनभवा तव धनुषि तता।<br>विरहविपदि मे शरणमिह ततो<br>मधुमथनगुण-स्मरणमविरतम्॥'
        },
        {
          text_sans:
            '<h3>4. वसन्ततिलका Vasantatilakā</h3><p>तगण-भगण-जगणाः, जगणः गुरुश्च पुनरेको गुरुश्चेत् तदा “वसन्ततिलका” नाम कथिता। अस्यैव चन्दसो मतभेदेन सञ्ज्ञान्तरमाह-सिंहोन्नतेयमित्यादिना। स्पष्टम्।</p><p>The 1st, 2nd, 4th, 8th, 11th, 13th and 14th syllables are long and the others short. There should be a pause after the 8th and last syllables of each quarter.</p>त्थं विशेषगुणशालिनि यादवेन्द्रे<br>सद्भक्तिरेव नुदति प्रबला बलान्माम्।<br>यच्चैत्रमासि मधुरं हि पिको विरैति<br>तच्चारुचृतकलिकानिकरहेतुः॥'
        }
      ]
    },
    {
      title_sans: 'अतिशक्करी',
      title_eng: 'atiśakkarī',
      id: '4.1.i.XV',
      definition_sans: '',
      definition_eng: '',
      common:
        'This metre contains 15 syllables in each quarter. It consists of 7 types:',
      types: 7,
      type: [
        {
          text_sans:
            '<h3>1. शशिकला śaśikalā</h3><p>पूर्वैः चतुर्दश लघवः अन्ते च एको गुरुः स्यात् सा “शशिकला” नामोक्ता। सप्तभिः अष्टभिश्च यतिरित्याम्नायः।</p><p>This metre contains 14 short syllables and one long syllable at the end of each quarter. There is a pause after 7th and last syllable of each quarter. </p>मलयजतिलकसमुदितशशिकला<br>व्रजयवतिलसदलिकगगनगता।<br>सरसिजनयनहृदयसलिलनिधिं<br>व्यतनुत विततरभसपरितरलम॥'
        },
        {
          text_sans:
            '<h3>2. स्रक् Srak</h3><p>शशिकला एव षड्भिः नवभिश्च यतिर्यस्यां तादृशी चेत् तदा “स्रक्” इति नाम छन्दो ज्ञेयम्।</p><p>In Shashikala metre, if the pause is after 6th and last syllable, then it becomes Srak metre.</p>अयि! सहचरी! रुचिरतरगुनमयी<br>म्रदिमवसतिरनपगतपरिमला।<br>स्रगिव निवस विलसदनुपरमरसा<br>सुमुखि! मुदितदनुजदलनहृदये! ॥'
        },
        {
          text_sans:
            '<h3>3. मणिगुणनिकर Maṇiguṇanikara</h3><p>यदि अष्टाभिः सप्तभिश्च यतिर्यस्याः एवंविधा शशिकला स्यात् तदा “मणिगुणनिकर” इति नाम छन्द उच्यते।</p><p>In Shashikala metre, if the pause is after 8th and last syllable, then it becomes Manigunanikara metre.</p>नरकरिपुरवतु-निखिलसुरगति-<br>रमितमहिमभर-सहजनिवसतिः।<br>अनवधिमणिगुण-निकरपरिचितः<br>सरिदधिपतिरिव-धृततनुविभवः॥'
        },
        {
          text_sans:
            '<h3>4. कामक्रीडा Kāmakrīḍā</h3><p>यस्यां पञ्च मगणाः स्युः, सा “कामक्रीडा” ज्ञेया</p><p>This metre consists of 5 ma groups.</p>मा कान्ते! पक्षस्यान्ते पर्याकाशे देशे स्वाप्सीः<br>कान्तं वक्त्रं वृत्त पूर्ण चन्द्रं मत्वात् रात्रौ चेत्।<br>क्षुत्क्षामःप्राटंश्चेतो राहुः क्रूरः प्राद्यात्<br>तस्माद् ध्वान्ते हर्म्यस्यान्ते शय्यैकान्ते कर्त्तव्या॥'
        },
        {
          text_sans:
            '<h3>5. मालिनी Mālinī</h3><p>नगण-नगण-मगण-यगण-यगणयुक्ता इयं मालिनी भवति। अष्टभिः सप्तभिश्च यतौ ।</p><p>The 1st, 2nd, 3rd, 4th, 5th, 6th, 10th and 13th syllables of each quarter are short and the others long. There should be a pause after the 8th and last syllables of each quarter.</p>मृगमदकृतचर्चा पीतकौशेयवासा<br>रुचिरशिखिशिखण्डा बद्धमिल्लपाशा।<br>अनृजुनिहितमसे वंशमुत्काणुयन्ती<br>धृतमधुरिपुलीला मालिनी पातु राधा॥'
        },
        {
          text_sans:
            '<h3>6. प्रभद्रकं Prabhadrakam</h3><p>नगणजगणौ, भगणजगणौ, अन्ते रगणविशिष्टौ स्यातां चेत् तत् प्रभद्रकं नाम छन्दो भवति। सप्तभिः अष्टभिश्च यतिः।</p><p>The arrangement of Gaṇas in each quarter of this metre is - na, ja, bha, ja, ra. There is a pause after 7th and last syllable of each quarter.</p>असितगिरिसमं स्यात् कज्जलं सिन्धुपात्रे<br>सुरतरुवरशाखा-लेखनी पत्रमूर्वी।<br>लिकित यदि गृहीत्वा शारदा सर्वकालं<br>तदपि तवगुणानामीश! पारं न याति॥'
        },
        {
          text_sans:
            '<h3>7. एला Elā</h3><p>यत्र सगण-जगण-नगणाः, नगण-यगणौ च स्याताम् सा “एला’ नाम। पञ्चभिः दशभिश्च यतिः</p><p>The arrangement of Gaṇas in each quarter of this metre is - sa, ja, na, na, ya. There is a pause after 5th and last syllable of each quarter.</p>'
        },
        {
          text_sans:
            '<h3>8. चन्द्रलेखा Candralekhā</h3><p>यत्र मगण-रगणौ, मगण-यगणौ, अन्ते एकेन यगणॆन संयुक्तौ स्याताम् सा चन्द्रलेखा नाम। अत्र सप्तभिः अष्टभिश्च यतिः ।</p>'
        }
      ]
    },
    {
      title_sans: 'अष्टिः',
      title_eng: 'aṣṭiḥ',
      id: '4.1.i.XVI',
      definition_sans: '',
      definition_eng: '',
      common: 'This metre has 16 syllables in each quarter. It is of 3 types:',
      types: 3,
      type: [
        {
          text_sans:
            '<h3>1. ऋषभगजविलसितम् ṛṣabhagajavilasitam</h3><p>भगण, रगणौ, त्रयो नगणाः, एको गुरुश्चेत् “ऋषभगजविलसितम्” इति नाम ; सप्तमात्परं विरामो भवेत्।</p><p>The arrangement of Gaṇas in each quarter of this metre is - bha, ra, three na groups, and one ga group. There is a pause after 7th syllable of each quarter.</p>यो हरिरुचखान-खरतरनखशिखरै-<br>दुर्जयदैत्यसिंह-सुविकटहृदयतटम्।<br>किमिह चित्रमेत-दखिलमपहृतवतः<br>कंशनिदेश दृष्य-दृषभगजविलसितम्॥'
        },
        {
          text_sans:
            '<h3>2. वाणिनी vāṇinī</h3><p>यदा नगण-जगण-भगणजगण-रगणैः, अन्ते एकेन गुरुणोपेतैर्भवति "वाणिनी" नाम सा। पादे यतिः।</p><p>The arrangement of Gaṇas in each quarter of this metre is - na, ja, bha, ja, ra and ga. There is a pause at the end of each quarter.</p>स्फुरतु ममाननेद्य ननौ वाणि ! नीतिरम्यं<br>तव चरणप्रसादपरिपाकतः कवित्वम्।<br>भवजैअराशिपारकरणक्षमं मुकुन्दम्<br>सततमहं स्तवैः स्वरचितैः स्तवानि नित्यम्॥'
        },
        {
          text_sans:
            '<h3>3. पञ्चचामरं pañcacāmaraṃ</h3><p>जगण-रगणौ, जगण-रगणौ, ततः जगण गुरुश्चेत् तदा इदं पञ्चचामरं नाम छन्दो वदन्ति। द्वाभ्यां यतिः। यथेष्टं वेति सम्प्रदायः।</p><p>The arrangement of syllabic groups in each quarter of this metre is: ja, ra, la, ga, ja, ra, la, ga. Here the 1st, 3rd, 5th, 7th, 9th, 11th, 13th and 15th syllables of each quarter are short and the others long. There should be a pause after the 4th, 8th, 12th and the last syllables of each quarter.</p>सुरद्रुमूलमण्डिते विचित्ररत्ननिर्मिते<br>लसद्वितानभूषिते सलीलविभ्रमालसम्।<br>सुराङ्गनाभवल्लवी-करप्रपञ्चचामरं<br>स्फुरत्समीर-वीजितं सदाच्युतं भजामि तम्॥'
        }
      ]
    },
    {
      title_sans: 'अत्यष्टिः',
      title_eng: 'atyaṣṭiḥ',
      id: '4.1.i.XVII',
      definition_sans: '',
      definition_eng: '',
      common:
        'This metre contains 17 syllables in each quarter. It is of 6 types',
      types: 6,
      type: [
        {
          text_sans:
            '<h3>1. शिखरिणी śikhariṇī</h3><p>यगण-मगणनगण-सगण-भगणाः एको लघुश्च, अन्ते एको गुरुश्चेत् सा “शिखरिणी” इत्युच्यते। षड्भिः एकादशभिः यतिमती।</p><p>The 1st, 7th, 8th, 9th, 10th, 11th, 14th, 15th and 16th syllables of each quarter of this metre are short and the others long. There should be a pause after the 6th and last syllables of each quarter.</p>त्वमर्कस्त्वं सोमस्त्वमसि पवनस्त्वं हुतवह-<br>स्त्वमापस्त्वं व्योम त्वमु धरणिरात्मा त्वमिति च।<br>परिच्छिन्नामेवं त्वयी परिणता विभ्रतु गिरं<br>न विद्मस्तत्तत्वं वयमिह तु यत्त्वं न भवसि॥'
        },
        {
          text_sans:
            '<h3>2. पृथ्वी pṛthvī</h3><p>जगण-सगणौ, जगण-सगण-यगण-लघवः एको गुरुश्चेत् सा पृथ्वी नाम छन्दः। अष्टाभिः नवभिश्च यतिर्यत्र सेत्यर्थः।</p><p>Here the 1st, 3rd, 4th, 5th, 7th, 9th, 10th, 11th, 13th and 16th syllables of each quarter are short and the others long. There should be a pause after the 8th and last syllables of each quarter.</p>दुरन्तदनुजेश्वर-प्रकरदुस्थपृथ्वी-भर<br>जहार निजलीलया-यदुकुलेवतीर्यांशु यः।<br>स एष जगतां गति-र्दुरितभारमस्मादृशा<br>हरिश्यति हरिः स्तुतिस्मरण वाटुभिस्तोषित॥'
        },
        {
          text_sans:
            '<h3>3. वंशपत्रपतितं vaṃśapatrapatitaṃ</h3><p>भगण-रगण-नगण-भगण-नगण लघुगुरुभिः “वंशपत्रपतितं” नाम छन्दः।</p><p>दशभिः सप्तभिर्यतिर्यत्र तत्। “वंशपत्रपतिता” इति केचित्।</p><p>The arrangement of Gaṇas in each quarter of this metre is - bha, ra, na, bha, na, la, ga. There is a pause after 10th and last syllable of each quarter.</p>सम्प्रति लब्धजन्म शनकैः, कथमपि लघुनि<br>क्षीणपयस्युपेयुषि भिदां जलधरपटले।<br>खण्डित-विग्रहं बलमिदं, धनुरिह विविधाः<br>पूरयितुं भवन्ति विभवः, शिखरमणिरुचः॥'
        },
        {
          text_sans:
            '<h3>4. हरिणी hariṇī</h3><p>नगण-सगणौ, मगण-रगणौ, सगणो लघुश्च, एको गुरुश्चेत् तदा हरिणी नाम छन्दः। षड्भिः चतुर्भिः सप्तभिः यतौ सत्यामिति शेषः।</p><p>The arrangement of Gaṇas in each quarter of this metre is - na, sa, ma, ra, sa, la, ga. There is a pause after 6th, 4th and last syllable of each quarter.</p>सुमुखि! लघवः-पञ्च प्राच्या-स्ततो दशमान्तिम-<br>स्तदनु ललिता-लापे वर्नौ-तृतीयचतुर्थकौ।<br>प्रभवति पुन-र्यत्रोपान्त्यः-स्फुरत्कनकप्रभे!<br>यतिरपि-रसैर्वेदैरश्वैः-स्म्रुता हरिणीति सा॥'
        },
        {
          text_sans:
            '<h3>5. मन्दाक्रान्ता mandākrāntā</h3><p>यदि मगण-भगणौ, नगण-तगणौ पुनः अन्यस्मात तगणात परं द्वौ च गुरु स्याताम सा “मन्दाक्रान्ता”  नाम कथ्यते।  चतुर्भिः, षड्भिः, सप्तभिश्च यतौ । </p><p>The 1st, 2nd, 3rd, 4th, 10th, 11th, 13th, 14th, 16th and 17th syllables of each quarter of this metre are long and the others short. There should be a pause after the 4th, 10th and last syllables of each quarter.</p>धाम्ना धाम-त्वमसि भगवन्-जाप्य इष्टौ द्विजाना<br>यस्य ध्याना-दमलतरतां बुद्धिराप्नोति सद्यः।<br>यस्मिन प्राप्ते-कुदरमुदयं-जाग्रति प्राणिसंधाः<br>रक्ष्यानस्मा-नयि! दिनमणे! पाहि देव प्रसीद॥'
        },
        {
          text_sans:
            '<h3>6. नर्कुटकं Narkuṭakam</h3><p>नगण-जगणौ स्तः, ततः भगण-जगण-जगण-लघवः स्युः एकश्चान्ते गुरुवर्णः स्यात् तदा “नर्कुटकं” नाम छन्दः। सप्तभिः दशभिश्च यतिरिति सम्प्रदायः। अस्यैव “नर्दटकं”, मर्दटकं” इत्यपि च नामान्तरम्।</p><p>The arrangement of Gaṇas in each quarter of this metre is - na, ja, bha, ja, ja, la, ga. There is a pause after 7th and last syllable of each quarter.</p>जय जय जह्यजा-मजितदोषगृभीतगुणां<br>त्वमसि यदात्मना-समवरुद्ध-समस्तभगः।<br>अगजगदोकसा-मखिलशक्यवबोधक! ते<br>क्वचिदजयात्मना-च चरतोनुचरेन्निगमः॥'
        }
      ]
    },
    {
      title_sans: 'धृतिः',
      title_eng: 'dhṛtiḥ',
      id: '4.1.i.XVIII',
      definition_sans:
        '<h3>कुसुमितलतावेल्लिता</h3><p>मगणतगणौ, नगणयगणौ, पुनः द्वौ यगणौ यदि स्युः पञ्चभिः, षड्भिः, सप्तभिश्च यतिर्भवेत् तदा सा “कुसुमितलतावेल्लिता” नाम छन्दः।</p>',
      definition_eng:
        '<h3>kusumitalatāvellitā</h3><p>Eighteen syllables of one ma group, one ta group, one na group and three ya groups form each quarter of this metre. So, here the 6th, 7th, 8th, 9th, 10th, 13th and 16th syllables of each quarter are short and the others long. There should be a pause after the 5th, 11th and the last syllables of each quarter.</p>',
      common:
        'क्रीडत्कालिन्दी-ललितलहरी-वारिभिर्दाक्षिणात्यै-<br>र्वातैः खेलद्भिः-कुसुमितलता- वेल्लिता मन्दमन्दम्।<br>भृङ्गालिगीतैः-किसलयकरो-ल्लासितैर्लास्यलक्ष्मीं<br>तन्वाना चेतो-रभसतरलं-चक्रपाणेश्चकार॥'
    },
    {
      title_sans: 'अतिधृतिः',
      title_eng: 'atidhṛtiḥ',
      id: '4.1.i.XIX',
      definition_sans: '',
      definition_eng: '',
      common:
        'This metre contains 19 syllables in each quarter. It is of 2 types',
      types: 2,
      type: [
        {
          text_sans:
            '<h3>1. मेधविस्फूर्जिता Medhavisphūrjitā</h3><p>यदि यगणमगणौ, नगणसगणौ,स्याताम् किन्तु तौ रगण-रगण-गुरुभिः सहितौ भवेताम् तदा सा “मेधविस्फूर्जिता” भवति। षड्भिः, षड्भिः सप्तभिश्च यतौ ।</p><p>The arrangement of Gaṇas in each quarter of this metre is - ya, ma, na, sa, ra, ra, ga. There is a pause after 6th, 12th and last syllable of each quarter.</p>कदम्बामोदाढ्या, विपिनपवनाः केफिन, कान्तकेकाः<br>विनिद्राः कन्दल्यो, दिशि दिशि मुदा दर्दुरा दृप्तनादाः।<br>निशानृत्यद्विद्य-द्विलसितलसन मेधविस्फूर्जिता चेत्<br>प्रियः स्वाधिनोसौ, दनुजदलनो, राज्यमस्माकिमन्यत्॥'
        },
        {
          text_sans:
            '<h3>2. शार्दूलविक्रीडितम् śārdūlavikrīḍitam</h3><p>मगण-सगण-जगण-सगण-तगण-तगणाः एकेन गुरुणा युताः चेत् स्युः तत् “शार्दूलविक्रीडितं” नाम छन्दः। द्वादशभिः सप्तभिश्च यतौ ।</p><p>The 1st, 2nd, 3rd,, 6th, 8th, 12th, 13th, 14th, 16th, 17th and 19th syllables of each quarter are long and the others short. There should be a pause after the 12th and last syllables of each quarter.</p>आद्यं यत्र गुरुत्रयं प्रियतमे! षष्ठं ततश्चाष्टमं<br>सन्त्येकादशतस्त्रयस्तदनु चेदष्टादशाद्यान्तिमाः।<br>मार्त्तण्डैमुनिभिश्च यत्र विरतिः पूर्णेन्दुबिम्बानने! <br>तद्वृत्तं प्रवदन्ति काव्यरसिकाः शार्दूलविक्रीडितम्॥'
        }
      ]
    },
    {
      title_sans: 'कृतिः',
      title_eng: 'kṛtiḥ',
      id: '4.1.i.XX',
      definition_sans: '',
      definition_eng: '',
      common:
        'This metre contains 20 syllables in each quarter. It is of 2 types',
      types: 2,
      type: [
        {
          text_sans:
            '<h3>1. सुवदना Suvadanā</h3><p>मगण-रगण-भगण-नगण-यगणैर्युता, अथ च यत्र भगणः लघुश्च, ततः एको गुरुरपि स्यात् तत् सुवदना नाम छन्दो ज्ञेयम्। सप्तभिः, सप्तभिः, षड्भिश्च यतौ ।</p><p>The arrangement of Gaṇas in each quarter of this metre is - ma, ra, bha, na, ya, bha, la and ga. There is a pause after 7th, 14th and last syllable of each quarter.</p>प्रत्याहृत्येन्द्रियाणि त्वदितरविषयान्नासाग्रनयना<br>त्वां ध्यायन्ती निकुञ्जे परतरपुरुषं हर्षोत्थपुलका।<br>आनन्दाश्रुलुप्ताक्षी वसति सुवदना योगैकरसिका<br>कामार्तीं त्यक्तुकामा ननौ नरकरिपो! राधा मम सखी॥'
        },
        {
          text_sans:
            '<h3>2. वृत्तं vṛttaṃ </h3></p>त्रिवारं रगणजगणौ, गुरुलघू च स्याताम्, ईदृशेन लक्षणेन “वृत्तं” नाम छन्दः पादान्ते यतिः।</p><p>The arrangement of Gaṇas in each quarter of this metre is - Three ra groups, three ja groups coming alternately one after another, one ga and one la. There is a pause after last syllable of each quarter.</p>चित्तवृत्तिलीलया निसर्गरम्यदेहरुपविभवेन<br>राजमानसद्वयंविलम्भसमदाकलापहृतेन।<br>यः समं व्रजजनाजनैः सुराङ्गनानिभैः सखं समेत्य<br>विष्णुरुल्लास चित्तपद्मकोणपटपदः स मे सदास्तु॥'
        }
      ]
    },
    {
      title_sans: 'प्रकृतिः',
      title_eng: 'Prakṛtiḥ',
      id: '4.1.i.XXI',
      definition_sans:
        '<h3> स्रग्धरा </h3><p>मगण-रगण-भगण-नगणैः, त्रिभिर्यगणै सप्तभिः सप्तभिः सप्तभिश्च यति एवं लक्षणा इयं स्रग्धरा कथिता।</p>',
      definition_eng:
        '<h3>Sragdharā</h3><p>This metre contains 21 syllables in each quarter. The 1st, 2nd, 3rd, 4th, 6th, 7th, 14th, 15th, 17th, 18th, 20th and 21st syllables of each quarter of this metre are long and the others short. There should be a pause after the 7th, 14th and 21st syllables of each quarter.</p>',
      common:
        'व्याकोपेन्दावरामा कनककषलसत्पीतवासाः सुहासा<br>बहैरुच्चन्द्रकान्तेर्वलीयतचिकरा चारुकर्णावतंसा।<br>अंसव्यामसक्तवंशी-ध्वनिसुखितजगद्वल्लवीभिर्लसन्ती<br>मृत्तिर्गोपस्य विष्णोरवतु जगति नः स्रग्धरा हारिहारा॥'
    },
    {
      title_sans: 'आकृतिः',
      title_eng: 'ākṛtiḥ',
      id: '4.1.i.XXII',
      definition_sans:
        '<h3>भद्रकम्</h3><p>भगणरगणौ, नगण-रगण-नगणाः, रगणनगणौ अथ एको गुरुश्चेत् “भद्रकम्” इति नाम छन्द उक्तम्। दशभिः, द्वादशभिश्च, विरतिर्यत्र तत्।</p>',
      definition_eng:
        '<h3>Bhadrakam</h3><p>This metre contains 22 syllables in each quarter. The arrangement of Gaṇas in each quarter of this metre is - bha, ra, na, ra, na, ra, na, ga. There is a pause after 10th, 20th and last syllable of each quarter.</p>',
      common:
        'मा द्राक्षं क्षीणपुण्यान् क्षणमपि भवतो भक्तिहीनान्पदाब्जे<br>मा श्रौषं श्रव्यबद्धं तव वर! चरितादन्यदाख्यानजातम्।<br>मा स्प्राक्षं माधव! त्वमपि भुवनपते! चेतसापह्नुवानं<br>मा भुवं त्वत्सपर्याव्यतिकररहितो जन्मजन्मान्तरेपि॥'
    },
    {
      title_sans: 'विकृतिः',
      title_eng: 'vikṛtiḥ',
      id: '4.1.i.XXIII',
      definition_sans:
        '<h3>अश्वललितम्</h3><p>यदि नगण-जगणौ, भगणजगणौ, भगण-जगण-भगण-लघु-गुरवः स्युः तदा तत् “अश्वललितम्” नाम छन्दः। एकादशः द्वादश, एभिर्यतिरस्यातीति तादृशम्। इदमेवान्यत्र “अद्रितनया” इत्युक्तम्।</p>',
      definition_eng:
        '<h3>Aśvalalitam</h3><p>This metre contains 23 syllables in each quarter. The arrangement of Gaṇas in each quarter of this metre is - na, ja, bha, ja, bha, ja, bha, la, ga. There is a pause after 11th, and last syllable of each quarter.</p>',
      common:
        'विलुलित-कपिशंरणुकपिशं प्रशान्तकलिकापलाशकुसुमं<br>कुसुमनिपातविचित्रवसुधां सशब्दनिपतद्द्रुमोत्कशनकम्।<br>शकुननिनाद-नादितककवनिलोलविपलायमानहरिणं<br>हरिण-विलोचनाध्इवसतिं बभञ्ज पवनात्मजो रिपुवन॥(भट्टिः)॥'
    },
    {
      title_sans: 'संकृतिः',
      title_eng: 'saṃkṛtiḥ',
      id: '4.1.i.XXIV',
      definition_sans:
        '<h3>तन्वी</h3><p>"भूतमुनीर्यतिरिह भतनाः स्भौ भनयाश्च यदि भवति तन्वी॥"</p><p>यदि भगण-तगण-नगणाः, सगण-भगणौ, भगण-नगण-यगणाश्च भवेयुः तदा “तन्वी” नाम छन्दो भवति। इह अस्मिन् छन्दसि पञ्चभिः, सप्तभिः, द्वाधशभिश्च यतिरिति ध्येयम्।</p>',
      definition_eng:
        '<h3>Tanvī</h3><p>24 syllables of one bha group, one ta group, one na group, one sa group, two bha groups, one na group and one ya group for each quarter of this metre. There should be a pause after the 5th, 12th and last syllables of each quarter.</p>',
      common:
        'उदाहरणम् - <br> माधव! मुग्धैर्मधुकरविरुतैः कोकिलकूजितमलयसमीरैः<br>कम्पमुपेता मलयजसलिलैः प्लावनतोप्यविगतनुदहा।<br>पद्मपलाशैर्विरचितशयना देहजसंज्वरभरपरिदूनै-<br>र्निश्वसिता सा मुहुरतिपरुषं ध्यानलये तव निवसति तन्वी॥'
    },
    {
      title_sans: 'अतिकृतिः',
      title_eng: 'atikṛtiḥ',
      id: '4.1.i.XXV',
      definition_sans:
        '<h3>क्रौञ्चपदा</h3><p>"क्रौञ्चपदा स्मौ स्भौ ननना न्गाविषुशरवसुमुनिविरतिरिह भवेत्"</p><p>यदि भगणमगणौ, सगणभगणौ, नगन त्रयम्, नगणगुरु च स्याताम् तदा पञ्चभिः, पञ्चभिः, अष्टभिः, सप्तभिश्च विरतिर्यत्र सा तादृशी इह शास्त्रे “क्रौञ्चपदा” नाम (छन्दो) भवेत्।</p>',
      definition_eng:
        '<h3>Krauñcapadā</h3><p>25 syllables of one bha group, one ma group, one sa group, one bha group, 12 la groups, and one ga group for each quarter of this metre. There should be a pause after the 5th, 10th, 18th and last syllables of each quarter.</p>',
      common:
        'उदाहरणम् - <br> क्रौञ्चपदाला-चित्रिततीरा-मदकलसगफल सकलरुचिरा<br>फुल्लसरोज-श्रेणि-विरासा   मधुमदितम मुप-रवरभसकरी।<br>फेनविलास-प्रोज्ज्वलहासा ललितलहरिभर-पुलकितसुतनुः<br>पश्य हरेसो-कस्य न चेता-हरित तरलगति-रहिमकिरणरजा॥'
    },
    {
      title_sans: 'उत्कृतिः',
      title_eng: 'utkṛtiḥ',
      id: '4.1.i.XXVI',
      definition_sans: '',
      definition_eng: '',
      common:
        'This metre contains 26 syllables in each quarter. It is of 2 types:',
      types: 2,
      type: [
        {
          text_sans:
            '<h3>1. भुजङ्गविलसितम् bhujaṅgavilasitam</h3><p>"वस्वीशाश्वच्छेदोपेतं ममतनयुगनरसलगैर्भुजङ्गविजृम्भितम्"</p><p>मगण-मगण-तगण-नगण-नगण-नगन-रगण-सगण-लघु-गुरुभिरित्यर्थः, एतै रचितमिति यावत् यत्, तत् छन्दः “भुजङ्गविलसितम्” नाम। अष्टौ, एकादशः, सप्त एतैः छेदेन यत्या युक्तम् ।</p><p>This metre contains syllables of 2 ma groups, one ta group, three na groups, one ra group, one sa group, one la and one ga in each quarter. There is a pause after the 8th, 19th and last syllables of each quarter.</p>उदाहरणम् - <br>हेलोदञ्चन्न्यञ्चत्पाद-प्रकत-विकट-नटभरो-रणत्कर-तालक-<br>श्चरुप्रेङ्खच्च्ऊडावर्हः श्रुतितरलनवकिसलय-स्तरङ्गितहारधृक्।<br>त्रस्यन्नागस्त्रीभिर्भक्त्या मुकुलितकरकमलयुगं कृतस्तुतिरच्युतः<br>पायन्नः छिन्दन्कालिन्दीह्र्दे कृतनिजवसति बृहद्भुजगविजृम्भितम्॥'
        },
        {
          text_sans:
            '<h3>2. अपवाह Apavāha</h3><p>"मो नाः षत् सगगिति यदि नवरसरसशरयतियुतमपवाहाख्यम्॥"</p><p>यदि मगणः, षट् नगणाः,  ततः सगणः, द्वौ गुरू च भवेताम्, तथा नवभिः, षड्भिः, षड्भिः, पञ्चभिश्च या यतिः तत् अपवाह इति आख्या नाम यस्य तत् छन्दो भवति।<p>The arrangement of Gaṇas in each quarter of this metre is - ma, 6 na groups, one sa, two ga groups. There is a pause after 9th, 15th and last syllable of each quarter.</p>'
        }
      ]
    },
    {
      title_sans: 'दण्डकम्',
      title_eng: 'Daṇḍaka',
      id: '4.1.i.XXVII',
      definition_sans:
        '<p>षड्विंशतिअक्षरात्मकपादात् वृत्तात् ऊर्ध्वं सप्तविंशत्यादि अक्षरपादाः यदि भवन्ति तदा ते दण्डकाः परिकीर्तिताः भवन्ति ।</p>विभागाः – <ul><li>चण्डवृष्टिः</li><li>अर्ण-अर्णव-व्याल-जीमूत-लीलाकर-उद्दाम-शङ्खादयः</li><li>प्रचितकसमभिधः</li></ul>',
      definition_eng:
        'Metres containing 27 or more syllables in each quarter belong to daṇḍakam category.',
      types: 3,
      type: [
        {
          text_sans:
            '<h3>1. “चण्डवृष्टिप्रपातः” caṇḍavṛṣṭiprapātaḥ</h3><p>यदा दण्डकजातौ नगणद्वयम् ततः सप्त रगणाः स्युः तदा “चण्डवृष्टिप्रपातः” नाम दण्डको भवति।</p><p>If each quarter of an even metre consists of 2 na groups followed by 7 ra groups, then the metre is called caṇḍavṛṣṭiprapāta.</p>उदाहरणं -<br>प्रलयघनघटामहारम्भमेघावलीचण्डवृष्टिप्रपाताकुलं गोकुलं<br>सपदि समवलोक्य सव्येन हस्तेन गोवर्धनं नाम शैलं दधल्लीलया।<br>कमलनयन रक्ष रक्षेतिगर्जत्त्रसन्मुग्धगोपाङ्गनालिङ्गनानन्दितो<br>गलदभिनवधातुधाराविचित्रान्ङ्गरागो मुरारीतिरस्तु प्रमोदाय नः॥'
        },
        {
          text_sans:
            '<h3>2. अर्ण-अर्णव-व्याल-जीमूत-लीलाकर-उद्दाम-शङ्खादयो </h3><p> प्रतिचरणं विवृद्धो रेफो रगणो यत्र ते तथा तदा अर्ण-अर्णव-व्याल-जीमूत-लीलाकर-उद्दाम-शङ्खादयो भवन्ति। एषु एकोनसहस्राक्षरपर्यन्त्पादनियमः कविसम्प्रदायसम्मतः।</p><h3>arṇa-arṇava-vyāla-jīmūta-līlākara-uddāma-śaṅkhā-etc</h3><p>Daṇḍakas containing increasing syllables viz, 28, 29, 30, 31, 32, etc in each of their quarters are arṇa-arṇava-vyāla-jīmūta-līlākara-uddāma-śaṅkhā, etc. As a general rule, each quarter of these metres contain 2 na groups and the rest are ra groups in increasing order.</p>'
        },
        {
          text_sans:
            '<p>3. प्रचितकसमभिधः -</p><p>नगणद्वयात् उत्तरैः परवर्त्तिभिः सप्तभिः यगणैः रचितः छन्दोविद्भिः “प्रचितकसमभिधः” दण्डकः उक्तः।</p><h3>pracitakasamabhidhaḥ</h3><p>Daṇḍakas containing two na groups and 7 ya groups are called pracita.</p><p>उदाहरणम् - </p><p>मुरहर! यदुकुलाम्भोधिचन्द्र! प्रभो! देवकीगर्भरत्न! त्रिलोकैकनाथ!<br>प्रचितकपटसुरारिव्रजोद्दामन्तावलस्तोमविद्रावणे केसरीन्द्र!<br>चरणनखरसुधांशुच्छटोन्मेषनिःशेषितध्यायिचेतोनिविष्टान्धकार।<br>प्रणतजनपरितापोग्रदावानलोच्छेदमेघ! प्रसीद प्रसीद॥'
        }
      ]
    },
    {
      title_sans: 'अर्धसमम्',
      title_eng: 'Ardhasamam',
      id: '4.1.ii',
      definition_sans:
        '<p>यस्य पद्यस्य तृतीयः चरणः प्रथमाङ्घ्रिसमः प्रथमपादतुल्यो भवति तथा द्वितीयः चरणः तुर्यवत् चतुर्थपादवत् भवति, तद्वृत्तं अर्धसममिति उच्यते । यथा पुष्पिताग्रा ।</p>',
      definition_eng:
        '<h2>Half even metres</h2><p>Verses in which the alternate quarters have the same structure, i.e., when the first quarter is similar to the third quarter and the second to the fourth, they called Ardhasamavṛttas</p>'
    },
    {
      title_sans: 'उपचित्रम्',
      title_eng: 'Upacitram',
      id: '4.1.ii.I',
      definition_sans:
        '<p>यदि प्रथमे तृतीये च पादे द्वौ सगणौ ततः सगणलघुगुरवः स्युः समे द्वितीये चतुर्थे च पादे द्वौ भगणौ, पुनः भगणात् (अर्थात् तृतीयभगणात्) द्वौ गुरु स्याताम् तदा “उपचित्रम्” नाम छन्दः। द्विरावृत्या श्लोकः पूरणीयः।</p>',
      definition_eng:
        '<p>The first and the third quarters have three sa groups , one la and one ga group.</p><p>Second and fourth quarters have three bha groups, and two ga groups.</p>',
      common:
        'उदाहरणम् - <br>पुरवैरिपुस्तनुतां मुदं हेमनिभाशुकचन्दनलिपम्<br>गगनं चपलामिलितं यथा शारदनीरधरै-रुपचित्रम् ॥'
    },
    {
      title_sans: 'द्रुतमध्या',
      title_eng: 'drutamadhyā',
      id: '4.1.ii.II',
      definition_sans:
        '<p>विषमपादगतं त्रयो भगणा: , द्वे च गुरुणी अक्षरे , समे पादे , नगणजगणौ, जगण-यगणयुक्तौ स्यातां चेत् सा ‘द्रुतमध्या’ नाम छन्द: ।</p>',
      definition_eng:
        '<p>The first and the third quarters have three bha groups , two ga groups.</p><p>Second and fourth quarters have one na, two ja groups and one ya group.',
      common:
        'उदाहरणम् - <br>नव यदा रमणी रसपूणा<br>भवति मनाजसराजसगन्धि.।<br>किं वद पौरुषमस्ति नराणां<br>बलकरकामयुतामपि लोके ॥'
    },
    {
      title_sans: 'वेगवती',
      title_eng: 'vegavatī',
      id: '4.1.ii.III',
      definition_sans:
        '<p>यदि, प्रथमे तॄतीये पादे, सगणद्वयात् परं, सगणगुरू स्यातां, अथ समे द्वितीये चतुर्थे च द्वौ भगणौ, पुन: भगणात् (तॄतीयभगणात्) द्वौ गुरू भवेतां तदा छन्द:शास्त्रे ‘वेगवती’ नाम छन्द उच्यते ।</p>',
      definition_eng:
        '<p>The first and the third quarters have three sa groups and one ga group.</p><p>Second and fourth quarters have three bha groups and two ga groups.</p>',
      common:
        'उदाहरणम् - <br>स्मरवेगवती व्रजरामा केशववंशग्वैरतिमुग्धा ।<br>रभसान्न गुरुन् गणयन्ती केलिनिकुञ्जगृहाय जगाम॥'
    },
    {
      title_sans: 'भद्रविराट्',
      title_eng: 'bhadravirāṭ',
      id: '4.1.ii.IV',
      definition_sans:
        '<p>यदि विषमे पादे तगणात् परौ जगनरगणौ, गुरुश्च स्यात्, समे पादे मगणसगणौ जगणः द्वौ गुरु च स्तः तदा "भद्रविराट्" इति नाम छन्दः।</p>',
      definition_eng:
        '<p>The first and the third quarters have one ta, one ja, one ra and one ga group.</p><p>Second and fourth quarters have one ma, one sa, one ja and two ga groups.</p>',
      common:
        'उदाहरणम् - <br>कृष्णां कुरुसागरेति मग्नां<br>ध्यायन्तीं चरणं परञ्च*ह्रीणाम्।<br>यो रक्षितवान् यदूत्तमेशः<br>कृष्णोसौ मम हन्तु कश्मलानि॥'
    },
    {
      title_sans: 'केतुमती',
      title_eng: 'ketumatī',
      id: '4.1.ii.V',
      definition_sans:
        '<p>यदि विषमे (१, ३) पादे सगणजगणौ सगुरुयुक्तौ सगणगुरुभ्यां सहितौ भवेताम्, समे=(२, ४) पादे भगण-नगण-रगण-गुरुतः उत्तरं एको गुरुः स्यात् तदा "केतुमती" इत्युच्यते।</p>',
      definition_eng:
        '<p>The first and the third quarters have one sa, one ja, one sa and one ga group.</p><p>Second and fourth quarters have one bha, one na, one ra and two ga groups.</p>',
      common:
        'उदाहरणम् - <br>यदुपुङ्गवाय नमताद्धा ! रक्षति सकलमङ्गल ! यो नित्यम् ।<br>इतरे तु सन्ति कॄपणेन्द्रा: स्वार्थ-परमनसो महवर्त्ता ॥'
    },
    {
      title_sans: 'आख्यानकी',
      title_eng: 'ākhyānakī',
      id: '4.1.ii.VI',
      definition_sans:
        '<p>विषमे  पादे  द्वौ  तगणौ, जगणगुरू च स्त:, पुनरेको गुरुश्च भवेत्, समे पादे जगणतगणौ जगणगुरू च स्याताम् , अन्ते पुन: एको गुरुश्चेत् तदा सा ‘आख्यानकी’ नाम कथ्यते ।</p>',
      definition_eng:
        '<p>The first and the third quarters have two ta groups, one ja group and one ga group.</p><p>Second and fourth quarters have one ja, one ta, one ja and one ga group.</p>',
      common:
        'आख्यानकी स्यात् प्रकटीकॄतार्थे यदीन्द्रवज्राचरण: पुरस्तात्।<br>उपेन्द्रवज्राचरणास्त्रयो अन्ये मनीषिणोक्ता विपरीत पूर्वा ॥'
    },
    {
      title_sans: 'विपरीताख्यानकी',
      title_eng: 'viparītākhyānakī',
      id: '4.1.ii.VII',
      definition_sans:
        '<p>प्रथमे तॄतीये च पादे जगणतगणौ जगणगुरू च स्याताम्, अथ एको गुरुश्च भवेत् । समे द्वितीये चतुर्थे पादे द्वौ तगणौ, जगणगुरू पुनरेको गुरुश्चेत् सा ‘विपरीताख्यानकी’ ।</p>',
      definition_eng:
        '<p>The first and the third quarters have one ja, one ta, one ja and one ga group.</p><p>Second and fourth quarters have two ta groups, one ja and two ga groups.</p>',
      common:
        'स्फुटफेनचया हरिणप्लुता बलिमनिग्यतटा तरणे: सुता ।<br>कलहंसकुलारवशालिनी विहरतो हरति स्म हरेर्मन: ॥'
    },
    {
      title_sans: 'हरिणप्लुता',
      title_eng: 'hariṇaplutā',
      id: '4.1.ii.VIII',
      definition_sans:
        '<p>प्रथमे तॄतीये च पादे सगणद्वयात् सगणलधू, एकश्च गुरु: स्यात् । समे पादे  नगण-भगणौ, भगण-रगणौ च स्यताम् , तदा सा ‘हरिणप्लुता’ इत्युच्यते ।</p>',
      definition_eng:
        '<p>The first and the third quarters have three sa groups, one la and one ga groups.</p><p>Second and fourth quarters have one na, two bha and one ra group.</p>'
    },
    {
      title_sans: 'अपरवक्त्रं',
      title_eng: 'aparavaktram',
      id: '4.1.ii.IX',
      definition_sans:
        '<p>विषमे पादे  नगण-नगण-रगण-लघव:,गुरुश्च स्यात्  द्वितीये चतुर्थे च नगणजगणौ, तत: जगणरगणौ च स्याताम् , तदा इदम् ‘अपरवक्त्रं’ नाम् छन्दो ग्येयम् ।</p>',
      definition_eng:
        '<p>The first and the third quarters have two na groups, one ra group, one la and one ga group.</p><p>Second and fourth quarters have one na, two ja groups and one ra group.</p>'
    },
    {
      title_sans: 'पुष्पिताग्रा',
      title_eng: 'puṣpitāgrā',
      id: '4.1.ii.X',
      definition_sans:
        '<p>विषमे  पादे नगण-नगण-रगणात् परत: यगण: स्यात्, समे पादे नगणजगणौ, जगण-रगण-गुरवश्च स्यु:, तदा ‘पुष्पिताग्रा’ नाम छन्द उच्यते ।</p>',
      definition_eng:
        '<p>The first and the third quarters have two na, one ra and one ya group.</p><p>Second and fourth quarters have one na, two ja, one ra and one ga group.</p>',
      common:
        'भुवनधव ! महान्गपाल !<br>त्वयि सततं ससुते समेतु भव्यम् ।<br>अनिशमिदमहं समीहमनो<br>भगवत ण्व भवामि भव्यदातु: ॥'
    },
    {
      title_sans: 'यवमती',
      title_eng: 'yavamatī',
      id: '4.1.ii.XI',
      definition_sans:
        '<p>विषमे पादे  रगण-जगणौ, पुन: रगण-जगणौ च स्याताम्,  द्वितीये चतुर्थे च जगण-रगणौ,  जरौ=जगण-रगणौ च स्यातम् अन्ते गुरुश्चैकश्चेत् तदेवं  ‘यवमती’ नाम छन्दः ।</p>',
      definition_eng:
        '<p>The first and the third quarters have ra, ja, ra and ja groups.</p><p>Second and fourth quarters have ja, ra, ja, ra and one ga group.</p>',
      common:
        'इति सह विदुरेण विश्वमूर्त्ते:<br>गुणकथया सुधया प्लावितोरुताप: ।<br>क्षणमिव पुलिने यमस्वसुस्तां<br>समुषित औपगविर्निशां ततो अगात् ॥'
    },
    {
      title_sans: 'विषमवृत्तम्',
      title_eng: 'Viṣamam',
      id: '4.1.iii',
      definition_sans:
        '<p>यस्य पादचतुष्के चतुर्ष्वपि पादेषु लक्षणं परस्परं मिथः भिन्नं दृश्यते, छन्दःशास्त्रविशारदाः तद् वृत्तं विषमं कथयन्ति । यथा कलिका छन्दः</p>',
      definition_eng:
        '<h2>Uneven metres</h2><p>Verses in which all the quarters are dissimilar from the point of view of number and placement of syllables, are called Viṣamavṛttas</p>'
    },
    {
      title_sans: 'पदचतुरूर्ध्वाभिधम्',
      title_eng: 'padacaturūrdhvam',
      id: '4.1.iii.I',
      definition_sans:
        '<p>यस्य-वृत्तस्य प्रथम:  पाद : अष्टभिर्वर्णै: स्यात् । मुखपादात् द्वितीयाद्या: पादा: चतुर्भि: क्रमाद् वृद्धै: अक्षरै: नैरन्तर्येण स्यु: तत् छ्न्द: पिंगलादिभिराचार्यै:  ‘पदचतुरूर्ध्वाभिधम्’  नाम कथितम् , विलक्षणै: पादै: जातं सौन्दर्यं यस्य तादृशम् । </p><p>प्रथमपादोष्टाक्षर:, द्वितीयो द्वादशाक्षर:, तॄतीय: षोडशाक्षर:, चतुर्थो विंशत्याक्षर इति निर्गलितोर्थ: ।</p>',
      definition_eng:
        '<p>In this metre, the number of syllables in the successive quarters increases by 4. The first quarter contians 8 syllables, second - 12 syllables, third - 16 syllables and fourth - 20 syllables.',
      common:
        'मुखपादोष्टभिर्वर्णै:<br>परेस्मान्मकरालयै: क्रमाद् वॄद्धा: ।<br>सततं यस्य विचित्रै: पादै: सम्पन्नसौन्दर्यं<br>तदभिहितममलधीभि: पदचतुरूर्ध्वाभिधं वृत्तम् ।'
    },
    {
      title_sans: 'आपीडम्',
      title_eng: 'āpīḍam',
      id: '4.1.iii.II',
      definition_sans:
        '<p>विरचितान् विषमसंख्यकान् चरणान् भजतीति तादृशे प्रथमोक्ते पदचतुरूर्ध्वाभिधे वृत्ते गुरुयुग्मं अवसाने यस्य तादृशे सति इत्थंप्रकारेण उपसर्गेण सहितः "आपीड" इत्याख्यं छन्दो भवति। कम्भूत आपीडः-विधृतरुचिरपदविततियतिः=विधृता सम्पादिता रुचिरा हृद्या पदानां वितत्या यतिर्यत्र स तथाविधः।</p>',
      definition_eng:
        '<p>If the last two syllables in each quarter are long and all the remainig syllables are short, then the previously described padacaturūrdhva metre is āpīḍam.</p>',
      common:
        'प्रथम मुदिते वृत्ते<br>विरचितविषमचरणभाजि ।<br>गुरुकुलयुगलनिधे इति कलित आङा<br>विधृतरुचिरपदवितति यतिरिति भवति पीडः॥'
    },
    {
      title_sans: 'कलिका',
      title_eng: 'kalikā',
      id: '4.1.iii.III',
      definition_sans:
        '<p>यदि प्रथमश्चरणः द्वितीयचरणगतं लक्षणं श्रयति द्वितीयमपि प्रथमपादोक्तं लक्षणं श्रयति, यदि च चरणद्वयं तृतीयचतुर्थरूपम् यथावस्थितमेव स्यात् अनया रीत्या स आपीड एव प्रसिद्धा कलिका नाम छन्दो भवति । अस्यायमाशयः-यदि प्रथमः पादो द्वादशाक्षरः, द्वितीयोष्टाक्षरः, तृतीयः षोडशाक्षरः, चतुर्थो विंशत्यक्षरः तदा कलिका नामेत्युच्यते। इमामेव मञ्जरी इति नाम्ना व्याहरन्ति।</p>',
      definition_eng:
        '<p>Placing the first quarter of padacaturūrdhva metre at its second, second quarter of padacaturūrdhva metre at its first, third and fourth quarters  being unchanged, kalikā metre is formed. It is also known as mañjarī.</p><p>The first quarter has 12 syllables, second - 8 syllables, third - 16 syllables and fourth - 20 syllables.</p>',
      common:
        'प्रथममितरचरणसमुत्थं<br>श्रयति जगति लक्ष्म।<br>इतरदितरजनतिमपि यदि चतुर्थ<br>चरणयुगलकमधिकृतमपरमिति कलिका सा॥'
    },
    {
      title_sans: 'लवली',
      title_eng: 'lavalī',
      id: '4.1.iii.IV',
      definition_sans:
        '<p>यदि तृतीयः चरणः प्रथमपादोक्तम् अष्टाक्षरत्वरुपं लक्षणम् तद्युक्तो भवति, पादत्रयम् प्रस्तुतम् समग्रमपि आपीडलक्षणं श्रयते तदा हि इह शास्त्रे प्रसिद्धा "लवली" नाम छन्दः। द्वाभ्यां गुरुभ्यां युक्तः सकलचरणानाम् अन्तः अवसानं यस्याः सा तादृशी। अत्र-प्रथमः पादो १२ द्वादशाक्षरः, द्वितीयः १६ षोडशाक्षरः, तृतीयः ८ अष्टाक्षरः, चतुर्थो २० विंशत्याक्षर इति सारः।</p>',
      definition_eng:
        '<p>Placing the first quarter of padacaturūrdhva metre at its third, lavalī metre is formed.</p><p>The first quarter has 12 syllables, second - 16 syllables, third - 8 syllables and fourth - 20 syllables.</p>',
      common:
        'द्विगुरुयुतसकलचरणान्ता<br>मुखचरणरचितमनुभवतितृतीयः<br>चरण इह हि लक्ष्म<br>प्रकृतमपरमखिलमपि यदि भजति लवली सा॥'
    },
    {
      title_sans: 'अमृतधारा',
      title_eng: 'amṛtadhārā',
      id: '4.1.iii.V',
      definition_sans:
        '<p>यदि प्रथमपादोष्टाक्षरात्मकः, चतुर्थपादरूपेण भवति, चतुर्थः पादोष्टाक्षरात्मको भवतीति यावत्, समग्रम् पादत्रयम् आपीदस्थद्वितीयपादादितुल्यं स्यात् तदा अवसाने गुरुयुग्मं यस्याः सा तादृशी हृद्यपदरचितपादा छन्दःशास्त्रे ‘अमृतधारा’ सेति सारः।</p>',
      definition_eng:
        '<p>Placing the first quarter of padacaturūrdhva metre at its fourth, amṛtadhārā metre is formed.</p><p>The first quarter has 12 syllables, second - 16 syllables, third - 20 syllables and fourth - 8 syllables.</p><p>There is no restriction on the occurence of short and long syllables.</p>',
      common:
        'प्रथममधिवसति यदि तुर्य<br>चरमचरणपदमवसितगुरुयुग्मा।<br>निखिलमपरमुपरितनसममिह ललितपादा <br>त्रितयममृतधारा॥'
    },
    {
      title_sans: 'उद्गता',
      title_eng: 'udgatā',
      id: '4.1.iii.VI',
      definition_sans:
        'आदिमे प्रथमे पादे सगण-जगण-सगणाः, सगण-लघू च स्याताम्  अनन्तरम् द्वितीये पादे नगण-सगण-जगण-गुरुषु सत्सु त्रयाणां पूरणे तृतीये पादे स्थिता ये भगण-नगण-जगण-लघवः ते गुरुयुक्ताः कार्याः। चतुर्थे पादे सगण-जगण-सगणाः जगण-गुरु च भवतः। एवं सति प्रथमं पादम् एकीकृत्य पठेत् अर्थात् प्रथमं पादं द्वितीयेनैकीकृत्य उच्चारयेदित्यर्थः। प्रथमद्वितीयपादौ बहुविलम्बेन न पठेत् अत्यन्तयतिं न कुर्यादित्याशयः, एवं कृते लक्षणे “उद्गता” नाम छन्दो ज्ञेयम्॥',
      definition_eng:
        '<p>The four quarters of an udgatā metre have the following syllabic arrangements:</p><p>1st Pāda - sa, ja, sa, la - 10 syllables</p><p>2nd Pāda - na, sa, ja, ga - 10 syllables</p><p>bha, na, ja, la, ga - 11 syllables</p><p>4th Pāda - sa, ja, sa, ja, ga - 13 syllables</p>',
      common:
        '<p>Example: </p>अथ वासवस्य वचनेन<br>रुचिर वदनस्त्रिलोचनम्।<br>क्लान्तिरहितमभिराधयितुं<br>विधिवत्तपांसि विदधे धनञ्जयः॥'
    },
    {
      title_sans: 'सौरभकं',
      title_eng: 'saurabhakam',
      id: '4.1.iii.VII',
      definition_sans:
        '<p>यदि इह तृतीये पादे रगणनगणौ, भगण गुरु च स्याताम्, अपरं तृतीयवर्जे समग्रं प्रथम-द्वितीय-चतुर्थरुपम् उद्गतास्थितं समग्रं लक्षणम् प्रप्नोति तदा सौरभकं नाम वृत्तमुच्यते।</p>',
      definition_eng:
        '<p>This metre is same as udgatā with its third quarter replaced by the arrangement - ra, bha, and one long syllables (10 syllables in all)</p>',
      common:
        'चरणत्रयं भजति लक्ष्म यदि सकलमुद्गतागतम् ।<br>र्नौ भगौ भवति सौरभकं चरणे यदीह भवस्तृतीयके॥'
    },
    {
      title_sans: 'ललितम्',
      title_eng: 'Lalitam',
      id: '4.1.iii.VIII',
      definition_sans:
        '<p>यदि तृतीयः पादः नगणद्वयम्, सकारद्वयञ्च आश्रयते, अपरञ्च पादत्रयम् प्रथम द्वितीय चतुर्थात्मकं निश्चयेन उद्गतावत् स्यात् तदा तत् छन्दः “ललितम्” नाम कथितम्।</p>',
      definition_eng:
        '<p>This metre is same as udgatā with its third quarter replaced by the arrangement - 2 na groups, and 2 sa groups (12 syllables in all)</p>',
      common: ''
    },
    {
      title_sans: 'उपस्थितप्रचुपितं',
      title_eng: 'upasthitapracupitam',
      id: '4.1.iii.IX',
      definition_sans:
        '<p>मगणसगणौ, जगणभगणौ, द्वौ गुरु च एकः प्रथमचरणः द्वितीयादिपादात् पृथक्कृत्य पठनीय इत्यर्थः। अतः अन्यत् पादत्रयं द्वितीयादि एकीकृत्यैव पठनीयम् न तु तत्र विरामो विधेयः। सगण-नगण-जगण-रगण-गुरवः द्वितीये पादे कार्या। नगणौ, सगणश्च एते त्रुतीये पादे देयाः। जगणयगणौ तौ चतुर्थे पादे कार्यौ, एवं कृते ”उपस्थितप्रचुपितं” नाम छन्द उक्तमित्यर्थः।</p>',
      definition_eng:
        '<p> This is an uneven metre with its 4 quarters having arrangements: </p><p>1. ma, sa, ja, bha and two ga - 14 syllables</p><p>2. sa, na, ra and one long - 13 syllables</p><p>2 na groups, sa - 9 syllables</p><p>3. 3 na, one ja and ya</p>',
      common:
        'म्सौ ज्गौ गौ प्रथमाङ्घ्रिरेकतः पृथगन्यत्<br>त्रितयं सनजरगास्तथा ननौ सः<br>त्रिनपरिकलितजयौ<br>प्रचुपितमिदमुदितमुपस्थितपूर्वम्॥'
    },
    {
      title_sans: 'वर्धमानम्',
      title_eng: 'vardhamānam',
      id: '4.1.iii.X',
      definition_sans:
        'तृतीये पादे द्वौ नगणौ ततः सगणनगणौ परन्तु तौ नगणसगणाभ्यां सहितौ स्याताम् प्रथम-द्वितीय-चतुर्थात्मकम् उपस्थितप्रचुपिततुल्यमेव भवति तत् वृत्तम् ‘वर्धमान’ नाम कथितम्। ',
      definition_eng:
        '<p>This metre is same as upasthitapracupitam with its third quarter replaced by the arrangement - 2 na, sa, 2 na, sa - 18 syllables.</p>',
      common:
        'नौ पादेथ तृतीयके सनौ नसयुक्तौ। प्रथमाङ्घ्रिकृतयतिस्तुवर्धमानम्<br>त्रितयमपरमपि पूर्वसदृशमिह भवति प्रततमतिभिरितिगदितं खलु वृत्तम्'
    },
    {
      title_sans: 'शुद्धविराडार्षभम्',
      title_eng: 'śuddhavirāḍārṣabham',
      id: '4.1.iii.XI',
      definition_sans:
        'अस्मिन् एव वर्धमाननामके छन्दसि तृतीये पादे तगण-रगण-जगणाः स्युः। प्रथमे च पादे यतिः स्यात् यदि अपरञ्च पादत्रयम् उपस्थितप्रचुपितवत् भवेत् तदा तत् शुद्धविराडार्षभम् नाम छन्दो भवति।',
      definition_eng:
        '<p>śuddhavirāḍārṣabham is an upasthitapracupita with its third quarter replaced by the arrangement - ta, ja, ra</p>',
      common: ''
    },
    {
      title_sans: 'गाथा',
      title_eng: 'Gāthā',
      id: '4.1.iv',
      definition_sans:
        '<p>त्रिभिः षड्भिः चरणैः उपलक्षिता संयुताः गाथाः भवन्ति ।</p><p>विषमान्यक्षराणि यस्य तादॄशा: पादा यस्य तत् अष्टदशसप्तनवाक्षरादिपादमित्यर्थ: अथवा  पादै: स्त्रीयै: पादै: त्रिपादं षट्पादं वा दशधर्मवदित्युदाहरणम् । </p><p>दश धर्म न जानन्ति धॄतराष्ट ! निबोध तान् ॥<br>*मत्त: प्रमत्त उन्मत्त: श्रान्त: क्रुद्धो बुभुक्षित:।<br>त्वरमाणश्च भीरुश्च लुब्ध: कामी च ते दश ॥</p><p>इत्येवञ्जातीयकं षट्पदीहाथारूपं यच्छन्द:~ अत्र नोक्तम् तत्सूरिभि: ‘गाथा’ इति नाम्ना प्रोक्तम् ।</p>',
      definition_eng:
        '<p>Gāthā is the category of metres which contains 3 or 6 quarters.</p><p>Each quarter contains uneven number of syllables.</p>'
    },
    {
      title_sans: 'मात्राछन्दः',
      title_eng: 'Mātrā Chandas or Metres of Syllabic Instants',
      id: '4.2',
      definition_sans:
        'गणाः - चतुर्मात्राः <ul><li>सर्वगुरुः ऽऽ</li><li>अन्तगुरुः ॥ऽ</li><li>मध्यगुरुः ।ऽ।</li><li>आदिगुरुः ऽ॥</li><li>सर्वलघुः ॥॥</li></ul>',
      definition_eng:
        'Gaṇas in Mātrā chandas are groups of syllables which contain 4 syllabic instants. Guru or long vowels are of 2 mātrās (syllabic instants) and Laghu or short vowels are of 1 mātrā.',
      treeData: {
        name: 'मात्राछन्दस् Mātrā chandas',
        children: [
          { name: 'आर्या āryā' },
          { name: 'गीतिः gīti ' },
          { name: 'वैतालीयः vaitālīya' },
          { name: 'वक्त्रम् vaktram' }
        ]
      }
    },
    {
      title_sans: 'आर्या',
      title_eng: 'āryā',
      id: '4.2.i',
      definition_sans:
        'पूर्वार्धः – <ul><li>३० मात्राः</li><li> सप्तगणाः भवन्ति अन्ते गुरुः</li><li>प्रथमे पादे द्वादश द्वितीये पादे अष्टादश अक्षराः</li><li>विषमे (प्रथमतृतीयपञ्चमसप्तम) स्थाने जगणः न भवति ।</li><li>षष्ठे गणे जगणो भवति अथवा चत्वारो लघवो भवन्ति ।</li></ul>उत्तरार्धे <ul><li> २७ मात्राः</li><li>सप्तगणाः भवन्ति अन्ते गुरुः</li><li>तृतीयपादे द्वादश अक्षराः </li></li>चतुर्थपादे पञ्चदश अक्षराः</li><li>षष्ठस्थाने गणे एको लघुः भवति ।</li></ul>यतिनियमम् – <ul><li>षष्ठस्थाने चतुर्लघौ गणे कृते सति द्वितीयलघोः पूर्वं प्रथम लघ्वनन्तरं यतियुक्तं पदं नियमेन समाप्यते । </li><li>सप्तमस्थाने  चतुर्लघो कृते सति प्रथम लघोः पूर्वमेव षष्ठगणानन्तरं सयति पद नियमो भवति । </li><li>उत्तरार्धे पञ्चमस्थाने चतुर्लघौ गणे सति प्रथमलघोः पूर्वं चतुर्थं गणान्ते सयति पदं नियम्यते ।</li></ul>',
      definition_eng:
        '<p>Āryā meter is a meter used in Sanskrit and Prakrit verses. A verse in āryā metre is in four metrical feet called pādas. Unlike the majority of meters employed in classical Sanskrit, the āryā meter is based on the number of mātrās (morae) per pāda. A syllable containing a short vowel counts for one mātrā, and a syllable containing a long vowel or a short vowel followed by two consonants counts for two mātrās. </p><p>The basic āryā verse has 12, 18, 12 and 15 mātrās in the first, second, third, and fourth pādas respectively. </p><p>Odd numbered mātrā-Gaṇas should not be ja-Gaṇa.</p><p>Sixth Gaṇa should be ja-Gaṇa.</p>',
      common:
        'Examples: <br><br>1. हन्त विरहः समन्तात्, ज्वलयति दुवरितीव्र- संवे-गः।<br>अरुणस्तपनशिलामिव, पुनर्न मां भस्मतां नयति॥<br><br><br><br> 2. वृन्दावनेस-लीलं वल्गुद्रुमकांडनिहित तनुयष्टिः।<br>स्मेरमुखार्पितवेणुः कृष्णो यदि मनसि कः स्वर्गः॥'
    },
    {
      title_sans: 'पथ्या',
      title_eng: 'Pathyā',
      id: '4.2.i.I',
      definition_sans:
        'यस्याम् आर्यायां द्वादशमात्रात्मको प्रथमतृतीयौ पादौ भवतः सा पथ्याभिधीयते',
      definition_eng:
        'Āryā metre in which the first and third quarters have 12 mātrās is called Pathyā',
      common:
        'Example: <br />जय जय जगदीश विभो, केशव कंसान्त माधवानन्त।<br>कुरु करुणामिति भणितिः, पथ्या भवेरोग दुःस्थानाम्॥'
    },
    {
      title_sans: 'विपुला',
      title_eng: 'Vipulā',
      id: '4.2.i.II',
      definition_sans:
        'यस्याः आर्यायाः पूर्वार्धोत्तरार्धयोः व्यस्तयोः समस्तयोर्वा आदिमं प्रारम्भस्थितं गणत्रयं संलङ्घ्य लंघयित्वा पादो भवति, ताम् आर्यां विपुलामिति कथयति',
      definition_eng:
        'Āryā metre in which the first three gaṇas (in either all 4 quarters or the first 2 quarters) together form one quarter, it is called Vipulā.  ',
      common:
        'Example: <br> या स्त्रीकुचकलशनितम्बमण्डला जायते महाविपुला।<br>गम्भीरनाभिरतिदीर्घलोचना भवति सा सुभगा॥'
    },
    {
      title_sans: 'चपला',
      title_eng: 'Capalā',
      id: '4.2.i.III',
      definition_sans:
        'यस्याः आर्यायाः पूर्वार्धे उत्तरार्धे च द्वितीयचतुर्थौ  गणौ मध्यगुरुसम्पन्नौ जगणौ भवतः तस्याः चपला इति नाम कथितम् ।',
      definition_eng:
        'Āryā metre in which there is ja-gaṇa between the second and fourth gaṇa is called Capalā.',
      common:
        'Example: <br>जपला न चेत् कदाचिन्नृणां भवेद्भक्तिभावना कृष्णो।<br>धर्मार्थकाममोक्षास्तदा करस्था न सन्देहः॥',
      types: 2,
      type: [
        {
          text_sans:
            '<h3>1. मुखचपला Mukhacapalā</h3><p>यस्याः आर्यायाः पूर्वार्धं चपलानिष्ठं लक्षणं धारयेत, उत्तरार्धे आर्यायाः सामान्यभवं लक्षणं यस्याः सा आर्या मुखचपला कथिता ।</p><p>In this metre, the first two quarters have the characteristics of Capalā metre and the last two quarters have the characteristics of āryā metre.</p>Example: <br>नन्दसुत! वञ्चकस्त्वं दृढं न ते प्रेम गच्छ तत्रै-व।<br>यत्र भवति ते रागः कापि जगादेति मुखचपला॥'
        },
        {
          text_sans:
            '<h3>2. जघनचपला Jaghanacapalā</h3><p>यस्याः आर्यायाः प्रथमे अर्धे आर्यायाः सामान्यलक्षणं भवति तथा उत्तरार्धे चपलायाः लक्षणम् आश्रयेत सा जघनचपला ।</p><p>In this metre, the first two quarters have the characteristics of āryā metre and the last two quarters have the characteristics of Capalā metre.</p>Example<br>कृष्णः श्रृङ्गार पदुयौवनमदरागचपल ललिताङ्गः।<br>आसीद् व्रजाङ्गनानां मनोहरो जघनचपलानाम्॥'
        }
      ]
    },
    {
      title_sans: 'गीतिः',
      title_eng: 'Gīti',
      id: '4.2.ii',
      definition_sans:
        '<p>पूर्वोत्तरार्धयोः आर्यापूर्वार्धगतं लक्षणं भवेत् सा गीतिः </p><p>उभयपादाः त्रिंशन्मात्राः पूर्वोत्तरपादौ सप्तगणाःअन्ते गुरुः</p><p>प्रथमे पादे द्वादश मात्राः</p><p>द्वितीये पादे अष्टादश मात्राः</p><p>विषमे (प्रथमतृतीयपञ्चमसप्तम) स्थाने जगणः न भवति ।</p> <p>षष्ठे गणे जगणो भवति अथवा चत्वारो लघवो भवन्ति ।</p>यतिनियमम् – <p>षष्ठस्थाने चतुर्लघौ गणे कृते सति द्वितीयलघोः पूर्वं प्रथम लघ्वनन्तरं यतियुक्तं पदं नियमेन समाप्यते । </p><p>सप्तमस्थाने  चतुर्लघो कृते सति प्रथम लघोः पूर्वमेव षष्ठगणानन्तरं सयति पद नियमो भवति ।</p>',
      definition_eng:
        'The gīti meter has 12, 18, 12 and 18 mātrās in its four pādas respectively. <br><br>',
      common:
        'Example: <br><br>केशबवंशजगीतिर्लोकमनोहरिणहारिणी जयति।<br>गोपीमानग्रन्थेर्विमोचनि दिव्यगायनाश्चर्या॥'
    },
    {
      title_sans: 'उपगीतिः',
      title_eng: 'Upagīti',
      id: '4.2.ii.I',
      definition_sans:
        '<p>आर्यायाः उत्तरार्धे यत् लक्षणं  भवति तत् लक्षणं यदि उभयोरपि अर्धयोः स्यात् तां उपगीतिं कथयति ।</p><p>उत्तरार्धे – </p><ul><li>२७ मात्राः</li><li>सप्तगणाः भवन्ति अन्ते गुरुः</li><li>तृतीयपादे द्वादश अक्षराः </li><li>चतुर्थपादे पञ्चदश अक्षराः</li><li>षष्ठस्थाने गणे एको लघुः भवति ।</li><li>सप्तगणाः भवन्ति अन्ते गुरुः</li></ul>',
      definition_eng:
        'The upagīti meter has 12, 15, 12 and 15 mātrās in its four pādas respectively.',
      common:
        'Example: <br><br>नवगोपसुन्दरीणां रासोल्लासे मुरारातिम्।<br>अस्मारयदुपगितिः स्वर्गकुरङ्गीदृशां गीतेः॥'
    },
    {
      title_sans: 'उद्गीतिः',
      title_eng: 'Udgīti',
      id: '4.2.ii.II',
      definition_sans:
        '<p>आर्यायाः पूर्वार्धं यस्या उत्तरार्धं भवेत्, आर्याया उत्तरार्धं च यस्याः पूर्वार्धं भवेत् सा उद्गीतिः ।</p>',
      definition_eng:
        'The udgīti meter has 12, 15, 12 and 18 mātrās in its four pādas respectively.',
      common:
        'Example: <br><br>नारायणस्य सन्ततमुदगीतिः संस्मृतिर्भक्त्या।<br>आर्चायामासक्तिर्दुस्तरसंसारसागरे तरणिः॥'
    },
    {
      title_sans: 'आर्यागीतिः',
      title_eng: 'āryāgīti',
      id: '4.2.ii.III',
      definition_sans:
        '<p>यदि आर्यापूर्वार्धम् अवसाने एकेन अधिकेन गुरुणा युक्तं भवेत्, इतरत् द्वितीयं यदीयम् उत्तरार्धं पूर्वार्धवत् भवति सा आर्यागीतिः कथिता ।</p><p>आर्यागीत्यां तु पूर्वार्धे उत्तरार्धे उभयोरपि पूर्णा अष्टौ गणा भवन्ति । </p><p>उभयदलयोः ३२ मात्राः सन्ति ।</p>',
      definition_eng:
        'The āryāgīti meter has 12, 20, 12 and 20 mātrās in its four pādas respectively.',
      common:
        'Example: <br><br>हर्षश्रुस्तिमितदृशः प्रमोदरोमाञ्चुकाञ्चितदेहाः।<br>आर्यागीति भक्ता गायत्नि श्रीपतेश्चरितसम्बद्धाम्॥'
    },
    {
      title_sans: 'वैतालीयछन्दस्',
      title_eng: 'Vaitālīya',
      id: '4.2.iii',
      definition_sans:
        '<ul><li>वैतालीये छन्दसि प्रथमे तृतीये च पादे षड् मात्राः भवन्ति तथा द्वितीये चतुर्थे च पादे अष्टौ मात्राः भवन्ति </li><li>उक्तानां कलानाम् अन्ते रगणश्च लघुश्च गुरुश्च भवन्ति </li><li>आद्यानां कलानां निवेशने नियमम् – <ul><li>समे पादे ताः षट्कलाः निरन्तराः लघवः नो स्युः ताः गुरुमिश्रिताः भवन्ति । </li><li>विषमे पादे यथेच्छं कर्तव्याः । </li></ul> </li><li>आद्यासु षट् मात्रासु विषमे पादे तथा अष्टसु मात्रासु समपादे द्वितीया चतुर्थी षष्ठी च कलाः </li> <li>तृतीयपञ्जमसप्तम्या मिलिताः न  भवन्ति । </li><li>पूर्वाश्रिता भवितुमर्हन्ति न तु पराश्रिताः । </li><li>प्रथमतृतीयपादे १४ कलाः भवन्ति </li><li>द्वितीयचतुर्थपादे १६ कलाः भवन्ति </li></ul>',
      definition_eng:
        '<p>The first and the third lines contain 14 mātrās in which after six mātrās the arrangement of syllables by short and long is: long-short-long-short-long. </p><p>The second and fourth lines of this metre have 16 syllabic instants in which after 8 mātrās the arrangement of syllable by short and long is: long-short-long-short-long.</p><p>The first six mātrās in the first and third lines and the first eight mātrās in the second and fourth lines can be a mixture of short or long syllables.</p>',
      common:
        'Example<br><br>घुसृणेन मदेन चर्चितं, तव यन्निन्दति राधिके कुचम्।<br>मुदमातनुतेऽत्र पाकिनं, तद् वैतालीयं कलं हरेः॥'
    },
    {
      title_sans: 'औपच्छन्दसिकम्',
      title_eng: 'Aupacchandasikam',
      id: '4.2.iii.I',
      definition_sans:
        '<ul><li>विषमपादयोः षण्णामन्ते तथा समपादयोः अष्टानां मात्राणाम् अन्ते यो रगणयगणौ भवतः शेषं तथैव वैतालीयवत् यदि स्यात् तदा औपच्छन्दसिकं नाम छन्दः कथितम् । </li><li>वैतालीयच्छन्दसि अन्ते यदि एको गुरुरधिको भवति तदा औपच्छन्दसिकं नाम छन्दः । </li><li>समे १८ मात्राः</li><li>विषमे १६ मात्राः</li></ul>',
      definition_eng:
        '<p>This chanda is exactly like that of vaitālīya but each line here has one long syllable extra at the end. </p><p>So here the first and third lines have 16 mātrās and second and fourth lines have 18 mātrās.</p>',
      common:
        'Example<br>वाक्यैर्मधुरैः प्रतार्य पूर्व यः पश्चादभि सन्दधाति मित्रम्।<br>तं दुष्टमति विशिष्टगोष्ठ्यामौपच्छन्दसिकं वदन्ति बाह्या॥'
    },
    {
      title_sans: 'आपातलिका',
      title_eng: 'āpātalika',
      id: '4.2.iii.II',
      definition_sans:
        'षण्णाम् अष्ठानां कलानाम् अन्ते भगणाद् द्वौ गुरू भवतः अन्यत् सर्वं वैतालीयवत् स्यात् आपातलिका कथिता ।',
      definition_eng:
        'In this metre, one bha gaṇa and two guru-s follow after either 6 or 8 mātrās, all other characteristics are same as that of Vaitālīya metre.',
      common:
        'Example<br>पिङ्गलकेशी कपिलाक्षि, वाचाटा विकटोन्नतदन्ती।<br>आपातलिका पुनरेषा नृपति कुलेऽपि न भाग्यमुपैति॥'
    },
    {
      title_sans: 'दक्षिणान्तिका',
      title_eng: 'Dakṣiṇāntikā',
      id: '4.2.iii.III',
      definition_sans:
        '<ul><li>चतुर्षु चरणेषु द्वितीया मात्रा तृतीयया संयुक्ता भवति चेत् तदा दक्षिणान्तिका नाम भवति । </li><li>वैतालीये यदा द्वितीया कला दीर्घा भवति तदा दक्षिणान्तिका छन्दो नामेति भावः ।</li></ul>',
      definition_eng:
        'The characteristics of this metre are:<ul><li>In all the 4 quarters, the second and third mātrās are joint together.</li><li>Vaitālīya metre in which the second mātrā is a long syllable in all the four quarters then it is Dakṣiṇāntikā metre.</li></ul>',
      common:
        'Example<br>महीभजां श्रेष्ठ इत्यसो निगद्यते तैर्नीतिवेदिभिः।<br>श्रुतेन शीलेन संयतै-स्तथैव लङ्कालोचनो नृपः॥'
    },
    {
      title_sans: 'उदीच्यवृत्तिः',
      title_eng: 'Udicyavṛtti',
      id: '4.2.iii.IV',
      definition_sans:
        '<ul><li>यदा विषमयोः पादयोः द्वितीया मात्रा तृतीयया सह युक्तो भवति तदा उदीच्यवृत्तिर्नाम छन्दो भवति । </li><li>द्वितीया मात्रा प्रथम-तृतीयपादयोः दीर्घा भवति, अन्यत् सर्वं वैतालीयवत् ।</li></ul>',
      definition_eng:
        'The characteristics of this metre are:<ul><li>In the first and third quarters, the second and third mātrās are joint together</li><li>Vaitālīya metre in which the second mātrā is a long syllable in the first and third quarters then it is Udicyavṛtti metre.</li></ul>',
      common:
        'Example<br>अवाचकमनूर्जिताक्षरं श्रुतिदुष्टं यतिदुष्टमक्रमम्।<br>प्रसादरहितं च नेष्यते, कविभिः काव्यमुदीच्यवृत्तिभिः॥'
    },
    {
      title_sans: 'प्राच्यवृत्तिः',
      title_eng: 'Prācyavṛtti',
      id: '4.2.iii.V',
      definition_sans:
        '<ul><li>समपादयोः पञ्चमो कालः चतुर्थेन लघुना युतो यदि भवति तदा प्राच्यवृत्तिः इति कथ्यते । </li><li>अत्र चतुर्थपञ्चममात्रे एकेन गुरुणा उपात्ते भवतः, अन्यत् सर्वं वैतालीयवत् भवति ।</li></ul>',
      definition_eng:
        'The characteristics of this metre are:<ul><li>In the second and fourth quarters, the fourth and fifth mātrās are joint together.</li><li>Vaitālīya metre in which the fourth mātrā is a long syllable in the first and third quarters then it is Prācyavṛtti metre.</li></ul>',
      common:
        'Example<br>विपुलार्थसुवाचकाक्षराः कस्य नाम न हरन्ति मानसम्।<br>रसभावविशेषपेशलाः प्रच्यवृत्तिकविकाव्यसम्पदः॥'
    },
    {
      title_sans: 'प्रवृत्तकम्',
      title_eng: 'Pravṛttakam',
      id: '4.2.iii.VI',
      definition_sans:
        '<ul><li>विषमपादे द्वितीयतृतीयमात्रायोगो भवति</li><li>समपादे  चतुर्थपञ्जममात्रासंयोगो भवति</li><li>अन्यत् सर्वं वैतालीयवत् ।</li></ul>',
      definition_eng:
        'The characteristics of this metre are:<ul><li>In the first and third quarters, the second and third mātrās are joint together.</li><li>In the second and fourth quarters, the fourth and fifth mātrās are joint together.</li><li>All other characteristics are same as Vaitālīya metre.</li></ul>',
      common:
        'Example<br>इदं भरतवंशभू- भृता, श्रूयतां श्रुतिमनो रसायनम्।<br>पवित्रमधिकं शुभोदयं, व्यासवक्त्रकथितं प्रवृत्तकम्॥'
    },
    {
      title_sans: 'अपरान्तिका',
      title_eng: 'Aparāntikā',
      id: '4.2.iii.VII',
      definition_sans:
        'यत्र चतुर्ष्वपि चरणेषु चतुर्थपञ्चममात्रयोः संयोगो दृश्यते तथा सर्वत्र षोडशमात्रता च जायते तदा अपरान्तिका नाम छन्दः',
      definition_eng:
        'In all the four quarters, the fourth and fifth mātrās are joint together and all the quarters contain 16 mātrās.',
      common:
        'Example<br>स्थिरविलासनतमौक्तिकावली कमलकोमलाङ्गी मृगेक्षणा।<br>हरतिकस्यहृदयं न कामिनः सुरतकेलिकुशलाऽपरान्तिका॥'
    },
    {
      title_sans: 'चारुहासिनी',
      title_eng: 'Cāruhāsinī',
      id: '4.2.iii.VIII',
      definition_sans:
        'सर्वेषु पादेषु –<ul><li>चतुर्दशमात्राः सन्ति</li><li>द्वितीयतृतीयमात्रयोः संयोगश्च भवति </li></ul>',
      definition_eng:
        'In all the four quarters of this metre:<ul><li>there are 14 mātrās</li><li>second and third mātrās are combined together.</li></ul>',
      common:
        'Example<br>मनाक् प्रसृतदन्तदीधितिः स्मरोल्लसित गण्डमडला।<br>कटाक्षललिता तु कामिनी मनोहरति चारुहासिनी॥'
    },
    {
      title_sans: 'वक्त्रम्',
      title_eng: 'Vaktram',
      id: '4.2.iv',
      definition_eng:
        '<ul><li>After the first syllable, there can be any gaṇa other than na gaṇa or sa gaṇa.</li><li>After the fourth syllable, there should be ya gaṇa </li><li>In the second and fourth quarters, after the first and fifth syllable there should be no ra gaṇa.</li></ul>',
      definition_sans:
        '<ul><li>प्रथमाक्षरात् ऊर्ध्वं नगण-सगणौ न स्याताम्, मगणादुषु कोऽपि यथेच्छं स्यात् ।</li><li>चतुर्थाक्षरात् परतः यगणः स्यात् </li><li>समपादयोः प्रथमाक्षरात् पञ्चात् रगणोऽपि न भवति</li></ul>',
      common:
        'Example<br>नवधाराम्बुसंसिक्तं वसुधागन्धिनिश्चासम्।<br>किचिदुन्नतधोणाग्रं महीकामयते वक्त्रम्॥'
    },
    {
      title_sans: 'पथ्यावक्त्रम्',
      title_eng: 'Pathyāvaktram',
      id: '4.2.iv.I',
      definition_sans:
        'द्वितीय-चतुर्थपादयोः चतुर्थाक्षरात् परतः जगणेन युक्तं पथ्यावक्त्रं नाम वृत्तं प्रकीर्तितम् । ',
      definition_eng:
        'In the second and fourth quarters after the fourth syllable there should be ja gaṇa.',
      common:
        'Example<br>नित्यं नीतिनिषण्णस्य, राज्ञोराष्ट्रं न सीदति।<br>नहि पथ्याशिनः काये, जायन्ते व्याधिवेदना॥'
    },
    {
      title_sans: 'विपरीतपथ्यावक्त्रम्',
      title_eng: 'Viparītapathyāvaktram',
      id: '4.2.iv.II',
      definition_sans:
        'प्रथम-तृतीयपादयोः चतुराक्षरात् परतः जगणेन युक्ता स्यात् तदा विपरीतपथ्यावक्त्रम् । ',
      definition_eng:
        'In the first and third quarters after the fourth syllable there should be ja gaṇa.',
      common:
        'Example<br>भर्त्तुराज्ञानुवर्तिनी, या स्त्री स्यात्सा स्थिरा लक्ष्मीः।<br>स्वप्ज्रभुत्वाऽभिमानिनी, विपरीता परित्याज्या॥'
    },
    {
      title_sans: 'चपलावक्त्रम्',
      title_eng: 'capalāvaktram',
      id: '4.2.iv.III',
      definition_sans:
        'प्रथम-तृतीयपादयोः चतुराक्षरात् परतः यदि नगणः स्यात् तदा चपलावक्त्रं नाम वृत्तं भवति',
      definition_eng:
        'In the first and third quarters after the fourth syllable there should be na gaṇa.',
      common:
        'Example<br>क्षीयमाणाऽग्रदशना, वक्त्रानिमसिनासाग्रा।<br>कन्यका वक्त्रचपला, लभते धूर्तसौभाग्यम्॥'
    },
    {
      title_sans: 'युग्मविपुला',
      title_eng: 'yugmavipulā',
      id: '4.2.iv.IV',
      definition_sans:
        '<ul><li>द्वितीय-चतुर्थपादयोः सप्तमः वर्णः लघुसंज्ञकः स्यात् सा युग्मविपुला कथिता ।</li><li>विशेषः – यद्यपि पथ्यानामके वृत्तेऽपि द्वितीयचतुर्थपादयोः सप्तमो वर्णो लघु भवति, तथापि तत्र जगणस्य प्राधान्यम्, अत्र तु प्राधान्ये सप्तमवर्णस्य लघुत्वं भवति ।</li><li>सैतवमुनेः मते चतुर्षु पादेषु सप्तमो वर्णो लघु भवति ।</li></ul>',
      definition_eng:
        '<ul><li>The seventh syllable in the second and fourth quarter is short</li><li>Even though in pathyā metre, the seventh syllable in the second and fourth quarter is short, there the importance is given to the presence of ja gaṇa, while here the seventh syllable being short is more important. </li><li>According to Saitava muni, the seventh syllable in all the quarters is short</li></ul>',
      common:
        'Example<br>इयं सखे चन्द्रमुखी स्मितज्योत्स्ना च मानिनी<br>इन्दीवराक्षी हृदयं दन्दहीति तथापि मे॥<br>सैतवेन पथाऽर्णवं तीर्णा दशरथात्मजः।<br>रक्षःक्षयकरीं पुनः प्रतिज्ञां स्वेन बाहुना॥'
    },
    {
      title_sans: 'भविपुला',
      title_eng: 'bhavipulā',
      id: '4.2.iv.V',
      definition_sans:
        '<ul><li>चतुर्थाक्षरात् भगणेन संयुता चेत् तदा भविपुला भवति ।</li><li>केचन पण्डिताः सर्वेषु पादेषु स्वीकुर्वन्ति, केचित् तु विषमपादविषयेयमिति स्वीकुर्वन्ति ।</li></ul>',
      definition_eng:
        '<ul><li>After the fourth syllable there is bha gaṇa either in all the four quarters or in the first and third quarters.</li></ul>',
      common:
        'Example<br>इयं सखे चन्द्रमुखी स्मितज्योत्स्ना च मानिनी।<br>इन्द्रीवराक्षी सततं दहतीति तथापि मे॥'
    },
    {
      title_sans: 'रविपुला',
      title_eng: 'ravipulā',
      id: '4.2.iv.VI',
      definition_sans: 'चतुर्थाक्षरात् रगणेन संयुता चेत् तदा रविपुला भवति ।',
      definition_eng: 'After the fourth syllable there is ra gaṇa',
      common:
        'Example<br>लक्ष्मीपति लोकनाथं रथाङ्गधरमीश्चरम्।<br>यज्ञेश्वरं शार्ङ्गपाणि प्रणमामि त्रयीतनुम्॥'
    },
    {
      title_sans: 'नविपुला',
      title_eng: 'navipulā',
      id: '4.2.iv.VII',
      definition_sans:
        'चतुर्थाक्षरात् परतः नगणेन संयुता चेत् तदा नविपुला भवति ।',
      definition_eng: 'After the fourth syllable there is na gaṇa',
      common:
        'Example<br>तपः स्वाध्यायनिरतं तपस्वी वाग्विदां वरम्। <br>नारदं परिपप्रच्छ वाल्मीकिर्मुनिपुङ्गवम्॥'
    },
    {
      title_sans: 'तविपुला',
      title_eng: 'tavipulā',
      id: '4.2.iv.VIII',
      definition_sans:
        'चतुर्थाक्षरात् परतः तगणेन संयुता चेत् तदा तविपुला भवति ।',
      definition_eng: 'After the fourth syllable there is ta gaṇa',
      common:
        'Example<br>सा वैदुष्ये प्रोढिर्यदि सर्वशास्त्रानुगामिनी।<br>सा शूरता श्रेष्ठा यदि सर्वशास्त्रानुगामिनी॥'
    },
    {
      title_sans: 'मात्रासमवृत्तम्',
      title_eng: 'mātrāsamavṛttam',
      id: '4.2.v',
      definition_sans: '',
      definition_eng: '',
      common:
        'In this type of metre, all the four quarters have equal number of syllabic instants.'
    },
    {
      title_sans: 'अचलधृतिवृत्तम्',
      title_eng: 'acaladhṛtivṛttam',
      id: '4.2.v.I',
      definition_sans:
        '<ul><li>षोढशलघवः वर्णाः यत्र सा अचलधृतिः ।</li><li>इमाम् अचलधृतिं पिङ्गलमुनिः गीत्यार्या नाम जातिभेदं स्वीकरोति ।</li></ul>',
      definition_eng:
        '<ul><li>It contains 16 short syllables</li><li>Piṅgala considers this metre as a category of gītyāryā.</li></ul>',
      common:
        'Example<br>मदकलखगकुलकलरवमुखरिणि।<br>विकसितसरसिजपरिमलसुरभिणि॥<br>गिरिवरपरिसरसरसि महति खलु।<br>रतिरतिशयमिह मम हृदि विलसति॥'
    },
    {
      title_sans: 'मात्रासमकम्',
      title_eng: 'mātrāsamakam',
      id: '4.2.v.II',
      definition_sans:
        '<ul><li>यस्य श्लोकस्य पादे नवमः लघुः अन्तिमं (१६) गुरुः च स्यात् तद्व्रुत्तं मात्रासमकम् इत्युच्यते </li><li>षोढशमात्राः भवन्ति</li></ul>',
      definition_eng:
        '<p>Mātrāsamaka metre consists of four quarters each of which contains 16 syllabic instants. The most general variety of this metre is that in which the ninth syllabic instant is short and the last is long. The different varieties of this metre arise from particular syllabic instants being short or long.</p>',
      common:
        'Example<br>अश्मश्रुमुखो विरलैर्दन्तैर्गम्भीराक्षो मितनासाग्रः।<br>निर्मासहनुः स्फुटितैः केशैर्मात्रासमकं लभते दुःखम्॥'
    },
    {
      title_sans: 'विश्लोकवृत्तम्',
      title_eng: 'viślokavṛttam',
      id: '4.2.v.III',
      definition_sans:
        '<ul><li>चतुष्कलातः पश्चात् जगणो यत्र भवति अथवा चतुर्लघुरूपो वा यत्र गणः तद् विश्लोकम् </li></li>षोढशमात्राः भवन्ति</li></ul>',
      definition_eng:
        '<ul><li>After the fourth syllable, there is ja gaṇa</li></li>It consists of 16 mātrās</li></ul>',
      common:
        'Example<br>सद्यः पदारविन्दे मातः शान्ति तवाति सौभाग्येन।<br>लप्स्ये कदा भवानि प्रेम्णा येनात्र पूरुषो विश्लोकः॥'
    },
    {
      title_sans: 'वानवासिकावृत्तम्',
      title_eng: 'vānavāsikāvṛttam',
      id: '4.2.v.IV',
      definition_sans:
        'अष्टमात्रानन्तरं यदि जगणः चत्वारो लघुवर्णाः वा स्युः तदा वानवासिका वृत्तम् ।',
      definition_eng:
        'After 8 mātrās there is ja gaṇa or four short syllables.',
      common:
        'Example<br>या स्वसुखार्थं सदैव भक्त्या।<br>लोकहितार्य हरिहरमूर्ति॥'
    },
    {
      title_sans: 'चित्रा वृत्तम्',
      title_eng: 'citrāvṛttam',
      id: '4.2.v.V',
      definition_sans:
        'पञ्च, अष्टौ नव एतेषु यदि लघुः वर्णः स्यात् तदा चित्रा नाम वृत्तम् ',
      definition_eng:
        'In this metre the fifth, eigth and nineth syllables are short syllables',
      common:
        'Example<br>यदि वाञ्च्छसि परपदमारोढुं<br>मैत्रीं परिहर सह वनिताभिः।<br>मुह्यति मुनि रपि विषयासङ्गा<br>च्चित्रा भवति हि मनसो वृत्तिः॥'
    },
    {
      title_sans: 'उपचित्रावृत्तम्',
      title_eng: 'upacitrāvṛttam',
      id: '4.2.v.VI',
      definition_sans:
        '<ul><li>नवमे मात्रास्वरूपे दशमेन मात्रास्वरूपेण युक्ते सति उपचित्रा नाम मात्रासमकं वृत्तं भवति </li><br>अथवा<br><li>यस्मिन् छन्दसि अष्टाभ्यो मात्राभ्यः परतः भगणाद् द्वौ गुरुवर्णौ भवतः तद्वृत्तम् उपचित्रा नामकं भवति</li></ul>',
      definition_eng:
        '<ul><li>The nineth and tenth mātrās are combined.</li><li>After the 8th mātrā there is bha gaṇa and two long syllables. </li></ul>',
      common:
        'Example<br>यच्चितं गुरुसक्तमुदारं विद्याभ्यासमहाव्यसनञ्च।<br>पृथ्वी तस्य गुणै रूपचित्रा चन्द्रमरीचिनिभैर्भवतीयम्॥'
    },
    {
      title_sans: 'पादाकुलकवृत्तम्',
      title_eng: 'pādākulakavṛttam',
      id: '4.2.v.VII',
      definition_sans:
        'पादचतुष्टयेऽपि भिन्नभिन्नमात्रासमकवृत्तानां लक्षणैः समन्वितं, किन्तु षोढशमात्राभिर्युक्तं यद् वृत्तं तद् पादाकुलकम् ।',
      definition_eng:
        '<p>A mixed variety of several varieties of Mātrāsamaka metre gives rise to Pādākulaka.</p><p>In this metre there is no other restriction than that each quarter should have 16 syllabic instants.</p>',
      common:
        'Example<br>यदतीतकृतविविधलक्ष्मयुतैः<br>मात्रासमादिपादैः कलितम्।<br>अनियतवृत्तपरिमाणसहितं<br>प्रथितं जगत्सु पादाकुलकम्॥'
    },
    {
      title_sans: 'शिखावृत्तम्',
      title_eng: 'śikhāvṛttam',
      id: '4.2.vi',
      definition_sans:
        '<ul><li>उभयदले – <ul><li>प्रथमपादे अष्टाविंशतिलघवः अन्ते एकश्च गुरुः</li><li>द्वितीयपादे ३० लघुयुक्तं अन्त्यगुरुः भवति </li></ul><li>कविप्रतिभोत्पादिता सचेतसां </li><li>चेतसश्चमत्कारकारिणी पदानां विस्तारो यत्र सा शिखा कथ्यते ।</li></ul>',
      definition_eng:
        '<ul><li>In both the halves – <ul><li>The first quarter contains 28 short and one long syllable in the end</li><li>The second quarter contains 30 short and one long syllable in the end</li></ul></ul>',
      common:
        'Example<br>शिखिगुणितदशलघुरचितमपगतलधुयुगलमपरमिदमखिलम्।<br>सगुरुशकलयुगलकमपि सुपरिघटितललितपदवितति भवति शिखा॥'
    },
    {
      title_sans: 'खञ्जावृत्तम्',
      title_eng: 'khañjāvṛttam',
      id: '4.2.vii',
      definition_sans:
        '<ul><li>इदं वृत्तं शिखावृत्तस्य सर्वथा विपरीतं वर्तते ।</li><li>उभयदले – <ul><li>प्रथमपादे ३० लघुयुक्तं अन्त्यगुरुः भवति </li><li>द्वितीयपादे अष्टाविंशतिलघवः अन्ते एकश्च गुरुः</li></ul></ul>',
      definition_eng:
        '<ul><li>This metre is the reverse of śikhā metre.</li><li>In both the halves – <ul><li>The first quarter contains 30 short and one long syllable in the end</li><li>The second quarter contains 28 short and one long syllable in the end</li></ul></ul>',
      common:
        'Example<br>विनिमयविहितशकलयुगललघुललितपदविततिरचितगुणनिचया।<br>श्रुतिसुखकृदियमपि जगति ञि जशिर उपगतवतिसति भवति खजा॥'
    },
    {
      title_sans: 'अनङ्गक्रीडावृत्तम्',
      title_eng: 'anaṅgakrīḍāvṛttam',
      id: '4.2.viii',
      definition_sans:
        'यस्य वृत्तस्य पूर्वार्धे षोढश गुरवः उत्तरार्धे ३२ लघवः स्युः सा अनङ्गक्रीडा ',
      definition_eng:
        'In this metre the first half contains 16 long syllables and the second half contains 32 short syllables.',
      common:
        'Example<br>सौम्यां दृष्टि देहि स्नेहा हे हेऽस्माकं मानं मुक्त्वा<br>शशधरमुखिमुखमपनय मम हृदि मनसिजरुजमपहर लघुतरमिह॥'
    },
    {
      title_sans: 'रुचिरावृत्तम्',
      title_eng: 'rucirāvṛttam',
      id: '4.2.ix',
      definition_sans:
        '<ul><li>२७ लघवो अवसाने गुरुः</li><li>अस्याः  अपरं नाम ’चलिका’ इति पिङ्गलसम्मतम् </li></ul>',
      definition_eng:
        'This metre contains 27 short syllables and one long syllable in the end. It is also known as Calikā by Piṅgala.',
      common:
        'Example<br>रघुकुलनलिनविकसनशशभृति दशमुखरिपुकुलतिमिर हरे।<br>विषधरविषमविषयविषहरमहसि कुरु रतिमिह दशरथतनये॥'
    },
    {
      title_sans: ' ',
      title_eng: ' ',
      id: '',
      definition_sans: '<a href="/">Home</a>',
      definition_eng: ''
    }
  ],
  vrittaratnakara_exercises: [
    {
      id: '1',
      title: 'Level 1 - लघु & गुरु',
      question: 'Identify the short syllable:',
      options: ['क', 'क्ष', 'त्र', 'अः'],
      ans: 'क'
    },
    {
      id: '2',
      title: 'Level 1 - लघु & गुरु',
      question: 'Pick the odd one out:',
      options: ['टम्', 'क्ष', 'ज्ञ', 'र'],
      ans: 'र'
    },
    {
      id: '3',
      title: 'Level 2 - गणाः',
      question: 'Number of syllabic instants in one Gaṇa of Mātrā Chandas',
      options: ['1', '4', '2', '8'],
      ans: '4'
    },
    {
      id: '4',
      title: 'Level 2 - गणाः',
      question: 'Which  Gaṇa in Varṇa chandas contains all short syllables?',
      options: ['मगण', 'ल', 'नगण', 'जगण'],
      ans: 'नगण'
    },
    {
      id: '5',
      title: 'Level 3 - Identify the metre',
      question:
        'This metre which contains 11 syllables in each quarter has long syllables in its 1st, 2nd, 4th, 5th, 8th, 10th and 11th syllables of each quarter.',
      options: ['Indravajrā', 'Upendravajrā', 'Pankti', 'Candravartma'],
      ans: 'Indravajrā'
    },
    {
      id: '6',
      title: 'Level 3 - Identify the metre',
      question: 'The metre which contains 30 syllables in each quarter is:',
      options: ['Anuṣṭup', 'Āryā ', 'kṣamā', 'Rucirā'],
      ans: 'Āryā '
    },
    {
      id: '7',
      title: 'Level 3 - Identify the meter:',
      question:
        '<br>सौम्यां दृष्टि देहि स्नेहा हे हेऽस्माकं मानं मुक्त्वा<br>शशधरमुखिमुखमपनय मम हृदि मनसिजरुजमपहर लघुतरमिह॥',
      options: [
        'अनङ्गक्रीडावृत्तम्',
        'रुचिरावृत्तम्',
        'शिखावृत्तम्',
        'वैतालीयछन्दस्'
      ],
      ans: 'अनङ्गक्रीडावृत्तम्'
    },
    {
      id: '8',
      title: 'Level 4 - Identify',
      question:
        'How many short and long syllables are there in the following verse?<br>रघुकुलनलिनविकसनशशभृति दशमुखरिपुकुलतिमिर हरे।<br>विषधरविषमविषयविषहरमहसि कुरु रतिमिह दशरथतनये॥',
      options: [
        '27 long syllables and one short syllable',
        '27 short syllables and one long syllable',
        '14 long and 14 short syllables',
        '20 short and 8 long syllables'
      ],
      ans: '27 short syllables and one long syllable'
    },
    {
      id: '9',
      title: 'Level 4 - Identify the meter:',
      question:
        'A mixed variety of several varieties of Mātrāsamaka metre gives rise to :',
      options: ['śikhāvṛttam', 'khañjāvṛttam', 'Pādākulaka', 'bhadravirāṭ'],
      ans: 'Pādākulaka'
    },
    {
      id: '10',
      title: 'Level 5 - Identify the meter:',
      question:
        'Verses in which all the quarters are dissimilar from the point of view of number and placement of syllables, are called :',
      options: [
        'mātrāsamavṛtta',
        'Ardhasamavṛtta',
        'khañjāvṛtta',
        'Viṣamavṛtta'
      ],
      ans: 'Viṣamavṛtta'
    }
  ],
  vrittaratnakara_titles: [
    {
      title: 'Introduction',
      sl_num: '1',
      group: false,
      to: '/vrittaratnakara/lessons/1'
    },
    {
      title: 'Identifying a Guru',
      sl_num: '2',
      group: false,
      to: '/vrittaratnakara/lessons/2'
    },
    {
      title: 'Identifying a Laghu',
      sl_num: '3',
      group: false,
      to: '/vrittaratnakara/lessons/3'
    },
    {
      title: 'Classification of Chandas',
      sl_num: '4',
      group: true,
      to: '/vrittaratnakara/lessons/4',
      subitems: [
        {
          title: 'Varna Chandas',
          sl_num: '4.1',
          subgroup: true,
          to: '/vrittaratnakara/lessons/4.1',
          divs: [
            {
              title: 'Samam',
              sl_num: 'i',
              types: 'true',
              to: '/vrittaratnakara/lessons/4.1.i',
              vrittas: [
                {
                  title: 'Uktā',
                  sl_num: 'I',
                  to: '/vrittaratnakara/lessons/4.1.i.I'
                },
                {
                  title: 'Atyuktā',
                  sl_num: 'II',
                  to: '/vrittaratnakara/lessons/4.1.i.II'
                },
                {
                  title: 'Madhyā',
                  sl_num: 'III',
                  to: '/vrittaratnakara/lessons/4.1.i.III'
                },
                {
                  title: 'Pratishta',
                  sl_num: 'IV',
                  to: '/vrittaratnakara/lessons/4.1.i.IV'
                },
                {
                  title: 'Supratishta',
                  sl_num: 'V',
                  to: '/vrittaratnakara/lessons/4.1.i.V'
                },
                {
                  title: 'Gayatri',
                  sl_num: 'VI',
                  to: '/vrittaratnakara/lessons/4.1.i.VI'
                },
                {
                  title: 'Ushnik',
                  sl_num: 'VII',
                  to: '/vrittaratnakara/lessons/4.1.i.VII'
                },
                {
                  title: 'Anushtup',
                  sl_num: 'VIII',
                  to: '/vrittaratnakara/lessons/4.1.i.VIII'
                },
                {
                  title: 'Bruhati',
                  sl_num: 'IX',
                  to: '/vrittaratnakara/lessons/4.1.i.IX'
                },
                {
                  title: 'Pankti',
                  sl_num: 'X',
                  to: '/vrittaratnakara/lessons/4.1.i.X'
                },
                {
                  title: 'Trishtup',
                  sl_num: 'XI',
                  to: '/vrittaratnakara/lessons/4.1.i.XI'
                },
                {
                  title: 'Jagati',
                  sl_num: 'XII',
                  to: '/vrittaratnakara/lessons/4.1.i.XII'
                },
                {
                  title: 'Atijagati',
                  sl_num: 'XIII',
                  to: '/vrittaratnakara/lessons/4.1.i.XIII'
                },
                {
                  title: 'Shakvari',
                  sl_num: 'XIV',
                  to: '/vrittaratnakara/lessons/4.1.i.XIV'
                },
                {
                  title: 'Atishakvari',
                  sl_num: 'XV',
                  to: '/vrittaratnakara/lessons/4.1.i.XV'
                },
                {
                  title: 'AshtiH',
                  sl_num: 'XVI',
                  to: '/vrittaratnakara/lessons/4.1.i.XVI'
                },
                {
                  title: 'AtyashtiH',
                  sl_num: 'XVII',
                  to: '/vrittaratnakara/lessons/4.1.i.XVII'
                },
                {
                  title: 'DhrutiH',
                  sl_num: 'XVIII',
                  to: '/vrittaratnakara/lessons/4.1.i.XVIII'
                },
                {
                  title: 'AtidhrutiH',
                  sl_num: 'XIX',
                  to: '/vrittaratnakara/lessons/4.1.i.XIX'
                },
                {
                  title: 'KrutiH',
                  sl_num: 'XX',
                  to: '/vrittaratnakara/lessons/4.1.i.XX'
                },
                {
                  title: 'PrarutiH',
                  sl_num: 'XXI',
                  to: '/vrittaratnakara/lessons/4.1.i.XXI'
                },
                {
                  title: 'AkrutiH',
                  sl_num: 'XXII',
                  to: '/vrittaratnakara/lessons/4.1.i.XXII'
                },
                {
                  title: 'VikrutiH',
                  sl_num: 'XXIII',
                  to: '/vrittaratnakara/lessons/4.1.i.XXIII'
                },
                {
                  title: 'SankrutiH',
                  sl_num: 'XXIV',
                  to: '/vrittaratnakara/lessons/4.1.i.XXIV'
                },
                {
                  title: 'AtikrutiH',
                  sl_num: 'XXV',
                  to: '/vrittaratnakara/lessons/4.1.i.XXV'
                },
                {
                  title: 'UtkrutiH',
                  sl_num: 'XXVI',
                  to: '/vrittaratnakara/lessons/4.1.i.XXVI'
                },
                {
                  title: 'Dandakam',
                  sl_num: 'XXVII',
                  to: '/vrittaratnakara/lessons/4.1.i.XXVII'
                }
              ]
            },
            {
              title: 'Ardhasamam',
              sl_num: 'ii',
              types: 'true',
              to: '/vrittaratnakara/lessons/4.1.ii',
              vrittas: [
                {
                  title: 'upacitram',
                  sl_num: 'I',
                  to: '/vrittaratnakara/lessons/4.1.ii.I'
                },
                {
                  title: 'drutamadhyā',
                  sl_num: 'II',
                  to: '/vrittaratnakara/lessons/4.1.ii.II'
                },
                {
                  title: 'vegavatī',
                  sl_num: 'III',
                  to: '/vrittaratnakara/lessons/4.1.ii.III'
                },
                {
                  title: 'bhadravirāṭ',
                  sl_num: 'IV',
                  to: '/vrittaratnakara/lessons/4.1.ii.IV'
                },
                {
                  title: 'ketumatī',
                  sl_num: 'V',
                  to: '/vrittaratnakara/lessons/4.1.ii.V'
                },
                {
                  title: 'ākhyānakī',
                  sl_num: 'VI',
                  to: '/vrittaratnakara/lessons/4.1.ii.VI'
                },
                {
                  title: 'viparītākhyānakī',
                  sl_num: 'VII',
                  to: '/vrittaratnakara/lessons/4.1.ii.VII'
                },
                {
                  title: 'hariṇaplutā',
                  sl_num: 'VIII',
                  to: '/vrittaratnakara/lessons/4.1.ii.VIII'
                },
                {
                  title: 'aparavaktram',
                  sl_num: 'IX',
                  to: '/vrittaratnakara/lessons/4.1.ii.IX'
                },
                {
                  title: 'puṣpitāgrā',
                  sl_num: 'X',
                  to: '/vrittaratnakara/lessons/4.1.ii.X'
                },
                {
                  title: 'yavamatī',
                  sl_num: 'XI',
                  to: '/vrittaratnakara/lessons/4.1.ii.XI'
                },
                {
                  title: 'viyoginī',
                  sl_num: 'XII',
                  to: '/vrittaratnakara/lessons/4.1.ii.XII'
                }
              ]
            },
            {
              title: 'Vishamam',
              sl_num: 'iii',
              types: 'true',
              to: '/vrittaratnakara/lessons/4.1.iii',
              vrittas: [
                {
                  title: 'padacaturūrdhvam',
                  sl_num: 'I',
                  to: '/vrittaratnakara/lessons/4.1.iii.I'
                },
                {
                  title: 'āpīḍam',
                  sl_num: 'II',
                  to: '/vrittaratnakara/lessons/4.1.iii.II'
                },
                {
                  title: 'kalikā',
                  sl_num: 'III',
                  to: '/vrittaratnakara/lessons/4.1.iii.III'
                },
                {
                  title: 'lavalī',
                  sl_num: 'IV',
                  to: '/vrittaratnakara/lessons/4.1.iii.IV'
                },
                {
                  title: 'amṛtadhārā',
                  sl_num: 'V',
                  to: '/vrittaratnakara/lessons/4.1.iii.V'
                },
                {
                  title: 'udgatā',
                  sl_num: 'VI',
                  to: '/vrittaratnakara/lessons/4.1.iii.VI'
                },
                {
                  title: 'saurabhakam',
                  sl_num: 'VII',
                  to: '/vrittaratnakara/lessons/4.1.iii.VII'
                },
                {
                  title: 'lalitam',
                  sl_num: 'VIII',
                  to: '/vrittaratnakara/lessons/4.1.iii.VIII'
                },
                {
                  title: 'upasthitapracupitam',
                  sl_num: 'IX',
                  to: '/vrittaratnakara/lessons/4.1.iii.IX'
                },
                {
                  title: 'vardhamānam',
                  sl_num: 'X',
                  to: '/vrittaratnakara/lessons/4.1.iii.X'
                },
                {
                  title: 'śuddhavirāḍārṣabham',
                  sl_num: 'XI',
                  to: '/vrittaratnakara/lessons/4.1.iii.XI'
                }
              ]
            },
            {
              title: 'Gatha',
              sl_num: 'iv',
              to: '/vrittaratnakara/lessons/4.1.iv'
            }
          ]
        },
        {
          title: 'Matra Chandas',
          sl_num: '4.2',
          subgroup: true,
          to: '/vrittaratnakara/lessons/4.2',
          divs: [
            {
              title: 'Arya',
              sl_num: 'i',
              to: '/vrittaratnakara/lessons/4.2.i',
              types: true,
              vrittas: [
                {
                  title: 'Pathya',
                  sl_num: 'I',
                  to: '/vrittaratnakara/lessons/4.2.i.I'
                },
                {
                  title: 'Vipula',
                  sl_num: 'II',
                  to: '/vrittaratnakara/lessons/4.2.i.II'
                },
                {
                  title: 'Chapala',
                  sl_num: 'III',
                  to: '/vrittaratnakara/lessons/4.2.i.III'
                }
              ]
            },
            {
              title: 'Giti',
              sl_num: 'ii',
              to: '/vrittaratnakara/lessons/4.2.ii',
              types: true,
              vrittas: [
                {
                  title: 'Upagiti',
                  sl_num: 'I',
                  to: '/vrittaratnakara/lessons/4.2.ii.I'
                },
                {
                  title: 'Udgiti',
                  sl_num: 'II',
                  to: '/vrittaratnakara/lessons/4.2.ii.II'
                },
                {
                  title: 'Aryagiti',
                  sl_num: 'III',
                  to: '/vrittaratnakara/lessons/4.2.ii.III'
                }
              ]
            },
            {
              title: 'Vaitaliya',
              sl_num: 'iii',
              to: '/vrittaratnakara/lessons/4.2.iii',
              types: true,
              vrittas: [
                {
                  title: 'Aupacchandasikam',
                  sl_num: 'I',
                  to: '/vrittaratnakara/lessons/4.2.iii.I'
                },
                {
                  title: 'Apatalika',
                  sl_num: 'II',
                  to: '/vrittaratnakara/lessons/4.2.iii.II'
                },
                {
                  title: 'Dakshinantika',
                  sl_num: 'III',
                  to: '/vrittaratnakara/lessons/4.2.iii.III'
                },
                {
                  title: 'Udicyavritti',
                  sl_num: 'IV',
                  to: '/vrittaratnakara/lessons/4.2.iii.IV'
                },
                {
                  title: 'Prachyavritti',
                  sl_num: 'V',
                  to: '/vrittaratnakara/lessons/4.2.iii.V'
                },
                {
                  title: 'Pravrittakam',
                  sl_num: 'VI',
                  to: '/vrittaratnakara/lessons/4.2.iii.VI'
                },
                {
                  title: 'Aparantika',
                  sl_num: 'VII',
                  to: '/vrittaratnakara/lessons/4.2.iii.VII'
                },
                {
                  title: 'Charuhasini',
                  sl_num: 'VIII',
                  to: '/vrittaratnakara/lessons/4.2.iii.VIII'
                }
              ]
            },
            {
              title: 'Vaktram',
              sl_num: 'iv',
              to: '/vrittaratnakara/lessons/4.2.iv',
              types: true,
              vrittas: [
                {
                  title: 'Pathyavaktram',
                  sl_num: 'I',
                  to: '/vrittaratnakara/lessons/4.2.iv.I'
                },
                {
                  title: 'Viparītapathyāvaktram',
                  sl_num: 'II',
                  to: '/vrittaratnakara/lessons/4.2.iv.II'
                },
                {
                  title: 'capalāvaktram',
                  sl_num: 'III',
                  to: '/vrittaratnakara/lessons/4.2.iv.III'
                },
                {
                  title: 'yugmavipulā',
                  sl_num: 'IV',
                  to: '/vrittaratnakara/lessons/4.2.iv.IV'
                },
                {
                  title: 'bhavipulā',
                  sl_num: 'V',
                  to: '/vrittaratnakara/lessons/4.2.iv.V'
                },
                {
                  title: 'ravipulā',
                  sl_num: 'VI',
                  to: '/vrittaratnakara/lessons/4.2.iv.VI'
                },
                {
                  title: 'navipulā',
                  sl_num: 'VII',
                  to: '/vrittaratnakara/lessons/4.2.iv.VII'
                },
                {
                  title: 'tavipulā',
                  sl_num: 'VIII',
                  to: '/vrittaratnakara/lessons/4.2.iv.VIII'
                }
              ]
            },
            {
              title: 'mātrāsamavṛtta',
              sl_num: 'v',
              to: '/vrittaratnakara/lessons/4.2.v',
              types: true,
              vrittas: [
                {
                  title: 'acaladhṛtivṛttam',
                  sl_num: 'I',
                  to: '/vrittaratnakara/lessons/4.2.v.I'
                },
                {
                  title: 'mātrāsamakam',
                  sl_num: 'II',
                  to: '/vrittaratnakara/lessons/4.2.v.II'
                },
                {
                  title: 'viślokavṛttam',
                  sl_num: 'III',
                  to: '/vrittaratnakara/lessons/4.2.v.III'
                },
                {
                  title: 'vānavāsikāvṛttam',
                  sl_num: 'IV',
                  to: '/vrittaratnakara/lessons/4.2.v.IV'
                },
                {
                  title: 'citrāvṛttam',
                  sl_num: 'V',
                  to: '/vrittaratnakara/lessons/4.2.v.V'
                },
                {
                  title: 'upacitrāvṛttam',
                  sl_num: 'VI',
                  to: '/vrittaratnakara/lessons/4.2.v.VI'
                },
                {
                  title: 'pādākulakavṛttam',
                  sl_num: 'VII',
                  to: '/vrittaratnakara/lessons/4.2.v.VII'
                }
              ]
            },
            {
              title: 'śikhāvṛttam',
              sl_num: 'vi',
              to: '/vrittaratnakara/lessons/4.2.vi'
            },
            {
              title: 'khañjāvṛttam',
              sl_num: 'vii',
              to: '/vrittaratnakara/lessons/4.2.vii'
            },
            {
              title: 'anaṅgakrīḍāvṛttam',
              sl_num: 'viii',
              to: '/vrittaratnakara/lessons/4.2.viii'
            },
            {
              title: 'rucirāvṛttam',
              sl_num: 'ix',
              to: '/vrittaratnakara/lessons/4.2.ix'
            }
          ]
        }
      ]
    }
  ],
  srutabodha_lessons: [
    {
      title_sans: 'श्रुतबोधः',
      title_eng: 'Introduction to śrutabodha',
      id: 1,
      definition_sans:
        '<p>श्रुतमात्रेण प्रस्तारादिविनैव छंदसामार्यानुत्पुवादीनां लक्षणं गुरुलघुवर्णमात्रागणादिस्वरूपं बुध्यते ज्ञायते । </p>',
      definition_eng:
        '<p>śrutabodha is that book by which one can learn about the various metres, the short and long syllables, vowels, syllabic instants and syllabic groups just by hearing the contents of the book.</p>'
    },
    {
      title_sans: 'गुरुलघुलक्षणम्',
      title_eng: 'Identifying a Guru and a Laghu',
      id: 2,
      definition_sans:
        'संयुक्ताद्यं दीर्घं सानुस्वारं विसर्गसंमिश्रम् ।<br>विज्ञेयमक्षरं गुरु पदांतस्थं विकल्पेन ।।<p>अथ छंदोलक्षणस्य लघुगुरुज्ञानमंतरेण दुर्विज्ञेयत्वाल्लघुगुरुलक्षणमाह। </p><p>एतादृशमक्षरं गुरु ज्ञेयम् –</p><ul><li>संयुक्तस्य संयोगीभूतस्याद्यमादिभवम्।</li><li>दीर्घं द्विमात्रकम् । </li><li>अनुस्वारेण सह वर्तमानम् ।</li><li> विसर्ग सहितम् ।</li><li> पादान्तस्थमक्षरं विकल्पेन गुरु लघु विज्ञेयम् ।</li><li> पादान्ते गुरुरपि लघुः स्यात्कुत्राचिल्लघुरपि गुरुः स्यात् । वा पादान्ते त्वसौ वक्रो ज्ञेयोऽन्यो मात्रको लघुः</li></ul>',
      definition_eng:
        '<ul><li>Vowel or consonant followed by anusvāra - aṃ, kaṃ, khaṃ, gaṃ, etc  </li><li>Vowel or consonant followed by Visarga - aḥ, kaḥ, etc </li><li>The vowels ā, ī, ū, etc… are long. Whenever any of these is used in a verse separately or with one or more consonants, it will be considered as long. Eg: kā, kī, etc are long syllables </li><li>A conjunct consonant – ṣṇa, kta, etc</li><li>At the end of a quarter a short syllable can be considered as long.</li></ul>',
      example_sans: ''
    },
    {
      title_sans: 'अष्टगणानां लक्षणम्',
      title_eng: 'Characteristics of Eight Gaṇas',
      id: 3,
      definition_sans:
        'आदिमध्यावसानेषु भजसायांति गौरवम् ।<br> यरता लाघवं यांति मनौ तु गुरुलाघवम् ॥<br><br><p>भजसाः भगणजगणसगणाः आदिमध्यावसानेषु गौरवं गुरुतां यान्ति । आदिश्च मध्यं च आवसानं च तानि तेषु ।</p><p>आदिगुरुर्भगणः मध्यगुरुर्जगणः अन्त्यगुरुः सगणः </p><p>यरताः यगणरगणतगणाः आदिमध्यावसानेषु लाघवं लघुतां यान्ति। आदिलघुर्यगणः मध्यलघू रगणः अन्त्यलघुस्तगणः। </p>मनौ मगणनगणौ आदिमध्यावसानेषु गुरुलाघवं गुरुतां लघुतां च यातः। सर्वगुरुर्मगणः सर्वलघुर्नगणः भवतीति। </p>',
      definition_eng:
        '<p>In metres regulated by syllables, each metrical line or quarter of a verse is divided into groups of 3 syllables each. Each group is distinguished from the others by its own particular arrangement of syllables. These groups are called Gaṇas or syllabic feet.</p><p> There are 8 Gaṇas used by Sanskrit prosodians.</p><ul><li>Where all 3 syllables are short it is called <em>na</em> gaṇa. </li><li>Where the 1st syllable is short and the other two are long it is <em>ya</em> gaṇa.</li><li>Where the middle syllable is short and the other two long it is <em>ra</em> gaṇa.</li><li>Where the last syllable is short and the other two long it is <em>ta </em> gaṇa.</li><li>Where all the 3 syllables are long it is <em>ma</em> gaṇa.</li><li>Where the first syllable is long and the other two short it is <em>bha</em> gaṇa.</li><li>Where the middle syllable is long and the other two short it is <em>ja</em> gaṇa.</li><li>Where the last syllable is long and the other two short it is <em>sa</em> gaṇa.</li></ul><p>Apart from these 8 gaṇas there are other two gaṇas named <em>ga</em> - a single long syllable and <em>la</em> - a single short syllable.</p>'
    },
    {
      title_sans: 'आर्या',
      title_eng: 'āryā',
      id: 4,
      definition_sans:
        'यस्याः पादे प्रथमे द्वादश मात्रास्तथा तृतीयेऽपि। <br>अष्टादश द्वितीये चयुर्थके पंचदश सार्या॥ <br><br><p>यस्याः प्रथमे पादे द्वादश मात्राः स्युः। तृतीये तथा द्वादश मात्रा भवन्ति। द्वितीयेऽष्टादश मात्रा भवन्ति । चतुर्थके पञ्चदश मात्रा भवन्ति । सा आर्या । चरणेषु क्रमान्पात्राः:- १२,१८,१२,१५ ॥</p>',
      definition_eng:
        'āryā metre is the metre which contains 12 Mātrās in its first and third quarters, and 18 Mātrās in second and 15 Mātrās in the fourth quarter.',
      common:
        '<p>वृन्दावनेस-लीलं वल्गुद्रुमकांडनिहित तनुयष्टिः।<br>स्मेरमुखार्पितवेणुः कृष्णो यदि मनसि कः स्वर्गः॥'
    },
    {
      title_sans: 'गीतिः',
      title_eng: 'Gīti',
      id: 5,
      definition_sans:
        'आर्यापूर्वार्धसमं द्वितीयमपि यत्र भवति हंसगते।<br>छंदोविदस्तदानीं गीतिं ताममृतवाणि भाषंते॥<br><br>पूर्वार्धस्य प्रथमे द्वादश मात्रा द्वितीयेऽष्टादश तृतीये द्वादश चतुर्थकेऽष्टादश संकलनया षष्टिमात्रेत्यर्थः। अमृतमिव वाणी वाक् यस्याः सामृतवाणी तस्याः संबुद्धौ। छन्दांसि वदन्ति जानन्तीति छन्दोविदः शास्त्रज्ञा इत्यर्थः। हंसस्य गतिर्गमनमिव गमनं यस्याः सा हंसगता तस्याः संबुद्धौ हंसगते इत्यर्थः । चरणेषु क्रमान्मात्राः – १२,१८,१२,१८॥',
      definition_eng:
        'Gīti metre is the metre which contains 12 Mātrās in its first and third quarters, and 18 Mātrās in second and fourth quarters. It is the same as the first two quarters of āryā metre.',
      common:
        '<p>केशबवंशजगीतिर्लोकमनोहरिणहारिणी जयति।<br>गोपीमानग्रन्थेर्विमोचनि दिव्यगायनाश्चर्या॥</p>'
    },
    {
      title_sans: 'उपगीतिः',
      title_eng: 'Upagīti',
      id: '6',
      definition_sans:
        'आर्योत्तरार्धतुल्यं प्रथमार्धमपि प्रयुक्तं चेत् ।<br> कामिनि तामुपगीतिं प्रकाशयंते महाकवयः॥<br><br><p>उपगीति - यदि आर्योत्तरार्धतुल्यं प्रथमार्धमपि प्रयुक्तं चेत्प्रयोगीकृतं भवति। उत्तरार्धेन द्वादशमात्रिकेण तुल्यं समानं भवति। प्रथमे द्वादश मात्रा द्वितीये पञ्चदश तृतीये द्वादश चतुर्थे पञ्चदश संकलनया ५४ चतुष्पञ्चाशन्मात्रेत्यर्थः। कामो विद्यते यस्याः सा कामिनी तस्याः संबुद्धौ। महांतश्च ते कवयश्चेति कर्मधारयः। चरणेषु क्रमान्मात्राः – १२,१५,१२,१५॥',
      definition_eng:
        'The upagīti meter is the same as the last two quarters of āryā metre. It has 12, 15, 12 and 15 mātrās in its four pādas respectively.',
      common:
        '<p>नवगोपसुन्दरीणां रासोल्लासे मुरारातिम्।<br>अस्मारयदुपगितिः स्वर्गकुरङ्गीदृशां गीतेः॥</p>'
    },
    {
      title_sans: 'पङ्क्तिः',
      title_eng: 'Pankti',
      id: '7',
      definition_sans:
        'आद्यचतुर्थं पञ्चमकं चेत्। <br> यत्र गुरु स्यात्साक्षरपङ्क्तिः॥७॥<br><br><p>यस्यां वृत्तौ आद्यं प्रथमं चतुर्थं पञ्चमकं गुरु स्यात्साक्षरपङ्क्तिः ज्ञेया । अक्षरशब्दः पादपूरणार्थः। छन्दस्तु पङ्क्तिः । प्रतिचरणे इदं लक्षणम् । चरणाक्षराणि ५, ग० भ; गु, गु॥</p>',
      definition_eng:
        'Pankti is the metre which has its 4th and 5th syllables long in all its quarters.',
      common:
        'भग्नमसत्यैः कायसहस्त्रैः, मोहमयी गुर्वी तव माया ।<br>स्वप्नविलासा योगवियोगा रुक्मवती हा कस्य कृते श्रीः ॥'
    },
    {
      title_sans: 'शशिवदना',
      title_eng: 'śaśivadanā',
      id: 8,
      definition_sans:
        'अगुरुचतुष्कं भवति गुरु द्वौ। <br> घनकुचयुग्मे शशिवदनासौ॥ <br><br><p>यत्राद्यं चत्वारो वर्णा लघवं सन्ति ततो द्वौ पञ्चमषष्ठौ गुरू दीर्घौ भवतस्तदा शशिवदना चरणचतुष्टयेष्विदं लक्षणं असाविति संबन्धः। घनं कठिनं कुचयुग्मं यस्याः सा घनकुचयुग्मा तस्याः संबुद्धौ। ॥८॥ चरणाक्षराणि ० ६, ग० न, य॥',
      definition_eng:
        '<p>In this metre the first four syllables are short. The fifth and sixth are long in all the quarters.</p>',
      common: 'शशिवदनानां व्रजतरुणीनाम् ।<br>अधरसुधोमिं मधुरिपुरैच्छत् ॥'
    },
    {
      title_sans: 'मदलेखा',
      title_eng: 'Madalekhā',
      id: 9,
      definition_sans:
        'तुर्यं पंचमकं चेद्यत्र स्याल्लघु बाले। <br> विद्वद्भिर्मृगनेत्रे प्रोक्ता सा मादलेखा॥ <br><br>यदि चतुर्थं पञ्चमं लघु स्यात् हे बाले नवयौवने विद्वद्भिः पण्डितैः सा मदलेखा प्रोक्ता। मृगस्य नेत्रे इव नेत्रे यस्याः सा मृगनेत्रा तस्याः संबुद्धौ। चरणाक्षरं ० ७, गं म, स; ग॥',
      definition_eng:
        'In this metre, the fourth and fifth syllables are short.',
      common:
        'रङ्गे बाहुविरुग्णात्, दन्तीन्द्रान्मदलेखा ॥<br>लग्नाभून्मुरशत्रौ कस्तूरी रसचर्चा ॥'
    },
    {
      title_sans: 'पद्यम्',
      title_eng: 'Padyam',
      id: 10,
      definition_sans:
        'श्लोके षष्ठं गुरु ज्ञेयं सर्वत्र लेघु पञ्चमम्। <br> द्विचतुष्पादयोर्ह्रस्वं सप्तमं दीर्घमन्ययोः॥ <br><br><p> अन्ययोः प्रथमतृतीयपादयोः सप्तममक्षरं गुरु द्विमात्रकं भवति। सर्वत्र चतुर्ष्वपि चरणेषु पञ्चममक्षरं लघु स्यात्। षष्टं गुरु स्यात्। द्विचतुष्पादयोर्द्वितीयचतुर्थचरणयोः सप्तममक्षरं ह्रस्वं ज्ञेयम्। ईदृग्विधे श्लोके पद्येऽनुष्टुबादयो भवन्ति । </p><p>अथ पद्यलक्षणमाह-</p>पञ्चमं लघु सर्वत्र सप्तमं द्विचतुर्थयोः। <br> षष्ठण् गुरु विजानीयादेतत्पद्यस्य लक्षणम् ॥ <br><br> यत्र सर्वत्र चरणेषु पञ्चमं लघु भवति। द्वितीयचतुर्थचरणयोः सप्तममक्षरं लघु भवति। सर्वत्र चरणेषु षष्ठं अक्षरं गुरु भवति। चरणाक्षरं ८, गणनियमो नास्ति । ',
      definition_eng:
        'In all the quarters, fifth syllable is short and sixth is long. In the second and fourth quarter, seventh syllable is short.',
      common: ''
    },
    {
      title_sans: 'माणवकं / माणवकाक्रीडम्',
      title_eng: 'Māṇavakam',
      id: 11,
      definition_sans:
        'आदिगतं तुर्यगतं पञ्चमकं चान्त्यगतम् । <br>स्याद्गुरु चेत्तत्कथितं माणवकाक्रीडमिदम् ॥<br><br>आदिगतं प्रथमं तुर्यगतं चतुर्थं पञ्चमकं पञ्चमम् अन्त्यगतं अन्त्यस्थितमष्टमं गुरु स्यात्तदिदं माणवकाक्रीडं बुधा वदन्ति।<br><br>चरणाक्ष० ८, ग० भ, त; ल, ग॥',
      definition_eng:
        'The first, fourth, fifth and eighth syllables are long in all the four quarters of this metre.',
      common:
        'माणवकाक्रीडितकं यः कुरुते वृद्धवयाः ।<br>हास्यमसौ याति जने, भिक्षुरिव स्त्रीचपलः ॥'
    },
    {
      title_sans: 'नगस्वरूपिणी (प्रमाणिका) ',
      title_eng: 'Nāgasvarupiṇi (Pramāṇikā)',
      id: 12,
      definition_sans:
        'द्वितुर्यषष्ठमष्टमं गुरु प्रयोजितं यदा । <br> तदा निवेदयन्ति तां बुधा नगस्वरूपिणीम्॥<p>यदा द्वितीयं चतुर्थं षष्ठम् अष्टमं चाक्षरं गुरुसंज्ञकं भवति एतादृशीं तां नगस्वरूपिणीं निवेदयन्ति। ॥ प्रमाणिका, नगस्वरूपिणीति वा। च० अ० ८,ग० ज, र; ल, ग॥',
      definition_eng:
        'In all the four quarters of this metre, the second, fourth, sixth and eighth syllables are long.',
      common:
        'लघु श्रुतं मदोद्धतं, गुरु श्रमाय केवलम् ।<br>न यत्परोपकारकृद्, वृथैव तत्प्रमाण्यपि ॥'
    },
    {
      title_sans: 'विद्युन्माला',
      title_eng: 'Vidyunmālā',
      id: 13,
      definition_sans:
        'सर्वे वर्णा दीर्घा यस्यां विश्रामः स्याद्वेदैर्वेदैः।<br>विद्वद्दृंदैर्वीणावाणि व्याख्याता सा विद्युन्माला ॥<br><br><p>वीणायां वाणीव वाणी यस्याः सा वीणावाणी तस्याः संबुद्धौ। विदुषां पण्डितानां वृन्दानि समूहास्तैः। यस्यां सर्वे वर्णाः दीर्घाः गुरुभूताः भवन्ति। चतुर्भिश्चतुर्भिर्विश्रामो भवतीति सा विद्युन्माला। च० अ० ८, ग० म, म; ग, ग; यतिः ४, ४॥',
      definition_eng:
        'In this metre all the syllables are long and there is a pause after fourth and eighth syllable.',
      common:
        'मौनं ध्यानं भूमौ शय्या, गुर्वी तस्याः कामावस्था ।<br>मेघोत्सङ्गे नृत्तासङ्गा, यस्मिन्काले विद्युन्माला ॥'
    },
    {
      title_sans: 'चंपकमाला',
      title_eng: 'Campakamālā',
      id: 14,
      definition_sans:
        'तन्वि गुरु स्यादाद्यचतुर्थं पञ्चमष्ठं चान्त्यमुपान्त्यम्। <br> इन्द्रियबाणैर्यत्र विरामः सा कथनीया चंपकमाला ॥<br><br>यस्याम् आद्यचतुर्थं प्रथमं चतुर्थं पञ्चमषष्ठम् अन्त्यं दशमं नवमम् एते गुरवि भवन्ति। यत्र पञ्चभिः पञ्चभिरक्षरैर्विरामो विश्रामः। सा चंपकमाला कथनीया। आद्यचतुर्थं पञ्चमषष्ठं इत्येकत्वे द्विगुद्वन्द्वौ। इन्द्रियाणि च वाणाश्च इन्द्रियबाणास्तैः। च० अ० १०, ग० भ, म, स; ग; ५,५॥',
      definition_eng:
        'In this metre the first, fourth, fifth, sixth, nineth and tenth syllables are long. There is a pause after the fifth and tenth syllables. '
    },
    {
      title_sans: 'मणिबंधम्',
      title_eng: 'Maṇibandha',
      id: 15,
      definition_sans:
        'चंपकमाला यत्र भवेदंत्यविहीना प्रेमनिधे।<br>छंदसि दक्षा ये कवयस्तन्मणिबंधं ते ब्रुवते॥<br>यत्रांत्यविहीना चंपकमाला भवेत्। दशाक्षरा इदं नवाक्षरं भवेत्। लक्षणं तु तदेव चंपकमालागतमेव तन्मणिबंधम्। प्रेमस्य निधिरिव निधिः तस्याः संबुद्धौ। अंत्यविहीनः अंते भर्वोऽसो वर्णः तेन विहीना त्यक्ता भवेत्। ॥१६॥ मणिबंधम्। च० अ० ९,ग० भ, म, स; यतिः ५, ४॥',
      definition_eng:
        'In this metre there are nine syllables with first, fourth, fifth, sixth and nineth syllables long. There is a pause after fifth and nineth syllables.'
    },
    {
      title_sans: 'शालिनी',
      title_eng: 'śālinī',
      id: 16,
      definition_sans:
        '<p>ह्रस्वो वर्णो जायते यत्र षष्ठः कंबुग्रीवे  तद्वदेवाष्टमांत्यः।<br>विश्रामः स्यात्तन्वि वेदैस्तुरंगैस्तां भाषंते शालिनीं छांदसीयाः ॥</p><p>यस्यां षष्ठो वर्णो ह्रस्वः तद्वदष्टमांत्यः नवमः ह्रस्वो जायते, यत्र चतुर्भिः सप्तभिर्विश्रामस्तां शालिनीं भाषंते ब्रुवते। कंबोः शंखस्य ग्रीवावद्ग्रीवा यस्याः सा तत्संबुद्धौ। ॥ शालिनी । चर० अ० ११, ग० म, त, त; ग, ग; यतिः ४, ७ ॥</p>',
      definition_eng:
        'In this metre sixth, eighth and nineth syllables are short, and there is a pause after fourth and seventh syllables.',
      common:
        '<br>कोऽयं कान्तिः केशव त्वन्मुखेन्दोः<br>कोऽयं वेषः कापि वाचामभूमिः। <br>सेयं सेयं स्वादुता मञ्जुलश्रीः<br> भूयो भूयो भूयशस्त्वां नमामि॥<br>'
    },
    {
      title_sans: 'मंदाक्रांता',
      title_eng: 'Mandākrāntā',
      id: 17,
      definition_sans:
        '<p>चत्वारः प्राक्सुतनु गुरवो द्वादशैकादशौ चेत्<br>मुग्धे वर्णौ तदनु कुमुदामोदिनि द्वादशांत्यौ ।<br>तद्वच्चांत्यौ युगरसहयैर्यत्र कांते विरामो<br>मंदाक्रांतां प्रवरतकवयस्तन्वि तां संगिरंते॥</p><p>हे सुतनु सुष्ठु तनुः कायो यस्याः सा तस्याः संबोधनं हे सुतनु। प्रवरकवयः श्रेष्ठकवयः तां मंदाक्रांतां वदंति। यस्यां चत्वारो वर्णा गुरवो भवंति।  पुनः द्वादशैकादशौ वर्णौ गुरू भवतः। पुनः तदनु द्वादशांत्यौ त्रयोदशचतुर्दशौ वर्णौ भवतः। च पुनः अंत्यौ तद्वद्भवतः।</p><p>हे कांते च पुनः चतुःषट् सप्तभिः क्रमेण विरामो भवति प्रवरकवयस्तद्विदः॥मंदाक्रांता। च० अ० १७, गं म, भ, न, त, त; ग, ग; यतिः ४, ६, ७॥</p>',
      definition_eng:
        'In this metre the first four syllables, eleventh, twelfth, thirteenth, fourteenth and seventeenth syllables are long. There is a pause after fourth, tenth and seventeenth syllable of each quarter.',
      common:
        'धाम्ना धाम-त्वमसि भगवन्-जाप्य इष्टौ द्विजाना<br>यस्य ध्याना-दमलतरतां बुद्धिराप्नोति सद्यः।<br>यस्मिन प्राप्ते-कुदरमुदयं-जाग्रति प्राणिसंधाः<br>रक्ष्यानस्मा-नयि! दिनमणे! पाहि देव प्रसीद॥'
    },
    {
      title_sans: 'हंसी ',
      title_eng: 'Hamsī',
      id: 18,
      definition_sans:
        '<p>मंदाक्रांतांत्ययतिरहिता सालंकारे भवति यदि सा।<br>तद्विद्वद्भिर्ध्रुवमभिहिताज्ञेया हंसी कमलवदने ॥</p><p>कमलवत्सौंदर्यं सौरभादिगुणैः कमलसदृशं वदनं मुखं यस्याः सा तत्संबोधनम्। यदि मंदाक्रांता अंत्ययतिरहिता अंते भवा अंत्या मंदाक्रांतायां विश्रामः सांत्यरहिता दशवर्णात्मिका सा हंसी ज्ञेया। लक्षणं मंदाक्रांताया एव। आभूषणेन सह वर्तमाना सालंकारा तस्याः संबोधनं हे सालंकारे॥१९॥ हंसी । च० अ० १०, ग० म, भ, न; ग; यतिः ४, ६॥</p>',
      definition_eng:
        'This metre is similar to Mandākrāntā but with ten syllables and without the last yati of Mandākrāntā. '
    },
    {
      title_sans: 'दोधकवृत्तम् ',
      title_eng: 'Dodhakavṛttam',
      id: 19,
      definition_sans:
        '<p>आद्यचतुर्थमहीननितंबे सप्तमकं दशमं च तथांत्यम्।<br>यत्र गुरु प्रकटस्मरसारे तत्कथितं ननु दोधकवृत्तम् ॥</p><p>प्रकटः स्मरसारः कामबलं यस्याः सा तस्याः संबोधनम्। हे अहीननितंबे स्थूलौ कटिपश्चाद्भागौ यस्याः सा तत्संबुद्धौ। यस्मिन् प्रथमं चतुर्थं सप्तमं दशमं तथा अंत्यं एकादशं एतानि अक्षराणि गुरूणि संति। ॥ दोधकं। च० अ० ११, ग० भ, भ, भ; ग, ग॥</p>',
      definition_eng:
        'In this metre the first, fourth, seventh, tenth and eleventh syllables are long.',
      common:
        '<p>दोधकमर्थविरोधकमुग्रम्<br />स्त्रीचपलं युधि कातरचितम् ।<br />स्वार्थपरं मतिहीनममात्यं<br />मुञ्चति यः नृपतिः स सुखी स्यात् ॥</p>'
    },
    {
      title_sans: 'इंद्रवज्रा ',
      title_eng: 'Indravajrā',
      id: 20,
      definition_sans:
        '<p>यस्यां त्रिषट् सप्तममक्षरं स्या-<br>ह्रस्वं सुजंघे नवमं च तद्वत्।<br>गत्या विलज्जीकृतहंसकांते<br>तामिंद्रवज्रां ब्रुवते कवींद्राः॥</p><p>गत्या गमनेन विलज्जीकृता हंसस्य कांतिः शोभा यया सा तस्याः संबोधनम्। यस्यां त्रिषट् सप्तममक्षरं ह्रस्वं स्यात् तद्वन्नवमं ह्रस्वं स्यात्। हे सुजंघे तामिति संबंधः। एतादृशीं इंद्रवज्रां ब्रुवते। सुष्ठु शोभने जंघे यस्याः सा तत्संबुद्धौ। कवीनां कविषु वा इंद्राः पूज्या बृहस्पत्यादयः। ॥ इंद्रवज्रा। च० अ० ११, ग० त, त, ज; ग, ग; यतिः ५, ६॥</p>',
      definition_eng:
        'In this metre the seventh and nineth syllables are short.',
      common:
        '<br>लोकाभिरामं रणरङ्गधीरं<br>राजीवनेत्रं रघुवंशनाथम् ।<br>कारुण्यरूपं करुणाकरं तं<br>श्रीरामचन्द्रं शरणं प्रपद्ये ॥'
    },
    {
      title_sans: 'उपेंद्रवज्रा ',
      title_eng: 'Upendravajrā',
      id: 21,
      definition_sans:
        '<p>यदींद्रवज्राचरणेषु पूर्वे<br>भवंति वर्णा लघवः सुवर्णे।<br>अमंदमाद्यन्मदने तदानीम्<br>उपेंद्रवज्रा कथिता कवींद्रैः॥</p><p>यदींद्रवज्राचरणेषु पूर्वे वर्णा लघवः संति शेषामिंद्रवज्रावत् आद्यवर्णं ह्रस्वमेवेति शेषः। चतुर्ष्वपि पादेषु आद्यो ह्रस्वः। हे सुवर्णे सा उपेंद्रवज्रा कथिता। अमंदं बहुलं माद्यन् हर्षं कुर्वन्मदनो यस्यां सा तत्संबुद्धौ। तथा चोक्तं रत्नाकरे। उपेंद्रवज्रा जतजास्ततो गौ॥ उपेंद्रवज्रा। च० अ० ११, ग० ज, त, ज; ग, ग; यतिः ५, ६॥</p>',
      definition_eng:
        'This metre is similar to the previous one, indravajrā. The difference between two is that in this metre first syllable of each quarter is short, whereas it is long in indravajrā.',
      common:
        '<br>मुकुन्द मूर्ध्ना प्रणिपत्य याचे<br>भवन्तमेकान्तमियन्तमर्थम् ।<br>अविस्मृतिस्त्वच्चरणारविन्दे<br>भवे भवे मेऽस्तु भवत्प्रसादात् ॥'
    },
    {
      title_sans: 'उपजातिः ',
      title_eng: 'Upajāti ',
      id: 22,
      definition_sans:
        '<p>यत्र द्वयोरप्यनयोस्तु पांदा<br>भवंति सीमंतिनि चंद्रकांते।<br>विद्वद्भिराद्यैः परिकीर्तिता सा<br>प्रयुज्यतामित्युपजातिरेषा॥</p><p>यत्र  द्वयोरनयोरिंद्रवज्रोपेंद्रवज्रयोरपि पादाः यथाक्रमेण भवंति। प्रथमे तृतीये च इंद्रवज्रालक्षणं द्वितीये चतुर्थे च उपेंद्रवज्रालक्षणम्। </p><p>चंद्रवत्कांतिर्यस्याः सा तत्संबुद्धौ पक्षे चंद्रवत्कांता कमनीया या सा तत्संबुद्धौ। ॥ उपजातिः। च० अ० ११, प्रथमे तृतीये च चरणे इंद्रवज्रा द्वितीये चतुर्थं चोपेंद्रवज्रेत्यर्थः॥</p>',
      definition_eng:
        'In this metre the first and third quarters are like Indravajrā, second and fourth quarters are like Upendravajrā metre.',
      common:
        '(इ०) काचिन्मुरारेर्वदनारविन्दं<br>(उ०) संक्रान्तमालोक्य जले निवोढा।<br>(इ०) व्यक्तं सलज्जा परिचुम्बितुं तत्॥<br></br>(उ०) तदर्थमेवाम्भसि निर्ममज्ज॥'
    },
    {
      title_sans: 'आख्यानकी ',
      title_eng: 'ākhyānaki ',
      id: 23,
      definition_sans:
        '<p>आख्यानकी स्यात्प्रकटि<br>यदींद्रवज्राचरणः पुरस्ता<br>उपेंद्रवज्राचरणास्त्रयोऽन्ये<br>मनीषिणोक्ता विपरीतपूर्वा ॥</p><p>यदि इंद्रवज्रावत्प्रथमचरणः स्यात् अन्ये त्रयश्चरण उपेंद्रवज्रावत्संति तदा विपरीतपूर्वाख्यानकी विपरीताख्यानकीत्यर्थः। प्रकटीकृतोऽर्थः कामलक्षणो यया सा तत्संबुद्धौ इयं वृत्तरत्नाकरे नोक्ता तथापि गलादिभिराचार्यैर्हलायुधादावुक्तैव ॥आख्यानकी। च० अ० ११, प्रथमचरण इंद्रवज्रावत् अन्ये उपेंद्रवज्रावत् </p>',
      definition_eng:
        'In this metre the first quarter is like Indravajrā and the other three quarters are like Upendravajrā.'
    },
    {
      title_sans: 'रथोद्धता ',
      title_eng: 'Rathodhatā',
      id: 24,
      definition_sans:
        '<p>आद्यमक्षरमतस्तृतीयकं<br>सप्तमं च नवमं तथांतिमम्।<br>दीर्घमिंदुमुखि यत्र जायते<br>तां वदंति कवयो रथोद्धताम्॥</p><p>यत्राद्यमक्षरमतस्तृतीयकं सप्तमं नवमं तथांतिमं एकादशं एते वर्णा दीर्घा द्विमात्रका जायंते। इंदुवन्मुखं यस्याः सा तत्संबुद्धौ। रथोद्धता। च० अ० ११, ग० र, न, र; ल, ग; यतिः ७, ४ ॥</p>',
      definition_eng:
        'In this metre the first, fourth, seventh, nineth and eleventh syllables are long.'
    },
    {
      title_sans: 'स्वागता ',
      title_eng: 'Svāgatā',
      id: 25,
      definition_sans:
        '<p>अक्षरं च नवमं दशमं चेत्<br>व्यत्ययाद्भवति यत्र विनीते।<br>प्रोक्तमेणनयने यदि सैव<br>स्वागतेति कविभिः कथितासौ ॥</p><p>एणस्य नयने इव नयने यस्याः सा तस्याः संबुद्धौ। अयमर्थः। रथोद्धतायां नवमं अक्षरं गुरु भवति दशमं चाक्षरं लघु भवति स्वागतायां तु नवममक्षरं लघु दशमं चाक्षरं गुरु भवति । स्वागता। च० अ० ११, ग० र, न, भ, ग, ग; यतिः ७, ४॥</p>',
      definition_eng:
        'In this metre the 1st, 3rd, 7th, 10th and 11th syllables of each quarter are long and the others short. There is a pause after 3rd and last syllable of each quarter.',
      common:
        '<p>रत्नभङ्गविमलैर्गुणतुङ्गै-<br />रर्थिनामभिमतार्पणसक्तैः ।<br />स्वागताभिमुखनम्रशिरस्कैः<br />जीव्यते जगति साधुभिरेव ॥</p>'
    },
    {
      title_sans: 'वैश्वदेवी ',
      title_eng: 'Vaiśvadevī',
      id: 26,
      definition_sans:
        '<p>ह्रस्वो वर्णः स्यात्सप्तमो यत्र बाले<br>तद्वद्दिंबोष्ठि न्यस्य एकादशाद्यः।<br>बाणैर्विश्रामस्तत्र चेद्वा तुरंगै-<br>र्नाम्ना निर्दिष्टा सुभ्रु सा वैश्वादेवी॥</p><p>यत्र सप्तमो वर्णो ह्रस्वः स्यात्। दशमि वर्णो ह्रस्वः स्यात्। एवं न्यस्तः निक्षिप्तः स्याच्चेद्यदि तत्र पंचभिः सप्तभिश्च विश्रामः स्यात्। हे सुभ्रु सा नाम्ना वैश्वदेवी निर्दिष्टा कथिता। ॥ वैश्वदेवी । च० अ० १२, ग० म, म,य, य; यतिः ५, ७॥</p>',
      definition_eng:
        'In this metre seventh and tenth syllables are short. There is a pause after fifth and twelfth syllables in all the four quarters.',
      common:
        'अर्चामन्येषां, त्वं विहायामराणा-<br>मद्वैतेनैक,विष्णुमभ्यर्च्य भक्त्या।<br>तत्राशेषात्म, न्यर्चिते भाविनी <br>ते भ्रातः! सम्पन्नाराधना वैश्वदेवी॥'
    },
    {
      title_sans: 'तोटकम्  ',
      title_eng: 'Totakam',
      id: 27,
      definition_sans:
        '<p>सतृतीयकषष्ठमनंतरते<br>नवमं विरतिप्रभवं गुरु चेत्।<br>घनपीनपयोधरभारनते<br>ननु तोटकवृत्तमिदं कथितम्॥</p><p>तृतीयकं षष्ठं नवमं गुरु स्यात्तृतीयं षष्ठं च तृतीयषष्ठे ताभ्यां सह वर्तत इति। कीदृशं विरतिप्रभवं अंत्यं द्वादशं गुरु स्यात्। अनंता अपरिमिता रतिर्यस्याः सा अनंतरता तत्संबुद्धौ। ॥ तोटकम् । च० अ० १२, ग० स, स, स, स; यतिः ६, ६॥</p>',
      definition_eng:
        'In this metre third, sixth, nineth and the last twelfth syllables are long.'
    },
    {
      title_sans: 'भुजंगप्रयातम्  ',
      title_eng: 'Bhujangaprāyatam',
      id: 28,
      definition_sans:
        '<p>यदाद्यं चतुर्थं तथा सप्तमं चे-<br>त्तथैवाक्षरं ह्रस्वमेकादशाद्यम्।<br>शरच्चंद्रविद्वेषिक्रारविंदे<br>तदुक्तं कवींद्रैर्भुजंगप्रयातम् ॥</p><p>आद्यं प्रथमं तथा चतुर्थं तथा सप्तमं एव निश्चितं एकादशाद्यं एकादशस्यादि भूतं दशममक्षरं ह्रस्वं स्यादिति संबंधः। शरदः चंद्रः शरच्चंद्रः तस्य विद्वेषि वक्रमेवारविंदं यस्याः सा तत्संबुद्धौ। ॥ भुजंगप्रयातम् । च० अ०१२, ग० य, य, य, य; यतिः ६, ६॥</p>',
      definition_eng:
        'In this metre the first, fourth, seventh, tenth syllables are short.'
    },
    {
      title_sans: 'द्रुतविलंबितम् ',
      title_eng: 'Drutavilambitā',
      id: 29,
      definition_sans:
        '<p>अयि कृशोदरि यत्र चतुर्थकं<br>गुरु च सप्तमकं दशमं तथा।<br>विरतिजं च तथैव विचक्षणै-<br>र्द्रुतविलंबितमित्युपदिश्यते ॥</p><p>हे कृशोदरि यत्र चतुर्थकं चेत्सप्तमकं तथा दशमं इमान्यक्षराणि गुरूणि सन्ति। विरतिजं अंत्यं द्वादशं गुरू स्यादित्यर्थः । कृशमुदरं यस्याः सा कृशोदरी तत्संबुद्धौ। द्रुतविलंबितम्। च० अ० १२, ग० न, भ, भ, र ॥</p>',
      definition_eng:
        'In this metre the fourth, seventh, tenth and twelfth syllables are long. '
    },
    {
      title_sans: 'प्रतिमाक्षरा',
      title_eng: 'Pramitākṣarā',
      id: 30,
      definition_sans:
        '<p>यदि तोटकस्य गुरू पंचमकं<br>विहितं विलासिनि तदक्षरकम् ।<br>रससंख्यकं गुरू न चेदबले<br>प्रमिताक्षरेति कविभिः कथिता ॥</p><p>यदि तोटकस्य उक्तलक्षणकस्य पंचमकं वर्णं गुरू विहितं स्यात् । षष्ठं गुरू न चेत् गुरू तु पंचममेव । सा प्रमिताक्षरेत्यर्थः । विलासो विभ्रमो यस्याः सा विलासिनी तत्संबुद्धौ । प्रमिताक्षरा । च०अ० १३, ग० स, ज, स, स ॥</p>',
      definition_eng:
        'In this metre third, fifth, nineth and the last twelfth syllables are long.',
      common:
        'प्रमिताक्षरा सुनयना रुचिरा<br>पतिभावपूर्ण-हृदया विशदा ।<br>गृहनित्यकृत्यकरणे चतुरा<br>चतुराननोपि विजितोस्ति तया॥'
    },
    {
      title_sans: 'हरिणीप्लुता',
      title_eng: 'Hariṇīplutā',
      id: 31,
      definition_sans:
        '<p>प्रथमाक्षरमाद्यतृतीययो-<br>र्द्रुतविलंबितकस्त च पादयोः ।<br> यदि चेन्न तदा कमलेक्षणे<br>भवति सुंदरि सा हरिणीप्लुता ॥</p><p>यदि द्रुतविलंबितकस्य छंदसः आद्यतृतीययोः पादयोः प्रथमाक्षरं चेत् एकादशाक्षरमेवं विषमपादयोः तदेयं हरिणीप्लुता । कमलवदीक्षणे यस्याः सा तत्संबुद्धौ हेसुंदरि शुभांगे । हरिणीप्लुता । च० १, ३; अ० ११, ग० स, स; स; ल, ग । च० २, ४; अ० १२, ग० न, भ, भ, र ॥</p>',
      definition_eng:
        'This metre is formed when the first syllable of the first three quarters of Drutavilambitā are removed.'
    },
    {
      title_sans: 'वंशस्थम् ',
      title_eng: 'Vamśastham',
      id: 32,
      definition_sans:
        '<p>उपेंद्रवज्रा चरणेषु संति चेत्<br>उपांत्यवर्णा लघवः कृता यदा ।<br>मदोल्लसद्भ्रूजितकामकार्मुके<br>वदंति वंशस्थमिदं बुधास्तदा ॥</p><p>यदा उपेंद्रवज्राचरणेषु उपांत्यवर्णाः अंत्यसमीपस्था वर्णा एकादशसंज्ञका लघवः संति प्रतिचरणे एकादशो वर्णो लघुस्तदा वंशस्थम् । मदेन उल्लसंतौ भ्रुवौ ताभ्यां जितं कामकार्मुकं मदनधनुर्यया सा तत्संबुद्धौ । अंत्यस्य समीपमुपांत्यम् । उपांत्ये भवा उपांत्याः । उपांत्याश्च ते वर्णाश्चेति । वंशस्थम् । च०अ० १२, ग० ज त, ज, र; यतिः ५, ७॥</p>',
      definition_eng:
        'In this metre all the eleven syllables in all the quarters are short.'
    },
    {
      title_sans: 'इंद्रवंशा',
      title_eng: 'Indravamśā',
      id: 33,
      definition_sans:
        '<p>यस्यामशोकांकुरपाणिपल्लवे<br>वंशस्थपादा गुरूपूर्ववर्णकाः ।<br>तारूण्यहेलारतिरंगलालसे<br>तामिंद्रवंशां कवयः प्रचक्षते ॥</p><p>यस्यामशोकेति ॥ हे तारूण्यहेलारतिरंगलालसे कवयो यस्यां वंशास्थपादा गुरूपूर्ववर्णका भवंति । हे अशोकांकुरपाणिपल्लवे  तामिंद्र्वंशां प्रचक्षते ब्रुवते । अशोकांकुरवत्पाणिपल्लवौ यस्याः सा । तारूण्यस्य हेलास्ताभी रतिरंगे लालसा अभिलाषो यस्याः सा तत्संबुद्धौ ।  इंद्रवंशा । च०अ० १२, ग० त, त, ज, र; यतिः ॥ ५,७॥</p>',
      definition_eng:
        'In this metre the eleven syllables are long in all the quarters.'
    },
    {
      title_sans: 'प्रभावती',
      title_eng: 'Prabhāvatī',
      id: 34,
      definition_sans:
        '<p>यस्यां प्रिये प्रथमकमक्षरद्वयं<br>तुर्यं तथा गुरू नवमं दशांतिकम् ।<br>सांत्यं भवेद्यति विरतिर्युगग्रहैः<br>सा लक्षिता ह्यमृतलते प्रभावती ॥</p><p>यस्यां प्रथममक्षरद्वयं तुर्यं तथा चतुर्थं तथा नवमं दशांतिकं दशसहितं त्रयोदशं वर्णं चतुर्भिर्नवभिश्चाक्षरैर्विरतिः सा प्रभावती लक्षिता कथिता । अमृतस्य लतेव लता या सा तत्संबुद्धौ ॥प्रभावती । च०अ० १३, ग० ज, भ, स, ज, ग; यतिः ४, ९ ॥</p>',
      definition_eng:
        'In this metre first, second, fourth, nineth, tenth and thirteenth syllables are long. There is a pause after fourth and thirteenth syllables.'
    },
    {
      title_sans: 'प्रहर्षिणी',
      title_eng: 'Praharṣiṇī',
      id: 35,
      definition_sans:
        '<p>आद्यं चेत्त्रितयमथाष्टमं नवांत्यं<br>द्वे चांत्ये गुरूविरतौ सुभाषिते स्यात् ।<br>विश्रामो भवति महेशनेत्रदिग्भि-<br>र्विज्ञेया ननु सुभगे प्रहर्षिणी सा ॥</p><p>प्रथमतः वर्णत्रयं अथाऽष्टमं नवांत्यं दशमं चांत्ये द्वे द्वादशत्रयोदशाख्ये एते गुरवो भवंति । वर्णत्रयानंतरं दशवर्णानंतरं च विश्रामः स्यात् सा प्रहर्षिणी विज्ञेया ज्ञातव्या । सुशोभनं भाषणं यस्याः सा । सुशोभना दंता यस्याः सा सुदती तत्संबुद्धौ । प्रहर्षिणी । च०अ० १३, ग० म, न, ज, र; ग; यतिः ३, १०॥</p>',
      definition_eng:
        '<p>The 1st, 2nd, 3rd, 8th, 10th, 12th and 13th syllables of each quarter of this metre are long and others short. There should be a pause after the 3rd and last syllables of each quarter.</p>',
      common:
        'विद्वांसो, यदि मम दोषमुद्गिरेयु-<br>र्यदि वा, गुणगणमव कीर्त्तयेयुः।<br>तत्तुल्यं वत! मनुत मनो मदीयं<br>तत्कष्टं, यदि पुनरेवमाह मन्दः॥'
    },
    {
      title_sans: 'वसंततिलका',
      title_eng: 'Vasantatilakā',
      id: 36,
      definition_sans:
        '<p>आद्यं द्वितीयमपि चेद्गुरु तच्चतुर्थं<br>यत्राष्टमं च दशमांत्यमुपांत्यमंत्यम् ।<br>कामांकुशांकुशितकामिमतंगजेंद्रे<br>कांते वसंततिलकां किल तां वदंति ॥</p><p>यत्र आद्यं प्रथमं द्वितीयमपि गुरू चतुर्थं दशमांत्यं एकादशमुपांत्यं त्रयोदशं अंत्यं चतुर्दशं एते गुरवः स्युः हे कांते बुधास्तां वसंततिलकां वदंति । काम एवांकुशस्तेनांकुशिता वशीकृताः  कामिन एव मनंगजेंद्रा यया सा तत्संबुद्धौ । वसंततिलका । च०अ० १४, ग० त, भ, ज, ज; ग, ग ॥</p>',
      definition_eng:
        '<p>The 1st, 2nd, 4th, 8th, 11th, 13th and 14th syllables are long and the others short. There should be a pause after the 8th and last syllables of each quarter.</p>',
      common:
        'त्थं विशेषगुणशालिनि यादवेन्द्रे<br>सद्भक्तिरेव नुदति प्रबला बलान्माम्।<br>यच्चैत्रमासि मधुरं हि पिको विरैति<br>तच्चारुचृतकलिकानिकरहेतुः॥'
    },
    {
      title_sans: 'मालिनी',
      title_eng: 'Mālinī',
      id: 37,
      definition_sans:
        '<p>प्रथममगुरूषट्कं विद्यते यत्र कांते<br>तदनु च दशमं चेदक्षरं द्वादशांत्यम् ।<br>गिरिभिरथ तुरंगैर्यत्र कांते विरामः<br>सुकविजनमनोज्ञा मालिनी सा प्रसिद्धा ॥</p><p>यत्र प्रथमं षट्कमगुरू लघ्वेव भवति तदनु दशमं द्वादशांत्यं त्रयोदशं च लघु । अष्टभिः सप्तभिश्च विरामस्तदा सुकविजनमनोज्ञा मालिनी सा प्रसिद्धा कृता । मालिनी । च०अ० १५, ग० न,न, म, य, य; यतिः ८, ७॥ </p>',
      definition_eng:
        '<p>The 1st, 2nd, 3rd, 4th, 5th, 6th, 10th and 13th syllables of each quarter are short and the others long. There should be a pause after the 8th and last syllables of each quarter.</p>',
      common:
        'मृगमदकृतचर्चा पीतकौशेयवासा<br>रुचिरशिखिशिखण्डा बद्धमिल्लपाशा।<br>अनृजुनिहितमसे वंशमुत्काणुयन्ती<br>धृतमधुरिपुलीला मालिनी पातु राधा॥'
    },
    {
      title_sans: 'हरिणी',
      title_eng: 'Hariṇī',
      id: 38,
      definition_sans:
        '<p>सुमुखि लघवः पंच प्राच्यास्ततो दशमांतिकं<br>तदनु ललितालापे वर्णौ यदि त्रिचतुर्दशौ ।<br>प्रभवति पुनर्यत्रोपांत्यः स्फुरत्करकंकणे <br>यतिरपि रसैर्वेदैरश्वैः स्मृता हरिणीति सा ॥</p><p>यत्र प्रथमाः पंचवर्णा लघवः संति । ततो दशमांतिक एकादशः यदि त्रिचतुर्दशौ त्रयोदशचतुर्दशौ लघू स्यातां उपांत्यः षोडशोऽपि लघुः । षड्भिः चतुर्भिः सप्तभिश्च विरामः स्यात्तदा सा हरिणी स्मृता । स्फुरंति करयोः कंकणानि यस्याः सा । ललित आलापो यस्याः सा । च०अ० १७, ग० न, स, म, र, स; ल, ग; यतिः ६, ४,७ ॥</p>',
      definition_eng:
        '<p>The 1st, 7th, 8th, 9th, 10th, 11th, 14th, 15th and 16th syllables of each quarter of this metre are short and the others long. There should be a pause after the 6th and last syllables of each quarter.</p>',
      common:
        'त्वमर्कस्त्वं सोमस्त्वमसि पवनस्त्वं हुतवह-<br>स्त्वमापस्त्वं व्योम त्वमु धरणिरात्मा त्वमिति च।<br>परिच्छिन्नामेवं त्वयी परिणता विभ्रतु गिरं<br>न विद्मस्तत्तत्वं वयमिह तु यत्त्वं न भवसि॥'
    },
    {
      title_sans: 'शिखरिणी',
      title_eng: 'śikhariṇī',
      id: 39,
      definition_sans:
        '<p>यदा पूर्वो ह्रस्वः कमलनयने षष्ठकपरा-<br>स्ततो वर्णाः पंच प्रकृतिसुकुमारांगि लघवः ।<br>त्रयोऽन्ये चोपांत्याः सुतनुजघनाभोगसुभगे<br>रसै रूद्रैर्यस्यां भवति विरतिः सा शिखरिणी ॥</p><p>हे सुतनुजघनाभोगसुभगे यदा पूर्वो वर्णो ह्रस्वो भवति । हे प्रकृतिसुकुमारांगि ततः षष्ठतः पंच वर्णाः सप्तमाष्टमनवमदशमैकादशा लघवः संति । अन्ये उपांत्यास्त्रयो वर्णाश्चतुर्दशपंचदशषोडशा लघवो भवंति । यस्यां षड्भी एकादशैर्विरतिर्भवेत् । हे सुतनु सा शिखरिणी कथिता । कमलवन्नयने यस्याः सा । प्रकृत्य स्वभावेन सुकुमाराण्यंगानि यस्याः । जघनयोराभोगस्तेन सुभगा । सुशोभना तनुर्यस्याः सा तत्संबुद्धौ । च०अ० १७, ग० य, म, न, स, भ; ल, ग; यतिः ६, ११॥</p>',
      definition_eng:
        '<p>The 1st, 7th, 8th, 9th, 10th, 11th, 14th, 15th and 16th syllables of each quarter of this metre are short and the others long. There should be a pause after the 6th and last syllables of each quarter.</p>',
      common:
        'त्वमर्कस्त्वं सोमस्त्वमसि पवनस्त्वं हुतवह-<br>स्त्वमापस्त्वं व्योम त्वमु धरणिरात्मा त्वमिति च।<br>परिच्छिन्नामेवं त्वयी परिणता विभ्रतु गिरं<br>न विद्मस्तत्तत्वं वयमिह तु यत्त्वं न भवसि॥'
    },
    {
      title_sans: 'पृथ्वी',
      title_eng: 'Pṛthvī',
      id: 40,
      definition_sans:
        '<p>द्वितीयमलिकुंतले यदि षडष्टमं द्वादशं<br>चतुर्दशमथ प्रिये गुरू गभीरनाभिह्रदे ।<br>सपंचदशमंतिकं तदनु यत्र कांते यति-<br>र्गिरिंद्र्फणिभृत्कुलैर्भवति सुभ्रु पृथ्वी हि सा ॥</p><p>हे सुभ्रु यदि द्वितीयसम्ख्याकं गुरू स्यात् हे अलिकुंतले षष्ठमष्टमं च गुरू हे प्रिये द्वादशमथ चतुर्दशं गुरू हे गभीरनाभिह्रदे पंचदशेन सहितमंतिकं गुरू स्यात् । हे कांते यत्र अष्टभिः नवभिश्च यतिः स्यात्सा पृथ्वीनामकं वृत्तं भवति । अलिवभ्द्रमरवच्छ्यामाः कुंतला अलका यस्याः सा । गंभीरा निम्ना नाभिरेव ह्रदो यस्याः सा तत्संबुद्धौ । पृथ्वी च०अ० १७, ग०ज, स, ज, स, य; ल, ग; यतिः ८,९॥</p>',
      definition_eng:
        '<p>Here the 1st, 3rd, 4th, 5th, 7th, 9th, 10th, 11th, 13th and 16th syllables of each quarter are short and the others long. There should be a pause after the 8th and last syllables of each quarter.</p>',
      common:
        'दुरन्तदनुजेश्वर-प्रकरदुस्थपृथ्वी-भर<br>जहार निजलीलया-यदुकुलेवतीर्यांशु यः।<br>स एष जगतां गति-र्दुरितभारमस्मादृशा<br>हरिश्यति हरिः स्तुतिस्मरण वाटुभिस्तोषित॥'
    },
    {
      title_sans: 'मंदाक्रांता',
      title_eng: 'Mandākrānta ',
      id: 41,
      definition_sans:
        '<p>चत्वारः प्राक् सुतनु गुरवो द्वादशैकादशौ चे-<br>न्मुग्धे वर्णौ तदनु कुमुदामोदिनि द्वादशांत्यौ ।<br>तद्वच्चांत्यौ युगरसहयैर्यत्र कांते विरामो<br>मंदाक्रांतां प्रवरकवयस्तन्वि तां संगिरंते ॥</p><p>हेतन्वि प्रवरकवयो यत्र प्राक् चत्वारो वर्णा गुरवः स्युः हे कुमुदामोदिनि द्वादशैकादशौ गुरू स्तः हे मुग्धे त्रयोदशचतुर्दशौ गुरू स्यातां अंत्यौ षोडशसप्तदशौ तद्वद्गुरु युगरसहयैर्विरामः एतादृशीं तां मंदाक्रांतां संगिरंते । कुमुदवदामोदः सुगंधिर्यस्याः सा । मंदाक्रांता । च० अ० १७, ग० म, भ, न, त, त; ग, ग; यतिः ४, ६, ७॥</p>',
      definition_eng:
        'In this metre contianing 17 syllables, the first four syllables, eleventh, twelfth, thirteenth, fourteenth, sixteenth and seventeenth syllables are long.'
    },
    {
      title_sans: 'शार्दूलविक्रीडितम् ',
      title_eng: 'śārdūlavikrīḍitam',
      id: 42,
      definition_sans:
        '<p>आद्याश्चेद्गुरवस्त्रयः प्रियतमे षष्ठस्तथा चाष्टमो<br>नन्वेकादशतस्त्रयस्तदनु चेदष्टादशाद्यौ ततः ।<br>मार्तंडैर्मुनिभिश्च यत्र विरतिः पूर्णेंदुबिंबानने<br>तद्वृत्तं प्रवदंति काव्यरसिकाः शार्दूलविक्रीडितम् ॥</p><p>हे पूर्णेंदुबिंबानने काव्यरसिकास्तद्वृत्तं शार्दूलविक्रीडितं वदंति । यत्राद्यास्त्रयो गुरवः षष्ठस्तथाऽष्टमः गुरूः । ननु एकादशतस्त्रयः द्वादशत्रयोदशचतुर्दशा गुरवः ततश्चेदष्टादशस्याद्यौ षोडशसप्तदशौ गुरू स्याताम् । यत्र द्वादशसप्तभिर्विरतिः हे प्रियतमे तदेतच्छार्दूलविक्रीडितं । पूर्णश्चासाविंदुस्तस्य बिंबवदाननं यस्याः सा अतिशयेन प्रिया प्रियतमा तस्याः संबुद्धौ । शार्दूलविक्रीडितम् । अ०अ० १९, ग० म, स, ज, स, त, त; ग, यतिः १२, ७ ॥</p>',
      definition_eng:
        '<p>The 1st, 2nd, 3rd,, 6th, 8th, 12th, 13th, 14th, 16th, 17th and 19th syllables of each quarter are long and the others short. There should be a pause after the 12th and last syllables of each quarter.</p>',
      common:
        'आद्यं यत्र गुरुत्रयं प्रियतमे! षष्ठं ततश्चाष्टमं<br>सन्त्येकादशतस्त्रयस्तदनु चेदष्टादशाद्यान्तिमाः।<br>मार्त्तण्डैमुनिभिश्च यत्र विरतिः पूर्णेन्दुबिम्बानने! <br>तद्वृत्तं प्रवदन्ति काव्यरसिकाः शार्दूलविक्रीडितम्॥'
    },
    {
      title_sans: 'स्रग्धरा ',
      title_eng: 'Sragdharā',
      id: 43,
      definition_sans:
        '<p>चत्वारो यत्र वर्णाः प्रथममलघवः षष्ठकः सप्तमोऽपि<br>द्वौ  तद्वत्षोडशाद्यौ मृगमदमुदिते षोडशांत्यौतथात्यौ ।<br> रंभास्तंभोरुकांते मुनिमुनिमुनिभिर्द्दश्यते चेद्विरामो बाले<br> वंद्यैः कवींद्रैः सुतनु निगदिता स्रग्धरा सा प्रसिद्धा ॥</p><p>हे सुदति वंद्यैः पूज्यैः कवींद्रैः प्रसिद्धा इयं स्रग्धरा गदिता । यत्र प्रथमं चत्वारो वर्णा गुरवः संति षष्ठकः सप्तमोऽपि तद्वद्गुरुः । षोडशाद्यौ चतुर्दशपंचदशौ तथांत्यौ सप्तदशाष्टादशौ गुरू स्याताम् । मुनिमुनिमुनिभिर्विरामः । हे रंभास्तंभोरुकांते हे बाले इयं स्रग्धरा प्रसिद्धा मृगस्य मदेन मुदिता सा । रंभायाः स्तंभवदूर्वोः कांतिर्यस्याः सा । सुशोभना दंता यस्याः सा तत्संबुद्धौ । च० अ० २१, ग० म, र, भ, न, य, य, य; यतिः ७, ७, ७॥ </p>',
      definition_eng:
        '<p>This metre contains 21 syllables in each quarter. The 1st, 2nd, 3rd, 4th, 6th, 7th, 14th, 15th, 17th, 18th, 20th and 21st syllables of each quarter of this metre are long and the others short. There should be a pause after the 7th, 14th and 21st syllables of each quarter.</p>',
      common:
        'व्याकोपेन्दावरामा कनककषलसत्पीतवासाः सुहासा<br>बहैरुच्चन्द्रकान्तेर्वलीयतचिकरा चारुकर्णावतंसा।<br>अंसव्यामसक्तवंशी-ध्वनिसुखितजगद्वल्लवीभिर्लसन्ती<br>मृत्तिर्गोपस्य विष्णोरवतु जगति नः स्रग्धरा हारिहारा॥'
    },
    {
      title_eng: ' ',
      id: 44,
      definition_eng: '<a href="/">Home</a>'
    }
  ],
  srutabodha_exercises: [
    {
      id: '1',
      title: 'Level 1 - लघु & गुरु',
      question: 'A long vowel (दीर्घं) has how many Mātrās?',
      options: ['1', '2', '3', '4'],
      ans: '2'
    },
    {
      id: '2',
      title: 'Level 2 - गणाः',
      question: 'आदिलघु: ___',
      options: ['मगणः', 'यगणः', 'सगणः', 'तगणः'],
      ans: 'यगणः'
    },
    {
      id: '3',
      title: 'Level 2 - गणाः',
      question: 'सर्वगुरुः ___',
      options: ['मगणः', 'नगणः', 'सगणः', 'तगणः'],
      ans: 'मगणः'
    },
    {
      id: '4',
      title: 'Level 3 - Identify the metre',
      question: 'आर्योत्तरार्धतुल्यं प्रथमार्धमपि चेत् सा ___',
      options: ['उपगीतिः', 'रुचिरावृत्तम्', 'शिखावृत्तम्', 'वैतालीयछन्दस्'],
      ans: 'उपगीतिः'
    },
    {
      id: '5',
      title: 'Level 3 - Identify the metre',
      question: 'यदि चतुर्थं पञ्चमं लघु स्यात् सा ___ प्रोक्ता',
      options: ['रुचिरावृत्तम्', 'मदलेखा', 'शशिवदना', 'पङ्क्तिः'],
      ans: 'मदलेखा'
    },
    {
      id: '6',
      title: 'Level 3 - Identify the metre',
      question: 'Name the metre which is also known as Pramāṇikā',
      options: ['Anuṣṭup', 'Āryā ', 'Nāgasvarupiṇi', 'Rucirā'],
      ans: 'Nāgasvarupiṇi'
    },
    {
      id: '7',
      title: 'Level 4 - Identify the meter:',
      question: 'Which metre contains only long syllables in all its quarters?',
      options: ['Anuṣṭup', 'Āryā ', 'Nāgasvarupiṇi', 'Vidyunmālā'],
      ans: 'Vidyunmālā'
    },
    {
      id: '8',
      title: 'Level 4 - Identify the meter:',
      question:
        'कोऽयं कान्तिः केशव त्वन्मुखेन्दोः<br>कोऽयं वेषः कापि वाचामभूमिः। <br>सेयं सेयं स्वादुता मञ्जुलश्रीः<br> भूयो भूयो भूयशस्त्वां नमामि॥<br>',
      options: ['Anuṣṭup', 'śālinī', 'Nāgasvarupiṇi', 'Vidyunmālā'],
      ans: 'śālinī'
    },
    {
      id: '9',
      title: 'Level 4 - Identify the meter:',
      question:
        '<br>लोकाभिरामं रणरङ्गधीरं<br>राजीवनेत्रं रघुवंशनाथम् ।<br>कारुण्यरूपं करुणाकरं तं<br>श्रीरामचन्द्रं शरणं प्रपद्ये ॥',
      options: ['śālinī', 'Indravajrā', 'Pādākulaka', 'Upendravajrā'],
      ans: 'Indravajrā'
    },
    {
      id: '10',
      title: 'Level 5 - Identify the meter:',
      question:
        'यत्र प्राक् चत्वारो वर्णा, द्वादशैकादशौ , त्रयोदशचतुर्दशौ गुरू स्यातां अंत्यौ षोडशसप्तदशौ तद्वद्गुरु तां ___ संगिरंते ।',
      options: ['मंदाक्रांतां', 'मदलेखा', 'शशिवदना', 'पङ्क्तिः'],
      ans: 'मंदाक्रांतां'
    }
  ],
  srutabodha_titles: [
    {
      title: 'Introduction to Shrutabodha',
      sl_num: '1',
      group: false,
      to: '/srutabodha/lessons/1'
    },
    {
      title: 'Identifying a Guru and a Laghu',
      sl_num: '2',
      group: false,
      to: '/srutabodha/lessons/2'
    },
    {
      title: 'Characteristics of Eight Gaṇas',
      sl_num: '3',
      group: false,
      to: '/srutabodha/lessons/3'
    },
    {
      title: 'āryā Chandas',
      sl_num: '4',
      group: false,
      to: '/srutabodha/lessons/4'
    },
    {
      title: 'Gīti',
      sl_num: '5',
      group: false,
      to: '/srutabodha/lessons/5'
    },
    {
      title: 'Upagīti',
      sl_num: '6',
      group: false,
      to: '/srutabodha/lessons/6'
    },
    {
      title: 'Pankti',
      sl_num: '7',
      group: false,
      to: '/srutabodha/lessons/7'
    },
    {
      title: 'śaśivadanā',
      sl_num: '8',
      group: false,
      to: '/srutabodha/lessons/8'
    },
    {
      title: 'Madalekhā',
      sl_num: '9',
      group: false,
      to: '/srutabodha/lessons/9'
    },
    {
      title: 'Padyam',
      sl_num: '10',
      group: false,
      to: '/srutabodha/lessons/10'
    },
    {
      title: 'Māṇavakam',
      sl_num: '11',
      group: false,
      to: '/srutabodha/lessons/11'
    },
    {
      title: 'Nāgasvarupiṇi',
      sl_num: '12',
      group: false,
      to: '/srutabodha/lessons/12'
    },
    {
      title: 'Vidyunmālā',
      sl_num: '13',
      group: false,
      to: '/srutabodha/lessons/13'
    },
    {
      title: 'Campakamālā',
      sl_num: '14',
      group: false,
      to: '/srutabodha/lessons/14'
    },
    {
      title: 'Maṇibandha',
      sl_num: '15',
      group: false,
      to: '/srutabodha/lessons/15'
    },
    {
      title: 'śālinī',
      sl_num: '16',
      group: false,
      to: '/srutabodha/lessons/16'
    },
    {
      title: 'Mandākrāntā',
      sl_num: '17',
      group: false,
      to: '/srutabodha/lessons/17'
    },
    {
      title: 'Hamsī',
      sl_num: '18',
      group: false,
      to: '/srutabodha/lessons/18'
    },
    {
      title: 'Dodhakavṛttam',
      sl_num: '19',
      group: false,
      to: '/srutabodha/lessons/19'
    },
    {
      title: 'Indravajrā',
      sl_num: '20',
      group: false,
      to: '/srutabodha/lessons/20'
    },
    {
      title: 'Upendravajrā',
      sl_num: '21',
      group: false,
      to: '/srutabodha/lessons/21'
    },
    {
      title: 'Upajāti',
      sl_num: '22',
      group: false,
      to: '/srutabodha/lessons/22'
    },
    {
      title: 'ākhyānaki',
      sl_num: '23',
      group: false,
      to: '/srutabodha/lessons/23'
    },
    {
      title: 'Rathodhatā',
      sl_num: '24',
      group: false,
      to: '/srutabodha/lessons/24'
    },
    {
      title: 'Svāgatā',
      sl_num: '25',
      group: false,
      to: '/srutabodha/lessons/25'
    },
    {
      title: 'Vaiśvadevī',
      sl_num: '26',
      group: false,
      to: '/srutabodha/lessons/26'
    },
    {
      title: 'Totakam',
      sl_num: '27',
      group: false,
      to: '/srutabodha/lessons/27'
    },
    {
      title: 'Bhujangaprāyatam',
      sl_num: '28',
      group: false,
      to: '/srutabodha/lessons/28'
    },
    {
      title: 'Drutavilambitā',
      sl_num: '29',
      group: false,
      to: '/srutabodha/lessons/29'
    },
    {
      title: 'Pramitākṣarā',
      sl_num: '30',
      group: false,
      to: '/srutabodha/lessons/30'
    },
    {
      title: 'Hariṇīplutā',
      sl_num: '31',
      group: false,
      to: '/srutabodha/lessons/31'
    },
    {
      title: 'Vamśastham',
      sl_num: '32',
      group: false,
      to: '/srutabodha/lessons/32'
    },
    {
      title: 'Indravamśā',
      sl_num: '33',
      group: false,
      to: '/srutabodha/lessons/33'
    },
    {
      title: 'Prabhāvatī',
      sl_num: '34',
      group: false,
      to: '/srutabodha/lessons/34'
    },
    {
      title: 'Praharṣiṇī',
      sl_num: '35',
      group: false,
      to: '/srutabodha/lessons/35'
    },
    {
      title: 'Vasantatilakā',
      sl_num: '36',
      group: false,
      to: '/srutabodha/lessons/36'
    },
    {
      title: 'Mālinī',
      sl_num: '37',
      group: false,
      to: '/srutabodha/lessons/37'
    },
    {
      title: 'Hariṇī',
      sl_num: '38',
      group: false,
      to: '/srutabodha/lessons/38'
    },
    {
      title: 'śikhariṇī',
      sl_num: '39',
      group: false,
      to: '/srutabodha/lessons/39'
    },
    {
      title: 'Pṛthvī',
      sl_num: '40',
      group: false,
      to: '/srutabodha/lessons/40'
    },
    {
      title: 'Mandākrānta',
      sl_num: '41',
      group: false,
      to: '/srutabodha/lessons/41'
    },
    {
      title: 'śārdūlavikrīḍitam',
      sl_num: '42',
      group: false,
      to: '/srutabodha/lessons/42'
    },
    {
      title: 'Sragdharā',
      sl_num: '43',
      group: false,
      to: '/srutabodha/lessons/43'
    }
  ],
  samasachakra_lessons: [
    {
      title_sans: 'समासानां परिचयः',
      title_eng: 'Introduction to Compounds in Sanskrit',
      id: 1,
      common:
        '<p>Combination of two or more nouns to create a new noun is called the compound. In English, a typical compound involves two or three words; "wallpaper," for instance, is just "wall" and "paper." Sanskrit compounds can be made of as many as 30 different words.<br><br>Sanskrit has an extremely rich system of compounds. Partly for that reason, compounds are a vital part of Sanskrit grammar. Compounds were analyzed extensively by the ancient Indian grammarians, most of whom worked about 2500 years ago; as a carry-over from that tradition.<br><br>All of the words in the compound are taken as a single unit. Even though many words may be in a compound, only the last one is inflected. All other words appear as ordinary stems, with the rare exception. Between words in the compound, external sandhi applies.</p>',
      example_sans: ''
    },
    {
      title_sans: '',
      title_eng: 'Prayer',
      id: 2,
      definition_sans:
        'शेषाचलशिरोभूषा तोषाय भवतान्महः । <br>  यन्निरस्तनतस्तोमतमस्ततिनमस्कृति ॥',
      definition_eng: '',
      common: ''
    },
    {
      title_sans: '',
      title_eng: 'Classification of Samāsa',
      id: 3,
      definition_sans:
        'वक्ष्ये तत्पुरुषं कर्मधारयं बालबुद्धये ।<br>बहुव्रीहिं द्विगुं द्वंद्वमव्ययीभावमेव च ॥',
      definition_eng: ' ',
      common: 'Samāsas are also divided into 6 types:',
      treeData: [
        {
          name: 'Samāsa',
          children: [
            {
              name: '1. तत्पुरुषः (tatpuruṣaḥ)',
              link: '/lessons/5'
            },
            {
              name: '2. कर्मधारयः (karmadhārayaḥ)',
              link: '/lessons/6'
            },
            {
              name: '3. बहुव्रीहिः (bahuvrīhi)',
              link: '/lessons/7'
            },
            {
              name: '4. द्विगुः (dvigu)',
              link: '/lessons/8'
            },
            {
              name: '5. द्वन्द्वः (dvandva)',
              link: '/lessons/9'
            },
            {
              name: '6. अव्ययीभावः (avyayībhāva)',
              link: '/lessons/10'
            }
          ]
        }
      ]
    },
    {
      title_sans: '',
      title_eng: 'Subcategories of types',
      id: 4,
      definition_sans:
        'समासाष्षट्सु संक्षिप्ता अष्टाविंशतिधा पुनः ।<br>     तत्राष्टधा तत्पुरुषस्सप्तधा कर्मधारयः ॥<br>सप्तधा च बहुव्रीहिर्द्विगुर्द्वन्द्वो द्विधा द्विधा ।<br>द्विविधश्चाव्ययीभाव इत्यष्टाविंशतिः क्रमात् ॥',
      definition_eng:
        '<p>The six Samāsas are further divided into 28 types as follows:</p>',
      common: '',
      treeData: [
        {
          name: 'Samāsa',
          children: [
            {
              name: '1. तत्पुरुषः (tatpuruṣaḥ) - 8 types',
              link: '/lessons/5',
              children: [
                {
                  name: '1. प्रथमातत्पुरुषः (prathamātatpuruṣaḥ)',
                  link: '/lessons/5'
                },
                {
                  name: '2. द्वितीयातत्पुरुषः (dvitīyātatpuruṣaḥ)',
                  link: '/lessons/5'
                },
                {
                  name: '3. तृतीयातत्पुरुषः (tṛtīyātatpuruṣaḥ)',
                  link: '/lessons/5'
                },
                {
                  name: '4. चतुर्थीतत्पुरुषः (caturthītatpuruṣaḥ)',
                  link: '/lessons/5'
                },
                {
                  name: '5. पञ्चमीतत्पुरुषः (pañcamītatpuruṣaḥ)',
                  link: '/lessons/5'
                },
                {
                  name: '6. षष्ठीतत्पुरुषः (ṣaṣṭhītatpuruṣaḥ)',
                  link: '/lessons/5'
                },
                {
                  name: '7. सप्तमीतत्पुरुषः (saptamītatpuruṣaḥ)',
                  link: '/lessons/5'
                },
                {
                  name: '8. नञ् तत्पुरुषः (nañ tatpuruṣaḥ)',
                  link: '/lessons/5'
                }
              ]
            },
            {
              name: '2. कर्मधारयः (karmadhārayaḥ) - 7 types',
              link: '/lessons/6',
              children: [
                {
                  name: '1. विशेषणपूर्वपदः (viśeṣaṇapūrvapadaḥ)',
                  link: '/lessons/6'
                },
                {
                  name: '2. विशेष्यपूर्वपदः (viśeṣyapūrvapadaḥ) ',
                  link: '/lessons/6'
                },
                {
                  name: '3. विशेषणोभयपदः (viśeṣaṇobhayapadaḥ) ',
                  link: '/lessons/6'
                },
                {
                  name: '4. उपमानपूर्वपदः (upamānapūrvapadaḥ) ',
                  link: '/lessons/6'
                },
                {
                  name: '5. उपमानोत्तरपदः (upamānottarapadaḥ) ',
                  link: '/lessons/6'
                },
                {
                  name: '6. सम्भावनापूर्वपदः (sambhāvanāpūrvapadaḥ)',
                  link: '/lessons/6'
                },
                {
                  name: '7. अवधारणापूर्वपदः (avadhāraṇāpūrvapadaḥ) ',
                  link: '/lessons/6'
                }
              ]
            },
            {
              name: '3. बहुव्रीहिः (bahuvrīhi) - 7 types',
              link: '/lessons/7',
              children: [
                {
                  name: '1. द्विपदः (dvipadaḥ) ',
                  link: '/lessons/7'
                },
                {
                  name: '2. बहुपदः (bahupadaḥ) ',
                  link: '/lessons/7'
                },
                {
                  name: '3. सहपूर्वपदः (sahapūrvapadaḥ) ',
                  link: '/lessons/7'
                },
                {
                  name: '4. संख्योत्तरपदः (saṃkhyottarapadaḥ) ',
                  link: '/lessons/7'
                },
                {
                  name: '5. संख्योभयपदाः (saṃkhyobhayapadāḥ) ',
                  link: '/lessons/7'
                },
                {
                  name: '6. व्यतिहारलक्षणः (vyatihāralakṣaṇaḥ) ',
                  link: '/lessons/7'
                },
                {
                  name: '7. दिगन्तराललक्षणः (digantarālalakṣaṇaḥ) ',
                  link: '/lessons/7'
                }
              ]
            },
            {
              name: '4. द्विगुः (dvigu) - 2 types',
              link: '/lessons/8',
              children: [
                {
                  name: '1. एकवद्भावी द्विगुः (ekavadbhāvī dviguḥ) ',
                  link: '/lessons/8'
                },
                {
                  name: '2. अनेकवद्भावी द्विगुः (anekavadbhāvī dviguḥ) ',
                  link: '/lessons/8'
                }
              ]
            },
            {
              name: '5. द्वन्द्वः (dvandva) - 2 types',
              link: '/lessons/9',
              children: [
                {
                  name: '1. इतरेतरद्वन्द्वः (itaretaradvandvaḥ)',
                  link: '/lessons/9'
                },
                {
                  name: '2. समाहारद्वन्द्वः (samāhāradvandvaḥ)',
                  link: '/lessons/9'
                }
              ]
            },
            {
              name: '6. अव्ययीभावः (avyayībhāva) - 2 types',
              link: '/lessons/10'
            }
          ]
        }
      ]
    },
    {
      title_sans: 'तत्पुरुषः',
      title_eng: 'Tatpuruṣaḥ',
      id: 5,
      definition_sans:
        ' तत्र तत्पुरुषस्याष्टौ प्रकारान् प्रब्रवीम्यहम् । <br>प्रथमाद्यास्तत्पुरुषा स्सप्तधास्युर्नञष्टमः ॥<br>एतेषां विग्रहं वक्ष्ये समासानां यथाक्रमम् । <br> विभज्य गृह्यते यस्स विग्रहः परिकीर्तितः ॥ <br> अनेकशब्दसन्धिस्तु समासः कथ्यते यथा । <br> अर्धं गुडस्यार्धगुडोऽब्धिं गताऽब्धिगता नदी॥ <br> वाचा श्लक्ष्णस्तु वाक्श्लक्ष्णो <br> दिग्बलिस्तु दिशे बलिः॥ <br>सिंहाद्भयं सिंहभयं भूपतिस्तु भुवः पतिः॥ <br> विष्णौ भक्तिर्विष्णुभक्तिर्नाश्वोऽनश्वो न गौरगौः॥',
      definition_eng:
        'This is the compound in which second object is more important. Examples of the 8 types of Tatpuruṣa are stated as follows:',
      common:
        'The type of Tatpuruṣa depends on the case suffix you have to append to the purvapada. ',
      example_sans: '',
      types: 8,
      type: [
        {
          name: '1. प्रथमातत्पुरुषः (prathamātatpuruṣaḥ)',
          explanation: 'Nominative case suffix',
          ex: [
            {
              text: 'अर्धं गुडस्य अर्धगुडः '
            }
          ]
        },
        {
          name: '2. द्वितीयातत्पुरुषः (dvitīyātatpuruṣaḥ)',
          explanation: 'Accusative case suffix',
          ex: [
            {
              text: 'अब्धिं गता अब्धिगता नदी'
            }
          ]
        },
        {
          name: '3. तृतीयातत्पुरुषः (tṛtīyātatpuruṣaḥ)',
          explanation: 'Instrumental case suffix',
          ex: [
            {
              text: 'वाचा श्लक्ष्णः वाक्श्लक्ष्णः'
            }
          ]
        },
        {
          name: '4. चतुर्थीतत्पुरुषः (caturthītatpuruṣaḥ)',
          explanation: 'Dative case suffix',
          ex: [
            {
              text: 'दिशे बलिः दिग्बलिः '
            }
          ]
        },
        {
          name: '5. पञ्चमीतत्पुरुषः (pañcamītatpuruṣaḥ)',
          explanation: 'Ablative case suffix',
          ex: [
            {
              text: 'सिंहात् भयं सिंहभयं '
            }
          ]
        },
        {
          name: '6. षष्ठीतत्पुरुषः (ṣaṣṭhītatpuruṣaḥ)',
          explanation: 'Relative case suffix',
          ex: [
            {
              text: 'भुवः पतिः भूपतिः '
            }
          ]
        },
        {
          name: '7. सप्तमीतत्पुरुषः (saptamītatpuruṣaḥ)',
          explanation: 'Locative case suffix',
          ex: [
            {
              text: 'विष्णौ भक्तिः विष्णुभक्तिः '
            }
          ]
        },
        {
          name: '8. नञ् तत्पुरुषः (nañ tatpuruṣaḥ)',
          explanation:
            'The words having prefixes अ and अन्‌ in negation are called nañ tatpuruṣaḥ',
          ex: [
            {
              text: 'न अश्वः अनश्वः '
            },
            {
              text: 'न गौः अगौः ।'
            }
          ]
        }
      ]
    },
    {
      title_sans: 'कर्मधारयः',
      title_eng: 'Karmadhārayaḥ',
      id: 6,
      definition_sans: 'प्रकारांत्सप्त वै कर्मधारयस्य ब्रवीम्यहम्॥',
      definition_eng:
        'The seven types of Karmadhāraya are explained as follows:',
      common:
        'The relation of the first member to the last is appositional, attributive or adverbial',
      types: 7,
      type: [
        {
          name: '1. विशेषणपूर्वपदः (viśeṣaṇapūrvapadaḥ)',
          explanation: 'The first word is adjective',
          ex: [
            {
              text: 'कृष्णश्चासौ कंबळश्च कृष्णकंबळ उत्तमः।'
            }
          ]
        },
        {
          name: '2. विशेष्यपूर्वपदः (viśeṣyapūrvapadaḥ) ',
          explanation:
            'The first word is viśeṣya – the one to which adjective is to be appended',
          ex: [
            {
              text: 'द्विजश्चासौ कुंजरश्च दिजकुंजरम् आगतः ॥'
            }
          ]
        },
        {
          name: '3. विशेषणोभयपदः (viśeṣaṇobhayapadaḥ) ',
          explanation: 'Both the words are adjectives',
          ex: [
            {
              text: 'मधुरं च तथाम्लं च मधुराम्लं च जांबवम्। '
            }
          ]
        },
        {
          name: '4. उपमानपूर्वपदः (upamānapūrvapadaḥ) ',
          explanation:
            'The first word is upamāna – the thing to which comparision is made',
          ex: [
            {
              text: 'मुक्तेव धवळा मुक्ता धवळा दिवि तारका॥'
            }
          ]
        },
        {
          name: '5. उपमानोत्तरपदः (upamānottarapadaḥ) ',
          explanation: 'The second word is upamāna',
          ex: [
            {
              text: 'आस्यम् अब्जम् इव आस्याब्जं '
            }
          ]
        },
        {
          name: '6. सम्भावनापूर्वपदः (sambhāvanāpūrvapadaḥ)',
          explanation: 'The first word is sambhāvanā, joined by iti',
          ex: [
            {
              text: 'गौः इति भ्रमः गोभ्रमः '
            }
          ]
        },
        {
          name: '7. अवधारणापूर्वपदः (avadhāraṇāpūrvapadaḥ) ',
          explanation: 'The first word is avadhāraṇā, joined by eva',
          ex: [
            {
              text: ' विद्यैव भूषणं विद्याभूषणं '
            }
          ]
        }
      ]
    },
    {
      title_sans: 'बहुव्रीहिः',
      title_eng: 'Bahuvrīhi',
      id: 7,
      definition_sans:
        'बहुव्रीहेः प्रकारांस्तु सप्त तान् कथाम्यहम् | <br> द्वितीयादिविभक्त्यर्थे भवेदन्यपदार्थके॥ <br> बहुर्वीहिर्न प्रथमाविभक्त्यर्थे इति स्थितिः॥',
      definition_eng:
        'Bahuvrīhi compounds refer (by example) to a compound noun with no head—a compound noun that refers to a thing which is itself not part of the compound. It is a compound which is an adjective for a third word which is not a part of the compound. ',
      common: 'The types of Bahuvrīhi are explained as follows:',
      types: 7,
      type: [
        {
          name: '1. द्विपदः (dvipadaḥ) ',
          explanation: 'It is a compound having two words.',
          ex: [
            {
              text: 'आश्रिता ब्राह्मणा यं स आश्रितब्राह्मणः प्रभुः॥'
            },
            {
              text: 'निर्जिता रिपवो येन स निर्जितरिपुर्नृपः।'
            },
            {
              text: 'आनीताः पशवो यस्मै स आनीतपशुः क्रतुः॥'
            },
            {
              text: 'विगतं कल्मषं यस्मात्सोऽयं विगतकल्मषः। '
            },
            {
              text: 'तुषाराश्छवयो यस्य स तुषारच्छविश्शशी॥'
            },
            {
              text: 'बहवो भ्रमरा यस्मिन् स बहुभ्रमरस्तरुः'
            },
            {
              text: 'न विद्यते गदो यस्य सोऽगदः पथ्यभोजनः॥'
            }
          ]
        },
        {
          name: '2. बहुपदः (bahupadaḥ) ',
          explanation: 'It is a compound having more than 2 words.',
          ex: [
            {
              text: 'प्राप्तश्चित्रः पशुर्यां सा प्राप्तचित्रपशुनदी॥'
            },
            {
              text: 'स्तुतोऽनघो हरिर्येन स्तुतानघहरिः कविः॥'
            },
            {
              text: 'दत्तं पूर्णं पयो यस्मै दत्तपूर्णपयश्शिशुः॥'
            },
            {
              text: 'वीतं सर्वं बलं यस्माद्वीतसर्वबलो हि सः॥'
            },
            {
              text: 'दक्षाः प्राज्ञास्सुता यस्य दक्षप्राज्ञसुतो महान्॥'
            },
            {
              text: 'फुल्ला उच्चा द्रुमा यस्मिंस्तत्फुल्लोच्चद्रुमं वनम्। '
            },
            {
              text: 'फुल्ला उच्चा द्रुमा यस्मिंस्तत्फुल्लोच्चद्रुमं वनम्। '
            }
          ]
        },
        {
          name: '3. सहपूर्वपदः (sahapūrvapadaḥ) ',
          explanation:
            'It is a compound having ‘sa’ or ‘saha’ as first word (showing nearness or togetherness).',
          ex: [
            {
              text: 'द्रविणैस्सहवर्तंत इति सद्रविणा विशः।'
            }
          ]
        },
        {
          name: '4. संख्योत्तरपदः (saṃkhyottarapadaḥ) ',
          explanation: 'It is a compound having numerals as uttarapada.',
          ex: [
            {
              text: 'दशानां तु समीपे ये नरा उपदशा इमे॥'
            }
          ]
        },
        {
          name: '5. संख्योभयपदाः (saṃkhyobhayapadāḥ) ',
          explanation: 'It is a compound having numerals as both words.',
          ex: [
            {
              text: 'पंचषाः पंच वा षड्वा ब्राह्मणा निकटे स्थिताः॥'
            }
          ]
        },
        {
          name: '6. व्यतिहारलक्षणः (vyatihāralakṣaṇaḥ) ',
          explanation: 'It is a compound showing reciprocity or repitition.',
          ex: [
            {
              text:
                'केशेषु केशेषु गृहीत्वा इदं युद्धं प्रवर्तत इति केशाकेशि युद्धम् ।'
            },
            {
              text: ' दण्डै दण्डैः कृत्वा इदं युद्धं प्रवर्तत इति दण्डादण्डि ।'
            }
          ]
        },
        {
          name: '7. दिगन्तराललक्षणः (digantarālalakṣaṇaḥ) ',
          explanation: 'It is a compound showing the quarters of directions.',
          ex: [
            {
              text: 'दक्षिणस्याः पूर्वस्याश्च दिशो यदन्तरालं सा दक्षिणपूर्वा ।'
            }
          ]
        }
      ]
    },
    {
      title_sans: 'द्विगुः',
      title_eng: 'Dvigu',
      id: 8,
      definition_sans: 'संख्यापूर्वो द्विगुस्तस्य प्रकारौ द्वौ ब्रवीम्यहम्॥',
      common:
        'Dvigu is a subtype of tatpuruṣa in which the modifying member is a number. Dvigu (one who has two cows) itself is a compound : dvau+gāvau. ',
      types: 2,
      type: [
        {
          name: '1. एकवद्भावी द्विगुः (ekavadbhāvī dviguḥ) ',
          link: '/5',
          explanation:
            'This compound refers to the group as a unit and takes singular tense only.',
          ex: [
            {
              text: 'तिस्रस्समाहृतास्संध्यास्त्रिसंध्यं त्रिपुरं'
            }
          ]
        },
        {
          name: '2. अनेकवद्भावी द्विगुः (anekavadbhāvī dviguḥ) ',
          link: '/5',
          explanation:
            'This compound refers to the group individually and it takes plural tense.',
          ex: [
            {
              text: 'सप्त च ते ऋषयश्च सप्तर्षयः ।'
            }
          ]
        }
      ]
    },
    {
      title_sans: 'द्वन्द्वः',
      title_eng: 'Dvandva',
      id: 9,
      definition_sans: 'द्वंद्वो भवेच्चार्थाश्चत्वारस्स्युस्समुच्चयः ॥',
      definition_eng:
        'These consist of two or more noun stems, connected in sense with and (copulative or coordinative). ',
      types: 2,
      type: [
        {
          name: '1. इतरेतरद्वन्द्वः (itaretaradvandvaḥ)',
          link: '/6',
          explanation:
            '<p>अन्वाचयस्समाहार इतरेतरयोगकः ।</p>The result of इतरेतर द्वन्द्व (itaretara dvandva "enumerative dvandva") is an enumerative word, the meaning of which refers to all its constituent members. The resultant compound word is in the dual or plural number and takes the gender of the final member in the compound construction. ',
          ex: [
            {
              text: 'प्लक्षश्च न्यग्रोधश्च प्लक्षन्यग्रौधौ ।'
            },
            {
              text: ' रामश्च कृष्णश्च रामकृष्णौ ।'
            }
          ]
        },
        {
          name: '2. समाहारद्वन्द्वः (samāhāradvandvaḥ)',
          link: '/7',
          explanation:
            '<p>समाहारः क्वचिर्त्तत्र स्यादेकवचनं यथा।</p>Words may be organised in a compound to form a metonym, and sometimes the words may comprise all the constituent parts of the whole. The resultant compound word exhibits समाहार द्वन्द्व (samāhāra dvandva - collective dvandva), and is always neuter and in the singular number.',
          ex: [
            {
              text: 'हस्ती चाश्वश्च हस्त्यश्वं'
            },
            {
              text: 'शंखश्चदुंदुभिश्चैव मर्दळश्चेति शंखदुंदुभिमर्दळम्'
            },
            {
              text: 'वासुदेवश्चार्जुनश्च वासुदेवार्जुनौ '
            }
          ]
        }
      ]
    },
    {
      title_sans: 'अव्ययीभावः',
      title_eng: 'Avyayībhāva',
      id: 10,
      definition_sans:
        'द्विधा प्रोक्तोऽव्ययीभावोऽव्ययपूर्वपदस्तथा ।<br>नामपूर्वपदश्चापि सर्वोऽप्यव्ययसंज्ञकः ॥',
      definition_eng:
        'The first member of this type of nominal compound is an indeclinable, to which another word is added so that the new compound also becomes indeclinable (i.e., avyaya).<br><br>In avyayībhāva compounds, the first member has primacy (pūrva-pada-pradhāna), i.e., the whole compound behaves like an indeclinable due to the nature of the first part which is indeclinable. ',
      common: '',
      types: 2,
      type: [
        {
          name: 'अव्ययपूर्वपदः',
          ex: [
            {
              text: 'कुंभस्य समीपे उपकुंभम्'
            }
          ]
        },
        {
          name: 'नामपूर्वपदः',
          ex: [
            {
              text: 'रिपुं प्रति रिपोर्मात्रा '
            }
          ]
        }
      ]
    },
    {
      title_sans: 'लुक् & अलुक् समासाः',
      title_eng: 'Luk Samāsa and Aluk Samāsa',
      id: 11,
      definition_sans: 'लुक्समासोऽलुक्समास इति तौ प्रब्रवीम्यहम् ।',
      common:
        'In this compound, here there is elision of the case markers. In this compound, there is no elision of the case markers.',
      types: 2,
      type: [
        {
          name: 'लुक्',
          ex: [
            {
              text: 'शाकप्रियः पार्थिवो यस्स चायं शाक पार्थिवः । '
            },
            {
              text: 'छाया प्रधानास्तरवो ये च्छायातरवो वने ॥'
            }
          ]
        },
        {
          name: 'अलुक्',
          ex: [
            {
              text: 'खे गच्छति तु यःप्राणी स खगोऽलुक्प्रकीर्ततः ॥'
            },
            {
              text: 'वने चरति यःप्राणी सततं स वनेचरः '
            },
            {
              text: 'पंके रोहति यत्पुष्पं तत्पंकेरुहम् '
            }
          ]
        }
      ]
    }
  ],
  samasachakra_exercises: [
    {
      id: '1',
      title: 'Introduction',
      question: 'अनेकशब्दसन्धिः ___ ',
      options: ['विग्रहः', 'समासः', 'सिन्धिः', 'तद्धितः'],
      ans: 'समासः'
    },
    {
      id: '2',
      title: 'Choose the correct Vigrahavākya',
      question: 'भूपतिः ___',
      options: ['भुवः पतिः', 'भूम्याः पतिः', 'भूमेः पतिः', 'भू पतिः'],
      ans: 'भुवः पतिः'
    },
    {
      id: '3',
      title: 'Choose the correct Vigrahavākya',
      question: 'विष्णुभक्तिः ___',
      options: [
        'विष्णुः भक्तिः',
        'विष्णुं भक्तिः',
        'विष्णुना भक्तिः',
        'विष्णौ भक्तिः'
      ],
      ans: 'विष्णौ भक्तिः'
    },
    {
      id: '4',
      title: 'Complete the Vigrahavākya',
      question: 'दत्तं पूर्णं पयो यस्मै ',
      options: ['दत्तपूर्णः ', 'दत्तपूर्णपयः ', 'पूर्णदत्तः', 'पूर्णदत्तपयः'],
      ans: 'दत्तपूर्णपयः '
    },
    {
      id: '5',
      title: 'Complete the Vigrahavākya',
      question: 'वीतं सर्वं बलं यस्मात्',
      options: ['सर्ववीतबलः', 'वीतबलः', 'वीतसर्वबलः', 'सर्वबलः'],
      ans: 'वीतसर्वबलः'
    },
    {
      id: '6',
      title: 'Types of Samāsa',
      question: 'कर्मधारयस्य ___ प्रकाराः।',
      options: ['2', '4', '5', '7'],
      ans: '7'
    },
    {
      id: '7',
      title: 'Complete the Vigrahavākya',
      question: 'वासुदेवश्चार्जुनश्च ___',
      options: [
        'वासुदेवार्जुनौ',
        'वासुदेवार्जुनः',
        'वसुदेवार्जुनः',
        'अर्जुनवासुदेवः'
      ],
      ans: 'वासुदेवार्जुनौ'
    },
    {
      id: '8',
      title: 'Types of Samāsa',
      question: 'संख्यापूर्वो ____',
      options: ['द्विगुः', 'अव्ययीभावः', 'कर्मधारयः', 'तत्पुरुषः'],
      ans: 'द्विगुः'
    },
    {
      id: '9',
      title: 'Identify the Type of Samāsa',
      question: 'कुंभस्य समीपे इति उपकुंभं ',
      options: ['अव्ययपूर्वकः', 'नामपूर्वकः', 'द्विगुः', 'कर्मधारयः'],
      ans: 'अव्ययपूर्वकः'
    },
    {
      id: '10',
      title: 'Identify the Type of Samāsa',
      question: 'खे गच्छति यः प्राणी स खगः',
      options: ['द्विगुः', 'लुक्', 'अव्ययीभावः', 'कर्मधारयः'],
      ans: 'लुक्'
    }
  ],
  samasashikhamani_lessons: [
    {
      title_sans: 'समासानां परिचयः',
      title_eng: 'Introduction to Compounds in Sanskrit',
      id: 1,
      common:
        '<p>Combination of two or more nouns to create a new noun is called the compound. In English, a typical compound involves two or three words; "wallpaper," for instance, is just "wall" and "paper." Sanskrit compounds can be made of as many as 30 different words.<br><br>Sanskrit has an extremely rich system of compounds. Partly for that reason, compounds are a vital part of Sanskrit grammar. Compounds were analyzed extensively by the ancient Indian grammarians, most of whom worked about 2500 years ago; as a carry-over from that tradition.<br><br>All of the words in the compound are taken as a single unit. Even though many words may be in a compound, only the last one is inflected. All other words appear as ordinary stems, with the rare exception. Between words in the compound, external sandhi applies.</p>',
      example_sans: ''
    },
    {
      title_sans: '',
      title_eng: 'Prayer',
      id: 2,
      definition_sans:
        'शेषाचलशिरोभूषा तोषाय भवतान्महः । <br>  यन्निरस्तनतस्तोमतमस्ततिनमस्कृति ॥',
      definition_eng: '',
      common: ''
    },
    {
      title_sans: '',
      title_eng: 'Classification of Samāsa',
      id: 3,
      definition_sans:
        'वक्ष्ये तत्पुरुषं कर्मधारयं बालबुद्धये ।<br>बहुव्रीहिं द्विगुं द्वंद्वमव्ययीभावमेव च ॥',
      definition_eng: ' ',
      common: 'Samāsas are also divided into 6 types:',
      treeData: [
        {
          name: 'Samāsa',
          children: [
            {
              name: '1. तत्पुरुषः (tatpuruṣaḥ)',
              link: '/samasashikhamani/lessons/5'
            },
            {
              name: '2. कर्मधारयः (karmadhārayaḥ)',
              link: '/samasashikhamani/lessons/6'
            },
            {
              name: '3. बहुव्रीहिः (bahuvrīhi)',
              link: '/samasashikhamani/lessons/7'
            },
            {
              name: '4. द्विगुः (dvigu)',
              link: '/samasashikhamani/lessons/8'
            },
            {
              name: '5. द्वन्द्वः (dvandva)',
              link: '/samasashikhamani/lessons/9'
            },
            {
              name: '6. अव्ययीभावः (avyayībhāva)',
              link: '/samasashikhamani/lessons/10'
            }
          ]
        }
      ]
    },
    {
      title_sans: '',
      title_eng: 'Subcategories of types',
      id: 4,
      definition_sans:
        'समासाष्षट्सु संक्षिप्ता अष्टाविंशतिधा पुनः ।<br>     तत्राष्टधा तत्पुरुषस्सप्तधा कर्मधारयः ॥<br>सप्तधा च बहुव्रीहिर्द्विगुर्द्वन्द्वो द्विधा द्विधा ।<br>द्विविधश्चाव्ययीभाव इत्यष्टाविंशतिः क्रमात् ॥',
      definition_eng:
        '<p>The six Samāsas are further divided into 28 types as follows:</p>',
      common: '',
      treeData: [
        {
          name: 'Samāsa',
          children: [
            {
              name: '1. तत्पुरुषः (tatpuruṣaḥ) - 8 types',
              link: '/samasashikhamani/lessons/5',
              children: [
                {
                  name: '1. प्रथमातत्पुरुषः (prathamātatpuruṣaḥ)',
                  link: '/samasashikhamani/lessons/5'
                },
                {
                  name: '2. द्वितीयातत्पुरुषः (dvitīyātatpuruṣaḥ)',
                  link: '/samasashikhamani/lessons/5'
                },
                {
                  name: '3. तृतीयातत्पुरुषः (tṛtīyātatpuruṣaḥ)',
                  link: '/samasashikhamani/lessons/5'
                },
                {
                  name: '4. चतुर्थीतत्पुरुषः (caturthītatpuruṣaḥ)',
                  link: '/samasashikhamani/lessons/5'
                },
                {
                  name: '5. पञ्चमीतत्पुरुषः (pañcamītatpuruṣaḥ)',
                  link: '/samasashikhamani/lessons/5'
                },
                {
                  name: '6. षष्ठीतत्पुरुषः (ṣaṣṭhītatpuruṣaḥ)',
                  link: '/samasashikhamani/lessons/5'
                },
                {
                  name: '7. सप्तमीतत्पुरुषः (saptamītatpuruṣaḥ)',
                  link: '/samasashikhamani/lessons/5'
                },
                {
                  name: '8. नञ् तत्पुरुषः (nañ tatpuruṣaḥ)',
                  link: '/samasashikhamani/lessons/5'
                }
              ]
            },
            {
              name: '2. कर्मधारयः (karmadhārayaḥ) - 7 types',
              link: '/samasashikhamani/lessons/6',
              children: [
                {
                  name: '1. विशेषणपूर्वपदः (viśeṣaṇapūrvapadaḥ)',
                  link: '/samasashikhamani/lessons/6'
                },
                {
                  name: '2. विशेष्यपूर्वपदः (viśeṣyapūrvapadaḥ) ',
                  link: '/samasashikhamani/lessons/6'
                },
                {
                  name: '3. विशेषणोभयपदः (viśeṣaṇobhayapadaḥ) ',
                  link: '/samasashikhamani/lessons/6'
                },
                {
                  name: '4. उपमानपूर्वपदः (upamānapūrvapadaḥ) ',
                  link: '/samasashikhamani/lessons/6'
                },
                {
                  name: '5. उपमानोत्तरपदः (upamānottarapadaḥ) ',
                  link: '/samasashikhamani/lessons/6'
                },
                {
                  name: '6. सम्भावनापूर्वपदः (sambhāvanāpūrvapadaḥ)',
                  link: '/samasashikhamani/lessons/6'
                },
                {
                  name: '7. अवधारणापूर्वपदः (avadhāraṇāpūrvapadaḥ) ',
                  link: '/samasashikhamani/lessons/6'
                }
              ]
            },
            {
              name: '3. बहुव्रीहिः (bahuvrīhi) - 7 types',
              link: '/samasashikhamani/lessons/7',
              children: [
                {
                  name: '1. द्विपदः (dvipadaḥ) ',
                  link: '/samasashikhamani/lessons/7'
                },
                {
                  name: '2. बहुपदः (bahupadaḥ) ',
                  link: '/samasashikhamani/lessons/7'
                },
                {
                  name: '3. सहपूर्वपदः (sahapūrvapadaḥ) ',
                  link: '/samasashikhamani/lessons/7'
                },
                {
                  name: '4. संख्योत्तरपदः (saṃkhyottarapadaḥ) ',
                  link: '/samasashikhamani/lessons/7'
                },
                {
                  name: '5. संख्योभयपदाः (saṃkhyobhayapadāḥ) ',
                  link: '/samasashikhamani/lessons/7'
                },
                {
                  name: '6. व्यतिहारलक्षणः (vyatihāralakṣaṇaḥ) ',
                  link: '/samasashikhamani/lessons/7'
                },
                {
                  name: '7. दिगन्तराललक्षणः (digantarālalakṣaṇaḥ) ',
                  link: '/samasashikhamani/lessons/7'
                }
              ]
            },
            {
              name: '4. द्विगुः (dvigu) - 2 types',
              link: '/samasashikhamani/lessons/8',
              children: [
                {
                  name: '1. एकवद्भावी द्विगुः (ekavadbhāvī dviguḥ) ',
                  link: '/samasashikhamani/lessons/8'
                },
                {
                  name: '2. अनेकवद्भावी द्विगुः (anekavadbhāvī dviguḥ) ',
                  link: '/samasashikhamani/lessons/8'
                }
              ]
            },
            {
              name: '5. द्वन्द्वः (dvandva) - 2 types',
              link: '/samasashikhamani/lessons/9',
              children: [
                {
                  name: '1. इतरेतरद्वन्द्वः (itaretaradvandvaḥ)',
                  link: '/samasashikhamani/lessons/9'
                },
                {
                  name: '2. समाहारद्वन्द्वः (samāhāradvandvaḥ)',
                  link: '/samasashikhamani/lessons/9'
                }
              ]
            },
            {
              name: '6. अव्ययीभावः (avyayībhāva) - 2 types',
              link: '/samasashikhamani/lessons/10'
            }
          ]
        }
      ]
    },
    {
      title_sans: 'तत्पुरुषः',
      title_eng: 'Tatpuruṣaḥ',
      id: 5,
      definition_sans:
        ' तत्र तत्पुरुषस्याष्टौ प्रकारान् प्रब्रवीम्यहम् । <br>प्रथमाद्यास्तत्पुरुषा स्सप्तधास्युर्नञष्टमः ॥<br>एतेषां विग्रहं वक्ष्ये समासानां यथाक्रमम् । <br> विभज्य गृह्यते यस्स विग्रहः परिकीर्तितः ॥ <br> अनेकशब्दसन्धिस्तु समासः कथ्यते यथा । <br> अर्धं गुडस्यार्धगुडोऽब्धिं गताऽब्धिगता नदी॥ <br> वाचा श्लक्ष्णस्तु वाक्श्लक्ष्णो <br> दिग्बलिस्तु दिशे बलिः॥ <br>सिंहाद्भयं सिंहभयं भूपतिस्तु भुवः पतिः॥ <br> विष्णौ भक्तिर्विष्णुभक्तिर्नाश्वोऽनश्वो न गौरगौः॥',
      definition_eng:
        'This is the compound in which second object is more important. Examples of the 8 types of Tatpuruṣa are stated as follows:',
      common:
        'The type of Tatpuruṣa depends on the case suffix you have to append to the purvapada. ',
      example_sans: '',
      types: 8,
      type: [
        {
          name: '1. प्रथमातत्पुरुषः (prathamātatpuruṣaḥ)',
          explanation: 'Nominative case suffix',
          ex: [
            {
              text: 'अर्धं गुडस्य अर्धगुडः '
            }
          ]
        },
        {
          name: '2. द्वितीयातत्पुरुषः (dvitīyātatpuruṣaḥ)',
          explanation: 'Accusative case suffix',
          ex: [
            {
              text: 'अब्धिं गता अब्धिगता नदी'
            }
          ]
        },
        {
          name: '3. तृतीयातत्पुरुषः (tṛtīyātatpuruṣaḥ)',
          explanation: 'Instrumental case suffix',
          ex: [
            {
              text: 'वाचा श्लक्ष्णः वाक्श्लक्ष्णः'
            }
          ]
        },
        {
          name: '4. चतुर्थीतत्पुरुषः (caturthītatpuruṣaḥ)',
          explanation: 'Dative case suffix',
          ex: [
            {
              text: 'दिशे बलिः दिग्बलिः '
            }
          ]
        },
        {
          name: '5. पञ्चमीतत्पुरुषः (pañcamītatpuruṣaḥ)',
          explanation: 'Ablative case suffix',
          ex: [
            {
              text: 'सिंहात् भयं सिंहभयं '
            }
          ]
        },
        {
          name: '6. षष्ठीतत्पुरुषः (ṣaṣṭhītatpuruṣaḥ)',
          explanation: 'Relative case suffix',
          ex: [
            {
              text: 'भुवः पतिः भूपतिः '
            }
          ]
        },
        {
          name: '7. सप्तमीतत्पुरुषः (saptamītatpuruṣaḥ)',
          explanation: 'Locative case suffix',
          ex: [
            {
              text: 'विष्णौ भक्तिः विष्णुभक्तिः '
            }
          ]
        },
        {
          name: '8. नञ् तत्पुरुषः (nañ tatpuruṣaḥ)',
          explanation:
            'The words having prefixes अ and अन्‌ in negation are called nañ tatpuruṣaḥ',
          ex: [
            {
              text: 'न अश्वः अनश्वः '
            },
            {
              text: 'न गौः अगौः ।'
            }
          ]
        }
      ]
    },
    {
      title_sans: 'कर्मधारयः',
      title_eng: 'Karmadhārayaḥ',
      id: 6,
      definition_sans: 'प्रकारांत्सप्त वै कर्मधारयस्य ब्रवीम्यहम्॥',
      definition_eng:
        'The seven types of Karmadhāraya are explained as follows:',
      common:
        'The relation of the first member to the last is appositional, attributive or adverbial',
      types: 7,
      type: [
        {
          name: '1. विशेषणपूर्वपदः (viśeṣaṇapūrvapadaḥ)',
          explanation: 'The first word is adjective',
          ex: [
            {
              text: 'कृष्णश्चासौ कंबळश्च कृष्णकंबळ उत्तमः।'
            }
          ]
        },
        {
          name: '2. विशेष्यपूर्वपदः (viśeṣyapūrvapadaḥ) ',
          explanation:
            'The first word is viśeṣya – the one to which adjective is to be appended',
          ex: [
            {
              text: 'द्विजश्चासौ कुंजरश्च दिजकुंजरम् आगतः ॥'
            }
          ]
        },
        {
          name: '3. विशेषणोभयपदः (viśeṣaṇobhayapadaḥ) ',
          explanation: 'Both the words are adjectives',
          ex: [
            {
              text: 'मधुरं च तथाम्लं च मधुराम्लं च जांबवम्। '
            }
          ]
        },
        {
          name: '4. उपमानपूर्वपदः (upamānapūrvapadaḥ) ',
          explanation:
            'The first word is upamāna – the thing to which comparision is made',
          ex: [
            {
              text: 'मुक्तेव धवळा मुक्ता धवळा दिवि तारका॥'
            }
          ]
        },
        {
          name: '5. उपमानोत्तरपदः (upamānottarapadaḥ) ',
          explanation: 'The second word is upamāna',
          ex: [
            {
              text: 'आस्यम् अब्जम् इव आस्याब्जं '
            }
          ]
        },
        {
          name: '6. सम्भावनापूर्वपदः (sambhāvanāpūrvapadaḥ)',
          explanation: 'The first word is sambhāvanā, joined by iti',
          ex: [
            {
              text: 'गौः इति भ्रमः गोभ्रमः '
            }
          ]
        },
        {
          name: '7. अवधारणापूर्वपदः (avadhāraṇāpūrvapadaḥ) ',
          explanation: 'The first word is avadhāraṇā, joined by eva',
          ex: [
            {
              text: ' विद्यैव भूषणं विद्याभूषणं '
            }
          ]
        }
      ]
    },
    {
      title_sans: 'बहुव्रीहिः',
      title_eng: 'Bahuvrīhi',
      id: 7,
      definition_sans:
        'बहुव्रीहेः प्रकारांस्तु सप्त तान् कथाम्यहम् | <br> द्वितीयादिविभक्त्यर्थे भवेदन्यपदार्थके॥ <br> बहुर्वीहिर्न प्रथमाविभक्त्यर्थे इति स्थितिः॥',
      definition_eng:
        'Bahuvrīhi compounds refer (by example) to a compound noun with no head—a compound noun that refers to a thing which is itself not part of the compound. It is a compound which is an adjective for a third word which is not a part of the compound. ',
      common: 'The types of Bahuvrīhi are explained as follows:',
      types: 7,
      type: [
        {
          name: '1. द्विपदः (dvipadaḥ) ',
          explanation: 'It is a compound having two words.',
          ex: [
            {
              text: 'आश्रिता ब्राह्मणा यं स आश्रितब्राह्मणः प्रभुः॥'
            },
            {
              text: 'निर्जिता रिपवो येन स निर्जितरिपुर्नृपः।'
            },
            {
              text: 'आनीताः पशवो यस्मै स आनीतपशुः क्रतुः॥'
            },
            {
              text: 'विगतं कल्मषं यस्मात्सोऽयं विगतकल्मषः। '
            },
            {
              text: 'तुषाराश्छवयो यस्य स तुषारच्छविश्शशी॥'
            },
            {
              text: 'बहवो भ्रमरा यस्मिन् स बहुभ्रमरस्तरुः'
            },
            {
              text: 'न विद्यते गदो यस्य सोऽगदः पथ्यभोजनः॥'
            }
          ]
        },
        {
          name: '2. बहुपदः (bahupadaḥ) ',
          explanation: 'It is a compound having more than 2 words.',
          ex: [
            {
              text: 'प्राप्तश्चित्रः पशुर्यां सा प्राप्तचित्रपशुनदी॥'
            },
            {
              text: 'स्तुतोऽनघो हरिर्येन स्तुतानघहरिः कविः॥'
            },
            {
              text: 'दत्तं पूर्णं पयो यस्मै दत्तपूर्णपयश्शिशुः॥'
            },
            {
              text: 'वीतं सर्वं बलं यस्माद्वीतसर्वबलो हि सः॥'
            },
            {
              text: 'दक्षाः प्राज्ञास्सुता यस्य दक्षप्राज्ञसुतो महान्॥'
            },
            {
              text: 'फुल्ला उच्चा द्रुमा यस्मिंस्तत्फुल्लोच्चद्रुमं वनम्। '
            },
            {
              text: 'फुल्ला उच्चा द्रुमा यस्मिंस्तत्फुल्लोच्चद्रुमं वनम्। '
            }
          ]
        },
        {
          name: '3. सहपूर्वपदः (sahapūrvapadaḥ) ',
          explanation:
            'It is a compound having ‘sa’ or ‘saha’ as first word (showing nearness or togetherness).',
          ex: [
            {
              text: 'द्रविणैस्सहवर्तंत इति सद्रविणा विशः।'
            }
          ]
        },
        {
          name: '4. संख्योत्तरपदः (saṃkhyottarapadaḥ) ',
          explanation: 'It is a compound having numerals as uttarapada.',
          ex: [
            {
              text: 'दशानां तु समीपे ये नरा उपदशा इमे॥'
            }
          ]
        },
        {
          name: '5. संख्योभयपदाः (saṃkhyobhayapadāḥ) ',
          explanation: 'It is a compound having numerals as both words.',
          ex: [
            {
              text: 'पंचषाः पंच वा षड्वा ब्राह्मणा निकटे स्थिताः॥'
            }
          ]
        },
        {
          name: '6. व्यतिहारलक्षणः (vyatihāralakṣaṇaḥ) ',
          explanation: 'It is a compound showing reciprocity or repitition.',
          ex: [
            {
              text:
                'केशेषु केशेषु गृहीत्वा इदं युद्धं प्रवर्तत इति केशाकेशि युद्धम् ।'
            },
            {
              text: ' दण्डै दण्डैः कृत्वा इदं युद्धं प्रवर्तत इति दण्डादण्डि ।'
            }
          ]
        },
        {
          name: '7. दिगन्तराललक्षणः (digantarālalakṣaṇaḥ) ',
          explanation: 'It is a compound showing the quarters of directions.',
          ex: [
            {
              text: 'दक्षिणस्याः पूर्वस्याश्च दिशो यदन्तरालं सा दक्षिणपूर्वा ।'
            }
          ]
        }
      ]
    },
    {
      title_sans: 'द्विगुः',
      title_eng: 'Dvigu',
      id: 8,
      definition_sans: 'संख्यापूर्वो द्विगुस्तस्य प्रकारौ द्वौ ब्रवीम्यहम्॥',
      common:
        'Dvigu is a subtype of tatpuruṣa in which the modifying member is a number. Dvigu (one who has two cows) itself is a compound : dvau+gāvau. ',
      types: 2,
      type: [
        {
          name: '1. एकवद्भावी द्विगुः (ekavadbhāvī dviguḥ) ',
          link: '/5',
          explanation:
            'This compound refers to the group as a unit and takes singular tense only.',
          ex: [
            {
              text: 'तिस्रस्समाहृतास्संध्यास्त्रिसंध्यं त्रिपुरं'
            }
          ]
        },
        {
          name: '2. अनेकवद्भावी द्विगुः (anekavadbhāvī dviguḥ) ',
          link: '/5',
          explanation:
            'This compound refers to the group individually and it takes plural tense.',
          ex: [
            {
              text: 'सप्त च ते ऋषयश्च सप्तर्षयः ।'
            }
          ]
        }
      ]
    },
    {
      title_sans: 'द्वन्द्वः',
      title_eng: 'Dvandva',
      id: 9,
      definition_sans: 'द्वंद्वो भवेच्चार्थाश्चत्वारस्स्युस्समुच्चयः ॥',
      definition_eng:
        'These consist of two or more noun stems, connected in sense with and (copulative or coordinative). ',
      types: 2,
      type: [
        {
          name: '1. इतरेतरद्वन्द्वः (itaretaradvandvaḥ)',
          link: '/6',
          explanation:
            '<p>अन्वाचयस्समाहार इतरेतरयोगकः ।</p>The result of इतरेतर द्वन्द्व (itaretara dvandva "enumerative dvandva") is an enumerative word, the meaning of which refers to all its constituent members. The resultant compound word is in the dual or plural number and takes the gender of the final member in the compound construction. ',
          ex: [
            {
              text: 'प्लक्षश्च न्यग्रोधश्च प्लक्षन्यग्रौधौ ।'
            },
            {
              text: ' रामश्च कृष्णश्च रामकृष्णौ ।'
            }
          ]
        },
        {
          name: '2. समाहारद्वन्द्वः (samāhāradvandvaḥ)',
          link: '/7',
          explanation:
            '<p>समाहारः क्वचिर्त्तत्र स्यादेकवचनं यथा।</p>Words may be organised in a compound to form a metonym, and sometimes the words may comprise all the constituent parts of the whole. The resultant compound word exhibits समाहार द्वन्द्व (samāhāra dvandva - collective dvandva), and is always neuter and in the singular number.',
          ex: [
            {
              text: 'हस्ती चाश्वश्च हस्त्यश्वं'
            },
            {
              text: 'शंखश्चदुंदुभिश्चैव मर्दळश्चेति शंखदुंदुभिमर्दळम्'
            },
            {
              text: 'वासुदेवश्चार्जुनश्च वासुदेवार्जुनौ '
            }
          ]
        }
      ]
    },
    {
      title_sans: 'अव्ययीभावः',
      title_eng: 'Avyayībhāva',
      id: 10,
      definition_sans:
        'द्विधा प्रोक्तोऽव्ययीभावोऽव्ययपूर्वपदस्तथा ।<br>नामपूर्वपदश्चापि सर्वोऽप्यव्ययसंज्ञकः ॥',
      definition_eng:
        'The first member of this type of nominal compound is an indeclinable, to which another word is added so that the new compound also becomes indeclinable (i.e., avyaya).<br><br>In avyayībhāva compounds, the first member has primacy (pūrva-pada-pradhāna), i.e., the whole compound behaves like an indeclinable due to the nature of the first part which is indeclinable. ',
      common: '',
      types: 2,
      type: [
        {
          name: 'अव्ययपूर्वपदः',
          ex: [
            {
              text: 'कुंभस्य समीपे उपकुंभम्'
            }
          ]
        },
        {
          name: 'नामपूर्वपदः',
          ex: [
            {
              text: 'रिपुं प्रति रिपोर्मात्रा '
            }
          ]
        }
      ]
    },
    {
      title_sans: 'लुक् & अलुक् समासाः',
      title_eng: 'Luk Samāsa and Aluk Samāsa',
      id: 11,
      definition_sans: 'लुक्समासोऽलुक्समास इति तौ प्रब्रवीम्यहम् ।',
      common:
        'In this compound, here there is elision of the case markers. In this compound, there is no elision of the case markers.',
      types: 2,
      type: [
        {
          name: 'लुक्',
          ex: [
            {
              text: 'शाकप्रियः पार्थिवो यस्स चायं शाक पार्थिवः । '
            },
            {
              text: 'छाया प्रधानास्तरवो ये च्छायातरवो वने ॥'
            }
          ]
        },
        {
          name: 'अलुक्',
          ex: [
            {
              text: 'खे गच्छति तु यःप्राणी स खगोऽलुक्प्रकीर्ततः ॥'
            },
            {
              text: 'वने चरति यःप्राणी सततं स वनेचरः '
            },
            {
              text: 'पंके रोहति यत्पुष्पं तत्पंकेरुहम् '
            }
          ]
        }
      ]
    }
  ],
  samasashikhamani_exercises: [
    {
      id: '1',
      title: 'Introduction',
      question: 'अनेकशब्दसन्धिः ___ ',
      options: ['विग्रहः', 'समासः', 'सन्धिः', 'तद्धितः'],
      ans: 'समासः'
    },
    {
      id: '2',
      title: 'Choose the correct Vigrahavākya',
      question: 'भूपतिः ___',
      options: ['भुवः पतिः', 'भूम्याः पतिः', 'भूमेः पतिः', 'भू पतिः'],
      ans: 'भुवः पतिः'
    },
    {
      id: '3',
      title: 'Choose the correct Vigrahavākya',
      question: 'विष्णुभक्तिः ___',
      options: [
        'विष्णुः भक्तिः',
        'विष्णुं भक्तिः',
        'विष्णुना भक्तिः',
        'विष्णौ भक्तिः'
      ],
      ans: 'विष्णौ भक्तिः'
    },
    {
      id: '4',
      title: 'Complete the Vigrahavākya',
      question: 'दत्तं पूर्णं पयो यस्मै ',
      options: ['दत्तपूर्णः ', 'दत्तपूर्णपयः ', 'पूर्णदत्तः', 'पूर्णदत्तपयः'],
      ans: 'दत्तपूर्णपयः '
    },
    {
      id: '5',
      title: 'Complete the Vigrahavākya',
      question: 'वीतं सर्वं बलं यस्मात्',
      options: ['सर्ववीतबलः', 'वीतबलः', 'वीतसर्वबलः', 'सर्वबलः'],
      ans: 'वीतसर्वबलः'
    },
    {
      id: '6',
      title: 'Types of Samāsa',
      question: 'कर्मधारयस्य ___ प्रकाराः।',
      options: ['2', '4', '5', '7'],
      ans: '7'
    },
    {
      id: '7',
      title: 'Complete the Vigrahavākya',
      question: 'वासुदेवश्चार्जुनश्च ___',
      options: [
        'वासुदेवार्जुनौ',
        'वासुदेवार्जुनः',
        'वसुदेवार्जुनः',
        'अर्जुनवासुदेवः'
      ],
      ans: 'वासुदेवार्जुनौ'
    },
    {
      id: '8',
      title: 'Types of Samāsa',
      question: 'संख्यापूर्वो ____',
      options: ['द्विगुः', 'अव्ययीभावः', 'कर्मधारयः', 'तत्पुरुषः'],
      ans: 'द्विगुः'
    },
    {
      id: '9',
      title: 'Identify the Type of Samāsa',
      question: 'कुंभस्य समीपे इति उपकुंभं ',
      options: ['अव्ययपूर्वकः', 'नामपूर्वकः', 'द्विगुः', 'कर्मधारयः'],
      ans: 'अव्ययपूर्वकः'
    },
    {
      id: '10',
      title: 'Identify the Type of Samāsa',
      question: 'खे गच्छति यः प्राणी स खगः',
      options: ['द्विगुः', 'लुक्', 'अव्ययीभावः', 'कर्मधारयः'],
      ans: 'लुक्'
    }
  ],
  samasashikhamani_titles: [
    {
      title: 'Introduction',
      sl_num: '1',
      to: '/samasashikhamani/lessons/1'
    },
    {
      title: 'Classification of Samāsa - 1',
      sl_num: '2',
      to: '/samasashikhamani/lessons/2'
    },
    {
      title: 'Classification of Samāsa - 2',
      sl_num: '3',
      to: '/samasashikhamani/lessons/3'
    },
    {
      title: 'Classification of Samāsa - 3',
      sl_num: '4',
      to: '/samasashikhamani/lessons/4'
    },
    {
      title: 'Tatpuruṣaḥ',
      sl_num: '5',
      to: '/samasashikhamani/lessons/5'
    },
    {
      title: 'Karmadhārayaḥ',
      sl_num: '6',
      to: '/samasashikhamani/lessons/6'
    },
    {
      title: 'Bahuvrīhi',
      sl_num: '7',
      to: '/samasashikhamani/lessons/7'
    },
    {
      title: 'Dvigu',
      sl_num: '8',
      to: '/samasashikhamani/lessons/8'
    },
    {
      title: 'Dvandva',
      sl_num: '9',
      to: '/samasashikhamani/lessons/9'
    },
    {
      title: 'Avyayībhāva',
      sl_num: '10',
      to: '/samasashikhamani/lessons/10'
    },
    {
      title: 'Luk Samasa',
      sl_num: '11',
      to: '/samasashikhamani/lessons/11'
    },
    {
      title: 'Aluk Samasa',
      sl_num: '12',
      to: '/samasashikhamani/lessons/11'
    }
  ]
})

export const mutations = {
  toggleSidebar(state) {
    state.sidebar = !state.sidebar
  }
}
