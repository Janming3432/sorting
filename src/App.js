import React, {useState} from "react";
import Input from "./Input";
import GenerateBars from './GenerateBars';
import './App.css';
import SortingOption from "./SortingOption";
// class App extends React.Component{

//     state = {size : 0, sort : false, isDisabled : true , option : 0, errMsg : ''};
//     onFormSubmit = (size)=>{
//         const len = isNaN(size) ? 0 : size;
//         this.setState({size : len , isDisabled : false});
//     }

//     onOptionSelect = (value) =>{
//         console.log(value);
//         this.setState({ option : value });
//     }

//     onButtonClick = ()=>{
//         if(this.state.option===0)this.setState({errMsg : 'Choose a sorting technique'});
//         else this.setState({sort : true , isDisabled : true, errMsg : ''});
//     }

//     render(){
//         return(
//             <div className="App">
//                 <h1>Sorting Visualizer</h1>
//                 <Input onSubmit = {this.onFormSubmit}/>
//                 <br/>
//                 <GenerateBars 
//                     size = {this.state.size} 
//                     isReadyForSorting = {this.state.sort} 
//                     option = {this.state.option}
//                 />
//                 <br/>
//                 <div className="btn">
//                     <button className = "funcBtn" 
//                         disabled = {this.state.isDisabled && this.state.option===0} 
//                         onClick={this.onButtonClick} 
//                         >Sort</button>
//                     <SortingOption 
//                         disabled = {this.state.isDisabled && this.state.option===0} 
//                         onSelect = {this.onOptionSelect}/>
//                 </div>
//             </div>
//         ); 
//     }
// }

const App = ()=>{

    const [size, setSize] = useState(0);
    const [sort, setSort] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);
    const [option, setOption] = useState(0);
    const [errMsg, setErrMsg] = useState('');
    const [enable, setEnable] = useState(false);
    const [newIteration, setNewIteration] = useState(true);

    const onInputReceive = (size)=>{
        const len = isNaN(size) ? 0 : size;
        setSize(len);
        setIsDisabled(false);
        setEnable(true);
    };

    const onOptionSelect = (value) =>{
        setOption(value);
    };

    const onButtonClick = ()=>{
        if(option===0 && size>0)setErrMsg('Choose a sorting technique');
        else{
            setNewIteration(false);
            setSort(true);
            setIsDisabled(true);
            setErrMsg('');
        }
    };
    const repeatFunc = ()=>{
        setEnable(false);
        setSize(0);
        setSort(false);
        setIsDisabled(false);
        setOption(0);
        setErrMsg('');
    }
    
    const restartApp = ()=>{
        setNewIteration(true);
    };

    return(
        <div className="App">
            <h1>Sorting Visualizer</h1>
            <Input onSubmit = {onInputReceive} inputdisabled={enable}/>
            <br/>
            <GenerateBars 
                size = {size} 
                isReadyForSorting = {sort} 
                option = {option}
                afterSorting = {restartApp}
            />
            <br/>
            <div className="btn">
                <button className = "funcBtn"
                    disabled = {isDisabled && option===0} 
                    onClick={onButtonClick} 
                >Sort</button>
                <SortingOption 
                    disabled = {(isDisabled && option===0) || !newIteration} 
                    onSelect = {onOptionSelect}/>
                <button className="funcBtn"
                    onClick={() => repeatFunc()}
                    disabled = {!newIteration}>Try Again
                </button>
            </div>
            <br/>
            {size>0 && option===0 ? 
                <div 
                    style={{color : 'red', display : 'flex', justifyContent: "center"}}>
                    {errMsg}
                </div>: null
            }
        </div>
    );
};

export default App;