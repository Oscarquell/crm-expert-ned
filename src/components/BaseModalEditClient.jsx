import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setGetOneClient} from "../features/getOneClient/getOneClientSlice";
import {editClient} from "../crm-logic/editClient";

const BaseModalEditClient = () => {


  const clientInfo = useSelector((state) => state.getOneClient.getOneClient)
  const dispatch = useDispatch()

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    dispatch(setGetOneClient({
      ...clientInfo,
      [name]: value,
    }))
  }

  return (
    <div>
      <form>
        <h2 className='base-modal-title'>Редактирование клиента</h2>

        {/*Имя и телефон*/}
        <div className="base-modal-window-flex">
          <div className="base-modal-window">
            <input
              type="text"
              name='name'
              placeholder='Имя клиента'
              value={clientInfo.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="base-modal-window">
            <input
              type="text"
              name='phone'
              placeholder='Телефон'
              value={clientInfo.phone}
              onChange={handleInputChange}
            />

          </div>
        </div>

        {/*Адрес и тип недвижимости*/}
        <div className="base-modal-window-flex">
          <div className="base-modal-window">
            <input
              type="text"
              name='adress'
              placeholder='Адрес'
              value={clientInfo.adress}
              onChange={handleInputChange}
            />
          </div>
          <div className="base-modal-window">
            <select
              name="type_of_housing"
              value={clientInfo.type_of_housing}
              onChange={handleInputChange}
            >
              <option value="">Выберите вариант</option>
              <option value="Частный дом">Частный дом</option>
              <option value="Квартира">Квартира</option>
              <option value="Коммерческая недвижимость">Коммерческая недвижимость</option>
              <option value="Участок">Участок</option>
              <option value="Неважно">Неважно</option>
            </select>


          </div>
        </div>

        {/*Кол-во комнат и квадратура*/}
        <div className="base-modal-window-flex">
          <div className="base-modal-window">
            <select
              name="rooms"
              value={clientInfo.rooms}
              onChange={handleInputChange}
            >
              <option value="">Выберите вариант</option>
              <option value="1">1 комн.</option>
              <option value="2">2  комн.</option>
              <option value="3">3 комн.</option>
              <option value="4">4 комн.</option>
              <option value="5">5 комн.</option>
              <option value="6">6 комн.</option>
              <option value="7">7 комн.</option>
              <option value="8">8 комн. и более</option>
            </select>


          </div>
          <div className="base-modal-window">
            <input
              type="text"
              name='quadrature'
              placeholder='Квадратура'
              value={clientInfo.quadrature}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/*Этаж и всего этажей*/}
        <div className="base-modal-window-flex">
          <div className="base-modal-window">
            <select
              name="floor"
              value={clientInfo.floor}
              onChange={handleInputChange}
            >
              <option value="">Этаж</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="Неважно">Частный дом</option>
            </select>


          </div>
          <div className="base-modal-window">
            <select
              name="total_floors"
              value={clientInfo.total_floors}
              onChange={handleInputChange}
            >
              <option value="">Всего этажей</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
            </select>


          </div>
        </div>

        {/*Наша цена и цена в руки*/}
        <div className="base-modal-window-flex">
          <div className="base-modal-window">
            <input
              type="text"
              name='price'
              placeholder='Наша цена'
              value={clientInfo.price}
              onChange={handleInputChange}
            />
          </div>
          <div className="base-modal-window">
            <input
              type="text"
              name='owner_price'
              placeholder='Цена в руки'
              value={clientInfo.owner_price}
              onChange={handleInputChange}
            />

          </div>
        </div>

        {/*Вид отопления и серия*/}
        <div className="base-modal-window-flex">
          <div className="base-modal-window">
            <select
              name="heating"
              value={clientInfo.heating}
              onChange={handleInputChange}
            >
              <option value="">Вид отопления</option>
              <option value="Центральное отопление">Центральное отопление</option>
              <option value="Газовое отопление">Газовое отопление</option>
              <option value="Электрическое отопление">Электрическое отопление</option>
              <option value="Твердое топливо">Твердое топливо</option>
              <option value="Индивидуальное отопление">Индивидуальное отопление</option>
              <option value="Автономное отопление">Автономное отопление</option>
              <option value="Неважно">Неважно</option>
            </select>


          </div>
          <div className="base-modal-window">
            <select
              name="series"
              value={clientInfo.series}
              onChange={handleInputChange}
            >
              <option value="">Серия</option>
              <option value="104 серия">104 серия</option>
              <option value="104 серия улучшенная">104 серия улучшенная</option>
              <option value="105 серия">105 серия</option>
              <option value="105 серия улучшенная">105 серия улучшенная</option>
              <option value="106 серия">106 серия</option>
              <option value="106 серия улучшенная">106 серия улучшенная</option>
              <option value="107 серия">107 серия</option>
              <option value="108 серия">108 серия</option>
              <option value="Элитка">Элитка</option>
              <option value="Индивидуалка">Индивидуалка</option>
              <option value="Сталинка">Сталинка</option>
              <option value="Хрущевка">Хрущевка</option>
              <option value="Неважно">Неважно</option>
            </select>


          </div>
        </div>

        {/*Состояние и мебель*/}
        <div className="base-modal-window-flex">
          <div className="base-modal-window">
            <select
              name="repair"
              value={clientInfo.repair}
              onChange={handleInputChange}
            >
              <option value="">Состояние</option>
              <option value="Под ПСО">Под ПСО</option>
              <option value="Евроремонт">Евроремонт</option>
              <option value="Свежий ремонт">Свежий ремонт</option>
              <option value="Средний ремонт">Средний ремонт</option>
              <option value="Требуется ремонт">Требуется ремонт</option>
              <option value="Неважно">Неважно</option>
            </select>


          </div>
          <div className="base-modal-window">
            <select
              name="furniture"
              value={clientInfo.furniture}
              onChange={handleInputChange}
            >
              <option value="">Мебель</option>
              <option value="С мебелью">С мебелью</option>
              <option value="Без мебели">Без мебели</option>
              <option value="Частично мебелирована">Частично мебелирована</option>
              <option value="Кухонный гарнитур">Кухонный гарнитур</option>
              <option value="По договоренности">По договоренности</option>
              <option value="Неважно">Неважно</option>
            </select>


          </div>
        </div>

        {/*Участок и документы*/}
        <div className="base-modal-window-flex">
          <div className="base-modal-window">
            <select
              name="plot"
              value={clientInfo.plot}
              onChange={handleInputChange}
            >
              <option value="">Участок</option>
              <option value="1 сотка">1 сотка</option>
              <option value="2 сотки">2 сотки</option>
              <option value="3 сотки">3 сотки</option>
              <option value="4 сотки">4 сотки</option>
              <option value="5 соток">5 соток</option>
              <option value="6 соток">6 соток</option>
              <option value="7 соток">7 соток</option>
              <option value="8 соток">8 соток</option>
              <option value="9 соток">9 соток</option>
              <option value="10 соток и более">10 соток и более соток</option>
              <option value="Неважно">Квартира</option>
              <option value="Неважно">Неважно</option>
            </select>


          </div>
          <div className="base-modal-window">
            <select
              name="document"
              value={clientInfo.document}
              onChange={handleInputChange}
            >
              <option value="">Документы</option>
              <option value="Технический паспорт">Технический паспорт</option>
              <option value="Договор купли-продажи">Договор купли-продажи</option>
              <option value="Договор купли-продажи + техпаспорт">Договор купли-продажи + техпаспорт</option>
              <option value="Договор долевого участия">Договор долевого участия</option>
              <option value="Договор дарения">Договор дарения</option>
              <option value="Доверенность">Доверенность</option>
              <option value="Красная книга + техпаспорт">Красная книга + техпаспорт</option>
              <option value="Красная книга">Красная книга</option>
              <option value="Неважно">Неважно</option>
            </select>


          </div>
        </div>

        {/*Год постройки и коммуникации*/}
        <div className="base-modal-window-flex">
          <div className="base-modal-window">
            <select
              name="year_of_construction"
              value={clientInfo.year_of_construction}
              onChange={handleInputChange}
            >
              <option value="">Год строительства</option>
              <option value="1950 - 1960 гг.">1950 - 1960 гг.</option>
              <option value="1960 - 1970 гг.">1960 - 1970 гг.</option>
              <option value="1970 - 1980 гг.">1970 - 1980 гг.</option>
              <option value="1980 - 1990 гг.">1980 - 1990 гг.</option>
              <option value="1990 - 2000 гг.">1990 - 2000 гг.</option>
              <option value="2000 - 2005 гг.">2000 - 2005 гг.</option>
              <option value="2005 - 2010 гг.">2005 - 2010 гг.</option>
              <option value="2010 - 2015 гг.">2010 - 2015 гг.</option>
              <option value="2016г.">2016г.</option>
              <option value="2017г.">2017г.</option>
              <option value="2018г.">2018г.</option>
              <option value="2019г.">2019г.</option>
              <option value="2020г.">2020г.</option>
              <option value="2021г.">2021г.</option>
              <option value="2022г.">2022г.</option>
              <option value="2023г.">2023г.</option>
              <option value="2024г.">2024г.</option>
              <option value="2025г.">2025г.</option>
              <option value="2026г.">2026г.</option>
              <option value="2027г.">2027г.</option>
              <option value="Неважно.">Неважно / Неизвестно</option>
            </select>


          </div>
          <div className="base-modal-window">
            <input
              type="text"
              name='communications'
              placeholder='Коммуникации'
              value={clientInfo.communications}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/*Тип предложения и тип базы*/}
        <div className="base-modal-window-flex">
          <div className="base-modal-window">
            <select
              name="type_of_sentence"
              value={clientInfo.type_of_sentence}
              onChange={handleInputChange}
            >
              <option value="">Тип предложения</option>
              <option value="Собственник">Собственник</option>
              <option value="Риэлтор">Риэлтор</option>
              <option value="Неважно">Неважно</option>
            </select>


          </div>
          <div className="base-modal-window">
            <select
              name="type_of_base"
              value={clientInfo.type_of_base}
              onChange={handleInputChange}
            >
              <option value="">Тип клиента</option>
              <option value="Продажа">Продажа</option>
              <option value="Покупка">Покупка</option>
              <option value="Потенциальные">Потенциальные</option>
              <option value="Закрытые сделки">Закрытые сделки</option>
              <option value="Неактуальные">Неактуальные</option>
              <option value="На удаление">На удаление</option>

            </select>


          </div>
        </div>

        {/*Материал стен и ссылка*/}
        <div className="base-modal-window-flex">
          <div className="base-modal-window">
            <input
              type="text"
              name='link'
              placeholder='Ссылка'
              value={clientInfo.link}
              onChange={handleInputChange}
            />
          </div>
          <div className="base-modal-window">
            <select
              name="wall_material"
              value={clientInfo.wall_material}
              onChange={handleInputChange}
            >
              <option value="">Материал стен</option>
              <option value="Кирпич">Кирпич</option>
              <option value="Бетон">Бетон</option>
              <option value="Саманн">Саманн</option>
              <option value="Панельный">Панельный</option>
              <option value="Сиппанель">Сиппанель</option>
              <option value="Другой материал стен">Другой материал стен</option>
              <option value="Неважно">Неважно / Неизвестно</option>
            </select>


          </div>
        </div>

        {/*Описание*/}
        <div className="base-modal-window-flex">
          <textarea
            name="description"
            placeholder='Доп.информация'
            value={clientInfo.description}
            onChange={handleInputChange}
          />
        </div>

        {/*Менеджер*/}
        <div className="base-modal-window-flex">
          <select
            className='base-modal-window-manager-select'
            name="comments"
            value={clientInfo.comments}
            onChange={handleInputChange}
          >
            <option value="">Выберите менеджера</option>
            <option value="Замир Баялиев">Замир Баялиев</option>
            <option value="Алмаз Имашов">Алмаз Имашов</option>
            <option value="Усубалиев Эльдар">Усубалиев Эльдар</option>
            <option value="Самсалиев Арген">Самсалиев Арген</option>
          </select>
        </div>

        <input
          className='base-modal-add-button'
          type="button"
          value='Редактировать клиента'
          onClick={() => editClient(clientInfo, dispatch)}
        />

      </form>
    </div>
  );
};

export default BaseModalEditClient;