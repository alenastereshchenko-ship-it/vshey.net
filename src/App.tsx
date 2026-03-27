/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Clock, 
  UserCheck, 
  CheckCircle2, 
  AlertCircle, 
  Star,
  Lock, 
  ChevronRight,
  Phone,
  MapPin,
  CreditCard,
  Heart,
  ClipboardList,
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  Bug,
  Search,
  Droplets,
  Waves,
  Wind,
  Eye,
  Users,
  FileText,
  Car,
  Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LogoIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <Bug size={size} className="text-stone-900" />
    <div className="absolute w-[120%] h-[3px] bg-red-500 rotate-45 rounded-full shadow-sm" />
  </div>
);

const reviews = [
  {
    name: "Анна С.",
    city: "Москва",
    text: "Спасибо огромное! Медсестра приехала очень быстро, все сделала аккуратно. Ребенок даже не капризничал. Главное — анонимно, соседи ничего не заподозрили. Рекомендую всем, кто столкнулся с этой бедой.",
    date: "12 марта 2026"
  },
  {
    name: "Игорь В.",
    city: "Химки",
    text: "Пытались сами вывести неделю, только кожу ребенку сожгли аптечными средствами. Здесь за 2 часа все убрали. Жалею, что не обратились сразу. Профессионалы своего дела, гребень просто чудо.",
    date: "5 марта 2026"
  },
  {
    name: "Дмитрий М.",
    city: "Балашиха",
    text: "Приехали через час после звонка. Медсестра была очень тактична. Все гниды вычесали до последней. Огромное спасибо за оперативность и профессионализм!",
    date: "15 марта 2026"
  },
  {
    name: "Мария П.",
    city: "Подольск",
    text: "Очень переживала из-за анонимности, но все прошло идеально. Машина без логотипов, медсестра в обычной одежде. Результат 100% с первого раза. Рекомендую!",
    date: "10 марта 2026"
  },
  {
    name: "Сергей Т.",
    city: "Одинцово",
    text: "Лучший сервис по выведению вшей. Пытались сами — бесполезно. Здесь же за один вечер решили проблему всей семьи. Стоит каждой копейки.",
    date: "8 марта 2026"
  }
];

const OrderNotification = () => {
  const [currentOrder, setCurrentOrder] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const orders = [
    { name: "Лилия", location: "Бирюлёво", action: "записалась на выезд" },
    { name: "Анна", location: "Сколково", action: "вызвала специалиста" },
    { name: "Мария", location: "Химки", action: "оставила заявку" },
    { name: "Елена", location: "Балашиха", action: "записалась на процедуру" },
    { name: "Ольга", location: "Одинцово", action: "вызвала помощь" },
    { name: "Светлана", location: "Люберцы", action: "оставила заявку" },
    { name: "Наталья", location: "Мытищи", action: "записалась на выезд" },
    { name: "Ирина", location: "Красногорск", action: "вызвала специалиста" },
    { name: "Татьяна", location: "Жулебино", action: "оставила заявку" },
    { name: "Екатерина", location: "Митино", action: "вызвала помощь" },
    { name: "Юлия", location: "Бутово", action: "записалась на процедуру" },
    { name: "Виктория", location: "Строгино", action: "оставила заявку" },
  ];

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const showNext = () => {
      // Hide current
      setIsVisible(false);
      
      // Random delay before showing next (20-45 seconds)
      const nextDelay = Math.floor(Math.random() * (45000 - 20000 + 1)) + 20000;
      
      timeoutId = setTimeout(() => {
        // Pick random order
        const randomIndex = Math.floor(Math.random() * orders.length);
        setCurrentOrder(randomIndex);
        setIsVisible(true);
        
        // Hide after 6 seconds
        setTimeout(() => {
          showNext();
        }, 6000);
      }, nextDelay);
    };

    // Initial show after 15 seconds
    const initialTimer = setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * orders.length);
      setCurrentOrder(randomIndex);
      setIsVisible(true);
      
      // Start the cycle after initial show
      setTimeout(() => {
        showNext();
      }, 6000);
    }, 15000);

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          className="fixed bottom-4 left-4 md:bottom-6 md:left-6 z-[60] bg-white/95 backdrop-blur-sm px-3 py-2.5 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-stone-100 flex items-center gap-3 max-w-[220px]"
        >
          <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 shrink-0">
            <CheckCircle2 size={16} />
          </div>
          <div className="leading-tight">
            <div className="text-stone-900 font-bold text-[13px]">
              {orders[currentOrder].name}, {orders[currentOrder].location}
            </div>
            <div className="text-stone-500 text-[11px] font-medium">
              {orders[currentOrder].action}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const quizQuestions = [
  "Вы чувствуете постоянный зуд кожи головы?",
  "Зуд усиливается в ночное время?",
  "Вы замечали мелкие белые крупинки на волосах, которые не стряхиваются?",
  "Есть ли покраснения или следы от укусов на затылке или за ушами?",
  "Вы ощущаете «шевеление» в волосах?",
  "Вы пользовались чужими расческами, заколками или головными уборами?",
  "Вы или ваши дети недавно посещали общественные места (детские сады, лагеря, хостелы)?",
  "Вы замечали на волосах мелких насекомых серовато-коричневого цвета?"
];

