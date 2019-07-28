import React, { useContext, useState } from 'react';
import { SelectTeamContext } from '../context/SelectedTeamContext';

const SelectTeam = () => {
  const { dispatch } = useContext(SelectTeamContext);
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');
  const [option3, setOption3] = useState('');
  const [option4, setOption4] = useState('');
  const [option5, setOption5] = useState('');

  const handleSubmission = e => {
    e.preventDefault();
    dispatch({ type: 'ADD_TEAM', selectedTeam: [option1, option2, option3, option4, option5 ] })
  }
  const setState = e => {
    const { id, value } = e.currentTarget;
    if (!isButtonEnabled) {
      switch(id) {
        case 'option1':
          return setOption1(value);
        case 'option2':
          return setOption2(value);
        case 'option3':
          return setOption3(value);
        case 'option4':
            return setOption4(value);
        case 'option5':
          return setOption5(value);
        default:
          return ''
      }
    } 
  }

  const isButtonEnabled = option1.length > 0 && option2.length > 0 && option3.length > 0 && option4.length > 0 && option5.length > 0;
  return (
    <form onSubmit={handleSubmission} name="selectTeam" netlify>
      <h3>Select Your Team</h3>
      <select name="yokozuna-ozeki" id="option1" onChange={setState} defaultValue="">
        <option value="" disabled>Select Yokozuna/Ozeki</option>
        <option value="Kakuryu">Kakuryu - Yokozuna</option>
        <option value="Hakuho">Hakuho - Yokozuna</option>
        <option value="Goeido">Goeido - Ozeki</option>
        <option value="Takayasu">Takayasu - Ozeki</option>
        <option value="Tochinoshin">Tochinoshin - Ozeki</option>
        <option value="Takakeisho">Takakeisho - Ozeki</option>
      </select>
      <select name="sekiwake-komusubi" id="option2" onChange={setState} defaultValue="">
        <option value="" disabled>Select Sekiwake/Komusubi</option>
        <option value="Mitakeumi">Mitakeumi - Sekiwake</option>
        <option value="Tamawashi">Tamawashi - Sekiwake</option>
        <option value="Abi">Abi - Komosubi</option>
        <option value="Ryuden">Ryuden - Komosubi</option>
      </select>
      <select name="upper-maegashira" id="option3" onChange={setState} defaultValue="">
        <option value="" disabled>Select Upper Maegashira</option>
        <option value="Asanoyama">Asanoyama - M1</option>
        <option value="Hokutofuji">Hokutofuji - M1</option>
        <option value="Aoiyama">Aoiyama - M2</option>
        <option value="Endo">Endo - M2</option>
        <option value="Shodai">Shodai - M3</option>
        <option value="Daieisho">Daieisho - M3</option>
        <option value="Meisei">Meisei - M4</option>
        <option value="Ichinojo">Ichinojo - M4</option>
        <option value="Kotoshogiku">Kotoshogiku - M5</option>
        <option value="Takarafuji">Takarafuji - M5</option>
      </select>
      <select name="middle-maegashira" id="option4" onChange={setState} defaultValue="">
        <option value="" disabled>Select Middle Maegashira</option>
        <option value="Chiyotairyu">Chiyotairyu - M6</option>
        <option value="Shimanoumi">Shimanoumi - M6</option>
        <option value="Myogiryu">Myogiryu - M7</option>
        <option value="Tomokaze">Tomokaze - M7</option>
        <option value="Onosho">Onosho - M8</option>
        <option value="Okinoumi">Okinoumi - M8</option>
        <option value="Shohozan">Shohozan - M9</option>
        <option value="Daishoho">Daishoho - M9</option>
        <option value="Kotoeko">Kotoeko - M10</option>
        <option value="Takagenji">Takagenji - M10</option>
      </select>
      <select name="lower-maegashira" id="option5" onChange={setState} defaultValue="">
        <option value="" disabled>Select Lower Maegashira</option>
        <option value="Yoshikaze">Yoshikaze - M11</option>
        <option value="Nishikigi">Nishikigi - M11</option>
        <option value="Tochiozan">Tochiozan - M12</option>
        <option value="Kagayaki">Kagayaki - M12</option>
        <option value="Chiyomaru">Chiyomaru - M13</option>
        <option value="Sadanoumi">Sadanoumi - M13</option>
        <option value="Toyonoshima">Toyonoshima - M14</option>
        <option value="Enho">Enho - M14</option>
        <option value="Yago">Yago - M15</option>
        <option value="Kaisei">Kaisei - M15</option>
        <option value="Kotoyuki">Kotoyuki - M16</option>
        <option value="Terutsuyoshi">Terutsuyoshi - M16</option>
      </select>
      <button disabled={!isButtonEnabled} style={{ display: 'block', width: '80%', margin: '20px auto 10px auto', padding: '10px 0', background: 'green', color: 'white', fontWeight: 'bold', fontSize: '1.3rem' }} type="submit">Pick Team</button>
    </form>
  );
};

export default SelectTeam;