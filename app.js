// 1. مسك عناصر الـ HTML (تعريف مرة واحدة فقط لكل عنصر)
let display = document.getElementById('display');
let controlsContainer = document.querySelector('.controls');
let quoteText = document.getElementById('quote');
let authorText = document.getElementById('author');

// 2. متغيرات الذاكرة للوقت
let seconds = 0;
let minutes = 0;
let hours = 0;
let timerId = null; 

// 3. دالة جلب الاقتباس من الـ API (تستخدم رابطاً بديلاً ومباشراً)
async function getQuote() {
    try {
        // استخدام API بديل خفيف ومفتوح للمتصفحات
        let response = await fetch('https://dummyjson.com/quotes/random');
        
        // إذا فشل الطلب لأي سبب (مثلاً السيرفر طاح)
        if (!response.ok) {
            throw new Error(`خطأ في السيرفر: ${response.status}`);
        }

        let data = await response.json();
        
        // الـ API هذا يرجع الاقتباس باسم quote والكاتب باسم author
        quoteText.textContent = `"${data.quote}"`;
        authorText.textContent = `— ${data.author}`;
        
    } catch (error) {
        quoteText.textContent = "عذراً، فشل الاتصال بخادم الاقتباسات.";
        authorText.textContent = "تأكد من اتصال الإنترنت.";
        console.error("تفاصيل العطل:", error);
    }
}

// تشغيل جلب الاقتباس فوراً عند تحميل الصفحة لأول مرة
getQuote();

// 4. دالة تحديث الوقت للمؤقت
function updateTime() {
    seconds++;
    if (seconds === 60) { seconds = 0; minutes++; }
    if (minutes === 60) { minutes = 0; hours++; }

    let h = String(hours).padStart(2, '0');
    let m = String(minutes).padStart(2, '0');
    let s = String(seconds).padStart(2, '0');

    display.textContent = h + ":" + m + ":" + s;
}

// 5. مستمع الأحداث الموحد للأزرار (Event Delegation)
if (controlsContainer) {
    controlsContainer.addEventListener('click', function(event) {
        if (event.target.tagName === 'BUTTON') {
            switch (event.target.id) {
                case 'start-btn': startTimer(); break;
                case 'stop-btn': stopTimer(); break;
                case 'reset-btn': resetTimer(); break;
            }
        }
    });
}

// 6. دالات التحكم بالوقت
function startTimer() {
    if (timerId === null) {
        timerId = setInterval(updateTime, 1000);
    }
}

// إيقاف المؤقت
function stopTimer() {
    if (timerId !== null) {
        clearInterval(timerId);
        timerId = null;
    }
}

// إعادة تعيين المؤقت وتغيير الاقتباس
function resetTimer() {
    stopTimer(); 
    seconds = 0; minutes = 0; hours = 0;
    display.textContent = "00:00:00"; 
    getQuote(); // جلب اقتباس جديد عند الضغط على ريستارت
}