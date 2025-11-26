import React, { useEffect, useRef, useState } from 'react';
import './index.css';

// --- SWIPER IMPORTS ---
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

export default function App() {
    const [loading, setLoading] = useState(true);
    const [glitch, setGlitch] = useState(false);
    const canvasRef = useRef(null);

    // Список навичок
    const techStack = [
        'HTML5 / CSS3', 'JavaScript (ES6+)', 'Python', 'C / C++',
        'PostgreSQL', 'SQLite', 'Docker', 'React', 'Tailwind CSS', 'Git'
    ];

    // --- Ефект Інтро ---
    useEffect(() => {
        const glitchTimer = setTimeout(() => {
            setGlitch(true);
        }, 1500);

        const loadTimer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => {
            clearTimeout(glitchTimer);
            clearTimeout(loadTimer);
        };
    }, []);

    // --- Ефект Матриці ---
    useEffect(() => {
        if (loading) return;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const characters = "HACKath0n BEST LVIV CORE TEAM 2025 IT`RESP 01".split("");
        const fontSize = 14;
        const columns = canvas.width / fontSize;
        const drops = Array(Math.ceil(columns)).fill(1);

        const draw = () => {
            ctx.fillStyle = "rgba(5, 5, 5, 0.05)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "#00FF00";
            ctx.font = fontSize + "px 'Press Start 2P'";

            for (let i = 0; i < drops.length; i++) {
                const text = characters[Math.floor(Math.random() * characters.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
                drops[i]++;
            }
        };

        const interval = setInterval(draw, 35);
        return () => { clearInterval(interval); window.removeEventListener('resize', resizeCanvas); };
    }, [loading]);

    // --- Навбар ---
    const Navbar = () => (
        <nav className="fixed top-6 right-6 z-50 hidden md:block">
            <ul className="flex gap-6">
                {['about', 'why-me', 'skills'].map((id, index) => {
                    const names = ["ПРО СЕБЕ", "ЧОМУ Я?", "НАВИЧКИ"];
                    return (
                        <li key={id}>
                            <a href={`#${id}`} className="font-pixel text-[10px] text-[#00FF00]/70 hover:text-[#00FF00] hover:drop-shadow-[0_0_5px_#00FF00] transition-all duration-300">
                                [{names[index]}]
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    );

    // --- КНОПКА ДЕТАЛЕЙ (Стандартна для роботи CSS) ---
    const MatrixDetails = ({ summary, children }) => {
        return (
            <details className="group my-4 w-full">
                <summary>
                    {summary}
                </summary>
                <div className="text-gray-300 leading-relaxed text-xl md:text-2xl font-terminal pt-4 border-t border-[#00FF00]/20">
                    {children}
                </div>
            </details>
        );
    };

    return (
        <>
            {/* ЕКРАН ЗАВАНТАЖЕННЯ */}
            {loading && (
                <div id="intro-overlay">
                    <div className={`intro-text ${glitch ? 'glitch-active' : ''}`}>
                        ЩЕ ЧУТЬ-ЧУТЬ І САЙТ ЗАГРУЗИТЬСЯ...
                    </div>
                </div>
            )}

            {/* ФОНОВІ ЕФЕКТИ */}
            <div className="scanlines"></div>
            <canvas ref={canvasRef} id="matrix-canvas"></canvas>

            {/* ОСНОВНИЙ КОНТЕНТ */}
            <div id="main-content" style={{ opacity: loading ? 0 : 1, transition: 'opacity 1.5s ease-in' }}>

                <a href="https://www.google.com/logos/2010/pacman10-i.html" target="_blank"
                   className="absolute top-6 left-6 z-50 hover:scale-110 transition-transform duration-200 cursor-pointer">
                    <img src="/pacman.png" alt="Pacman Ghost" className="w-[50px] h-[58px] pacman-icon" />
                </a>

                <Navbar />

                <main className="max-w-3xl mx-auto px-6 pt-40 relative z-10 pb-20">

                    <header className="mb-16 text-center animate-fade-in">
                        <h1 className="font-pixel text-2xl md:text-4xl leading-normal text-white glow-text mb-6 bg-black/60 inline-block p-2 backdrop-blur-sm border-b-4 border-[#00FF00]">
                            ПРИВІТ, Я <span className="text-[#00FF00]">ЖЕНЯ</span>
                        </h1>
                        <div className="pixel-border p-6 text-center mt-4 hover:shadow-[0_0_15px_rgba(0,255,0,0.3)] transition-shadow duration-300">
                            <p className="text-gray-400 text-lg mb-2 font-pixel text-[10px] md:text-xs">І ЦЕ МІЙ МОТИВАЦІЙНИЙ ЛИСТ НА IT RESP'А НА</p>
                            <p className="text-[#00FF00] text-3xl font-bold tracking-widest glow-text">BEST::HACKath0n</p>
                        </div>
                    </header>

                    <section id="about" className="mb-20">
                        <div className="flex items-center gap-4 mb-6 bg-black/80 w-fit px-2">
                            <div className="w-3 h-3 bg-[#00FF00]"></div>
                            <h2 className="font-pixel text-lg text-white">ТРІШКИ ПРО СЕБЕ ТА ЧОМУ Я ТАК ВМОТИВОВАНИЙ</h2>
                        </div>

                        <div className="pixel-border p-6 md:p-10">
                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                <div className="shrink-0 mx-auto md:mx-0">
                                    <img src="/me.png" alt="My Photo" className="w-40 h-40 object-cover border-2 border-[#00FF00] shadow-[4px_4px_0_0_#00FF00] grayscale hover:grayscale-0 transition-all duration-300" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-gray-300 leading-relaxed mb-4">
                                        Початком мого інтересу до програмування та <span className="text-[#00FF00] font-bold">IT</span> в цілому можна вважати той день, коли я вперше сів за комп'ютер...
                                    </p>

                                    <MatrixDetails summary="[ ЧИТАТИ ПОВНУ ІСТОРІЮ + ]">
                                        <p className="mb-4">Звісно, тоді я ще не вчив код, але це пробудило мою зацікавленість у роботі програм. В 10 років я почав цікавитись більше: пробував вчити <span className="text-retro-green">Python</span> (набридло), потім <span className="text-retro-green">Kotlin</span>.</p>
                                        <p className="mb-4">У 13 років були нові спроби навчання, але бракувало мотивації, хотілося більше грати в ігри. Проте буквально цього літа я зрозумів, що програмування — це класна штука. За літо та початок осені я прочитав книжки по <span className="text-retro-green">Python</span> та <span className="text-retro-green">C/C++</span>.</p>
                                        <p>Коли в мене була співбесіда в <span className="text-[#00FF00]">BEST</span>, я недовго думав, щоб обрати своїм топ-івентом <strong>BEST::HACKath0n</strong>. Я знав про нього раніше, і ідея цього івенту подобається мені найбільше. Я хочу зробити для нього максимально багато, а також стати частиною кортіми, подружитися з іншими учасниками, адже це класний досвід співпраці, який я прагну здобути.</p>
                                    </MatrixDetails>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="why-me" className="mb-20 animate-fade-in" style={{animationDelay: '0.4s'}}>
                        <div className="flex items-center gap-4 mb-6 bg-black/80 w-fit px-3 py-1 border-l-4 border-[#00FF00]">
                            <h2 className="font-pixel text-lg text-white">ЧОМУ САМЕ Я?</h2>
                        </div>

                        <div className="space-y-8">
                            <div className="pixel-border p-6 hover:bg-[rgba(0,255,0,0.1)] transition-colors duration-500">
                                <h3 className="font-bold text-white text-xl mb-2 font-pixel text-xs text-[#00FF00]">{`> IT RESP`}</h3>
                                <p className="text-gray-300 text-lg mt-4 leading-relaxed">
                                    У команді я пріоритетно хотів би бути <span className="text-[#00FF00] font-bold">IT RESP`ом</span>. Моя мета на цій посаді — розвинути наявні хард-скіли, поліпшити бота, поліпшити мої навчики у програмуванні, отримати нові софт-скіли, а також знайти друзів.
                                </p>
                            </div>

                            <div className="pixel-border p-6">
                                <h3 className="font-bold text-white text-xl mb-2 font-pixel text-xs text-[#00FF00]">{`> МІЙ ДОСВІД`}</h3>
                                <p className="text-gray-300 text-lg mt-4 mb-4">
                                    З значних досягнень маю 5-те місце на науковій конференції кафедри ЕОМ...
                                </p>
                                <MatrixDetails summary="[ ДЕТАЛІ ПРО ДОСВІД ]">
                                    <p className="mb-4">Я написав програму, яка аналізувала конкретний периметр і шукала зміну пікселів, порівнюючи поточний кадр із попереднім. Зараз з викладачем ми дописуємо статтю на цю тему.</p>
                                    <p>Також я виконував тестове завдання для однієї компанії (де потім мав співбесіду, яку, на жаль, не пройшов). Завдання полягало в написанні <span className="text-[#00FF00]">Data Pipeline</span>. Детальніше про цей проект можна глянути на моєму GitHub.</p>
                                </MatrixDetails>
                            </div>
                        </div>
                    </section>

                    <section id="skills" className="mb-20 animate-fade-in" style={{animationDelay: '0.6s'}}>
                        <div className="flex items-center gap-4 mb-6 bg-black/80 w-fit px-3 py-1 border-l-4 border-[#00FF00]">
                            <h2 className="font-pixel text-lg text-white">АРСЕНАЛ НАВИЧОК</h2>
                        </div>

                        {/* HARD SKILLS SWIPER */}
                        <div className="pixel-border p-6 mb-8">
                            <h3 className="font-pixel text-xs text-[#00FF00] mb-6 text-center border-b-2 border-[#00FF00] pb-2">[ TECH_STACK ]</h3>

                            <Swiper
                                modules={[Autoplay]}
                                spaceBetween={20}
                                slidesPerView={1}
                                loop={true}
                                // disableOnInteraction: false дозволяє автопрокрутці відновитись після ручного свайпу
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                breakpoints={{
                                    640: { slidesPerView: 2 },
                                    768: { slidesPerView: 3 },
                                }}
                                className="w-full py-4 cursor-grab active:cursor-grabbing"
                            >
                                {techStack.map((skill, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="flex items-center justify-center h-24 bg-[#00FF00]/5 border border-dashed border-[#00FF00]/50 hover:bg-[#00FF00]/20 transition-all duration-300 select-none">
                                    <span className="font-mono text-lg text-white text-center px-2">
                                        <span className="text-[#00FF00] mr-2">{`>`}</span>{skill}
                                    </span>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        {/* SOFT SKILLS */}
                        <div className="pixel-border p-6 mb-8">
                            <h3 className="font-pixel text-xs text-white mb-6 text-center border-b-2 border-white pb-2">[ SOFT_SKILLS ]</h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300 text-lg font-mono">
                                <li className="flex gap-3 items-start">
                                    <span className="text-[#00FF00] min-w-[10px] mt-1">+</span>
                                    <span>Коли був учасником двох ансамблів у музичній школі, я суттєво розвинув навички командної роботи.</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="text-[#00FF00] min-w-[10px] mt-1">+</span>
                                    <span>Також я дуже цілеспрямований, завдяки чому здобув по призовому місці на обох всеукраїнських конкурсах з гітари.</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="text-[#00FF00] min-w-[10px] mt-1">+</span>
                                    <span>Пунктуальність і стресостійкість прокачав в 11 класі, успішно поєднуючи навчання, репетиторство та музику.</span>
                                </li>
                            </ul>
                        </div>

                        {/* МЕНТОР */}
                        <div className="pixel-border p-6 hover:bg-[rgba(0,255,0,0.1)] transition-colors duration-500">
                            <h3 className="font-bold text-white text-xl mb-2 font-pixel text-xs text-[#00FF00] text-center">[ У КОГО БРАВ КТ ]</h3>
                            <p className="text-white text-2xl text-center mt-4 font-bold tracking-wider animate-pulse font-terminal">
                                Володимир Василишин
                            </p>
                            <p className="text-white text-2xl text-center mt-4 font-bold tracking-wider animate-pulse font-terminal">
                                Олексій Татарчинський
                            </p>
                        </div>
                    </section>

                    <section className="text-center pt-10 border-t-4 border-double border-[#00FF00]/30 animate-fade-in" style={{animationDelay: '0.8s'}}>
                        <p className="font-pixel text-xs md:text-sm mb-10 text-gray-400 animate-pulse-slow">
                            ДЯКУЮ, ЩО ПЕРЕГЛЯНУВ МІЙ МОТИВАЦІЙНИЙ ЛИСТ!
                        </p>

                        <div className="flex justify-center relative z-30">
                            <a href="https://github.com/Alkaness" target="_blank"
                               className="bg-[#00FF00] text-black font-pixel text-xs py-5 px-12
                                  hover:bg-white hover:scale-105 transition-all duration-300
                                  shadow-[0_0_20px_rgba(0,255,0,0.5)]"
                               style={{
                                   boxShadow: '-4px 0 0 0 #00FF00, 4px 0 0 0 #00FF00, 0 -4px 0 0 #00FF00, 0 4px 0 0 #00FF00'
                               }}>
                                {`> ПЕРЕЙТИ НА GITHUB`}
                            </a>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
}