const faqs = [
  {
    q: "Сколько времени занимает процедура?",
    a: "В среднем от 1.5 до 2.5 часов в зависимости от длины, густоты волос и степени заражения. Мы работаем до полного удаления всех гнид."
  },
  {
    q: "Нужно ли обрабатывать квартиру?",
    a: "Вши не живут вне головы человека более 24-48 часов. Мы дадим вам четкую инструкцию, что именно нужно постирать и прогладить, чтобы избежать рецидива."
  },
  {
    q: "Ваши средства безопасны для аллергиков?",
    a: "Да, мы используем нетоксичные составы на основе натуральных масел и силиконов, которые не всасываются в кровь и безопасны даже для маленьких детей и беременных женщин."
  },
  {
    q: "Как быстро вы можете приехать?",
    a: "Мы стараемся выезжать максимально оперативно. В 90% случаев медсестра будет у вас в течение 8 часов после подтверждения заявки."
  },
  {
    q: "Гарантируете ли вы результат?",
    a: "Да, мы даем гарантию 7 дней. Если в течение этого срока вы обнаружите живых вшей, мы проведем повторную обработку бесплатно."
  }
];

const treatmentSteps = [
  {
    title: "Оперативный выезд",
    desc: "После вызова медсестра приедет к вам в течение 8 рабочих часов. Наш сотрудник выглядит как обычный посетитель: никакой медицинской или брендированной одежды. Соседи не узнают, что вы воспользовались услугой.",
    img: "https://lh3.googleusercontent.com/d/1hsZH71gx-PpxB5kQPMZL7p7ZVUV5EQJO",
    icon: <Car size={24} />
  },
  {
    title: "Начало работы",
    desc: "Уже после того, как зайдет к вам в квартиру, медсестра наденет медицинскую одежду и приступит к работе.",
    img: "https://lh3.googleusercontent.com/d/1Ov1_ovBcFx6dI8FiA5IsygCF5vqWrZHR",
    icon: <UserCheck size={24} />
  },
  {
    title: "Экспертная диагностика",
    desc: "Медсестра проводит осмотр головы каждого из проживающих в квартире и присутствующих во время вызова членов семьи.",
    img: "https://lh3.googleusercontent.com/d/11VrYtYUV5ZRTwC0xiFCSFR7lliLVHkr-",
    icon: <Search size={24} />
  },
  {
    title: "Нанесение специального состава",
    desc: "Средство убивает насекомых и растворяет клей, которым крепятся к волосам гниды, что делает процесс вычесывания более легким, безболезненным и эффективным. Убираем обработанные волосы под шапочку на несколько минут.",
    img: "https://lh3.googleusercontent.com/d/1BOS78jiMYwA7N-Wv7_N1gbkPdJjAuohp",
    icon: <Droplets size={24} />
  },
  {
    title: "Ювелирное вычесывание",
    desc: "Попрядное удаление вшей и гнид с помощью специального гребня.",
    img: "https://lh3.googleusercontent.com/d/1yNtqDqBjhjYgpOFNcMCIlt-zYUW1IHz5",
    icon: <ClipboardList size={24} />
  },
  {
    title: "Мытьё волос и сушка феном",
    desc: "Медсестра поможет тщательно вымыть волосы вашим привычным шампунем чтобы удалить остатки средства. Затем, высушит волосы феном, чтобы произвести контрольный осмотр.",
    img: "https://lh3.googleusercontent.com/d/1g_U_OznXtsBHOMGqhzBljjX3R9igDGfo",
    icon: <Waves size={24} />
  },
  {
    title: "Контрольная ревизия",
    desc: "Скурпулезная проверка каждой пряди для исключения малейшего шанса на рецидив и совместный осмотр волос на просвет: вы лично убеждаетесь в 100% отсутствии паразитов.",
    img: "https://lh3.googleusercontent.com/d/1sTyOVcunO0asWsZWASGLkjp2LmceUe3K",
    icon: <Eye size={24} />
  },
  {
    title: "Инструктаж и справка",
    desc: "Инструктаж по предотвращению повторного заражения и выдача медицинской справки установленного образца для беспрепятственного возвращения в коллектив.",
    img: "https://lh3.googleusercontent.com/d/1rTW3HtpIC0RZgx0NiqIL9HhUEYWFjPDz",
    icon: <FileText size={24} />
  }
];

