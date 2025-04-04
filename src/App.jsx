import { Suspense } from 'react'
import './App.css'
import Bottles from './components/Bottles/Bottles'

// const bottlesPromise=fetch('./bottles.json').then(res=> res.json());
// // const bottlesPromise2 = fetch('https://github.com/Nabila50/bottles-data/blob/main/bottles.json')
// // .then(res => res.json());

const bottlesPromise = fetch('bottles.json').then(res => res.json());

function App() {

  // const bottles =[
  //   {id: 1, name: 'pink Nike Bottles', price: 250, color:'pink'},
  //   {id: 2, name: 'pink Nike Bottles', price: 250, color:'pink'},
  //   {id: 3, name: 'pink Nike Bottles', price: 250, color:'pink'},
  //   {id: 4, name: 'pink Nike Bottles', price: 250, color:'pink'},
  // ]
 

  return (
    <>
      <h1>Buy Awesome Water Bottles</h1>

     

      { <Suspense fallback={<h3>Bottles are loading....</h3>}>
        <Bottles bottlesPromise ={bottlesPromise}></Bottles>
      </Suspense>}
  
    </>
  )
}

export default App
