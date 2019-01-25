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
  ]
})

export const mutations = {
  toggleSidebar(state) {
    state.sidebar = !state.sidebar
  }
}
