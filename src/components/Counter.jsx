import { Input ,Button, Divider } from '@heroui/react';
import React, { useState, useMemo } from "react";
import { useDispatch, useSelector, connect } from 'react-redux';

// const slowDoubleNumber = (num) => {
//     for (let i = 0; i < 5000000000; i++){}

//     return num * 2;
// }

const Counter = () => {
    const selector = useSelector((store) =>  store.counter);
    const dispatch = useDispatch();

    const [count, setCount] = useState(0); 
    const [inputCounter, setInputCounter] = useState(0);

    const incerementCounter = () => {
        setCount(count + 1);
    }

    const decrementCounter = () => {
        setCount(count - 1);
    }

    const incrementGlobalCounter = () => {
        dispatch({
            type: "INCREMENT",
        })    
    }

    const decrementGlobalCounter = () => {
        dispatch({
            type: "DECREMENT",
        })
    }

    const setGlobalCounter = () => {
        dispatch({
            type: "SET",
            payLoad: inputCounter,
        })
    }

    // const doubleNumberResult = useMemo(() => {
    //     return slowDoubleNumber(count)
    // }, [count]);
    
    return (
        <div>
            <h1 className='text-center'>Local state version</h1>
            <div className="flex items-center justify-around min-h-32">
                <Button color="danger" onClick={decrementCounter}>Subtract</Button>
                <span className="text-3xl font-semibold">{count}</span>
                <Button color="primary" onClick={incerementCounter}>Add</Button>
            </div>

            {/* <p className='text-center text-lg font-semibold'>{doubleNumberResult}</p> */}

            <Divider />

            <h1 className='text-center'>Global state version</h1>
            <div className="flex items-center justify-around min-h-96">
                <Button color="danger" onClick={decrementGlobalCounter}>Subtract</Button>
                
                <div className='flex flex-col gap-1'>
                    <Input type='number' value={inputCounter} onChange={(event) => {
                        setInputCounter(parseInt(event.target.value));
                    }} />
                    <Button onClick={setGlobalCounter} color='secondary'>Set</Button>
                </div>

                <Button color="primary" onClick={incrementGlobalCounter}>Add</Button>
            </div>

            <p className='text-center text-2xl font-semibold'>Global count: {selector.count}</p>
            
        </div>
    )
}

export default Counter;

// class Counter extends React.Component {
//     state = {
//         count: 0,
//     };

//     incrementCounter = () => {
//         this.setState({ count: this.state.count + 1 });
//     };

//     decrementCounter = () => {
//         this.setState({ count: this.state.count - 1 });
//     }

//     render() {
//         return (
//             <div>
//                 <div className="flex items-center justify-around min-h-96">
//                     <Button onClick={this.decrementCounter} color='danger'>
//                         Subtract
//                     </Button>
//                     <span>{this.state.count}</span>
//                     <Button onClick={this.incrementCounter} color='primary'>
//                         Add
//                     </Button>
//                 </div>
//             </div>
//         );
//     };
// };

// function Counter () {
//   const [inputValue, setInputValue] = useState('');

//   return (
//     <div className="p-4">
//       <input
//         type="text"
//         className="border border-gray-300 p-2 rounded"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <p className="mt-2 text-gray-700">Input: {inputValue}</p>
//     </div>
//   );
// }

// class Counter extends React.Component {
//     state = {
//         count: 0,
//         inputCounter: 0,
//     };

//     incrementCounter = () => {
//         this.setState({ count: this.state.count + 1 });
//     };

//     decrementCounter = () => {
//         this.setState({ count: this.state.count - 1 });
//     };

//     render() {
//         return (
//             <div>
//             <h1 className='text-center'>Local state version</h1>
//             <div className="flex items-center justify-around min-h-32">
//                 <Button color="danger" onClick={this.decrementCounter}>Subtract</Button>
//                 <span className="text-3xl font-semibold">{this.state.count}</span>
//                 <Button color="primary" onClick={this.incrementCounter}>Add</Button>
//             </div>

//             <Divider />

//             <h1 className='text-center'>Global state version</h1>
//             <div className="flex items-center justify-around min-h-96">
//                 <Button color="danger" onClick={this.props.decrementGlobalCounter}>Subtract</Button>
                
//                 <div className='flex flex-col gap-1'>
//                     <Input type='number' value={this.state.inputCounter} onChange={(event) => {
//                         this.setState({ inputCounter: parseInt(event.target.value) });
//                     }} />
//                     <Button onClick={() => this.props.setGlobalCounter(this.state.inputCounter)} color='secondary'>Set</Button>
//                 </div>

//                 <Button color="primary" onClick={this.props.incrementGlobalCounter}>Add</Button>
//             </div>

//             <p className='text-center text-2xl font-semibold'>Global count: {this.props.counter.count}</p>
            
//         </div>
//         )
//     }
// }

// const mapStateToProps = (store) => {
//     return{
//         counter: store.counter,
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return{
//         incrementGlobalCounter: () => {
//             dispatch({
//                 type: "INCREMENT",
//             })
//         },
//         decrementGlobalCounter: () => {
//             dispatch({
//                 type: "DECREMENT",
//             })
//         },
//         setGlobalCounter: (inputCount) => {
//             dispatch({
//                 type: "SET",
//                 payLoad: inputCount,
//             })
//         }
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);