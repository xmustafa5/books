  //  import logo0 from '../dd/20.png'; 
    import logo1 from '../dd/30.png'; 
 //   import logo2 from '../dd/1.png'; 
import { useState } from 'react';
import Loading from '../components/Loading';

export default function Home1({spin}) {
  const [loading, setLoading] = useState(true);

//   const [wn, setwn] = useState('');

//   window.onscroll = function() {s11()};
//   function s11() {
//     if ( window.scrollY < 30) {
//      setwn(
//       Math.floor(window.scrollY)
//      ) 
// }

//   }   
//   console.log(wn);

    return (
      <>
   
       <div className='se2' >   
       
      <h1 className='title2'>books</h1>
        {/* <img className='imgg' src={`logo${wn}.png`} alt="" /> */}
        <img src={logo1} alt="" />
      </div>
      <img src="../dd/12.png" alt="" />
          

      </>
    );
       }
  