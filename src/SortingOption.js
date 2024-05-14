import React, {useState} from "react";
import './SortingOption.css';
// class SortingOption extends React.Component{
     
//     state = { display : false };

//     render(){
//         return(
//             <div className="menu">
//                 <button className = "funcBtn" onClick = {()=> this.setState({display : !this.state.display})} disabled = {this.props.disabled}>Select</button>
//                 {this.state.display &&(
//                     <ul className="list">
//                         <li className="list-item" onClick={() => {
//                             this.setState({display : !this.state.display});
//                             this.props.onSelect(1);
//                         }}>
//                             Bubble Sort
//                         </li>

//                         <li className="list-item" onClick={() => {
//                             this.setState({display : !this.state.display});
//                             this.props.onSelect(2);
//                         }}>
//                             Selection Sort
//                         </li>

//                         <li className="list-item" onClick={() => {
//                             this.setState({display : !this.state.display});
//                             this.props.onSelect(3);
//                         }}>
//                             Insertion Sort
//                         </li>

//                         <li className="list-item" onClick={() => {
//                             this.setState({display : !this.state.display});
//                             this.props.onSelect(4);
//                         }}>
//                             Merge Sort
//                         </li>
//                     </ul>
//                 )}
//             </div>
//         );
//     }
// }

const SortingOption = ({disabled, onSelect}) => {

    const [display, setDisplay] = useState(false);
    return(
        <div className="menu">
            <button className = "funcBtn" 
                onClick = {()=> setDisplay(!display)} 
                disabled = {disabled}>
            Select</button>
            {display &&(
                <ul className="list">
                    <li className="list-item" onClick={() => {
                        setDisplay(!display);
                        onSelect(1);
                    }}>
                        Bubble Sort
                    </li>

                    <li className="list-item" onClick={() => {
                        setDisplay(!display);
                        onSelect(2);
                    }}>
                        Selection Sort
                    </li>

                    <li className="list-item" onClick={() => {
                        setDisplay(!display);
                        onSelect(3);
                    }}>
                        Insertion Sort
                    </li>

                    <li className="list-item" onClick={() => {
                        setDisplay(!display);
                        onSelect(4);
                    }}>
                        Merge Sort
                    </li>
                </ul>
            )}
        </div>
    );
};
export default SortingOption;