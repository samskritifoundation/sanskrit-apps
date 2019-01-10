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
    }
  ],
  verbs: [
    {
      root: 'भू',
      form: 'भवति',
      meaning: '',
      category: '1',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      padi: 'parasmaipadi',
      forms_url:
        'http://sanskrit.uohyd.ac.in/cgi-bin/scl/skt_gen/verb/verb_gen.cgi?encoding=Unicode&vb=%E0%A4%AD%E0%A5%821_%E0%A4%AD%E0%A5%82_%E0%A4%AD%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%83&prayoga-paxI=%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BF-uBayapaxI&upasarga=-',
      gana: 'भ्वादिः'
    },
    {
      root: '',
      form: 'अस्ति',
      meaning: '',
      category: '1',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'जायते',
      meaning: '',
      category: '1',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'विद्यते',
      meaning: '',
      category: '1',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'संपद्यते',
      meaning: '',
      category: '2',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'निष्पतति',
      meaning: '',
      category: '2',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'निष्पद्यते',
      meaning: '',
      category: '2',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'उदंचति',
      meaning: '',
      category: '2',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'उत्पद्यते ',
      meaning: '',
      category: '3',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अप्युदयते',
      meaning: '',
      category: '3',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'उदेति',
      meaning: '',
      category: '3',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'उदयति',
      meaning: '',
      category: '3',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अङ्कूरति',
      meaning: '',
      category: '4',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अङ्कुरति',
      meaning: '',
      category: '4',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'उद्भिद्यते',
      meaning: '',
      category: '4',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'कन्दलति',
      meaning: '',
      category: '4',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'एधते',
      meaning: '',
      category: '5',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'वर्धते',
      meaning: '',
      category: '5',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'नंदति',
      meaning: '',
      category: '5',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'उत्तिष्ठत',
      meaning: '',
      category: '5',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'ऋध्यति',
      meaning: '',
      category: '5',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'भासते',
      meaning: '',
      category: '6',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'शोभते',
      meaning: '',
      category: '6',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'भाति',
      meaning: '',
      category: '6',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'लसति',
      meaning: '',
      category: '6',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'इंधे',
      meaning: '',
      category: '6',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'प्रकाशते',
      meaning: '',
      category: '6',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'राजते',
      meaning: '',
      category: '6',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'द्योतते',
      meaning: '',
      category: '6',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'राजति',
      meaning: '',
      category: '6',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'दिव्यति',
      meaning: '',
      category: '6',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'दीव्यते',
      meaning: '',
      category: '6',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'व्याख्याति',
      meaning: '',
      category: '7',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'विवृणोति',
      meaning: '',
      category: '7',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'व्याकुरुते',
      meaning: '',
      category: '7',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अर्थापयति',
      meaning: '',
      category: '7',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'विवृणीते',
      meaning: '',
      category: '7',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'विवृणुते ',
      meaning: '',
      category: '7',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'व्याचष्टे ',
      meaning: '',
      category: '7',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'व्याकरोति ',
      meaning: '',
      category: '7',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'प्रबध्नाति ',
      meaning: '',
      category: '8',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'प्रणयति ',
      meaning: '',
      category: '8',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'प्रयुङ्क्ते ',
      meaning: '',
      category: '8',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'व्याकरोति ',
      meaning: '',
      category: '8',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'पूजयति ',
      meaning: '',
      category: '9',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अर्चयति ',
      meaning: '',
      category: '9',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'सत्करोति ',
      meaning: '',
      category: '9',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'आद्रियते',
      meaning: '',
      category: '9',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अञ्चति',
      meaning: '',
      category: '9',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'संभावयति',
      meaning: '',
      category: '9',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अर्चति ',
      meaning: '',
      category: '9',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'सत्कुरुते',
      meaning: '',
      category: '9',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'मानयति',
      meaning: '',
      category: '9',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'सभाजयति',
      meaning: '',
      category: '9',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'उपचरति',
      meaning: '',
      category: '9',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अन्वास्ते',
      meaning: '',
      category: '9',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'महयति',
      meaning: '',
      category: '9',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'आराधयति',
      meaning: '',
      category: '9',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अनुसरति',
      meaning: '',
      category: '9',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'आराध्यति',
      meaning: '',
      category: '9',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अभिराध्यति',
      meaning: '',
      category: '9',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'शुश्रूषते ',
      meaning: '',
      category: '10',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'परिचरति ',
      meaning: '',
      category: '10',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'उपास्ते',
      meaning: '',
      category: '10',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'वरिवस्यति ',
      meaning: '',
      category: '10',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'पुरस्करोति',
      meaning: '',
      category: '11',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'पुरस्कुरुते',
      meaning: '',
      category: '11',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'बहुमन्यते',
      meaning: '',
      category: '11',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'बहूकरोति',
      meaning: '',
      category: '11',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'बहुमनुते',
      meaning: '',
      category: '11',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'चार्हयति',
      meaning: '',
      category: '11',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'नमस्करोति',
      meaning: '',
      category: '13',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'जुषते',
      meaning: '',
      category: '13',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'नमस्यति',
      meaning: '',
      category: '13',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'भजते',
      meaning: '',
      category: '13',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'भजति',
      meaning: '',
      category: '13',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'श्रयति',
      meaning: '',
      category: '13',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'श्रयते',
      meaning: '',
      category: '13',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'प्रणिपतति',
      meaning: '',
      category: '13',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'सेवते',
      meaning: '',
      category: '13',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'नमति',
      meaning: '',
      category: '13',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अभिवादयते',
      meaning: '',
      category: '14',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'पादौगृह्णीते',
      meaning: '',
      category: '14',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'वन्दते',
      meaning: '',
      category: '14',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अभिवादयति',
      meaning: '',
      category: '14',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अवति',
      meaning: '',
      category: '16',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'त्रायते  ',
      meaning: '',
      category: '16',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'पाति  ',
      meaning: '',
      category: '16',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'पालयति',
      meaning: '',
      category: '16',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'रक्षति',
      meaning: '',
      category: '16',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'शास्ति  ',
      meaning: '',
      category: '16',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'गोपायति',
      meaning: '',
      category: '16',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'भुनक्ति',
      meaning: '',
      category: '16',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अभिगोपायति ',
      meaning: '',
      category: '16',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'प्रीयते  ',
      meaning: '',
      category: '17',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'मोदते  ',
      meaning: '',
      category: '17',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'हृष्यति',
      meaning: '',
      category: '17',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'आनंदति',
      meaning: '',
      category: '17',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'नंदति ',
      meaning: '',
      category: '17',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'निर्वृणोति ',
      meaning: '',
      category: '17',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'निर्वाति ',
      meaning: '',
      category: '17',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'सुख्यति',
      meaning: '',
      category: '17',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अवति',
      meaning: '',
      category: '17',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'तुष्यति',
      meaning: '',
      category: '17',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'सुखयति ',
      meaning: '',
      category: '19',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'आह्लादयति ',
      meaning: '',
      category: '19',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'प्रीणीते  ',
      meaning: '',
      category: '19',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'प्रीणयति',
      meaning: '',
      category: '19',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'सुखाकुरुते ',
      meaning: '',
      category: '19',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'आनंदयति  ',
      meaning: '',
      category: '19',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'धिनोति ',
      meaning: '',
      category: '19',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'आमोदयति ',
      meaning: '',
      category: '19',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'हर्षयति  ',
      meaning: '',
      category: '19',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'तोषयति ',
      meaning: '',
      category: '19',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'दूयते ',
      meaning: '',
      category: '18',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'व्यथते ',
      meaning: '',
      category: '18',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'दुःख्यति ',
      meaning: '',
      category: '18',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'शोचति ',
      meaning: '',
      category: '18',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'सीदति ',
      meaning: '',
      category: '18',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'खिद्यते ',
      meaning: '',
      category: '18',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'क्लिश्यति ',
      meaning: '',
      category: '18',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'श्राम्यति',
      meaning: '',
      category: '18',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अंतस्तपति ',
      meaning: '',
      category: '18',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'ताम्यति',
      meaning: '',
      category: '18',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: '',
      meaning: '',
      category: '',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'ग्लायति ',
      meaning: '',
      category: '20',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'म्लायति ',
      meaning: '',
      category: '20',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'प्लुष्यत्यपि ',
      meaning: '',
      category: '20',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'स्विद्यति ',
      meaning: '',
      category: '20',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'शुष्यति ',
      meaning: '',
      category: '20',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'क्लिश्नाति',
      meaning: '',
      category: '21',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'क्लेशयति',
      meaning: '',
      category: '21',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'व्यथयति',
      meaning: '',
      category: '21',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'दुःखाकरोति ',
      meaning: '',
      category: '21',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'शोचयति ',
      meaning: '',
      category: '21',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'विह्वलयति ',
      meaning: '',
      category: '21',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'दुनोति ',
      meaning: '',
      category: '21',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'व्याकुलयति ',
      meaning: '',
      category: '21',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'विमनयति ',
      meaning: '',
      category: '21',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'विषादयति',
      meaning: '',
      category: '21',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'घातयति',
      meaning: '',
      category: '22',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'हन्ति',
      meaning: '',
      category: '22',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'निबर्हयति',
      meaning: '',
      category: '22',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'सूदते',
      meaning: '',
      category: '22',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'हिनस्ति',
      meaning: '',
      category: '22',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'संहरते',
      meaning: '',
      category: '22',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: ' सूदयति',
      meaning: '',
      category: '22',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'आहते',
      meaning: '',
      category: '22',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'उज्जासयति',
      meaning: '',
      category: '22',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'कदर्थयति',
      meaning: '',
      category: '23',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'मथ्नाति',
      meaning: '',
      category: '23',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'कर्शयति',
      meaning: '',
      category: '23',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'बाधते',
      meaning: '',
      category: '23',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'पिनष्टि',
      meaning: '',
      category: '24',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'उपद्रवति',
      meaning: '',
      category: '24',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'पीडयति',
      meaning: '',
      category: '24',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'शास्ति',
      meaning: '',
      category: '24',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'निगृह्णीते',
      meaning: '',
      category: '25',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'निगृह्णाति',
      meaning: '',
      category: '25',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'ताडयति',
      meaning: '',
      category: '25',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'विध्यति',
      meaning: '',
      category: '25',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'आप्नोति',
      meaning: '',
      category: '27',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'लभते',
      meaning: '',
      category: '27',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'याति',
      meaning: '',
      category: '27',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अयति',
      meaning: '',
      category: '27',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'ऋच्छति',
      meaning: '',
      category: '27',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'प्रपद्यते',
      meaning: '',
      category: '27',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'जिहीते',
      meaning: '',
      category: '27',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अञ्चति',
      meaning: '',
      category: '27',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'आसादयति',
      meaning: '',
      category: '27',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'विन्दते',
      meaning: '',
      category: '27',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'उपसर्पति',
      meaning: '',
      category: '28',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'उपसरति',
      meaning: '',
      category: '28',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'उपयाति',
      meaning: '',
      category: '28',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'उपगच्छति',
      meaning: '',
      category: '28',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'उपधावति',
      meaning: '',
      category: '28',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'उपनयति',
      meaning: '',
      category: '28',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'उपतिष्ठते',
      meaning: '',
      category: '28',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अपसरति',
      meaning: '',
      category: '29',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अपगच्छति',
      meaning: '',
      category: '29',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अपैति',
      meaning: '',
      category: '29',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'व्ययति',
      meaning: '',
      category: '29',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'व्येति',
      meaning: '',
      category: '29',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'विगच्छति',
      meaning: '',
      category: '29',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अपवर्तते',
      meaning: '',
      category: '29',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'आगच्छति',
      meaning: '',
      category: '30',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'आव्रजति',
      meaning: '',
      category: '30',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'आयाति',
      meaning: '',
      category: '30',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'आपतति',
      meaning: '',
      category: '30',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'आसरति',
      meaning: '',
      category: '30',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'निर्गच्छति',
      meaning: '',
      category: '32',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'निर्याति',
      meaning: '',
      category: '32',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'निस्सरति',
      meaning: '',
      category: '32',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'उत्पतति',
      meaning: '',
      category: '32',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'उद्गच्छति',
      meaning: '',
      category: '31',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'उद्व्रजति',
      meaning: '',
      category: '31',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'उद्याति',
      meaning: '',
      category: '31',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'उत्तिष्ठति',
      meaning: '',
      category: '31',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'उच्चलति',
      meaning: '',
      category: '31',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अभिगच्छति ॥',
      meaning: '',
      category: '33',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अभिपतति ॥',
      meaning: '',
      category: '33',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अभियाति ॥',
      meaning: '',
      category: '33',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अभिधावति ॥',
      meaning: '',
      category: '33',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अभिप्रार्दयते',
      meaning: '',
      category: '33',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अभिषेणयति',
      meaning: '',
      category: '33',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अनुसर्पति',
      meaning: '',
      category: '34',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अनुपतति',
      meaning: '',
      category: '34',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अनूदेति',
      meaning: '',
      category: '34',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अनुवर्तते',
      meaning: '',
      category: '34',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अनुगच्छति ।',
      meaning: '',
      category: '34',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अनुसरति',
      meaning: '',
      category: '34',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अनुयाति',
      meaning: '',
      category: '34',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अनुधावति',
      meaning: '',
      category: '34',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अन्वेति',
      meaning: '',
      category: '34',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अनुद्रवति',
      meaning: '',
      category: '34',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अन्वागच्छति',
      meaning: '',
      category: '34',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अन्वयति',
      meaning: '',
      category: '34',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'विडंबयति',
      meaning: '',
      category: '35',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अनुकरोति',
      meaning: '',
      category: '35',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'उपमाति',
      meaning: '',
      category: '35',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अनुकल्पते',
      meaning: '',
      category: '35',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'अनुविदधाति',
      meaning: '',
      category: '35',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: 'तुलयति',
      meaning: '',
      category: '35',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: '',
      meaning: '',
      category: '',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: '',
      meaning: '',
      category: '',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: '',
      meaning: '',
      category: '',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: '',
      meaning: '',
      category: '',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: '',
      meaning: '',
      category: '',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: '',
      meaning: '',
      category: '',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: '',
      meaning: '',
      category: '',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: '',
      meaning: '',
      category: '',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: '',
      meaning: '',
      category: '',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: '',
      meaning: '',
      category: '',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: '',
      meaning: '',
      category: '',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: '',
      meaning: '',
      category: '',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: '',
      meaning: '',
      category: '',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: '',
      meaning: '',
      category: '',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: '',
      meaning: '',
      category: '',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: '',
      meaning: '',
      category: '',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: '',
      meaning: '',
      category: '',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: '',
      meaning: '',
      category: '',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: '',
      meaning: '',
      category: '',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: '',
      meaning: '',
      category: '',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: '',
      meaning: '',
      category: '',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: '',
      meaning: '',
      category: '',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: '',
      meaning: '',
      category: '',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    },
    {
      root: '',
      form: '',
      meaning: '',
      category: '',
      obj: 'sakarmaka/akarmaka/dvikarmaka',
      voice: 'atmanepadi/parasmaipadi',
      forms_url: ''
    }
  ]
})

export const mutations = {
  toggleSidebar(state) {
    state.sidebar = !state.sidebar
  }
}
