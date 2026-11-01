export default function HomePage() {
  return (
    <>
      {/* ==================== ШАПКА ==================== */}
      <header className="bg-white py-4 shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Логотип */}
          <a href="#" className="text-2xl font-bold text-[#1a2a52]">
            BOXPACK
          </a>

          {/* Навигация */}
          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#steps"
              className="text-sm font-medium text-gray-600 transition hover:text-[#1a2a52]"
            >
              Как начать
            </a>
            <a
              href="#services"
              className="text-sm font-medium text-gray-600 transition hover:text-[#1a2a52]"
            >
              Услуги
            </a>
            <a
              href="#why"
              className="text-sm font-medium text-gray-600 transition hover:text-[#1a2a52]"
            >
              Почему мы
            </a>
            <a
              href="#contacts"
              className="rounded-lg bg-[#1a2a52] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#2a3a62]"
            >
              Связаться
            </a>
          </nav>

          {/* Мобильная кнопка меню */}
          <button className="text-[#1a2a52] md:hidden" aria-label="Меню">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* ==================== ПЕРВЫЙ ЭКРАН (HERO) ==================== */}
      <section className="bg-[#1a2a52] py-16 text-white sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Левая колонка — текст */}
            <div>
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Фулфилмент для вашего бизнеса
              </h1>
              <p className="mt-6 max-w-lg text-lg text-gray-300">
                BOXPACK берёт на себя все операции с товаром: приёмка,
                хранение, сборка, упаковка и доставка. Вы занимаетесь
                продажами — мы всё остальным.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#contacts"
                  className="rounded-lg bg-white px-7 py-3 text-sm font-semibold text-[#1a2a52] transition hover:bg-gray-100"
                >
                  Оставить заявку
                </a>
                <a
                  href="#services"
                  className="text-sm font-medium text-gray-300 underline underline-offset-4 transition hover:text-white"
                >
                  Узнать больше →
                </a>
              </div>

              {/* Статистика — 3 карточки с цифрами */}
              <div className="mt-12 grid grid-cols-3 gap-6">
                <div className="rounded-xl bg-white/10 p-4 backdrop-blur">
                  <p className="text-3xl font-bold">500+</p>
                  <p className="mt-1 text-xs text-gray-300">Клиентов</p>
                </div>
                <div className="rounded-xl bg-white/10 p-4 backdrop-blur">
                  <p className="text-3xl font-bold">50 000</p>
                  <p className="mt-1 text-xs text-gray-300">Заказов в месяц</p>
                </div>
                <div className="rounded-xl bg-white/10 p-4 backdrop-blur">
                  <p className="text-3xl font-bold">99,9%</p>
                  <p className="mt-1 text-xs text-gray-300">Точность сборки</p>
                </div>
              </div>
            </div>

{/* Правая колонка — место под видео */}
            <div className="relative">
              <div className="flex aspect-video w-full items-center justify-center rounded-2xl border-2 border-dashed border-white/30 bg-white/5">
                <div className="text-center">
                  <svg
                    className="mx-auto h-16 w-16 text-white/40"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="mt-3 text-sm text-gray-400">
                    Видео о компании
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== КАК НАЧАТЬ РАБОТАТЬ С НАМИ (7 шагов) ==================== */}
      <section id="steps" className="bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-[#1a2a52] sm:text-4xl">
            Как начать работать с нами
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            7 простых шагов — и ваш товар уже на нашем складе, готовый к
            отправке покупателям
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
            {/* Шаг 1 */}
            <div className="rounded-[10px] bg-white p-5 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1a2a52] text-sm font-bold text-white">
                1
              </div>
              <h3 className="mt-4 text-sm font-semibold text-[#1a2a52]">
                Оставляете заявку
              </h3>
              <p className="mt-2 text-xs text-gray-500">
                Заполняете форму на сайте или звоните нам
              </p>
            </div>

            {/* Шаг 2 */}
            <div className="rounded-[10px] bg-white p-5 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1a2a52] text-sm font-bold text-white">
                2
              </div>
              <h3 className="mt-4 text-sm font-semibold text-[#1a2a52]">
                Получаете расчёт
              </h3>
              <p className="mt-2 text-xs text-gray-500">
                Мы считаем стоимость услуг под ваш товар
              </p>
            </div>

            {/* Шаг 3 */}
            <div className="rounded-[10px] bg-white p-5 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1a2a52] text-sm font-bold text-white">
                3
              </div>
              <h3 className="mt-4 text-sm font-semibold text-[#1a2a52]">
                Подписываем договор
              </h3>
              <p className="mt-2 text-xs text-gray-500">
                Согласовываем условия и фиксируем цены
              </p>
            </div>

            {/* Шаг 4 */}
            <div className="rounded-[10px] bg-white p-5 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1a2a52] text-sm font-bold text-white">

