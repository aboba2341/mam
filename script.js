document.addEventListener('DOMContentLoaded', function() {
    const message = document.getElementById('message');
    const heartContainer = document.getElementById('heart-container');
    
    // Показываем сообщение на 10 секунд
    setTimeout(function() {
        // Скрываем сообщение с анимацией
        message.style.opacity = '0';
        message.style.transition = 'opacity 0.5s ease-out';
        
        // После завершения анимации скрытия, показываем сердечко
        setTimeout(function() {
            message.style.display = 'none';
            heartContainer.classList.remove('hidden');
            
            // Небольшая задержка перед началом анимации рисования
            setTimeout(function() {
                heartContainer.classList.add('visible');
            }, 100);
        }, 500);
    }, 10000); // 10 секунд
});
