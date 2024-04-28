import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import amnhac from "./img/nghethuat.png"
import khoahoc from "./img/khoahoc.png"
import khoahocxahoi from "./img/khoahocxahoi.png"
import maytinh from "./img/maytinh.png"
import nghenghiep from "./img/nghenghiep.png"
import ngonngu from "./img/ngongu.png"
import suckhoe from "./img/suckhoe.png"
import tienganh from "./img/tienganh.png"
import toanhoc from "./img/toanhoc.png"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="bg-gray-100 rounded-lg w-4/5 mx-auto my-10 p-8 flex flex-col items-center">
      <div class="w-4/5 flex flex-col p-5 gap-10">
        <div><p class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-pink-400 to-purple-800 p-5">Hôm nay bạn sẽ học gì ?</p></div>
        <div class="w-full flex items-center bg-white px-5 rounded-lg">
          <input type="text" name="search" placeholder="Tìm kiếm quiz về bất kỳ chủ đề nào" class="w-full  bg-white p-2 text-[18px]"/>
          <button><ion-icon name="chevron-forward-outline"></ion-icon></button>
        </div>
      </div>
      <div class="w-full flex flex-wrap justify-between items-end gap-5 mt-10">
        <div >
          <a class="flex flex-col items-center gap-1 hover:text-purple-500">
            <img src={toanhoc} class="w-[50px]" alt="Toán học"></img>
            <p class="text-[10px] font-medium">Toán học</p>
          </a>
        </div>
        <div >
          <a class="flex flex-col items-center gap-1 hover:text-purple-500">
            <img src={tienganh} class="w-[50px]"></img>
            <p class="text-[10px] font-medium">Tiếng anh</p>
          </a>
        </div>
        <div >
          <a class="flex flex-col items-center gap-1 hover:text-purple-500">
            <img src={khoahocxahoi} class="w-[50px]"></img>
            <p class="text-[10px] font-medium">Khoa học Xã hội</p>
          </a>
        </div>
        <div >
          <a class="flex flex-col items-center gap-1 hover:text-purple-500">
            <img src={ngonngu} class="w-[50px]"></img>
            <p class="text-[10px] font-medium">Ngôn ngữ</p>
          </a>
        </div>
        <div >
          <a class="flex flex-col items-center gap-1 hover:text-purple-500">
            <img src={khoahoc} class="w-[50px]"></img>
            <p class="text-[10px] font-medium">Khoa học</p>
          </a>
        </div>
        <div >
          <a class="flex flex-col items-center gap-1 hover:text-purple-500">
            <img src={maytinh} class="w-[50px]"></img>
            <p class="text-[10px] font-medium" >Máy tính</p>
          </a>
        </div>
        <div >
          <a class="flex flex-col items-center gap-1 hover:text-purple-500">
            <img src={nghenghiep} class="w-[50px]"></img>
            <p class="text-[10px] font-medium">GD nghề nghiệp</p>
          </a>
        </div>
        <div>
          <a class="flex flex-col items-center gap-1 hover:text-purple-500">
            <img src={amnhac} class="w-[50px]"></img>
            <p class="text-[10px] font-medium ">Nghệ thuật sáng tạo</p>
          </a>
        </div>
        <div>
          <a class="flex flex-col items-center gap-1 hover:text-purple-500">
            <img src={suckhoe} class="w-[50px]"></img>
            <p class="text-[10px] font-medium">Sức khỏe & thể chất</p>
          </a>
        </div>
        
      </div>
    </div>
  )
}

export default App
