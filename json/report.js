let sendButton = document.querySelector('.btn');

function send() {
  let date = document.querySelector('#dateValue').value;
  let name = document.querySelector('#nameValue').value;
  let phone = document.querySelector('#phoneValue').value;
  let demand = document.querySelector('#demandValue').value;
  let report = document.querySelector('#reportValue').value;
  
  document.querySelector('#dateValue').value='';
  document.querySelector('#nameValue').value='';
  document.querySelector('#phoneValue').value='';
  document.querySelector('#demandValue').value='';
  document.querySelector('#reportValue').value='';

  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbzXEzwk4hK4L-wGT1OfNTHSFZJSgpJn1TA9wV1twB603jDzf_3E53-IUq3f9PGo_OoY/exec",
    data: {
        "date": date,
        "name": name,
        "phone": phone,
        "demand": demand,
        "report" : report,
    },
    success: function(response) {
      if(response == "成功"){
        alert("成功");
      }
    },
  });
};

sendButton.addEventListener('click', send);

//dateValueFunction
function AddDate(daysadded){
  let dateTime = new Date();
  let dateTime2 = dateTime.setDate(dateTime.getDate()+daysadded);
  let objectDate = new Date(dateTime2);
  let day = objectDate.getDate();
  let month = objectDate.getMonth()+1;
  let year = objectDate.getFullYear();
  let final_format = (year + "/" + month + "/" + day).toString();
  return  final_format;
};


