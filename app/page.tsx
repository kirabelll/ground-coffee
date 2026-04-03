/* cSpell:ignore iconify */
'use client';

import AnimationScript from './components/AnimationScript';
import { useState } from 'react';

export default function Home() {
  const [language, setLanguage] = useState<'en' | 'am'>('en');
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  const translations = {
    en: {
      nav: {
        vision: 'Vision',
        process: 'Process',
        solutions: 'Solutions',
        plans: 'Plans'
      },
      hero: {
        subtitle: 'Amazing Transformation of Daily Discarded Coffee Grounds',
        description: 'Now focus on materials made from coffee instead of plastic.',
        coffee: 'coffee',
        preOrder: 'Pre-Order Now',
        notify: 'Get Launch Notification'
      },
      intro: {
        label: '01 — The Vision',
        title: 'From discarded coffee grounds to core industrial resources, innovative material solutions GroundPoly.',
        card1Title: 'Plastic Alternative New Material',
        card1Desc: 'Reprocessing coffee grounds to implement the physical properties of existing plastic materials while dramatically reducing environmental burden.',
        card2Title: 'High Versatility',
        card2Desc: 'Immediately applicable to various manufacturing processes including packaging, household goods, and industrial parts through standardized material supply.',
        card3Title: 'Sustainable Circular Economy',
        card3Desc: 'Helps companies practice ESG management through an upcycling process that turns discarded resources back into products.'
      },
      target: {
        label: 'Target & Needs',
        title: 'Concerns of environmentally conscious companies,',
        titleHighlight: 'GroundPoly has found the answer.',
        brand: 'Brands Needing Eco-Friendly Packaging',
        brandQuote: '"When paper is weak and plastic feels guilty, we need materials that capture both durability and eco-friendliness."',
        manufacturer: 'Manufacturers Needing ESG Performance',
        manufacturerQuote: '"We need to reduce carbon emissions, but the cost and risk of completely changing existing processes are burdensome."',
        designer: 'Designers Wanting Differentiated Products',
        designerQuote: '"We are looking for materials with unique and innovative textures that can complete product storytelling."'
      },
      process: {
        step1Title: 'Collection and Sorting',
        step1Desc: 'Systematically collect quality coffee grounds from cafes and other sources. The first key step to increase raw material purity.',
        step2Title: 'Material Enhancement Process',
        step2Desc: 'Convert to high-quality raw materials usable for industrial purposes through drying, grinding, and blending technology. GroundPoly\'s proprietary processing technology is applied.',
        step3Title: 'Customized Material Supply',
        step3Desc: 'Process and deliver materials optimized for product characteristics in terms of physical properties and form. Support various specifications from pellet form to sheets.',
        step4Title: 'Product Mass Production and Application',
        step4Desc: 'Produce packaging and various industrial products using existing facilities. Build eco-friendly lineups without large-scale facility investment.'
      },
      solutions: {
        label: 'Core Values',
        title: 'The most realistic alternative for a sustainable future.',
        value1Title: 'Familiar as plastic, minimal impact on Earth.',
        value1Desc: 'GroundPoly goes beyond just environmentally friendly materials to provide strong physical properties that can replace plastic in actual industrial sites. Users can enjoy the convenience of existing plastic products while experiencing an environmentally friendly experience that is biodegradable when buried or easy to recycle.',
        value2Title: 'Versatility from packaging to appliances, making imagination reality.',
        value2Desc: 'Not limited to specific fields. GroundPoly\'s material technology covers a wide spectrum from thin film packaging to industrial parts requiring solid molding. Whatever your product line, you can add the unique value of coffee ground materials to create new product lineups.',
        value3Title: 'The most realistic alternative for a sustainable future.',
        value3Desc: 'Environmental protection starts not with grand slogans but with practical material changes. By utilizing the abundant resource of coffee grounds, we secure stability in raw material supply and present the most efficient and economical path for companies to achieve sustainability goals.',
        esgTitle: 'ESG Compliance',
        esgSubtitle: 'Carbon Footprint Reduction Ready'
      },
      pricing: {
        label: 'Pricing & Plans',
        title: 'Optimal Material Solutions for Your Business Scale',
        starter: 'Starter Kit',
        starterSub: 'Initial Testing and Sampling',
        starterDesc: 'Basic sample package for companies wanting to test material applicability. Suitable for property verification and small-scale prototype production.',
        starterBtn: 'Contact Us',
        standard: 'Standard Plan',
        standardSub: 'Small to Medium Scale Production',
        standardDesc: 'Stably supply standard specification materials for small to medium scale product mass production. Universal lineup immediately applicable to existing injection processes.',
        standardBtn: 'Start Plan',
        enterprise: 'Enterprise',
        enterpriseSub: 'Large Scale/Custom Solutions',
        enterpriseDesc: 'Custom solutions for companies requiring mass production and specific property development. Support dedicated engineer assignment and supply chain optimization.',
        enterpriseBtn: 'Custom Consultation',
        recommended: 'Recommended'
      },
      testimonials: {
        label: 'Voices of Change',
        title: 'Voices of change with GroundPoly',
        quote1: '"Being able to clearly present plastic usage reduction figures will be a great help in enhancing brand image."',
        author1: 'Global F&B Brand Sustainability Management Team',
        quote2: '"The unique texture and color of coffee grounds naturally blend into products, which seems to enhance design completeness."',
        author2: 'Lifestyle Product Senior Designer',
        quote3: '"The biggest attraction is being able to introduce eco-friendly materials without significantly modifying existing injection processes."',
        author3: 'Home Appliance Manufacturer Production Technology Team'
      },
      faq: {
        title: 'Frequently Asked Questions',
        subtitle: 'Check out what you\'re curious about regarding GroundPoly.',
        q1: 'Q. Does coffee scent or color remain in the product?',
        a1: 'A. It can be adjusted during the processing. We can either preserve the material\'s unique feel or refine it to be nearly odorless/colorless to match the client\'s planning intent.',
        q2: 'Q. Can existing plastic production facilities be used as is?',
        a2: 'A. Yes, GroundPoly is designed with versatility in mind. We provide optimal formulations applicable to existing injection and extrusion facilities without major modifications.',
        q3: 'Q. Is the supply volume stable?',
        a3: 'A. Based on domestic and international coffee consumption, we have established a systematic raw material supply network, enabling stable supply even for large-scale mass production.'
      },
      closing: {
        title: 'Discovering tomorrow\'s possibilities in things discarded daily',
        titleHighlight: 'Designer of resource circulation.',
        description: 'We keep the convenience that plastic provides while reducing the burden on Earth. Now, create new standards for sustainable industry with GroundPoly.'
      },
      footer: {
        ready: 'Ready for the Future',
        contact: 'Contact Us',
        company: 'Company',
        companyName: 'Company Name: GroundPoly',
        ceo: 'CEO: [Enter Name]',
        location: 'Location',
        address: '[Enter Company Address]',
        city: 'Seoul, Republic of Korea',
        inquiries: 'Inquiries',
        email: '[Enter Email]',
        phone: '[Enter Phone]',
        social: 'Social',
        linkedin: 'LinkedIn',
        instagram: 'Instagram',
        copyright: '© 2024 GroundPoly'
      }
    },
    am: {
      nav: {
        vision: 'ራዕይ',
        process: 'ሂደት',
        solutions: 'መፍትሄዎች',
        plans: 'እቅዶች'
      },
      hero: {
        subtitle: 'በየቀኑ የሚጣሉ የቡና ቅሪቶች አስደናቂ ለውጥ',
        description: 'አሁን ከፕላስቲክ ይልቅ በቡና የተሰሩ ቁሳቁሶችን ያተኩሩ።',
        coffee: 'ቡና',
        preOrder: 'አስቀድመው ያዝዙ',
        notify: 'የመክፈቻ ማሳወቂያ ይቀበሉ'
      },
      intro: {
        label: '01 — ራዕይ',
        title: 'ከተጣሉ የቡና ቅሪቶች ወደ ዋና የኢንዱስትሪ ሀብቶች፣ አዲስ የቁሳቁስ መፍትሄዎች ግራውንድፖሊ።',
        card1Title: 'የፕላስቲክ አማራጭ አዲስ ቁሳቁስ',
        card1Desc: 'የቡና ቅሪቶችን እንደገና በማቀነባበር የነባር የፕላስቲክ ቁሳቁሶችን አካላዊ ባህሪያት በመተግበር የአካባቢ ጫናን በከፍተኛ ሁኔታ ይቀንሳል።',
        card2Title: 'ከፍተኛ ሁለገብነት',
        card2Desc: 'በተደረጀ የቁሳቁስ አቅርቦት በመጠቀም ማሸጊያ፣ የቤት እቃዎች እና የኢንዱስትሪ ክፍሎችን ጨምሮ በተለያዩ የማምረቻ ሂደቶች ላይ ወዲያውኑ ተፈጻሚ ይሆናል።',
        card3Title: 'ዘላቂ የዑደት ኢኮኖሚ',
        card3Desc: 'የተጣሉ ሀብቶችን ወደ ምርቶች የሚቀይር የማሻሻያ ሂደት በመጠቀም ኩባንያዎች የESG አስተዳደርን እንዲለማመዱ ይረዳል።'
      },
      target: {
        label: 'ዒላማ እና ፍላጎቶች',
        title: 'የአካባቢ ጥበቃን የሚያስቡ ኩባንያዎች ስጋቶች፣',
        titleHighlight: 'ግራውንድፖሊ መልሱን አግኝቷል።',
        brand: 'ለአካባቢ ተስማሚ ማሸጊያ የሚፈልጉ ብራንዶች',
        brandQuote: '"ወረቀት ደካማ እና ፕላስቲክ ጥፋተኛ ሲሰማው፣ ዘላቂነት እና ለአካባቢ ተስማሚነትን የሚይዙ ቁሳቁሶች እንፈልጋለን።"',
        manufacturer: 'የESG አፈጻጸም የሚፈልጉ አምራቾች',
        manufacturerQuote: '"የካርቦን ልቀትን መቀነስ አለብን፣ ነገር ግን ነባር ሂደቶችን ሙሉ በሙሉ የመቀየር ወጪ እና አደጋ ከባድ ነው።"',
        designer: 'የተለየ ምርት የሚፈልጉ ዲዛይነሮች',
        designerQuote: '"የምርት ታሪክ ተረከን ማጠናቀቅ የሚችሉ ልዩ እና አዲስ ሸካራነት ያላቸው ቁሳቁሶችን እየፈለግን ነው።"'
      },
      process: {
        step1Title: 'መሰብሰብ እና መደርደር',
        step1Desc: 'ከካፌዎች እና ሌሎች ምንጮች ጥራት ያላቸውን የቡና ቅሪቶች በስርዓት ይሰብስቡ። የጥሬ ዕቃ ንፅህናን ለመጨመር የመጀመሪያው ቁልፍ እርምጃ።',
        step2Title: 'የቁሳቁስ ማሻሻያ ሂደት',
        step2Desc: 'በማድረቅ፣ በመፍጨት እና በመቀላቀል ቴክኖሎጂ ለኢንዱስትሪ አላማዎች ጥቅም ላይ የሚውሉ ከፍተኛ ጥራት ያላቸው ጥሬ ዕቃዎች ይለወጣሉ። የግራውንድፖሊ የራሱ የማቀነባበር ቴክኖሎጂ ተፈጻሚ ይሆናል።',
        step3Title: 'ብጁ የቁሳቁስ አቅርቦት',
        step3Desc: 'በአካላዊ ባህሪያት እና ቅርጽ ረገድ ለምርት ባህሪያት የተመቻቹ ቁሳቁሶችን ያቀነባብሩ እና ያቀርቡ። ከፔሌት ቅርጽ እስከ ሉሆች ድረስ የተለያዩ ዝርዝሮችን ይደግፋል።',
        step4Title: 'የምርት ብዛት ምርት እና አተገባበር',
        step4Desc: 'ነባር መሳሪያዎችን በመጠቀም ማሸጊያ እና የተለያዩ የኢንዱስትሪ ምርቶችን ያምርቱ። ያለ ትልቅ የመሳሪያ ኢንቨስትመንት ለአካባቢ ተስማሚ መስመሮችን ይገንቡ።'
      },
      solutions: {
        label: 'ዋና እሴቶች',
        title: 'ለዘላቂ ወደፊት በጣም ተጨባጭ አማራጭ።',
        value1Title: 'እንደ ፕላስቲክ የተለመደ፣ በምድር ላይ አነስተኛ ተጽእኖ።',
        value1Desc: 'ግራውንድፖሊ ከአካባቢ ተስማሚ ቁሳቁሶች በላይ በትክክለኛ የኢንዱስትሪ ቦታዎች ፕላስቲክን መተካት የሚችሉ ጠንካራ አካላዊ ባህሪያትን ይሰጣል። ተጠቃሚዎች የነባር የፕላስቲክ ምርቶችን ምቾት እየተደሰቱ በተቀበረበት ጊዜ የሚበሰብስ ወይም እንደገና ጥቅም ላይ ለማዋል ቀላል የሆነ ለአካባቢ ተስማሚ ልምድ ማግኘት ይችላሉ።',
        value2Title: 'ከማሸጊያ እስከ መሳሪያዎች ድረስ ሁለገብነት፣ ምናብን እውን ማድረግ።',
        value2Desc: 'በተወሰኑ መስኮች የተገደበ አይደለም። የግራውንድፖሊ የቁሳቁስ ቴክኖሎጂ ከቀጭን ፊልም ማሸጊያ እስከ ጠንካራ ቅርጽ የሚፈልጉ የኢንዱስትሪ ክፍሎች ድረስ ሰፊ ስፔክትረም ይሸፍናል። የእርስዎ የምርት መስመር ምንም ይሁን ምን፣ የቡና ቅሪት ቁሳቁሶች ልዩ እሴት በመጨመር አዲስ የምርት መስመሮችን መፍጠር ይችላሉ።',
        value3Title: 'ለዘላቂ ወደፊት በጣም ተጨባጭ አማራጭ።',
        value3Desc: 'የአካባቢ ጥበቃ በታላላቅ መፈክሮች ሳይሆን በተግባራዊ የቁሳቁስ ለውጦች ይጀምራል። የቡና ቅሪቶችን ብዛት ያለው ሀብት በመጠቀም በጥሬ ዕቃ አቅርቦት ውስጥ መረጋጋትን እናረጋግጣለን እናም ኩባንያዎች የዘላቂነት ግቦችን እንዲያሳኩ በጣም ቀልጣፋ እና ኢኮኖሚያዊ መንገድ እናቀርባለን።',
        esgTitle: 'የESG ተገዢነት',
        esgSubtitle: 'የካርቦን አሻራ መቀነስ ዝግጁ'
      },
      pricing: {
        label: 'ዋጋ እና እቅዶች',
        title: 'ለእርስዎ የንግድ መጠን ምርጥ የቁሳቁስ መፍትሄዎች',
        starter: 'መጀመሪያ ኪት',
        starterSub: 'የመጀመሪያ ሙከራ እና ናሙና',
        starterDesc: 'የቁሳቁስ ተፈጻሚነትን መሞከር ለሚፈልጉ ኩባንያዎች መሰረታዊ ናሙና ፓኬጅ። ለንብረት ማረጋገጫ እና ለአነስተኛ መጠን ፕሮቶታይፕ ምርት ተስማሚ።',
        starterBtn: 'ያግኙን',
        standard: 'መደበኛ እቅድ',
        standardSub: 'አነስተኛ እስከ መካከለኛ መጠን ምርት',
        standardDesc: 'ለአነስተኛ እስከ መካከለኛ መጠን የምርት ብዛት ምርት መደበኛ ዝርዝር ቁሳቁሶችን በተረጋጋ ሁኔታ ያቀርቡ። ለነባር የመርፌ ሂደቶች ወዲያውኑ ተፈጻሚ የሚሆን ሁለገብ መስመር።',
        standardBtn: 'እቅድ ይጀምሩ',
        enterprise: 'ኢንተርፕራይዝ',
        enterpriseSub: 'ትልቅ መጠን/ብጁ መፍትሄዎች',
        enterpriseDesc: 'የብዛት ምርት እና ልዩ ንብረት ልማት የሚፈልጉ ኩባንያዎች ብጁ መፍትሄዎች። የተወሰነ መሐንዲስ ምደባ እና የአቅርቦት ሰንሰለት ማመቻቸትን ይደግፋል።',
        enterpriseBtn: 'ብጁ ምክክር',
        recommended: 'የሚመከር'
      },
      testimonials: {
        label: 'የለውጥ ድምጾች',
        title: 'ከግራውንድፖሊ ጋር የለውጥ ድምጾች',
        quote1: '"የፕላስቲክ አጠቃቀም መቀነስ ቁጥሮችን በግልጽ ማቅረብ መቻል የብራንድ ምስልን ለማሳደግ ትልቅ እገዛ ይሆናል።"',
        author1: 'ዓለም አቀፍ F&B ብራንድ የዘላቂነት አስተዳደር ቡድን',
        quote2: '"የቡና ቅሪቶች ልዩ ሸካራነት እና ቀለም በተፈጥሮ ወደ ምርቶች ይቀላቀላሉ፣ ይህም የዲዛይን ተሟላነትን የሚያሳድግ ይመስላል።"',
        author2: 'የአኗኗር ዘይቤ ምርት ከፍተኛ ዲዛይነር',
        quote3: '"ትልቁ መሳቢያ ነባር የመርፌ ሂደቶችን በከፍተኛ ሁኔታ ሳያሻሽሉ ለአካባቢ ተስማሚ ቁሳቁሶችን ማስተዋወቅ መቻል ነው።"',
        author3: 'የቤት እቃዎች አምራች የምርት ቴክኖሎጂ ቡድን'
      },
      faq: {
        title: 'በተደጋጋሚ የሚጠየቁ ጥያቄዎች',
        subtitle: 'ስለ ግራውንድፖሊ የሚጠይቁትን ይመልከቱ።',
        q1: 'ጥ. የቡና ሽታ ወይም ቀለም በምርቱ ውስጥ ይቀራል?',
        a1: 'መ. በማቀነባበር ወቅት ሊስተካከል ይችላል። የቁሳቁሱን ልዩ ስሜት መጠበቅ ወይም ከደንበኛው የእቅድ ሀሳብ ጋር ለማዛመድ ወደ ሽታ የሌለው/ቀለም የሌለው ማጣራት እንችላለን።',
        q2: 'ጥ. ነባር የፕላስቲክ ምርት መሳሪያዎች እንደ ነበሩ ሊጠቀሙ ይችላሉ?',
        a2: 'መ. አዎ፣ ግራውንድፖሊ ሁለገብነትን ግምት ውስጥ በማስገባት ተዘጋጅቷል። ያለ ትልቅ ማሻሻያ ለነባር የመርፌ እና የመጨመቂያ መሳሪያዎች ተፈጻሚ የሚሆኑ ምርጥ ቀመሮችን እናቀርባለን።',
        q3: 'ጥ. የአቅርቦት መጠን የተረጋጋ ነው?',
        a3: 'መ. በሀገር ውስጥ እና በዓለም አቀፍ የቡና ፍጆታ ላይ በመመስረት ስርዓታዊ የጥሬ ዕቃ አቅርቦት አውታረ መረብ አቋቁመናል፣ ይህም ለትልቅ መጠን የብዛት ምርት እንኳን የተረጋጋ አቅርቦትን ያስችላል።'
      },
      closing: {
        title: 'በየቀኑ በሚጣሉ ነገሮች ውስጥ የነገን እድሎችን ማግኘት',
        titleHighlight: 'የሀብት ዑደት ዲዛይነር።',
        description: 'ፕላስቲክ የሚሰጠውን ምቾት እንጠብቃለን በምድር ላይ ያለውን ሸክም እየቀነስን። አሁን፣ ከግራውንድፖሊ ጋር ለዘላቂ ኢንዱስትሪ አዲስ ደረጃዎችን ይፍጠሩ።'
      },
      footer: {
        ready: 'ለወደፊቱ ዝግጁ',
        contact: 'ያግኙን',
        company: 'ኩባንያ',
        companyName: 'የኩባንያ ስም: ግራውንድፖሊ',
        ceo: 'ዋና ሥራ አስፈፃሚ: [ስም ያስገቡ]',
        location: 'አድራሻ',
        address: '[የኩባንያ አድራሻ ያስገቡ]',
        city: 'ሴኡል፣ የኮሪያ ሪፐብሊክ',
        inquiries: 'ጥያቄዎች',
        email: '[ኢሜይል ያስገቡ]',
        phone: '[ስልክ ያስገቡ]',
        social: 'ማህበራዊ',
        linkedin: 'ሊንክድኢን',
        instagram: 'ኢንስታግራም',
        copyright: '© 2024 ግራውንድፖሊ'
      }
    }
  };

  const t = translations[language];

  return (
    <>
      {/* NOISE OVERLAY */}
      <div style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 9999,
        opacity: 0.03,
        backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noise\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noise)\"/%3E%3C/svg%3E')"
      }} />

      {/* PRELOADER */}
      <div id="loader" className="fixed inset-0 bg-[#050505] z-[10000] flex justify-center items-center text-white">
        <div className="overflow-hidden mb-6">
          <div id="loader-counter" className="font-[var(--font-space-grotesk)] text-7xl md:text-9xl font-normal tracking-tighter leading-none translate-y-full pb-2 text-[#C0A080]">0</div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-white/10 overflow-hidden">
          <div id="loader-progress" className="w-0 h-full bg-[#C0A080]"></div>
        </div>
      </div>

      {/* NAVIGATION */}
      <nav className="fixed top-0 w-full px-6 py-4 md:px-12 md:py-8 flex justify-between items-center z-50 mix-blend-difference text-white">
        <a href="#hero" className="flex items-center">
          <span className="font-[var(--font-space-grotesk)] text-lg md:text-xl font-medium tracking-tighter uppercase hover:text-[#C0A080] transition-colors">GROUNDPOLY</span>
        </a>
        <div className="hidden md:flex gap-8 text-xs font-normal tracking-widest uppercase opacity-80 items-center">
          <a href="#intro" className="hover:text-[#C0A080] transition-colors">{t.nav.vision}</a>
          <a href="#process" className="hover:text-[#C0A080] transition-colors">{t.nav.process}</a>
          <a href="#solutions" className="hover:text-[#C0A080] transition-colors">{t.nav.solutions}</a>
          <a href="#pricing" className="hover:text-[#C0A080] transition-colors">{t.nav.plans}</a>
          
          {/* Language Switcher */}
          <div className="relative">
            <button 
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              className="flex items-center gap-2 px-3 py-1.5 border border-white/20 rounded-full hover:border-[#C0A080]/50 transition-colors"
            >
              <span className="text-xs">{language === 'en' ? 'EN' : 'አማ'}</span>
              <svg className={`w-4 h-4 transition-transform ${isLangDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isLangDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 bg-[#0A0A0A] border border-white/10 rounded-lg overflow-hidden min-w-[120px] shadow-xl">
                <button
                  onClick={() => { setLanguage('en'); setIsLangDropdownOpen(false); }}
                  className={`w-full px-4 py-2 text-left text-xs hover:bg-[#C0A080]/10 transition-colors ${language === 'en' ? 'bg-[#C0A080]/20 text-[#C0A080]' : 'text-white'}`}
                >
                  English
                </button>
                <button
                  onClick={() => { setLanguage('am'); setIsLangDropdownOpen(false); }}
                  className={`w-full px-4 py-2 text-left text-xs hover:bg-[#C0A080]/10 transition-colors ${language === 'am' ? 'bg-[#C0A080]/20 text-[#C0A080]' : 'text-white'}`}
                >
                  አማርኛ (Amharic)
                </button>
              </div>
            )}
          </div>
        </div>
        <button className="md:hidden group flex items-center justify-center">
          <svg className="w-6 h-6 group-hover:text-[#C0A080] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* WRAPPER */}
      <div id="wrapper" className="relative z-10 bg-[#050505] mb-[100vh] shadow-[0_50px_100px_rgba(0,0,0,0.9)] rounded-b-[2rem]">
        
        {/* [섹션1] HERO */}
        <section className="h-screen relative flex items-center justify-center overflow-hidden" id="hero">
          <div className="w-full h-full absolute top-0 right-0 bottom-0 left-0">
            <img id="hero-img" src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=3840&auto=format&fit=crop" className="brightness-[0.3] w-full h-full object-cover grayscale opacity-80" alt="Coffee Grounds Texture" />
            
            <div className="flex flex-col gap-4 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-[#050505] absolute top-0 right-0 bottom-0 left-0 items-center justify-center z-[5] pb-20">
              <p className="text-xs md:text-sm font-normal tracking-widest text-[#C0A080] uppercase mt-20 md:mt-0 text-center px-4">{t.hero.subtitle}</p>
              <p className="text-base md:text-lg font-light tracking-tight text-white/90 text-center px-4 max-w-lg">{t.hero.description.split(t.hero.coffee)[0]}<span className="font-normal text-white">'{t.hero.coffee}'</span>{t.hero.description.split(t.hero.coffee)[1]}</p>
              
              <div className="flex gap-4 mt-8 pointer-events-auto">
                <a href="#apply" className="px-6 py-3 border border-[#C0A080]/50 text-[#C0A080] text-xs font-normal tracking-widest uppercase hover:bg-[#C0A080] hover:text-[#050505] transition-all duration-300 rounded-full">{t.hero.preOrder}</a>
                <a href="#notify" className="px-6 py-3 border border-white/20 text-white text-xs font-normal tracking-widest uppercase hover:bg-white hover:text-[#050505] transition-all duration-300 rounded-full">{t.hero.notify}</a>
              </div>
            </div>
          </div>
          
          <div className="relative z-10 w-full h-full flex flex-col justify-between pointer-events-none mix-blend-difference py-32 px-6 md:px-12">
            <div className="overflow-hidden self-start">
              <h1 id="hero-title-l" className="text-[16vw] md:text-[14vw] font-[var(--font-space-grotesk)] leading-[0.85] tracking-tighter mix-blend-difference text-white font-medium translate-y-full block">
                GROUND
              </h1>
            </div>
            <div className="overflow-hidden self-end flex items-end gap-4">
              <h1 id="hero-title-r" className="text-[16vw] md:text-[14vw] font-[var(--font-space-grotesk)] leading-[0.85] tracking-tighter mix-blend-difference text-[#C0A080] font-light italic translate-y-full block">
                POLY
              </h1>
            </div>
          </div>
        </section>

        {/* [섹션2] 서비스 소개 */}
        <section id="intro" className="py-24 md:py-40 px-6 md:px-20 max-w-[1600px] mx-auto relative z-20 bg-[#050505]">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="col-span-12 lg:col-span-4 flex flex-col justify-start border-t border-white/10 pt-4 mb-4 lg:mb-0">
              <span className="text-xs font-[var(--font-space-grotesk)] text-[#C0A080] tracking-widest uppercase">{t.intro.label}</span>
            </div>
            <div className="col-span-12 lg:col-span-8 lg:col-start-5">
              <h2 id="intro-scrub" className="md:text-5xl lg:text-6xl leading-[1.2] text-3xl font-normal tracking-tight max-w-5xl mb-16">
                {t.intro.title.split(' ').map((word, i) => (
                  <span key={i} className={`inline-block will-change-[color] ${i === t.intro.title.split(' ').length - 1 ? 'text-[#C0A080] opacity-10' : 'text-white/10'}`}>{word}&nbsp;</span>
                ))}
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8 md:gap-12 pt-12 border-t border-white/5">
                <div className="flex flex-col gap-4">
                  <svg className="w-8 h-8 text-[#C0A080]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3l14 9-14 9V3z" />
                  </svg>
                  <h3 className="text-base font-normal tracking-tight text-white">{t.intro.card1Title}</h3>
                  <p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed">{t.intro.card1Desc}</p>
                </div>
                <div className="flex flex-col gap-4">
                  <svg className="w-8 h-8 text-[#C0A080]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                  <h3 className="text-base font-normal tracking-tight text-white">{t.intro.card2Title}</h3>
                  <p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed">{t.intro.card2Desc}</p>
                </div>
                <div className="flex flex-col gap-4">
                  <svg className="w-8 h-8 text-[#C0A080]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <h3 className="text-base font-normal tracking-tight text-white">{t.intro.card3Title}</h3>
                  <p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed">{t.intro.card3Desc}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* [섹션3] 대상 고객 / 문제 정의 */}
        <section className="py-24 md:py-32 px-6 md:px-20 max-w-[1600px] mx-auto bg-[#0A0A0A] border border-white/5 rounded-2xl relative z-20 overflow-hidden my-12 mx-4 md:mx-12">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#C0A080]/5 to-transparent pointer-events-none"></div>
          <div className="relative z-10 flex flex-col md:flex-row gap-16 justify-between">
            <div className="md:w-1/3">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C0A080] animate-pulse"></div>
                <span className="text-xs font-[var(--font-space-grotesk)] uppercase tracking-widest text-gray-500">{t.target.label}</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-normal tracking-tight text-white leading-tight mb-6">
                {t.target.title}<br /><span className="text-[#C0A080]">{t.target.titleHighlight}</span>
              </h2>
            </div>
            <div className="md:w-2/3 grid gap-6">
              <div className="p-6 md:p-8 border border-white/5 bg-[#050505] rounded-xl hover:border-[#C0A080]/30 transition-colors group">
                <span className="text-xs text-[#C0A080] font-normal mb-2 block">{t.target.brand}</span>
                <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed group-hover:text-white transition-colors">{t.target.brandQuote}</p>
              </div>
              <div className="p-6 md:p-8 border border-white/5 bg-[#050505] rounded-xl hover:border-[#C0A080]/30 transition-colors group">
                <span className="text-xs text-[#C0A080] font-normal mb-2 block">{t.target.manufacturer}</span>
                <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed group-hover:text-white transition-colors">{t.target.manufacturerQuote}</p>
              </div>
              <div className="p-6 md:p-8 border border-white/5 bg-[#050505] rounded-xl hover:border-[#C0A080]/30 transition-colors group">
                <span className="text-xs text-[#C0A080] font-normal mb-2 block">{t.target.designer}</span>
                <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed group-hover:text-white transition-colors">{t.target.designerQuote}</p>
              </div>
            </div>
          </div>
        </section>

        {/* [섹션4] 진행 방식 / 프로세스 (가로 스크롤) */}
        <section id="process" className="overflow-hidden h-[100vh] border-white/5 border-t relative bg-[#050505] z-20 w-full mt-24">
          <div id="horiz-wrap" className="flex w-[400%] h-full will-change-transform">
            
            {/* 단계 1 */}
            <div className="relative w-1/4 h-full flex flex-col md:flex-row items-center justify-evenly md:justify-between px-6 md:px-20 border-r border-white/5 pt-24 pb-8 md:py-0 overflow-hidden shrink-0">
              <div className="absolute inset-0 z-0 pointer-events-none">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" className="w-full h-full object-cover opacity-20 grayscale mix-blend-luminosity" alt="Process 1" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent"></div>
              </div>
              <div className="relative z-10 w-full md:w-[45%] flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-xs font-[var(--font-space-grotesk)] text-[#C0A080] tracking-widest border border-[#C0A080]/30 px-3 py-1 rounded-full">STEP 01</span>
                </div>
                <h2 className="text-3xl md:text-5xl lg:text-7xl font-normal tracking-tight text-white mb-6">
                  {t.process.step1Title}
                </h2>
                <p className="max-w-md text-gray-400 text-sm md:text-base leading-relaxed font-light">
                  {t.process.step1Desc}
                </p>
              </div>
              <div className="relative z-10 hidden md:flex items-center justify-center w-[40%]">
                <span className="text-[20vw] font-[var(--font-space-grotesk)] text-white/5 font-light leading-none">01</span>
              </div>
            </div>

            {/* 단계 2 */}
            <div className="relative w-1/4 h-full flex flex-col md:flex-row items-center justify-evenly md:justify-between px-6 md:px-20 bg-[#0A0A0A] border-r border-white/5 pt-24 pb-8 md:py-0 overflow-hidden shrink-0">
              <div className="absolute inset-0 z-0 pointer-events-none">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" className="w-full h-full object-cover opacity-20 grayscale mix-blend-luminosity" alt="Process 2" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent"></div>
              </div>
              <div className="relative z-10 w-full md:w-[45%] flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-xs font-[var(--font-space-grotesk)] text-[#C0A080] tracking-widest border border-[#C0A080]/30 px-3 py-1 rounded-full">STEP 02</span>
                </div>
                <h2 className="text-3xl md:text-5xl lg:text-7xl font-normal tracking-tight text-white mb-6">
                  {t.process.step2Title}
                </h2>
                <p className="max-w-md text-gray-400 text-sm md:text-base leading-relaxed font-light">
                  {t.process.step2Desc}
                </p>
              </div>
              <div className="relative z-10 hidden md:flex items-center justify-center w-[40%]">
                <span className="text-[20vw] font-[var(--font-space-grotesk)] text-white/5 font-light leading-none">02</span>
              </div>
            </div>

            {/* 단계 3 */}
            <div className="relative w-1/4 h-full flex flex-col md:flex-row items-center justify-evenly md:justify-between px-6 md:px-20 bg-[#050505] border-r border-white/5 pt-24 pb-8 md:py-0 overflow-hidden shrink-0">
              <div className="absolute inset-0 z-0 pointer-events-none">
                <img src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1600&auto=format&fit=crop" className="w-full h-full object-cover opacity-20 grayscale mix-blend-luminosity" alt="Process 3" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent"></div>
              </div>
              <div className="relative z-10 w-full md:w-[45%] flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-xs font-[var(--font-space-grotesk)] text-[#C0A080] tracking-widest border border-[#C0A080]/30 px-3 py-1 rounded-full">STEP 03</span>
                </div>
                <h2 className="text-3xl md:text-5xl lg:text-7xl font-normal tracking-tight text-white mb-6">
                  {t.process.step3Title}
                </h2>
                <p className="max-w-md text-gray-400 text-sm md:text-base leading-relaxed font-light">
                  {t.process.step3Desc}
                </p>
              </div>
              <div className="relative z-10 hidden md:flex items-center justify-center w-[40%]">
                <span className="text-[20vw] font-[var(--font-space-grotesk)] text-white/5 font-light leading-none">03</span>
              </div>
            </div>

            {/* 단계 4 */}
            <div className="relative w-1/4 h-full flex flex-col md:flex-row items-center justify-evenly md:justify-between px-6 md:px-20 bg-[#0A0A0A] pt-24 pb-8 md:py-0 overflow-hidden shrink-0">
              <div className="absolute inset-0 z-0 pointer-events-none">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg" className="w-full h-full object-cover opacity-20 grayscale mix-blend-luminosity" alt="Process 4" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent"></div>
              </div>
              <div className="relative z-10 w-full md:w-[45%] flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-xs font-[var(--font-space-grotesk)] text-[#C0A080] tracking-widest border border-[#C0A080]/30 px-3 py-1 rounded-full">STEP 04</span>
                </div>
                <h2 className="text-3xl md:text-5xl lg:text-7xl font-normal tracking-tight text-white mb-6">
                  {t.process.step4Title}
                </h2>
                <p className="max-w-md text-gray-400 text-sm md:text-base leading-relaxed font-light">
                  {t.process.step4Desc}
                </p>
              </div>
              <div className="relative z-10 hidden md:flex items-center justify-center w-[40%]">
                <span className="text-[20vw] font-[var(--font-space-grotesk)] text-white/5 font-light leading-none">04</span>
              </div>
            </div>

          </div>
        </section>

        {/* [섹션5,6,7] 핵심 가치 */}
        <section id="solutions" className="py-24 md:py-40 px-6 md:px-20 max-w-[1600px] mx-auto bg-[#050505] overflow-hidden border-t border-white/5 relative z-20">
          <div className="mb-16 md:mb-24">
            <span className="text-xs font-[var(--font-space-grotesk)] text-[#C0A080] tracking-widest uppercase block mb-4">{t.solutions.label}</span>
            <h2 className="text-3xl md:text-5xl font-normal tracking-tight text-white">
              {t.solutions.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-24 md:mb-40">
            <div className="order-2 md:order-1">
              <h3 className="text-xl md:text-3xl font-normal tracking-tight text-white mb-4">{t.solutions.value1Title}</h3>
              <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed mb-6">
                {t.solutions.value1Desc}
              </p>
              <div className="w-12 h-px bg-[#C0A080]/50"></div>
            </div>
            <div className="order-1 md:order-2 aspect-[4/3] relative rounded-lg overflow-hidden border border-white/5">
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp" alt="Sustainable" className="w-full h-full object-cover grayscale opacity-60 hover:opacity-100 transition-opacity duration-700" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-24 md:mb-40">
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden border border-white/5">
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp" alt="Versatility" className="w-full h-full object-cover grayscale opacity-60 hover:opacity-100 transition-opacity duration-700" />
            </div>
            <div>
              <h3 className="text-xl md:text-3xl font-normal tracking-tight text-white mb-4">{t.solutions.value2Title}</h3>
              <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed mb-6">
                {t.solutions.value2Desc}
              </p>
              <div className="w-12 h-px bg-[#C0A080]/50"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-xl md:text-3xl font-normal tracking-tight text-white mb-4">{t.solutions.value3Title}</h3>
              <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed mb-6">
                {t.solutions.value3Desc}
              </p>
              <div className="w-12 h-px bg-[#C0A080]/50"></div>
            </div>
            <div className="order-1 md:order-2 aspect-[4/3] relative rounded-lg overflow-hidden bg-[#0A0A0A] border border-white/5 flex flex-col justify-center p-12">
              <svg className="w-16 h-16 text-[#C0A080] mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <div className="text-2xl font-normal text-white mb-2 tracking-tight">{t.solutions.esgTitle}</div>
              <p className="text-sm text-gray-500 font-[var(--font-space-grotesk)] uppercase tracking-widest">{t.solutions.esgSubtitle}</p>
            </div>
          </div>
        </section>

        {/* [섹션8] Price Plan */}
        <section id="pricing" className="py-24 md:py-32 px-6 md:px-20 bg-[#0A0A0A] border-t border-b border-white/5 relative z-20">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-16 md:mb-24">
              <span className="text-xs font-[var(--font-space-grotesk)] text-[#C0A080] tracking-widest uppercase block mb-4">{t.pricing.label}</span>
              <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-white">{t.pricing.title}</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-8 border border-white/5 bg-[#050505] rounded-xl hover:border-[#C0A080]/50 transition-all duration-300 flex flex-col">
                <h3 className="text-lg font-[var(--font-space-grotesk)] text-white tracking-tight mb-2 uppercase">{t.pricing.starter}</h3>
                <p className="text-xs text-[#C0A080] mb-8 font-light">{t.pricing.starterSub}</p>
                <p className="text-sm text-gray-400 font-light leading-relaxed mb-8 flex-grow">
                  {t.pricing.starterDesc}
                </p>
                <button className="w-full py-3 border border-white/10 text-white text-xs font-normal tracking-widest uppercase hover:bg-white hover:text-[#050505] transition-colors rounded-full">{t.pricing.starterBtn}</button>
              </div>
              
              <div className="p-8 border border-[#C0A080]/30 bg-[#050505] rounded-xl relative flex flex-col transform md:-translate-y-4 shadow-[0_0_30px_rgba(192,160,128,0.05)]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#C0A080] text-[#050505] text-[10px] font-medium tracking-widest uppercase px-3 py-1 rounded-full">{t.pricing.recommended}</div>
                <h3 className="text-lg font-[var(--font-space-grotesk)] text-white tracking-tight mb-2 uppercase">{t.pricing.standard}</h3>
                <p className="text-xs text-[#C0A080] mb-8 font-light">{t.pricing.standardSub}</p>
                <p className="text-sm text-gray-400 font-light leading-relaxed mb-8 flex-grow">
                  {t.pricing.standardDesc}
                </p>
                <button className="w-full py-3 bg-[#C0A080] text-[#050505] text-xs font-medium tracking-widest uppercase hover:bg-white hover:text-[#050505] transition-colors rounded-full">{t.pricing.standardBtn}</button>
              </div>

              <div className="p-8 border border-white/5 bg-[#050505] rounded-xl hover:border-[#C0A080]/50 transition-all duration-300 flex flex-col">
                <h3 className="text-lg font-[var(--font-space-grotesk)] text-white tracking-tight mb-2 uppercase">{t.pricing.enterprise}</h3>
                <p className="text-xs text-[#C0A080] mb-8 font-light">{t.pricing.enterpriseSub}</p>
                <p className="text-sm text-gray-400 font-light leading-relaxed mb-8 flex-grow">
                  {t.pricing.enterpriseDesc}
                </p>
                <button className="w-full py-3 border border-white/10 text-white text-xs font-normal tracking-widest uppercase hover:bg-white hover:text-[#050505] transition-colors rounded-full">{t.pricing.enterpriseBtn}</button>
              </div>
            </div>
          </div>
        </section>

        {/* [섹션9] 성공사례 / Testimonials */}
        <section className="py-24 md:py-40 bg-[#050505] text-white relative z-20">
          <div className="px-6 md:px-20 max-w-[1600px] mx-auto grid lg:grid-cols-5 gap-12 md:gap-16">
            <div className="lg:col-span-2">
              <span className="text-xs font-[var(--font-space-grotesk)] text-[#C0A080] block mb-6 tracking-widest uppercase">
                {t.testimonials.label}
              </span>
              <h2 className="text-3xl md:text-5xl font-normal tracking-tight leading-tight">
                {t.testimonials.title}
              </h2>
            </div>
            <div className="lg:col-span-3 flex flex-col gap-0">
              <div className="flex flex-col gap-3 border-b border-white/10 py-8 group cursor-default">
                <p className="text-base md:text-lg font-light text-gray-400 group-hover:text-white transition-colors leading-relaxed">
                  {t.testimonials.quote1}
                </p>
                <span className="text-xs font-normal text-[#C0A080]">{t.testimonials.author1}</span>
              </div>
              <div className="flex flex-col gap-3 border-b border-white/10 py-8 group cursor-default">
                <p className="text-base md:text-lg font-light text-gray-400 group-hover:text-white transition-colors leading-relaxed">
                  {t.testimonials.quote2}
                </p>
                <span className="text-xs font-normal text-[#C0A080]">{t.testimonials.author2}</span>
              </div>
              <div className="flex flex-col gap-3 border-b border-white/10 py-8 group cursor-default">
                <p className="text-base md:text-lg font-light text-gray-400 group-hover:text-white transition-colors leading-relaxed">
                  {t.testimonials.quote3}
                </p>
                <span className="text-xs font-normal text-[#C0A080]">{t.testimonials.author3}</span>
              </div>
            </div>
          </div>
        </section>

        {/* [섹션10] FAQ */}
        <section className="py-24 md:py-32 px-6 md:px-20 max-w-[1000px] mx-auto bg-[#050505] border-t border-white/5 relative z-20">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-normal tracking-tight text-white mb-4">{t.faq.title}</h2>
            <p className="text-sm text-gray-400 font-light">{t.faq.subtitle}</p>
          </div>

          <div className="space-y-4">
            <details className="group bg-[#0A0A0A] border border-white/5 rounded-lg overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer">
                <span className="text-sm md:text-base font-normal text-white group-open:text-[#C0A080] transition-colors">{t.faq.q1}</span>
                <svg className="w-5 h-5 text-white transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-sm text-gray-400 font-light leading-relaxed border-t border-white/5 pt-4">
                {t.faq.a1}
              </div>
            </details>
            <details className="group bg-[#0A0A0A] border border-white/5 rounded-lg overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer">
                <span className="text-sm md:text-base font-normal text-white group-open:text-[#C0A080] transition-colors">{t.faq.q2}</span>
                <svg className="w-5 h-5 text-white transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-sm text-gray-400 font-light leading-relaxed border-t border-white/5 pt-4">
                {t.faq.a2}
              </div>
            </details>
            <details className="group bg-[#0A0A0A] border border-white/5 rounded-lg overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer">
                <span className="text-sm md:text-base font-normal text-white group-open:text-[#C0A080] transition-colors">{t.faq.q3}</span>
                <svg className="w-5 h-5 text-white transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-sm text-gray-400 font-light leading-relaxed border-t border-white/5 pt-4">
                {t.faq.a3}
              </div>
            </details>
          </div>
        </section>

        {/* [섹션11] 클로징 메시지 */}
        <section className="py-24 md:py-48 flex flex-col items-center justify-center text-center px-6 relative overflow-hidden bg-[#0A0A0A] z-20 rounded-b-[2rem]">
          <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#C0A080]/10 via-[#0A0A0A] to-[#0A0A0A]"></div>
          
          <svg className="w-16 h-16 text-[#C0A080] mb-8 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-normal tracking-tight mb-8 relative z-10 text-white leading-tight">
            {t.closing.title}<br />
            <span className="text-[#C0A080] font-light">{t.closing.titleHighlight}</span>
          </h2>
          <p className="max-w-2xl text-gray-400 font-light leading-relaxed relative z-10 text-sm md:text-base">
            {t.closing.description}
          </p>
        </section>

        <div id="contact-trigger" className="w-full h-px"></div>
      </div>
      
      {/* [섹션12] FOOTER REVEAL */}
      <footer className="fixed bottom-0 left-0 w-full h-screen bg-[#000000] z-0 flex items-center justify-center text-white">
        <div className="z-10 text-center w-full max-w-5xl px-6 relative">
          <div className="inline-flex gap-2 bg-white/5 border border-white/10 rounded-full mb-8 py-1.5 px-4 backdrop-blur-sm items-center footer-el">
            <div className="w-1.5 h-1.5 rounded-full bg-[#C0A080] animate-pulse"></div>
            <span className="text-[10px] md:text-xs uppercase text-gray-300 tracking-widest font-[var(--font-space-grotesk)]">
              {t.footer.ready}
            </span>
          </div>

          <a href="mailto:contact@groundpoly.com" className="block group footer-el">
            <h2 className="text-4xl md:text-[8vw] font-[var(--font-space-grotesk)] leading-none font-medium tracking-tighter text-white group-hover:text-[#C0A080] transition-colors duration-500 uppercase">
              {t.footer.contact}
            </h2>
            <div className="h-px w-0 group-hover:w-full bg-[#C0A080] mx-auto transition-all duration-700 ease-out mt-4 md:mt-8"></div>
          </a>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-left border-white/10 border-t mt-16 pt-12 footer-el">
            <div className="flex flex-col gap-4">
              <span className="text-xs uppercase tracking-widest text-[#C0A080] font-normal font-[var(--font-space-grotesk)]">
                {t.footer.company}
              </span>
              <p className="text-xs text-gray-400 font-light">{t.footer.companyName}</p>
              <p className="text-xs text-gray-400 font-light">{t.footer.ceo}</p>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-xs uppercase tracking-widest text-[#C0A080] font-normal font-[var(--font-space-grotesk)]">
                {t.footer.location}
              </span>
              <p className="text-xs text-gray-400 font-light leading-relaxed">{t.footer.address}<br />{t.footer.city}</p>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-xs uppercase tracking-widest text-[#C0A080] font-normal font-[var(--font-space-grotesk)]">
                {t.footer.inquiries}
              </span>
              <a href="mailto:email@domain.com" className="text-xs text-gray-400 font-light hover:text-white transition-colors">{t.footer.email}</a>
              <a href="#" className="text-xs text-gray-400 font-light hover:text-white transition-colors">{t.footer.phone}</a>
            </div>
            <div className="flex flex-col justify-between">
              <span className="text-xs uppercase tracking-widest text-[#C0A080] font-normal font-[var(--font-space-grotesk)]">
                {t.footer.social}
              </span>
              <div className="flex flex-col gap-4">
                <a href="#" className="text-xs text-gray-400 font-light hover:text-white transition-colors">{t.footer.linkedin}</a>
                <a href="#" className="text-xs text-gray-400 font-light hover:text-white transition-colors">{t.footer.instagram}</a>
              </div>
              <div className="text-[10px] text-gray-600 uppercase tracking-widest mt-8 font-[var(--font-space-grotesk)]">
                {t.footer.copyright}
              </div>
            </div>
          </div>
        </div>
      </footer>

      <AnimationScript />
    </>
  );
}
