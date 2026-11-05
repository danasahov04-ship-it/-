export default function Home() { 
return (
    <div className="w-full min-h-screen bg-white text-black">
    <header className="w-full h-[55px] bg-white flex items-center justify-between px-180 border-b border-gray-100">

        <div className="text-[21px] font-extrabold text-[#1c2d54]">
        BOXPACK
        </div>

        <div className="hidden md:flex items-center gap-7 text-[15px] text-black">
        <a href="#services" className=""><b>Услуги</b></a>
        <a href="#steps" className=""><b>Как это работает</b></a>
        <a href="#video" className=""><b>Видеофикация</b></a>
        <a href="#calculator" className=""><b>Калькулятор</b></a>
        <a href="#cases" className=""><b>Кейсы</b></a>
        <a href="#contacts" className=""><b>Контакты</b></a>
        </div>

    </header>

    <section className="w-full bg-[#1c2d54] text-white">

        <div className="max-w-[1180px] mx-auto px-6 md:px-10 py-[75px]">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div>

            <p className="text-[13px] text-blue-200 mb-5">
                Автоматизированный фулфилмент
            </p>

            <h1 className="text-[36px] md:text-[48px] font-bold leading-[1.15]">
                Фулфилмент,
                <br />
                который держит
                <br />
                сроки и репутацию
            </h1>

            <p className="text-[14px] text-blue-100 mt-5 leading-[1.5] max-w-[470px]">
                Автоматизированная упаковка, высокоточная обработка заказов
                и отправка в день поступления. Мы берем на себя хранение,
                сборку, маркировку и логистику.
            </p>

            <div className="flex items-center gap-6 mt-7">

                <a href="#calculator" className="text-[13px] font-semibold">
                Рассчитать стоимость 
                </a>

                <a href="#contacts" className="border border-blue-200 rounded px-4 py-2 text-[12px]">
                Получить консультацию
                </a>

            </div>

            <div className="grid grid-cols-3 gap-3 mt-10 max-w-[510px]">

                <div className="bg-white/10 rounded-lg p-4">
                <p className="text-[19px] font-bold">5000+</p>
                <p className="text-[10px] text-blue-200">заказов в день</p>
                </div>

                <div className="bg-white/10 rounded-lg p-4">
                <p className="text-[19px] font-bold">99.8%</p>
                <p className="text-[10px] text-blue-200">точность сборки</p>
                </div>

                <div className="bg-white/10 rounded-lg p-4">
                <p className="text-[19px] font-bold">FBO/FBS</p>
                <p className="text-[10px] text-blue-200">все маркетплейсы</p>
                </div>

            </div>

            </div>

            <div id="video" className="w-full aspect-video bg-[#d1d5df] rounded-lg flex items-center justify-center">

            <p className="text-[12px] text-gray-700">
                Видео автоматизированной упаковочной линии
            </p>

            </div>

        </div>

        </div>

    </section>

    <section id="steps" className="w-full bg-white py-[65px]">

        <div className="max-w-[1050px] mx-auto px-6">

        <div className="text-center">

            <h2 className="text-[25px] font-bold">
            Как начать работать с нами
            </h2>

            <p className="text-[13px] text-gray-600 mt-3">
            Подключение занимает всего несколько дней. Все процессы максимально автоматизированы.
            </p>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">

            <div className="bg-[#f0f0f0] border-t-[4px] border-gray-300 rounded-lg p-5 min-h-[145px]">
            <p className="text-[11px] font-bold">ШАГ 1</p>
            <h3 className="text-[14px] font-bold mt-2">Оставляете заявку</h3>
11:58
<p className="text-[11px] text-gray-400 mt-2">Через сайт или Telegram</p>
            </div>

            <div className="bg-[#f0f0f0] border-t-[4px] border-gray-300 rounded-lg p-5 min-h-[145px]">
            <p className="text-[11px] font-bold">ШАГ 2</p>
            <h3 className="text-[14px] font-bold mt-2">Получаете расчет</h3>
            <p className="text-[11px] text-gray-400 mt-2">Под ваш объем и формат работы</p>
            </div>

            <div className="bg-[#f0f0f0] border-t-[4px] border-gray-300 rounded-lg p-5 min-h-[145px]">
            <p className="text-[11px] font-bold">ШАГ 3</p>
            <h3 className="text-[14px] font-bold mt-2">Подписываем договор</h3>
            <p className="text-[11px] text-gray-400 mt-2">Через ЭДО</p>
            </div>

            <div className="bg-[#f0f0f0] border-t-[4px] border-gray-300 rounded-lg p-5 min-h-[145px]">
            <p className="text-[11px] font-bold">ШАГ 4</p>
            <h3 className="text-[14px] font-bold mt-2">Принимаем товар</h3>
            <p className="text-[11px] text-gray-400 mt-2">От поставщика или транспортной компании</p>
            </div>

            <div className="bg-[#f0f0f0] border-t-[4px] border-gray-300 rounded-lg p-5 min-h-[145px]">
            <p className="text-[11px] font-bold">ШАГ 5</p>
            <h3 className="text-[14px] font-bold mt-2">Автоматизированная упаковка</h3>
            <p className="text-[11px] text-gray-400 mt-2">С индивидуальным входным контролем</p>
            </div>

            <div className="bg-[#f0f0f0] border-t-[4px] border-gray-300 rounded-lg p-5 min-h-[145px]">
            <p className="text-[11px] font-bold">ШАГ 6</p>
            <h3 className="text-[14px] font-bold mt-2">Отправляем</h3>
            <p className="text-[11px] text-gray-400 mt-2">На маркетплейсы по всей России</p>
            </div>

            <div className="bg-[#f0f0f0] border-t-[4px] border-gray-300 rounded-lg p-5 min-h-[145px]">
            <p className="text-[11px] font-bold">ШАГ 7</p>
            <h3 className="text-[14px] font-bold mt-2">Получаете результат</h3>
            <p className="text-[11px] text-gray-400 mt-2">Отчеты и прозрачная статистика</p>
            </div>

        </div>

        </div>

    </section>

    <section id="services" className="w-full bg-[#f7f7f7] py-[70px]">

        <div className="max-w-[1050px] mx-auto px-6">

        <div className="text-center">

            <h2 className="text-[25px] font-bold">
            Услуги фулфилмента
            </h2>

            <p className="text-[13px] text-gray-600 mt-3">
            Полный цикл обработки товаров от приемки до доставки.
            </p>

        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">

            <div className="bg-white border-t-[4px] border-[#28c1cf] rounded-lg p-6 min-h-[145px]">
            <h3 className="text-[13px] font-bold">Приемка и сортировка</h3>
            <p className="text-[11px] text-gray-400 mt-3">Принимаем товары поставщиков и проверяем их на соответствие требованиям.</p>
            </div>

            <div className="bg-white border-t-[4px] border-[#28c1cf] rounded-lg p-6 min-h-[145px]">
            <h3 className="text-[13px] font-bold">Проверка на брак</h3>
            <p className="text-[11px] text-gray-400 mt-3">Контроль качества перед отправкой на маркетплейсы.</p>
            </div>

            <div className="bg-white border-t-[4px] border-[#28c1cf] rounded-lg p-6 min-h-[145px]">
            <h3 className="text-[13px] font-bold">Автоматизированная упаковка</h3>
            <p className="text-[11px] text-gray-400 mt-3">Упаковка продукции с использованием современных технологий.</p>
            </div>

            <div className="bg-white border-t-[4px] border-[#28c1cf] rounded-lg p-6 min-h-[145px]">
            <h3 className="text-[13px] font-bold">Сборка заказов</h3>
11:58
<p className="text-[11px] text-gray-400 mt-3">Быстрая комплектация заказов по вашим требованиям.</p>
            </div>

            <div className="bg-white border-t-[4px] border-[#28c1cf] rounded-lg p-6 min-h-[145px]">
            <h3 className="text-[13px] font-bold">Отправка на маркетплейсы</h3>
            <p className="text-[11px] text-gray-400 mt-3">FBO и FBS для всех крупных площадок.</p>
            </div>

            <div className="bg-white border-t-[4px] border-[#28c1cf] rounded-lg p-6 min-h-[145px]">
            <h3 className="text-[13px] font-bold">Хранение товаров</h3>
            <p className="text-[11px] text-gray-400 mt-3">Безопасное временное хранение продукции.</p>
            </div>

            <div className="bg-white border-t-[4px] border-[#28c1cf] rounded-lg p-6 min-h-[145px]">
            <h3 className="text-[13px] font-bold">Интеграции</h3>
            <p className="text-[11px] text-gray-400 mt-3">Синхронизация с маркетплейсами и CRM.</p>
            </div>

        </div>

        </div>

    </section>

    <section id="cases" className="w-full bg-[#1c2d54] py-[65px] text-white">

        <div className="max-w-[1050px] mx-auto px-6">

        <h2 className="text-center text-[25px] font-bold">
            Почему выбирают BOXPACK
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">

            <div className="bg-white/10 rounded-lg p-6">
            <h3 className="text-[15px] font-bold">Скорость</h3>
            <p className="text-[12px] text-blue-200 mt-3">До 20 000 товаров за смену и отправка день в день.</p>
            </div>

            <div className="bg-white/10 rounded-lg p-6">
            <h3 className="text-[15px] font-bold">Точность</h3>
            <p className="text-[12px] text-blue-200 mt-3">99.8% точность сборки благодаря автоматизации.</p>
            </div>

            <div className="bg-white/10 rounded-lg p-6">
            <h3 className="text-[15px] font-bold">Надежность</h3>
            <p className="text-[12px] text-blue-200 mt-3">Страхование товаров и круглосуточный контроль.</p>
            </div>

            <div className="bg-white/10 rounded-lg p-6">
            <h3 className="text-[15px] font-bold">Поддержка</h3>
            <p className="text-[12px] text-blue-200 mt-3">Персональный менеджер и оперативная помощь.</p>
            </div>
        </div>

        </div>
        
    </section>
    </div>
)
}
