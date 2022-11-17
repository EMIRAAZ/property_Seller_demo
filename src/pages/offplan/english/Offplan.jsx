import './Offplan.scss';
import Header from '../../../components/header';
import RenderComponent from '../../../components/renderComponent';
import Footer from '../../../components/footer/english';
import {useEffect} from 'react';
import ListHeading from '../../../components/ListHeading';
import OffplanCard from '../../../components/offpaln/offplanCard/OffplanCard';
import { MoveToTop } from '../../../components/movetotop';
import FooterNew from '../../../components/footerNew';

// const Offplan = (props) => {
//   const renderOffplan = () =>
//     props.offplan.data.map((item) => (
//       <div className="offplan-card-size-div">
//         <OffplanCard key={item.id} {...item} />
//       </div>
//     ));
//   return (
//     <>
//       <div className="offplan-main-container-1">
//         <Header customClass="offplan-header-class" />
//         <div className="offplan-card-container"></div>
//         <ListHeading
//           main="Offplan Properties"
//           count={props.offplan.count}
//           sub="offplans found"
//         />
//         <RenderComponent
//           type="OFFPLAN"
//           data={props.offplan.data}
//           propertyCallApi={props.getOffplanWeb}
//           count={props.offplan.count}
//           iQuery={`&limit=${6}&offset=${0}`}
//           isPagination
//         />
//         <MoveToTop />
//         <FooterNew />
//       </div>
//     </>
//   );
// };
// const Offplan = props => {
//   const renderOffplan = () =>
//     props.offplan.data.map(item => (
//       <div className="offplan-card-size-div">
//         <OffplanCard key={item.id} {...item} />
//       </div>
//     ));
//   return (
//     <>
//       <div className="offplan-main-container-1">
//         <Header customClass="offplan-header-class" />
//         <div className="offplan-card-container"></div>
//         <ListHeading
//           main="Offplan Properties"
//           count={props.offplan.count}
//           sub="offplans found"
//         />
//         <RenderComponent
//           type="OFFPLAN"
//           data={props.offplan.data}
//           propertyCallApi={props.getOffplanWeb}
//           count={props.offplan.count}
//           iQuery={`&limit=${6}&offset=${0}`}
//           isPagination
//         />
//         <MoveToTop />
//         <FooterNew />
//       </div>
//     </>
//   );
// };

// export default Offplan;
// const offplancontents=[  {
//   heading: "Golden View Dubai",
//   address: "4 BHK Appartment",
//   position:'DownTown, Dubai',
//   description:
//     " There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration in some form injected. There are many variations of passages of lorem Ipsum available",
//   image: "/assets/image/gift1.jpg",
// },
// {
//   heading: "Golden View Dubai",
//   address: "4 BHK Appartment",
//   position:'DownTown, Dubai',
//   description:
//     " There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration in some form injected. There are many variations of passages of lorem Ipsum available",
//   image: "/assets/image/gift1.jpg",
// },
// {
//   heading: "Golden View Dubai",
//   address: "4 BHK Appartment",
//   position:'DownTown, Dubai',
//   description:
//     " There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration in some form injected. There are many variations of passages of lorem Ipsum available",
//   image: "/assets/image/gift1.jpg",
// },
// {
//   heading: "Golden View Dubai",
//   address: "4 BHK Appartment",
//   position:'DownTown, Dubai',
//   description:
//     " There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration in some form injected. There are many variations of passages of lorem Ipsum available",
//   image: "/assets/image/gift1.jpg",
// },
// {
//   heading: "Golden View Dubai",
//   address: "4 BHK Appartment",
//   position:'DownTown, Dubai',
//   description:
//     " There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration in some form injected. There are many variations of passages of lorem Ipsum available",
//   image: "/assets/image/gift1.jpg",
// },
// {
//   heading: "Golden View Dubai",
//   address: "4 BHK Appartment",
//   position:'DownTown, Dubai',
//   description:
//     " There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration in some form injected. There are many variations of passages of lorem Ipsum available",
//   image: "/assets/image/gift1.jpg",
// }




// ,]

const Offplan =(props)=>{

  useEffect(()=>{
    props.getOffplanWeb()
  },[])



  console.log(props);


  // const renderoffplan = () =>
  // offplancontents.map((item, i) => <OffplanCard key={i} {...item} />);
  // console.log(props)

  
  return(
    <div className="main-off-container">
      <Header/>
      <ListHeading
        className="list-header"
        main="Appartments"
        count={3587}
      />
      <div className="categories">
          <div className='item-div'>
            <h1 className="item-name">ALL</h1>
          </div>
            <div className='item-div'>
              <h1 className="item-name">Studio</h1>
            </div>
            <div className='item-div'>
              <h1 className="item-name">1 Bed room</h1>
            </div>
            <div className='item-div'>
              <h1 className="item-name">2 Bed room</h1>
            </div>
     
        </div>
    <div className="offplan-container">
    <RenderComponent
        data={props.offplan.data}
        propertyCallApi={()=>{}}
        count={2}
        type='OFFPLAN'
        iQuery={`limit=${6}&offset=${0}`}
        isPagination
      />
    </div>
    <Footer/>
    </div>
  )
}
export default Offplan;
