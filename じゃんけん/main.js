
//index.htmlからidを取得して固定値代入
const state=document.getElementById("state");
const cpu=document.getElementById("cpu");
const gu=document.getElementById("gu");
const cho=document.getElementById("cho");
const pa=document.getElementById("pa");
const player=document.getElementById("player");
const reset=document.getElementById("reset");
const win=document.getElementById("win");
const lose=document.getElementById("lose");

//配列にじゃんけんの選択肢を入れる
//jans[0]="グー",jans[1]="チョキ",jans[2]="パー"
const jans=["グー","チョキ","パー"]
//プレイヤーの選択肢を格納する変数を設定
let playjan;
//CPUの選択肢を格納する変数を設定
let cpuja;
//勝った回数をカウント
let winCount=0;
//負けた回数をカウントする変数を設定。初期値は０
let loseCount=0;

//関数start()を呼び出し。
start();

//グーのボタンを押した時イベント
gu.addEventListener("click",()=>{
  //プレイヤーのテキストにグーを表示
  player.textContent=jans[0];
  //プレイヤーの選択肢を格納する変数にグーを格納
  playjan=jans[0]
  //CPUの選択肢を格納する変数に配列jansからランダムに取得した選択肢を格納
  cpuja=jans[Object.keys(jans)[Math.floor(Math.random() * Object.keys(jans).length)]];
  //上記で取得した変数をCPUのテキストに表示
  cpu.textContent=cpuja; 
  //関数result()を呼び出し
  result();
})
//チョキのボタンを押した時イベント。挙動はグーと同じ
cho.addEventListener("click",()=>{
  player.textContent=jans[1];
  playjan=jans[1]
  cpuja=jans[Object.keys(jans)[Math.floor(Math.random() * Object.keys(jans).length)]];
  cpu.textContent=cpuja;
  result();
})
//パーのボタンを押した時イベント。挙動はグーと同じ
pa.addEventListener("click",()=>{
  player.textContent=jans[2];
  playjan=jans[2]
  cpuja=jans[Object.keys(jans)[Math.floor(Math.random() * Object.keys(jans).length)]];
  cpu.textContent=cpuja;
  result();
})



//リセットボタンをクリックした時のイベント
reset.addEventListener("click",()=>{
  // 関数start()を呼び出し
  start();
  //stateにテキストを表示
  state.textContent="最初はグー！じゃんけん・・・";
})

//result()の関数です。じゃんけん判定を判定をここで行います。
function result(){
  //if関数で分岐。
  //プレイヤーとCPUが同じだったら、stateにテキストを表示
  if(playjan===cpuja){
    state.textContent="あいこで・・・"
  //プレイヤーが勝った場合の分岐。
  }else if(playjan===jans[0]&&cpuja===jans[1]||playjan===jans[1]&&cpuja===jans[2]||playjan===jans[2]&&cpuja===jans[0]){
    //stateにテキストを表示
    state.textContent="かち";
    //関数display()を呼び出し
    display()
    //勝った回数に１プラス
    winCount++;
    //勝った回数をテキストに表示
    win.textContent=winCount;
  }else{
    //stateにテキストを表示
    state.textContent="まけ";
    //関数display()を呼び出し
    display()
    //負けた回数に１プラス
    loseCount++;
    //負けた回数をテキストに表示
    lose.textContent=loseCount;
  }
}

//start()の関数。ボタンの表示、非表示を設定。disabled＝falseだとボタンを表示され、disabled＝tureだと非表示となる。
function start(){
  gu.disabled=false;
  cho.disabled=false;
  pa.disabled=false;
  reset.disabled=true;
}
//display()の関数。ボタンの表示、非表示を設定。disabled＝falseだとボタンを表示され、disabled＝tureだと非表示となる。
function display(){
  gu.disabled=true;
  cho.disabled=true;
  pa.disabled=true;
  reset.disabled=false;
}

