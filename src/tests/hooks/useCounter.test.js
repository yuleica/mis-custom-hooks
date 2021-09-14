import {renderHook, act} from '@testing-library/react-hooks';
import {useCounter} from '../../hooks/useCounter';


test('should return values for deffect', () => {
    
    const {result} = renderHook( () => useCounter());

    console.log(result.current);

    expect(result.current.counter).toBe(1);
    expect(typeof result.current.increment).toBe('function');
    expect(typeof result.current.decrement).toBe('function');
    expect(typeof result.current.reset).toBe('function');
})

test('should return a counter in 100 ', () => {
    
    const {result} = renderHook( () => useCounter(100));

    console.log(result.current);

    expect(result.current.counter).toBe(100);
    
})

test('should add 1 to  counter ', () => {
 
    const {result} = renderHook(() => useCounter(100));
    const {increment} = result.current;
    act(() => {
        increment();
    });

    const {counter} = result.current;

    expect(counter).toBe(101)

})

test('should sustract 1 to  counter ', () => {
 
    const {result} = renderHook(() => useCounter(100));
    const {decrement} = result.current;
    act(() => {
        decrement();
    });

    const {counter} = result.current;

    expect(counter).toBe(99)

})

test('should assign 1 to counter ', () => {
 
    const {result} = renderHook(() => useCounter(1));
    const {reset} = result.current;
    act(() => {
        reset();
    });

    const {counter} = result.current;

    expect(counter).toBe(1)

})


