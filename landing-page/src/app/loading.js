import './loader.css';
export default function Loading() {
  return (
    <div className='flex items-center justify-center mt-[20%]'>
      <div class="wrapper">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="shadow"></div>
        <div class="shadow"></div>
        <div class="shadow"></div>
      </div>
    </div>
  )
}