const App = () => {
  const [showFAB, setShowFAB] = useState(false);
  const [currentReview, setCurrentReview] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [yesCount, setYesCount] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [availableSlots, setAvailableSlots] = useState(5);
  const [todayDate, setTodayDate] = useState("");

  useEffect(() => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long' };
    setTodayDate(date.toLocaleDateString('ru-RU', options));

    // Decrease slots randomly
    const interval = setInterval(() => {
      setAvailableSlots(prev => {
        if (prev <= 1) return 1;
        // 30% chance to decrease
        if (Math.random() > 0.7) return prev - 1;
        return prev;
      });
    }, 45000);

    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const handleScroll = () => {
      setShowFAB(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleQuizAnswer = (answer: boolean) => {
    if (answer) setYesCount(prev => prev + 1);
    
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setYesCount(0);
    setQuizFinished(false);
  };

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="min-h-screen bg-white text-stone-900 font-sans selection:bg-emerald-100 overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-xl border-b border-stone-200 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-stone-100 rounded-xl flex items-center justify-center">
              <LogoIcon size={20} className="md:w-6 md:h-6" />
            </div>
            <span className="font-bold text-lg md:text-xl tracking-tight text-emerald-900 whitespace-nowrap">ВШЕЙ_НЕТ!</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-600">
            <a href="#signs" className="hover:text-emerald-600 transition-colors">Признаки</a>
            <a href="#process" className="hover:text-emerald-600 transition-colors">Как это работает</a>
            <a href="#guarantee" className="hover:text-emerald-600 transition-colors">Гарантия</a>
            <a href="#faq" className="hover:text-emerald-600 transition-colors">FAQ</a>
          </div>
          <a 
            href="https://s.salebot.pro/st/registrationee/mama_2" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 text-white px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-semibold hover:bg-emerald-700 transition-all shadow-md shadow-emerald-200 whitespace-nowrap"
          >
            Вызвать помощь
          </a>
        </div>
      </header>

      <main className="pt-16 overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative pt-4 pb-12 md:pt-6 md:pb-32 overflow-hidden bg-white">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center md:text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-6 md:mb-8 border border-emerald-200">
                <Lock size={12} className="md:w-[14px] md:h-[14px]" />
                100% Анонимно в Москве
              </div>
              <h1 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-stone-900 leading-[1.1] mb-6 md:mb-10 break-words tracking-tight">
                Экстренное выведение <span className="text-orange-500 font-serif italic text-[1.1em] inline-block transform -rotate-1 mr-1 md:mr-2">вшей</span> <br className="hidden sm:block" />
                и 100%-е удаление <span className="text-orange-500 font-serif italic">гнид</span> <span className="text-emerald-600">за 2 часа</span>
              </h1>
              <p className="text-lg md:text-xl text-stone-600 mb-8 md:mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed font-medium">
                Быстро и конфиденциально решим проблему педикулеза. Можем приехать к вам уже сегодня!
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6">
                <div className="flex items-center gap-2 md:gap-3 text-stone-800 font-bold text-sm md:text-base">
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                    <CheckCircle2 size={12} className="md:w-[14px] md:h-[14px]" />
                  </div>
                  Выезд на дом
                </div>
                <div className="flex items-center gap-2 md:gap-3 text-stone-800 font-bold text-sm md:text-base">
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                    <CheckCircle2 size={12} className="md:w-[14px] md:h-[14px]" />
                  </div>
                  Гарантия 7 дней
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative md:-mt-20 order-first md:order-last"
            >
              <div className="aspect-[16/10] rounded-[1.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-[3px] md:border-8 border-orange-500 relative">
                <img 
                  src="https://lh3.googleusercontent.com/d/1oIWgEJZBt3zec6ip5JTxadlseHDldyP0" 
                  alt="Problem identification" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </section>

        <section id="signs" className="py-24 bg-stone-900 text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative mb-12 lg:mb-0"
              >
                {/* Phone Mockup */}
                <div className="relative mx-auto w-full max-w-[300px] aspect-[1/2] bg-stone-800 rounded-[2.5rem] md:rounded-[3.5rem] border-[8px] md:border-[12px] border-stone-800 shadow-2xl overflow-hidden ring-1 ring-stone-700">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 md:w-32 h-5 md:h-7 bg-stone-800 rounded-b-2xl md:rounded-b-3xl z-20"></div>
                  <div className="w-full h-full bg-stone-950 relative">
                    <img 
                      src="https://lh3.googleusercontent.com/d/1pvNZVTAkTh1VdLIHcI_iTy0tUoOvCj-U" 
                      alt="Lice macro view" 
                      className="w-full h-full object-cover opacity-80"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent"></div>
                    <div className="absolute bottom-8 md:bottom-12 left-6 md:left-8 right-6 md:right-8">
                      <div className="text-[8px] md:text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-2 md:mb-3 flex items-center gap-2">
                        <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Макросъемка
                      </div>
                      <div className="text-lg md:text-xl font-black leading-tight mb-1 md:mb-2">Так выглядят вши и гниды</div>
                      <div className="text-stone-400 text-xs md:text-sm font-medium">Невооружённым глазом насекомых и их яйца тяжело заметить, особенно, если волосы светлые. Поэтому от заражения до вызова специалиста часто проходит несколько недель.</div>
                    </div>
                  </div>
                </div>
                {/* Decorative Glows */}
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full"></div>
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-orange-500/10 blur-[100px] rounded-full"></div>
              </motion.div>

              <div>
                <div className="mb-12 lg:text-left text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    экспресс-диагностика
                  </div>
                  <h2 className="text-4xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tight">
                    Есть ли у вас <br />
                    <span className="text-orange-500 font-serif italic">вши?</span>
                  </h2>
                  <p className="text-stone-400 text-lg font-medium leading-relaxed max-w-xl lg:mx-0 mx-auto">
                    Анонимно ответьте на 8 вопросов, чтобы оценить риск заражения
                  </p>
                </div>

                <div className="relative min-h-[450px] flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    {!quizFinished ? (
                      <motion.div 
                        key={currentQuestion}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="w-full p-6 md:p-12 rounded-[2rem] md:rounded-[3rem] bg-stone-800 border border-stone-700 shadow-2xl relative"
                      >
                        <div className="absolute top-8 left-8 text-emerald-400 font-black text-sm tracking-widest uppercase">
                          Вопрос {currentQuestion + 1} из {quizQuestions.length}
                        </div>
                        <div className="mt-12 mb-12">
                          <h3 className="text-2xl md:text-3xl font-black leading-tight text-white">
                            {quizQuestions[currentQuestion]}
                          </h3>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <button 
                            onClick={() => handleQuizAnswer(true)}
                            className="py-3.5 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl font-black text-lg transition-all shadow-lg shadow-orange-900/20"
                          >
                            ДА
                          </button>
                          <button 
                            onClick={() => handleQuizAnswer(false)}
                            className="py-3.5 bg-stone-700 hover:bg-stone-600 text-white rounded-2xl font-black text-lg transition-all shadow-lg"
                          >
                            НЕТ
                          </button>
                        </div>
                        <div className="mt-10 h-2 bg-stone-900 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                            className="h-full bg-emerald-500"
                          />
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div 
                        key="result"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="w-full p-8 md:p-12 rounded-[3rem] bg-emerald-600 text-white shadow-2xl text-center"
                      >
                        <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-8">
                          <ClipboardList size={40} />
                        </div>
                        <h3 className="text-3xl font-black mb-4">Результат теста</h3>
                        <p className="text-xl mb-8 font-medium leading-relaxed">
                          {yesCount >= 3 
                            ? "Высокая вероятность заражения. Рекомендуем не откладывать и вызвать специалиста для профессионального осмотра и обработки."
                            : "Риск заражения невысок, но если зуд сохраняется, лучше провести профилактический осмотр."}
                        </p>
                        <div className="flex flex-col gap-4">
                          <a 
                            href="https://s.salebot.pro/st/registrationee/mama_2" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-orange-500 text-white py-3.5 rounded-2xl font-black text-lg hover:bg-orange-600 transition-all shadow-xl block"
                          >
                            Вызвать помощь
                          </a>
                          <button 
                            onClick={resetQuiz}
                            className="text-emerald-100 font-bold hover:text-white transition-colors"
                          >
                            Пройти тест заново
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About & Service Details */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-12">
              <div className="mb-12">
                <div className="rounded-[2.5rem] bg-emerald-50 border-2 border-emerald-100 shadow-sm relative overflow-hidden flex flex-col md:flex-row items-stretch">
                  <div className="absolute top-0 left-0 w-2 h-full bg-emerald-500 z-10"></div>
                  <div className="p-8 md:p-12 flex-1 flex flex-col justify-center">
                    <p className="text-2xl md:text-4xl font-black text-stone-900 leading-tight tracking-tight">
                      Сразу после процедуры ваш ребёнок сможет без опасений отправиться в школу или детский сад, а вы — вернуться к привычным делам.
                    </p>
                  </div>
                  <div className="w-full md:w-1/3 min-h-[250px] relative">
                    <img 
                      src="https://lh3.googleusercontent.com/d/1u1Fe0bh3KdhwUfot0jFqH45i3Xc6XzgS" 
                      alt="Happy child" 
                      className="absolute inset-0 w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-transparent md:block hidden"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-50 to-transparent md:hidden block"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Treatment Process */}
        <section id="process" className="py-12 bg-stone-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-6xl font-black text-stone-900 mb-6">Как проходит процедура</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {treatmentSteps.map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white rounded-[2.5rem] overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all group"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img 
                      src={step.img} 
                      alt={step.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-black text-lg shadow-lg">
                      {i + 1}
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center">
                        {step.icon}
                      </div>
                      <h4 className="text-xl font-black text-stone-900 tracking-tight">{step.title}</h4>
                    </div>
                    <p className="text-stone-600 font-medium leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Demonstration Section */}
        <section className="py-20 md:py-32 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-stone-50 p-8 md:p-12 rounded-[2.5rem] border border-stone-200 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-2 bg-emerald-500"></div>
                  <div className="flex items-start gap-6 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                      <AlertCircle size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-black text-stone-900 mb-2">Важно знать</h3>
                      <div className="w-12 h-1 bg-emerald-500 rounded-full"></div>
                    </div>
                  </div>
                  
                  <p className="text-lg md:text-2xl text-stone-700 font-medium leading-relaxed mb-8">
                    Педикулезом может заразиться любой человек, независимо от уровня дохода, социального статуса, пола и возраста. Не только дети заражаются в школах и садах – часто паразитов привозят из поездок. Это гораздо более распространенная проблема, чем принято считать.
                  </p>
                  
                  <div className="p-6 rounded-2xl bg-orange-500 text-white shadow-lg shadow-orange-200">
                    <p className="text-xl md:text-2xl font-black leading-tight">
                      Однако важно вовремя ее заметить и радикально решить!
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Aesthetic Window */}
                <div className="bg-stone-900 rounded-[2.5rem] shadow-[0_48px_96px_-12px_rgba(0,0,0,0.25)] overflow-hidden border-[8px] border-stone-900 relative z-10">
                  {/* Video Content */}
                  <div className="aspect-square relative overflow-hidden">
                    <iframe 
                      src="https://drive.google.com/file/d/1e63O2J9Rf0HN-cZVGrFeinavRykJtC5x/preview" 
                      className="absolute inset-0 w-full h-full scale-[1.3]"
                      allow="autoplay"
                      title="Video Demonstration"
                    ></iframe>
                  </div>
                </div>
                
                {/* Decorative background elements */}
                <div className="absolute -top-12 -right-12 w-64 h-64 bg-emerald-500/20 rounded-full blur-[100px] -z-10"></div>
                <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-orange-500/10 rounded-full blur-[100px] -z-10"></div>
                
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-2xl z-20 hidden md:block border border-stone-100">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                      <ShieldCheck size={28} />
                    </div>
                    <div>
                      <div className="text-stone-900 font-black text-lg">Гарантия</div>
                      <div className="text-stone-500 font-bold text-sm">Безопасности</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <div className="inline-flex items-center gap-3 bg-orange-50 border border-orange-100 px-6 py-3 rounded-2xl mb-8 animate-pulse">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-orange-900 font-bold text-sm md:text-base">
                  На сегодня, {todayDate}, осталось всего {availableSlots} {availableSlots === 1 ? 'свободное окошко' : availableSlots < 5 ? 'свободных окошка' : 'свободных окошек'}
                </span>
              </div>
              <h3 className="text-4xl font-black text-stone-900 mb-12">Стоимость процедуры</h3>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { count: "1 человек", price: "4 900 руб.", desc: "Индивидуальный подход" },
                  { count: "2 человека", price: "4 500 руб.", desc: "За каждого человека", popular: true },
                  { count: "3+ человека", price: "3 900 руб.", desc: "За каждого человека" }
                ].map((item, i) => (
                  <div key={i} className={`p-8 rounded-[2.5rem] border-2 transition-all ${item.popular ? 'border-emerald-500 bg-emerald-50 shadow-xl scale-105' : 'border-stone-100 bg-white hover:border-emerald-200'}`}>
                    {item.popular && <div className="text-emerald-600 text-xs font-black uppercase tracking-widest mb-4">Популярный выбор</div>}
                    <div className="text-stone-500 font-bold mb-2 uppercase tracking-tighter">{item.count}</div>
                    <div className="text-4xl font-black text-stone-900 mb-4">{item.price}</div>
                    <div className="text-stone-400 font-medium mb-8">{item.desc}</div>
                    <a 
                      href="https://s.salebot.pro/st/registrationee/mama_2" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block w-full py-4 rounded-2xl font-black transition-all ${item.popular ? 'bg-emerald-600 text-white hover:bg-emerald-700' : 'bg-stone-900 text-white hover:bg-stone-800'}`}
                    >
                      Заказать
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-24 bg-stone-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <div>
                <h2 className="text-3xl md:text-5xl font-black text-stone-900 mb-4">Отзывы наших клиентов</h2>
                <p className="text-xl text-stone-600 font-medium">Реальные истории людей, которым мы помогли.</p>
              </div>
              <div className="flex gap-4">
                <button 
                  onClick={prevReview}
                  className="w-14 h-14 rounded-full border border-stone-300 flex items-center justify-center hover:bg-white hover:border-emerald-500 transition-all text-stone-600 hover:text-emerald-600"
                >
                  <ArrowLeft size={24} />
                </button>
                <button 
                  onClick={nextReview}
                  className="w-14 h-14 rounded-full border border-stone-300 flex items-center justify-center hover:bg-white hover:border-emerald-500 transition-all text-stone-600 hover:text-emerald-600"
                >
                  <ArrowRight size={24} />
                </button>
              </div>
            </div>

            <div className="relative">
              <motion.div 
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -50) nextReview();
                  if (info.offset.x > 50) prevReview();
                }}
                animate={{ x: `-${currentReview * (isMobile ? 100 : 33.333)}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="flex gap-6 cursor-grab active:cursor-grabbing"
              >
                {reviews.map((review, i) => (
                  <div key={i} className="min-w-full md:min-w-[calc(33.333%-1rem)] bg-white p-8 rounded-[2rem] border border-stone-200 shadow-sm flex flex-col justify-between select-none">
                    <div>
                      <div className="flex gap-1 text-orange-400 mb-6">
                        {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                      </div>
                      <p className="text-lg text-stone-700 leading-relaxed mb-8 italic">"{review.text}"</p>
                    </div>
                    <div className="flex items-center justify-between pt-6 border-t border-stone-100">
                      <div>
                        <div className="font-black text-stone-900">{review.name}</div>
                        <div className="text-sm text-stone-500 font-medium">{review.city}</div>
                      </div>
                      <div className="text-xs text-stone-400 font-bold uppercase tracking-wider">{review.date}</div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-emerald-600 rounded-[3rem] p-8 md:p-16 text-white shadow-2xl relative overflow-hidden">
              <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Что вы получаете:</h3>
                  <p className="text-emerald-100 text-xl font-medium mb-8">Мы гарантируем не только результат, но и комфорт на каждом этапе.</p>
                </div>
                <ul className="grid sm:grid-cols-1 gap-8">
                  {[
                    { title: "Полное избавление", desc: "Подтверждается двойной проверкой с родителями." },
                    { title: "Бесплатная гарантия", desc: "Повторная процедура бесплатно, если найдете вшей в течение недели." },
                    { title: "Официальная справка", desc: "Для детского сада, школы или лагеря в тот же день." },
                    { title: "Экономия времени", desc: "Избавление от многочасового самостоятельного выведения." },
                    { title: "Здоровье волос", desc: "Никаких проблем с кожей головы от аптечных препаратов." }
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center shrink-0 mt-1">
                        <Check size={18} />
                      </div>
                      <div>
                        <div className="font-black text-xl mb-1 leading-tight">{item.title}</div>
                        <div className="text-emerald-100/80 font-medium">{item.desc}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-emerald-500 rounded-full blur-[100px] opacity-40"></div>
              <div className="absolute -left-20 -top-20 w-80 h-80 bg-emerald-400 rounded-full blur-[100px] opacity-20"></div>
            </div>
          </div>
        </section>

        {/* Guarantee Section */}
        <section id="guarantee" className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-stone-900 rounded-[2rem] md:rounded-[3rem] p-6 md:p-20 text-white grid md:grid-cols-2 gap-12 md:gap-16 items-center relative overflow-hidden">
              <div className="relative z-10 text-center md:text-left">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-emerald-500 rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8 shadow-lg shadow-emerald-500/20 mx-auto md:mx-0">
                  <ShieldCheck size={28} className="md:w-8 md:h-8" />
                </div>
                <h2 className="text-2xl md:text-5xl font-black mb-6 md:mb-8 leading-tight">Мы гарантируем <br /><span className="text-emerald-500">100% результат</span></h2>
                <p className="text-lg md:text-xl text-stone-400 mb-8 md:mb-10 leading-relaxed font-medium">
                  Если в течение 7 дней после нашей обработки вы обнаружите живых насекомых — мы приедем и проведем повторную процедуру абсолютно бесплатно.
                </p>
                <div className="space-y-3 md:space-y-4 inline-block text-left">
                  <div className="flex items-center gap-3 md:gap-4 text-base md:text-lg font-bold">
                    <CheckCircle2 className="text-emerald-500 shrink-0" size={20} />
                    Сертифицированные препараты
                  </div>
                  <div className="flex items-center gap-3 md:gap-4 text-base md:text-lg font-bold">
                    <CheckCircle2 className="text-emerald-500 shrink-0" size={20} />
                    Опытные медицинские работники
                  </div>
                  <div className="flex items-center gap-3 md:gap-4 text-base md:text-lg font-bold">
                    <CheckCircle2 className="text-emerald-500 shrink-0" size={20} />
                    Контроль качества через 7 дней
                  </div>
                </div>
              </div>
              <div className="relative z-10">
                <div className="aspect-square bg-stone-800 rounded-[1.5rem] md:rounded-[2rem] border border-stone-700 p-6 md:p-8 flex flex-col items-center justify-center text-center shadow-inner max-w-[280px] md:max-w-none mx-auto">
                  <div className="text-6xl md:text-8xl font-black text-emerald-500 mb-2 md:mb-4">7</div>
                  <div className="text-lg md:text-2xl font-black uppercase tracking-[0.2em] mb-2 md:mb-4">дней гарантии</div>
                  <p className="text-stone-400 text-sm md:text-base font-medium">на каждую процедуру выведения</p>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-500/5 blur-[120px] pointer-events-none"></div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 md:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-5xl font-black text-stone-900 mb-4 md:mb-6">Частые вопросы</h2>
              <p className="text-lg md:text-xl text-stone-600 font-medium">Все, что вы хотели знать о нашей работе.</p>
            </div>
            <div className="space-y-3 md:space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-stone-200 rounded-xl md:rounded-2xl overflow-hidden transition-all">
                  <button 
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full p-4 md:p-6 text-left flex items-center justify-between hover:bg-stone-50 transition-colors gap-4"
                  >
                    <span className="text-base md:text-lg font-black text-stone-900 leading-tight">{faq.q}</span>
                    <div className={`w-7 h-7 md:w-8 md:h-8 rounded-full bg-stone-100 flex items-center justify-center shrink-0 transition-transform ${activeFaq === i ? 'rotate-180' : ''}`}>
                      <ChevronRight size={16} className="md:w-[18px] md:h-[18px]" />
                    </div>
                  </button>
                  <AnimatePresence>
                    {activeFaq === i && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 md:p-6 pt-0 text-stone-600 text-sm md:text-lg leading-relaxed font-medium bg-stone-50/50">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 md:py-24 bg-orange-600 text-white relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 md:mb-8 leading-tight">
              Избавьтесь от насекомых <br className="hidden sm:block" />
              <span className="text-stone-900 font-serif italic">за пару часов</span>
            </h2>
            <p className="text-base md:text-xl text-orange-50/90 mb-10 md:mb-12 leading-relaxed font-medium max-w-2xl mx-auto">
              Ни один из педикулицидов не уничтожает 100% гнид. Наша медсестра быстро и профессионально удалит их вручную, гарантируя результат.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
              <a 
                href="https://s.salebot.pro/st/registrationee/mama_2" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-orange-700 px-8 md:px-10 py-4 md:py-5 rounded-2xl font-black text-lg md:text-xl hover:bg-stone-100 transition-all shadow-2xl flex items-center gap-3 w-full sm:w-auto justify-center"
              >
                Вызвать помощь
                <ChevronRight size={24} />
              </a>
              <div className="flex items-center gap-3 md:gap-4 text-base md:text-lg font-bold">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <Phone size={18} className="md:w-5 md:h-5" />
                </div>
                Анонимная консультация
              </div>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10 w-24 md:w-40 h-24 md:h-40 border-2 md:border-4 border-white rounded-full"></div>
            <div className="absolute bottom-20 right-20 w-40 md:w-60 h-40 md:h-60 border-4 md:border-8 border-white rounded-full"></div>
            <div className="absolute top-1/2 left-1/4 w-12 md:w-20 h-12 md:h-20 bg-white rounded-full"></div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-12 md:py-20 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-16 mb-12 md:mb-20">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-6 md:mb-8">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                  <LogoIcon size={24} />
                </div>
                <span className="font-bold text-xl tracking-tight">ВШЕЙ_НЕТ!</span>
              </div>
              <p className="text-stone-400 text-base md:text-lg max-w-sm leading-relaxed mb-6 md:mb-8">
                Профессиональный сервис по выведению вшей в Москве и Московской области. 100% анонимно и безопасно.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                  <MessageCircle size={20} />
                </div>
                <div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                  <Phone size={20} />
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-black text-xs md:text-sm uppercase tracking-widest mb-6 md:mb-8 text-stone-500">Навигация</h4>
              <ul className="space-y-3 md:space-y-4 text-stone-300 font-bold text-sm md:text-base">
                <li><a href="#signs" className="hover:text-emerald-500 transition-colors">Признаки</a></li>
                <li><a href="#process" className="hover:text-emerald-500 transition-colors">Как это работает</a></li>
                <li><a href="#guarantee" className="hover:text-emerald-500 transition-colors">Гарантия</a></li>
                <li><a href="#faq" className="hover:text-emerald-500 transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-xs md:text-sm uppercase tracking-widest mb-6 md:mb-8 text-stone-500">Контакты</h4>
              <ul className="space-y-3 md:space-y-4 text-stone-300 font-bold text-sm md:text-base">
                <li className="flex items-center gap-3">
                  <MapPin size={18} className="text-emerald-500 shrink-0" />
                  Москва и МО
                </li>
                <li className="flex items-center gap-3">
                  <Clock size={18} className="text-emerald-500 shrink-0" />
                  Круглосуточный прием заявок
                </li>
                <li className="flex items-center gap-3">
                  <Lock size={18} className="text-emerald-500 shrink-0" />
                  Полная анонимность
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 md:pt-10 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-6 text-stone-500 text-xs md:text-sm font-bold text-center md:text-left">
            <div>© 2026 ВШЕЙ_НЕТ! Все права защищены.</div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              <span className="hover:text-white cursor-pointer transition-colors">Политика конфиденциальности</span>
              <span className="hover:text-white cursor-pointer transition-colors">Оферта</span>
            </div>
          </div>
        </div>
      </footer>

      {/* FAB */}
      <AnimatePresence>
        {showFAB && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="fixed bottom-8 right-8 z-[60]"
          >
            <a 
              href="https://s.salebot.pro/st/registrationee/mama_2" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:bg-orange-600 transition-all hover:scale-110 group"
            >
              <MessageCircle size={32} className="group-hover:rotate-12 transition-transform" />
              <div className="absolute right-full mr-4 bg-white text-stone-900 px-4 py-2 rounded-xl shadow-xl text-sm font-black whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-stone-100">
                Нужна помощь?
              </div>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
      <OrderNotification />
    </div>
  );
};

export default App;
