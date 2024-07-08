import './loader.css';
export default function Loading() {
  return (
    <div className='flex items-center justify-center mt-[20%]'>
      <div className="wrapper">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
      </div>
    </div>
  )
}