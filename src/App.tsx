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
  MessageCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
    name: "Елена К.",
    city: "Люберцы",
    text: "Очень вежливый персонал. Все объяснили, дали инструкцию по профилактике. Прошло 10 дней, голова чистая. Сервис на высшем уровне, от анонимности до качества работы.",
    date: "28 февраля 2026"
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

const App = () => {
  const [showFAB, setShowFAB] = useState(false);
  const [currentReview, setCurrentReview] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [yesCount, setYesCount] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
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
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white">
              <ShieldCheck size={20} />
            </div>
            <span className="font-bold text-xl tracking-tight text-emerald-900">ВШЕЙ_НЕТ!</span>
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
            className="bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-emerald-700 transition-all shadow-md shadow-emerald-200"
          >
            Вызвать помощь
          </a>
        </div>
      </header>

      <main className="pt-16 overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative pt-6 pb-16 md:py-32 overflow-hidden bg-white">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black uppercase tracking-[0.2em] mb-8 border border-emerald-200">
                <Lock size={14} />
                100% Анонимно в Москве
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-7xl font-black text-stone-900 leading-[1.05] mb-8 break-words">
                Экстренное выведение <br />
                <span className="text-orange-500 font-serif italic text-[1.15em] inline-block transform -rotate-1 mr-2">вшей</span>
                <span className="text-emerald-600 font-serif italic">за 2 часа</span>
              </h1>
              <p className="text-xl text-stone-600 mb-10 max-w-lg leading-relaxed font-medium">
                Быстро и конфиденциально решим проблему педикулеза. Можем приехать к вам уже сегодня!
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3 text-stone-800 font-bold">
                  <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                    <CheckCircle2 size={14} />
                  </div>
                  Выезд на дом
                </div>
                <div className="flex items-center gap-3 text-stone-800 font-bold">
                  <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                    <CheckCircle2 size={14} />
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
              <div className="aspect-[16/10] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-4 md:border-8 border-orange-500 relative">
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

        {/* Meme Image Section */}
        <section className="py-12 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative max-w-xs mx-auto"
            >
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl border-4 border-white relative">
                <img 
                  src="https://media1.giphy.com/media/v1.Y2lkPTZjMDliOTUyeGR1d2puZ25uZnBvYmVnczRwNnE2ODgwcTMyYnhxaXd1N2xhZjZ6NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cPfFeGPxWMLAvhTfhg/giphy.gif" 
                  alt="Meme" 
                  className="w-full h-full object-cover scale-110 origin-top-right"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Signs Section (Quiz) */}
        <section id="signs" className="py-24 bg-stone-900 text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                экспресс-диагностика
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tight">
                Есть ли у вас <br />
                <span className="text-emerald-500 font-serif italic">вши?</span>
              </h2>
              <p className="text-stone-400 max-w-xl mx-auto text-lg font-medium leading-relaxed">
                Ответьте на 8 простых вопросов, чтобы мгновенно оценить риск заражения и получить рекомендации.
              </p>
            </div>

            <div className="max-w-2xl mx-auto relative min-h-[450px] flex items-center justify-center">
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
                        className="py-5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-black text-xl transition-all shadow-lg shadow-emerald-900/20"
                      >
                        ДА
                      </button>
                      <button 
                        onClick={() => handleQuizAnswer(false)}
                        className="py-5 bg-stone-700 hover:bg-stone-600 text-white rounded-2xl font-black text-xl transition-all shadow-lg"
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
                        className="bg-white text-emerald-700 py-5 rounded-2xl font-black text-xl hover:bg-stone-100 transition-all shadow-xl block"
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
        </section>

        {/* Process Section */}
        <section id="process" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-black mb-6 text-stone-900">
                  Профессиональное выведение <span className="text-orange-500 font-serif italic text-[1.1em]">вшей</span> на дому
                </h2>
                <p className="text-xl text-stone-600 mb-12 font-medium">Вы платите только за процедуру. Все необходимые средства медсестра привезет с собой.</p>
                <div className="space-y-12">
                  {[
                    {
                      step: "01",
                      title: "БЕЗОПАСНЫЙ СПРЕЙ",
                      desc: "Используем сертифицированный состав, который мгновенно блокирует дыхание насекомых, не повреждая кожу."
                    },
                    {
                      step: "02",
                      title: "СПЕЦИАЛЬНЫЙ МУСС",
                      desc: "Профессиональный мусс растворяет клейкое вещество, которым гниды крепятся к волосам, делая их удаление легким."
                    },
                    {
                      step: "03",
                      title: "КОНДИЦИОНЕР",
                      desc: "Специальный уход закрывает чешуйки волос, облегчает скольжение гребня и восстанавливает структуру после обработки."
                    },
                    {
                      step: "04",
                      title: "ТЩАТЕЛЬНОЕ ВЫЧЕСЫВАНИЕ",
                      desc: "Кропотливая работа (до 2 часов) по уникальной методике прядь за прядью до идеальной чистоты."
                    }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-8">
                      <div className="text-4xl md:text-6xl font-black text-emerald-100 leading-none min-w-[60px] md:min-w-[80px]">{item.step}</div>
                      <div>
                        <h4 className="text-2xl font-bold mb-3 text-stone-900 uppercase tracking-tight">{item.title}</h4>
                        <p className="text-lg text-stone-600 leading-relaxed font-medium">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-emerald-600 rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl border-4 border-emerald-500/20">
                <div className="relative z-10">
                  <h3 className="text-3xl font-black mb-10">Почему выбирают нас?</h3>
                  <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                        <CheckCircle2 className="text-white" size={14} />
                      </div>
                      <span className="text-lg font-medium"><strong>Анонимность:</strong> Медсестра приезжает в обычной одежде, без опознавательных знаков на сумках.</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                        <CheckCircle2 className="text-white" size={14} />
                      </div>
                      <span className="text-lg font-medium"><strong>Скорость:</strong> Выезд в течение 8 рабочих часов после подтверждения заказа.</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                        <CheckCircle2 className="text-white" size={14} />
                      </div>
                      <span className="text-lg font-medium"><strong>Безопасность:</strong> Используем только сертифицированные средства, безопасные для детей.</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                        <CheckCircle2 className="text-white" size={14} />
                      </div>
                      <span className="text-lg font-medium"><strong>Бонус:</strong> После оплаты вы получите подробный мануал по профилактике повторного заражения.</span>
                    </li>
                  </ul>
                </div>
                <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-emerald-500 rounded-full blur-[100px] opacity-40"></div>
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
                animate={{ x: `-${currentReview * (isMobile ? 100 : 33.333)}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="flex gap-6"
              >
                {reviews.map((review, i) => (
                  <div key={i} className="min-w-full md:min-w-[calc(33.333%-1rem)] bg-white p-8 rounded-[2rem] border border-stone-200 shadow-sm flex flex-col justify-between">
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

        {/* Guarantee Section */}
        <section id="guarantee" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-stone-900 rounded-[3rem] p-8 md:p-20 text-white grid md:grid-cols-2 gap-16 items-center relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-emerald-500/20">
                  <ShieldCheck size={32} />
                </div>
                <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">Мы гарантируем <br /><span className="text-emerald-500">100% результат</span></h2>
                <p className="text-xl text-stone-400 mb-10 leading-relaxed font-medium">
                  Если в течение 7 дней после нашей обработки вы обнаружите живых насекомых — мы приедем и проведем повторную процедуру абсолютно бесплатно.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-lg font-bold">
                    <CheckCircle2 className="text-emerald-500" size={24} />
                    Сертифицированные препараты
                  </div>
                  <div className="flex items-center gap-4 text-lg font-bold">
                    <CheckCircle2 className="text-emerald-500" size={24} />
                    Опытные медицинские работники
                  </div>
                  <div className="flex items-center gap-4 text-lg font-bold">
                    <CheckCircle2 className="text-emerald-500" size={24} />
                    Контроль качества через 7 дней
                  </div>
                </div>
              </div>
              <div className="relative z-10">
                <div className="aspect-square bg-stone-800 rounded-[2rem] border border-stone-700 p-8 flex flex-col items-center justify-center text-center shadow-inner">
                  <div className="text-8xl font-black text-emerald-500 mb-4">7</div>
                  <div className="text-2xl font-black uppercase tracking-[0.2em] mb-4">дней гарантии</div>
                  <p className="text-stone-400 font-medium">на каждую процедуру выведения</p>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-500/5 blur-[120px] pointer-events-none"></div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-stone-900 mb-6">Частые вопросы</h2>
              <p className="text-xl text-stone-600 font-medium">Все, что вы хотели знать о нашей работе.</p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-stone-200 rounded-2xl overflow-hidden transition-all">
                  <button 
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-stone-50 transition-colors"
                  >
                    <span className="text-lg font-black text-stone-900">{faq.q}</span>
                    <div className={`w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center transition-transform ${activeFaq === i ? 'rotate-180' : ''}`}>
                      <ChevronRight size={18} />
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
                        <div className="p-6 pt-0 text-stone-600 text-lg leading-relaxed font-medium bg-stone-50/50">
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
        <section className="py-24 bg-emerald-600 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight">
              Готовы избавиться от <br />
              <span className="text-stone-900 font-serif italic">проблемы навсегда?</span>
            </h2>
            <p className="text-xl md:text-2xl text-emerald-50 text-emerald-100/80 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
              Не тратьте время на неэффективные аптечные средства. Вызовите профессионалов и забудьте о вшах за один вечер.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="https://s.salebot.pro/st/registrationee/mama_2" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-emerald-700 px-10 py-5 rounded-2xl font-black text-xl hover:bg-stone-100 transition-all shadow-2xl flex items-center gap-3 w-full sm:w-auto justify-center"
              >
                Вызвать помощь
                <ChevronRight size={24} />
              </a>
              <div className="flex items-center gap-4 text-lg font-bold">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Phone size={20} />
                </div>
                Анонимная консультация
              </div>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10 w-40 h-40 border-4 border-white rounded-full"></div>
            <div className="absolute bottom-20 right-20 w-60 h-60 border-8 border-white rounded-full"></div>
            <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-white rounded-full"></div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-20 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white">
                  <ShieldCheck size={20} />
                </div>
                <span className="font-bold text-xl tracking-tight">ВШЕЙ_НЕТ!</span>
              </div>
              <p className="text-stone-400 text-lg max-w-sm leading-relaxed mb-8">
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
              <h4 className="font-black text-sm uppercase tracking-widest mb-8 text-stone-500">Навигация</h4>
              <ul className="space-y-4 text-stone-300 font-bold">
                <li><a href="#signs" className="hover:text-emerald-500 transition-colors">Признаки</a></li>
                <li><a href="#process" className="hover:text-emerald-500 transition-colors">Как это работает</a></li>
                <li><a href="#guarantee" className="hover:text-emerald-500 transition-colors">Гарантия</a></li>
                <li><a href="#faq" className="hover:text-emerald-500 transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-sm uppercase tracking-widest mb-8 text-stone-500">Контакты</h4>
              <ul className="space-y-4 text-stone-300 font-bold">
                <li className="flex items-center gap-3">
                  <MapPin size={18} className="text-emerald-500" />
                  Москва и МО
                </li>
                <li className="flex items-center gap-3">
                  <Clock size={18} className="text-emerald-500" />
                  Круглосуточный прием заявок
                </li>
                <li className="flex items-center gap-3">
                  <Lock size={18} className="text-emerald-500" />
                  Полная анонимность
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-10 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-6 text-stone-500 text-sm font-bold">
            <div>© 2026 ВШЕЙ_НЕТ! Все права защищены.</div>
            <div className="flex gap-8">
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
              className="bg-emerald-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:bg-emerald-700 transition-all hover:scale-110 group"
            >
              <MessageCircle size={32} className="group-hover:rotate-12 transition-transform" />
              <div className="absolute right-full mr-4 bg-white text-stone-900 px-4 py-2 rounded-xl shadow-xl text-sm font-black whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-stone-100">
                Нужна помощь?
              </div>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
