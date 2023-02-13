export const renderMenu = (lang) => { 
  
  const ctrlLang = document.querySelector('.title_lang');
  const ctrlSource = document.querySelector('.title_source');  
  const ctrlShow = document.querySelector('.title_show');
  const ctrlGreet = document.querySelector('.ctrl_greet');
  const ctrlAudio = document.querySelector('.ctrl_audio');
  const ctrlTime = document.querySelector('.ctrl_time');
  const ctrlWeather = document.querySelector('.ctrl_weather');
  const ctrlQuote = document.querySelector('.ctrl_quote');
  const ctrlTodo = document.querySelector('.ctrl_todo');

  ctrlLang.textContent = (lang === 'ru') ? 'Выбор языка' : 'Choice language';
  ctrlSource.textContent = (lang === 'ru') ? 'Источник изображений' : 'Source images';  
  ctrlShow.textContent = (lang === 'ru') ? 'Скрыть / отобразить' : 'Hide / Show';
  ctrlGreet.textContent = (lang === 'ru') ? 'Приветствие' : 'Greeting';
  ctrlAudio.textContent = (lang === 'ru') ? 'Аудио' : 'Audio';
  ctrlTime.textContent = (lang === 'ru') ? 'Время' : 'Time';
  ctrlWeather.textContent = (lang === 'ru') ? 'Погода' : 'Weather';
  ctrlQuote.textContent = (lang === 'ru') ? 'Цитата' : 'Quote';  
}