//county&sp2Value
const database = {
  '臺北市': {'中山林森店': '', '中山長安店': '', '中山龍江店': '', '中正杭州店': '', '信義嘉興 - 智取店': '', '信義莊敬-智取店': '205', '信義虎林店': '206', '內湖康寧二店': '', '內湖文湖店': '', '內湖江南店': '',
  '北投光明店': '', '北投吉利店': '', '南港興中店': '', '士林大南店': '','士林德行二店': '', '大同重慶三店': '', '大同重慶店': '','大安瑞安店': '','文山木柵店': '', '文山羅斯店': '', '松山新中 - 智取店': '',
  '松山民生店': '','萬華漢中店': '', '萬華西園二店': '', '北投清江 - 智取店': '','大同民族 - 智取店': '','文山興隆 - 智取店': '','北投義理 - 智取店': '','松山新聚 - 智取店':'', '信義松信 - 智取店': '', '大同靜修 - 智取店':'',
  '萬華柳州 - 智取店': ''
  },
  '新北市': {
  '三重中正店': '', '三重五華 - 智取店': '', '三重仁愛店': '', '中和南山二店': '', '中和南山店': '', '中和景平二店': '',
  '中和景新店': '', '土城中正店': '', '土城裕生店': '', '新店二十張 - 智取店': '', '新店百忍店': '', '新莊中正 - 智取店': '',
  '新莊中誠 - 智取店': '', '新莊公園店': '', '新莊昌隆店': '', '新莊民安二店': '', '板橋莒光店': '', '林口忠孝店': '',
  '林口文化店': '', '樹林文德店': '', '永和仁愛店': '', '永和永元店': '', '汐止康寧店': '', '汐止新昌店': '',
  '淡水民族店': '', '淡水淡江 - 智取店': '', '蘆洲保和店': '', '板橋貴興店': '', '板橋漢生店': '', '三重信義西 - 智取店': '',
  '新店中華 - 智取店': '', '永和信義 - 智取店': '', '淡水星辰 - 智取店': '', '中和景新 - 智取店': '', '中和秀山 - 智取店': '', '板橋光武 - 智取店': '', '三重慈愛 - 智取店': '', '樹林樹新 - 智取店': '', '三峽國慶 - 智取店': '',
  '樹林樹新 - 智取店':'', '板橋北門 - 智取店': '', '永和比漾 - 智取店': '', '板橋居仁 - 智取店':'', '新莊昌盛 - 智取店':'', '新莊中信 - 智取店':'', '三重三民 - 智取店':''
  },
  '桃園市': {
  '中壢元化 - 智取店': '', '中壢龍和店': '', '八德永福店': '', '八德興豐店': '', '平鎮和平店': '', '桃園同安店': '',
  '桃園大興店': '', '桃園廈門店': '', '桃園建國店': '', '桃園慈文店': '', '蘆竹中正店': '', '龜山復興店': '',
  '龜山萬壽 - 智取店': '','中壢復強 - 智取店': '', '平鎮延平 - 智取店': '', '八德忠勇 - 智取店': '', '桃園正康 - 智取店': ''
  },
  '臺中市': {
  '北屯僑孝店': '', '北屯進化店': '', '北屯陳平店': '', '南屯文心 - 智取店': '', '台中五廊店': '', '台中大同店': '', '台中工學店': '', '台中建成店': '',
  '台中忠孝店': '', '台中梅亭店': '', '台中自由店': '', '台中西屯店': '', '台中邦邦店': '', '大里東南店': '',
  '大里東榮店': '', '太平中平店': '', '太平宜昌店': '', '西屯何厝店': '', '豐原中山二 - 智取店': '', '台中漢口 - 智取店': '', '台中英才 - 智取店': '', '台中華美 - 智取店':'', '西屯逢大 - 智取店':'',
  '南屯五權西 - 智取店':'', '台中錦新 - 智取店':'', '北屯松竹店':'', '太平東平 - 智取店':'', '太平樹德 - 智取店':''
  },
  '彰化縣': {
  '彰化旭光店': '', '彰化永安店': ''
  },
  '嘉義市': {
  '嘉義興雅 - 智取店': ''
  },
  '臺南市': {
  '台南仁和店': '', '台南安平店': '', '台南民權店': '', '台南裕農店': '', '台南西門店': '', '台南鹽埕店': '',
  '永康中山店': '', '永康中華店': '', '永康大灣店': '', '永康埔園 - 智取店': '', '台南成德 - 智取店': '', '台南怡東 - 智取店': '', '安南理想 - 智取店': '', '永康網寮 - 智取店': '', '台南賢一 - 智取店':''
  },
  '高雄市': {
  '三民大順 - 智取店': '', '三民天祥店': '', '左營博愛店': '', '左營重上店': '', '新興八德店': '', '楠梓壽民店': '',
  '苓雅廣州店': '', '鳳山五甲店': '', '三民義華 - 智取店': '', '前鎮天山 - 智取店': '', '鳳山五甲三 - 智取店': '',
  '左營新下 - 智取店': '', '鳳山青年二店': '', '鳳山工協店': '', '三民正忠店': '', '左營文川 - 智取店': '', '前鎮修文店':''
  }
};

const date_box = document.querySelector('#dateValue');
const county_box = document.querySelector('#nameValue');
const district_box = document.querySelector('#phoneValue');
let selected_county;

for(let i=0; i>=-6; i--) {
  date_box.innerHTML += `<option value="${AddDate(i)}">${AddDate(i)}</option>`;
};

Object.getOwnPropertyNames(database).forEach((county) => {
    county_box.innerHTML += `<option value="${county}">${county}</option>`;
});

county_box.addEventListener('change', () => {
    selected_county = county_box.options[county_box.selectedIndex].value;

    Object.getOwnPropertyNames(database[selected_county]).forEach((district) => {
        district_box.innerHTML += `<option value="${district}">${district}</option>`;
    });
})

const openppopup = document.querySelector(".clickmebtn");
const closeppopup = document.querySelector(".popupbtn");
const popup = document.getElementById("popup");

openppopup.addEventListener('click',()=>{
    popup.classList.add('active');
});

closeppopup.addEventListener('click',()=>{
    popup.classList.remove('active');
});

const back = document.querySelector('.bx-chevron-left')
back.addEventListener('click',()=>{
  window.location.href = `./mainpage.html?phone=${searchTerm}`;
})
