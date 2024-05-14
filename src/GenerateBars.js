import React, {useState, useEffect} from "react";
import './GenerateBar.css';
import { CSSTransition, TransitionGroup } from "react-transition-group";

// class GenerateBars extends React.Component{
    
//     state = { array : [] , selectedIndex1 : -1 , selectedIndex2 : -1};


    // async bubbleSort(obj){
    //     var i, j, temp1;
    //     var swapped;
    //     for (i = 0; i < arr.length - 1; i++) 
    //     {
    //         swapped = false;
    //         for (j = 0; j < arr.length - i - 1; j++) 
    //         {
    //             this.setState({selectedIndex1 : j});
    //             await new Promise((resolve) => setTimeout(() => resolve(), 400));
    //             if (arr[j] > arr[j + 1]) 
    //             {
    //                 this.setState({selectedIndex2 : j+1});   
    //                 temp1 = arr[j];
    //                 arr[j] = arr[j + 1];
    //                 arr[j + 1] = temp1;
    //                 swapped = true;
    //                 this.setState({ array : arr});
    //                 await new Promise((resolve) => setTimeout(() => resolve(), 400));
    //             }
    //             this.setState({ selectedIndex1 : -1, selectedIndex2 : -1});
    //         }
    //         if (swapped === false)
    //         break;
    //     }
    // }


    // async selectionSort(obj){
    //     var min_idx;
    //     for (let i = 0; i < arr.length-1; i++){
    //         min_idx = i;
    //         this.setState({selectedIndex1 : i});
    //         await new Promise((resolve) => setTimeout(() => resolve(), 400));
    //         for (let j = i + 1; j < arr.length; j++){
    //             if (arr[j] < arr[min_idx]){
    //                 this.setState({selectedIndex2 : j});
    //                 await new Promise((resolve) => setTimeout(() => resolve(), 400));
    //                 min_idx = j;
    //             }
    //         }
    //         var temp = arr[i];
    //         arr[i] = arr[min_idx];
    //         arr[min_idx] = temp;
    //         this.setState({ array : arr});
    //         this.setState({selectedIndex1 : -1, selectedIndex2 : -1});
    //     }
    // }
    

    // async insertionSort(obj) { 
    //     let key, j; 
    //     for (let i = 1; i < arr.length; i++){ 
    //         key = arr[i]; 
    //         j = i - 1;
    //         while (j >= 0 && arr[j] > key){
    //             this.setState({ selectedIndex1 : j, selectedIndex2 : j+1});
    //             await new Promise((resolve) => setTimeout(() => resolve(), 500)); 
    //             arr[j + 1] = arr[j]; 
    //             j = j - 1; 
    //             this.setState({array : arr}); 
    //         }
    //         arr[j + 1] = key;
    //         this.setState({array : arr}); 
    //         await new Promise((resolve) => setTimeout(() => resolve(), 500)); 
    //         this.setState({selectedIndex1 : i, selectedIndex2 : j});
    //     }
    //     this.setState({ selectedIndex1 :-1, selectedIndex2 : -1}); 
    // }
    
    // async merge(obj, l, m, r){
    //     var n1 = m - l + 1;
    //     var n2 = r - m;
 
    //     var L = new Array(n1);
    //     var R = new Array(n2);
 
    //     for (let i = 0; i < n1; i++)
    //         L[i] = arr[l + i];
    //     for (let j = 0; j < n2; j++)
    //         R[j] = arr[m + 1 + j];

    //     var i = 0;
    //     var j = 0;
    //     var k = l;
 
    //     while (i < n1 && j < n2) {
    //         await new Promise((resolve) => setTimeout(() => resolve(), 500)); 
    //         if (L[i] <= R[j]) {
    //             this.setState({selectedIndex1 : k, selectedIndex2 : k+i});
    //             arr[k] = L[i];
    //             this.setState({array : arr});
    //             i++;
    //         }
    //         else {
    //             this.setState({selectedIndex1 : k, selectedIndex2 : m+1+j});
    //             arr[k] = R[j];
    //             this.setState({array : arr});
    //             j++;
    //         }
    //         k++;
    //     }
    //     await new Promise((resolve) => setTimeout(() => resolve(), 500)); 
    //     while (i < n1) {
    //         this.setState({selectedIndex1 : k, selectedIndex2 : k+i});
    //         arr[k] = L[i];
    //         i++;
    //         k++;
    //         this.setState({array : arr});
    //         await new Promise((resolve) => setTimeout(() => resolve(), 600)); 
    //     }   
 
    //     while (j < n2) {
    //         this.setState({selectedIndex1 : k, selectedIndex2 : m+1+j});
    //         arr[k] = R[j];
    //         j++;
    //         k++;
    //         this.setState({array : arr});
    //         await new Promise((resolve) => setTimeout(() => resolve(), 500)); 
    //     }
    //     this.setState({ selectedIndex1 :-1, selectedIndex2 : -1}); 
    // }
 
    // async mergeSort(obj,l, r){
    //     if(l>=r){
    //         return;
    //     }
    //     var m =l+ parseInt((r-l)/2);
    //     await this.mergeSort(obj,l,m);
    //     await new Promise((resolve) => setTimeout(() => resolve(), 500)); 
    //     await this.mergeSort(obj,m+1,r);
    //     await new Promise((resolve) => setTimeout(() => resolve(), 500)); 
    //     await this.merge(obj,l,m,r);
    // }


