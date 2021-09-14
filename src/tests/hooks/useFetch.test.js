import {renderHook} from '@testing-library/react-hooks';
import {useFetch} from '../../hooks/useFetch';

test('should bring back default info', () => {
    const {result} = renderHook( () => useFetch('https://www.breakingbadapi.com/api/quotes/1'));
    const {data, loading, error} = result.current;

    expect(data).toBe(null);
    expect(loading).toBe(true);
    expect(error).toBe(null);

});

test('should to have the correct info: loading in false andr error in false', async () => {
    
    const {result, waitForNextUpdate} = renderHook( () => useFetch('https://www.breakingbadapi.com/api/quotes/1'));
    await waitForNextUpdate();
  
    const {data, loading, error} = result.current;
    

    expect(data.length).toBe(1);
    expect(loading).toBe(false);
    expect(error).toBe(null);
});