4
              </div>
              <h3 className="mt-4 text-sm font-semibold text-[#1a2a52]">
                Отгружаете товар
              </h3>
              <p className="mt-2 text-xs text-gray-500">
                Привозите или отправляете груз на наш склад
              </p>
            </div>

            {/* Шаг 5 */}
            <div className="rounded-[10px] bg-white p-5 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1a2a52] text-sm font-bold text-white">
                5
              </div>
              <h3 className="mt-4 text-sm font-semibold text-[#1a2a52]">
                Интегрируемся
              </h3>
              <p className="mt-2 text-xs text-gray-500">
                Подключаем вашу CRM или интернет-магазин
              </p>
            </div>

            {/* Шаг 6 */}
            <div className="rounded-[10px] bg-white p-5 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1a2a52] text-sm font-bold text-white">
                6
              </div>
              <h3 className="mt-4 text-sm font-semibold text-[#1a2a52]">
                Мы принимаем товар
              </h3>
              <p className="mt-2 text-xs text-gray-500">
                Сверяем количество и размещаем на складе
              </p>
            </div>

            {/* Шаг 7 */}
            <div className="rounded-[10px] bg-white p-5 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1a2a52] text-sm font-bold text-white">
                7
              </div>
              <h3 className="mt-4 text-sm font-semibold text-[#1a2a52]">
                Начинаем работу
              </h3>
              <p className="mt-2 text-xs text-gray-500">
                Принимаем и обрабатываем заказы покупателей
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== УСЛУГИ ФУЛФИЛМЕНТА (7 карточек) ==================== */}
      <section id="services" className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-[#1a2a52] sm:text-4xl">
            Услуги фулфилмента
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            Полный цикл работы с товаром — от приёмки на складе до доставки
            конечному покупателю
          </p>
          </div>
          </section>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* Услуга 1 — Приёмка товара */}
            <div className="rounded-[10px] border border-gray-200 p-6 transition hover:border-[#1a2a52] hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
                <svg className="h-6 w-6 text-[#1a2a52]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="mt-4 text-base font-semibold text-[#1a2a52]">Приёмка товара</h3>
              <p className="mt-2 text-sm text-gray-500">
                Разгрузка, сверка количества, проверка качества и маркировка товара
              </p>
            </div>
            </div>

            {/* Услуга 2 — Хранение */}
            <div className="rounded-[10px] border border-gray-200 p-6 transition hover:border-[#1a2a52] hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
                <svg className="h-6 w-6 text-[#1a2a52]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="mt-4 text-base font-semibold text-[#1a2a52]">Хранение</h3>
              <p className="mt-2 text-sm text-gray-500">
                Ответственное хранение на современном складе класса А с климат-контролем
              </p>
            </div>

            {/* Услуга 3 — Сборка заказов */}
            <div className="rounded-[10px] border border-gray-200 p-6 transition hover:border-[#1a2a52] hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
                <svg className="h-6 w-6 text-[#1a2a52]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="mt-4 text-base font-semibold text-[#1a2a52]">Сборка заказов</h3>
              <p className="mt-2 text-sm text-gray-500">
                Комплектация по заказам с точностью 99,9% и фотофиксацией
              </p>
            </div>

            {/* Услуга 4 — Упаковка */}
            <div className="rounded-[10px] border border-gray-200 p-6 transition hover:border-[#1a2a52] hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
                <svg className="h-6 w-6 text-[#1a2a52]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="mt-4 text-base font-semibold text-[#1a2a52]">Упаковка</h3>
              <p className="mt-2 text-sm text-gray-500">
                Индивидуальная и транспортная упаковка, бережная упаковка хрупких товаров
              </p>
            </div>

            {/* Услуга 5 — Доставка */}
            <div className="rounded-[10px] border border-gray-200 p-6 transition hover:border-[#1a2a52] hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
                <svg className="h-6 w-6 text-[#1a2a52]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
              </div>
              <h3 className="mt-4 text-base font-semibold text-[#1a2a52]">Доставка</h3>
              </div>
              </>
              )
            }