//     generateBars(){
//         const  arr = Array.from({length: this.props.size}, () => Math.floor(Math.random() * 100 +1));
//         this.setState({array : arr});
//     }

//     updateBars(option){
//         var obj ={
//             list : this.state.array,
//         };
//         if(option===1)this.bubbleSort(obj);
//         if(option===2)this.selectionSort(obj);
//         if(option===3)this.insertionSort(obj);
//         if(option===4)this.mergeSort(obj,0,arr.length-1);
//     }

//     componentDidUpdate(previousValue){
//         if(this.props.size !== previousValue.size && !this.props.isReadyForSorting)
//             this.generateBars();
        
//         else if(this.props.isReadyForSorting !== previousValue.isReadyForSorting) 
//             this.updateBars(this.props.option);
//     }

//     render(){
//         const {array} =this.state;
//         return(
//             <div className="chart">
//                 <TransitionGroup component={null}>
//                     {array.map((num,index) => {
//                         return(
//                             <CSSTransition classNames= 'fade' key={index} timeout={500}>
//                                 <div className="outer-bar">
//                                     {num}
//                                     <div className="bar"
//                                         style={{height : `${num*3}px`,bottom : `0`, 
//                                         backgroundColor : 
//                                         index===this.state.selectedIndex1 ? 'darkblue' : 
//                                         index === this.state.selectedIndex2 ? 'greenyellow' : 
//                                         'rgb(0,183,255'}} >
//                                     </div>
//                                 </div>
//                             </CSSTransition>
//                         );
//                     })}
//                 </TransitionGroup>
//             </div>
//         );  
//     }
// }

