import React, { useState } from 'react';

export default function Checklist({userName = 'asf'}) {

    const [input, setInput] = useState({ value: ''});
    const valueChange = (e) => setInput((prev) => ({ ...prev, value: e.target.value }));

return (
    <>
    <div class="container bg-light rounded-3 mt-3" style={{
        width: "700px"
    }}>
    <div className='mb-5 pt-3'>
    <div class="container rounded-3 border border-dark pt-3" style={{
        width: "600px"
    }}>
            <p class="text-body font-weight-bold">Привет, <mark>{userName}!</mark></p>
            <p class="text-body">И добро пожаловать в команду Высокогорья!</p>
            <p class="text-body">Впереди нас ждет интересное путешествие в мир нашей компании, и самым главным проводником будет - <mark>{userName}</mark></p>
            <p class="text-body">Мы подготовили для тебя чек-лист на первый день</p>
            <footer class="blockquote-footer">процесс выполнения будет сохраняться, поэтому ты можешь закрывать пункты в удобном для тебя порядке</footer>
        </div>
        
        </div>
        
        <p class="text-info pt-3"><strong>Нужно подготовить твое рабочее место:</strong></p>
        <div class="form-check">
            <input onChange={valueChange} 
            class="form-check-input"
            type="checkbox" value="" 
            id="flexCheckDefault" />
            <label class="form-check-label" for="flexCheckDefault"><p class="text-dark">Наставник выдал мне пропуск</p></label>
        </div>
        <div class="form-check">
            <input onChange={valueChange} 
            class="form-check-input" 
            type="checkbox" 
            value="" 
            id="flexCheckDefault" />
            <label class="form-check-label" for="flexCheckDefault"><p class="text-dark">Наставник сообщил пароль от Wi-Fi</p></label>
        </div>
        <div class="form-check">
            <input onChange={valueChange} 
            class="form-check-input" 
            type="checkbox" 
            value="" 
            id="flexCheckDefault" />
            <label class="form-check-label" for="flexCheckDefault"><p class="text-dark">Системный администратор выдал мне ноутбук</p></label>
        </div>
        <div class="form-check">
            <input onChange={valueChange} 
            class="form-check-input" 
            type="checkbox" 
            value="" 
            id="flexCheckDefault" />
            <label class="form-check-label" for="flexCheckDefault"><p class="text-dark">Системный администратор выдал мне доступы к почте</p></label>
        </div>
        <div class="form-check">
            <input onChange={valueChange} 
            class="form-check-input" 
            type="checkbox" 
            value="" 
            id="flexCheckDefault" />
            <label class="form-check-label" for="flexCheckDefault"><p class="text-dark">Ты отправил(-а) офис-менеджеру на почту список необходимой для тебя канцелярии</p></label>
        </div>

        <p class="text-info mt-10 pt-3"><strong>Важно познакомиться с коллегами:</strong></p>
        <div class="form-check">
            <input onChange={valueChange} 
            class="form-check-input" 
            type="checkbox" 
            value="" 
            id="flexCheckDefault" />
            <label class="form-check-label" for="flexCheckDefault"><p class="text-dark">Ты познакомился (-ась) со своим руководителем</p></label>
        </div>
        <div class="form-check">
            <input onChange={valueChange} 
            class="form-check-input" 
            type="checkbox" 
            value="" 
            id="flexCheckDefault" />
            <label class="form-check-label" for="flexCheckDefault"><p class="text-dark">Ты написал(-а) сообщение в командный чат</p></label>
        </div>
        <div class="form-check">
            <input onChange={valueChange} 
            class="form-check-input" 
            type="checkbox" 
            value="" 
            id="flexCheckDefault" />
            <label class="form-check-label" for="flexCheckDefault"><p class="text-dark">Напиши имена трех твоих коллег по отделу:<input class="form-control col-xs-2" id="ex1" type="text"/></p></label>
            </div>
    <p class="text-info mt-10 pt-3"><strong>Важно пройти оформление в отделе кадров:</strong></p>
    <div class="form-check">
            <input onChange={valueChange} 
            class="form-check-input" 
            type="checkbox" 
            value="" 
            id="flexCheckDefault" />
            <label class="form-check-label" for="flexCheckDefault"><p class="text-dark">Ты отправил (-а)  сканды документы на оформление в отдел кадров</p></label>
        </div>
        <div class="form-check">
            <input onChange={valueChange} 
            class="form-check-input" 
            type="checkbox" 
            value="" 
            id="flexCheckDefault" />
            <label class="form-check-label" for="flexCheckDefault"><p class="text-dark">Ты подписал (-а) соглашение о коммерческой тайне</p></label>
        </div>
        <p class="text-info mt-10 pt-3"><strong>А теперь самое время работать:</strong></p>
    <div class="form-check">
            <input onChange={valueChange} 
            class="form-check-input" 
            type="checkbox" 
            value="" 
            id="flexCheckDefault" />
            <label class="form-check-label" for="flexCheckDefault"><p class="text-dark">Получи свою первую задачу у руководителя</p></label>
        </div>
        <div class="form-check">
            <input onChange={valueChange} 
            class="form-check-input" 
            type="checkbox" 
            value="" 
            id="flexCheckDefault" />
            <label class="form-check-label" for="flexCheckDefault"><p class="text-dark">Создай подпись в почте по корпоративному шаблону</p></label>
        </div>

        <div class="container bg-secondary rounded-2 mt-3" style={{
        width: "500px"
    }}>
        
        <p class="text-center">Классного путешествия!</p>
        <p class="text-center">Команда Высокой горы 💙</p>

        </div>
        <div class="pt-3"></div>
        </div>
        </>

)

}