const GenerateBars = ({size, isReadyForSorting, option, afterSorting}) => {

    const [array, setArray] = useState([]);
    const [selectedIndex1, setSelectedIndex1] = useState(-1);
    const [selectedIndex2, setSelectedIndex2] = useState(-1);

    useEffect(()=>{
        generateBars();
    },[size]);

    useEffect(() => {
        if(option===0 || !isReadyForSorting)return;
        const arr = [...array];
        const ops = async()=>{
            if(option===1)await bubbleSort(arr);
            if(option===2)await selectionSort(arr);
            if(option===3)await insertionSort(arr);
            if(option===4)await mergeSort(arr,0,arr.length-1);
            afterSorting();
        }
        ops();
    },[option, isReadyForSorting]);

    const bubbleSort = async(arr)=>{
        var i, j, temp1;
        var swapped;
        for (i = 0; i < arr.length - 1; i++) 
        {
            swapped = false;
            for (j = 0; j < arr.length - i - 1; j++) 
            {
                setSelectedIndex1(j);
                await new Promise((resolve) => setTimeout(() => resolve(), 400));
                if (arr[j] > arr[j + 1]) 
                {
                    setSelectedIndex2(j+1);
                    temp1 = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp1;
                    swapped = true;
                    setArray(arr);
                    await new Promise((resolve) => setTimeout(() => resolve(), 400));
                }
                setSelectedIndex1(-1);
                setSelectedIndex2(-1);
            }
            if (swapped === false)
            break;
        }
    };


    const selectionSort = async(arr)=>{
        var min_idx;
        for (let i = 0; i < arr.length-1; i++){
            min_idx = i;
            setSelectedIndex1(i);
            await new Promise((resolve) => setTimeout(() => resolve(), 400));
            for (let j = i + 1; j < arr.length; j++){
                setSelectedIndex2(j);
                await new Promise((resolve) => setTimeout(() => resolve(), 400));
                if (arr[j] < arr[min_idx]){
                    min_idx = j;
                }
            }
            var temp = arr[i];
            arr[i] = arr[min_idx];
            arr[min_idx] = temp;
            setArray(arr);
            setSelectedIndex1(-1);
            setSelectedIndex2(-1);
        }
    };
    

    const insertionSort = async(arr)=> { 
        let key, j; 
        for (let i = 1; i < arr.length; i++){ 
            key = arr[i]; 
            j = i - 1;
            setSelectedIndex1(i);
            while (j >= 0 && arr[j] > key){
                await new Promise((resolve) => setTimeout(() => resolve(), 500)); 
                setSelectedIndex2(j);
                arr[j + 1] = arr[j]; 
                setArray(arr);
                j = j - 1; 
            }
            setSelectedIndex2(j+1);
            arr[j + 1] = key;
            await new Promise((resolve) => setTimeout(() => resolve(), 500)); 
            setArray(arr);
        }
        setSelectedIndex1(-1);
        setSelectedIndex2(-1);
    };
    
    const merge = async(arr, l, m, r)=>{
        var n1 = m - l + 1;
        var n2 = r - m;
 
        var L = new Array(n1);
        var R = new Array(n2);
 
        for (let i = 0; i < n1; i++)
            L[i] = arr[l + i];
        for (let j = 0; j < n2; j++)
            R[j] = arr[m + 1 + j];

        var i = 0;
        var j = 0;
        var k = l;
 
        while (i < n1 && j < n2) {
            await new Promise((resolve) => setTimeout(() => resolve(), 500)); 
            if (L[i] <= R[j]) {
                setSelectedIndex1(k);
                setSelectedIndex2(k+i);
                arr[k] = L[i];
                setArray(arr);
                i++;
            }
            else {
                setSelectedIndex1(k);
                setSelectedIndex2(m+1+j);
                arr[k] = R[j];
                setArray(arr);
                j++;
            }
            k++;
        }
        await new Promise((resolve) => setTimeout(() => resolve(), 500)); 
        while (i < n1) {
            setSelectedIndex1(k);
            setSelectedIndex2(k+i);
            arr[k] = L[i];
            i++;
            k++;
            setArray(arr);
            await new Promise((resolve) => setTimeout(() => resolve(), 600)); 
        }   
 
        while (j < n2) {
           setSelectedIndex1(k);
           setSelectedIndex2(m+1+j);
            arr[k] = R[j];
            j++;
            k++;
            setArray(arr);
            await new Promise((resolve) => setTimeout(() => resolve(), 500)); 
        }
        setSelectedIndex1(-1);
        setSelectedIndex2(-1);
    };
 
    const mergeSort = async(arr,l, r)=>{
        if(l>=r){
            return;
        }
        var m =l+ parseInt((r-l)/2);
        await mergeSort(arr,l,m);
        await new Promise((resolve) => setTimeout(() => resolve(), 500)); 
        await mergeSort(arr,m+1,r);
        await new Promise((resolve) => setTimeout(() => resolve(), 500)); 
        await merge(arr,l,m,r);
    };

    const generateBars = ()=>{
        const  arr = Array.from({length: size}, () => Math.floor(Math.random() * 100 +1));
        setArray(arr);
    }

    return(
        <div className="chart">
            <TransitionGroup component={null}>
                {array.length===0 ? null : array.map((num,index) => {
                    return(
                        <CSSTransition classNames= 'fade' key={index} timeout={500} unmountOnExit>
                            <div className="outer-bar">
                                {num}
                                <div className="bar"
                                    style={{height : `${num*3}px`,bottom : `0`, 
                                    backgroundColor : 
                                    index === selectedIndex1 ? 'darkblue' : 
                                    index === selectedIndex2 ? 'greenyellow' : 
                                    'rgb(0,183,255'}} >
                                </div>
                            </div>
                        </CSSTransition>
                    );
                })}
            </TransitionGroup>
        </div>
    );
};
export default GenerateBars;