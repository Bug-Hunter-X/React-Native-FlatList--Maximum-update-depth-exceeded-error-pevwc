```javascript
// bugSolution.js
import React, { useState, useEffect, useCallback } from 'react';
import { FlatList, View, Text, Button } from 'react-native';

const ComplexComponent = React.memo(({ item }) => {
  const [count, setCount] = useState(0);
  const incrementCount = useCallback(() => setCount(c => c + 1), []);

  useEffect(() => {
    console.log('ComplexComponent re-rendered');
  }, [item]);

  return (
    <View>
      <Text>{item.name}</Text>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={incrementCount} />
    </View>
  );
});

const data = Array.from({ length: 20 }, (_, i) => ({ id: i, name: `Item ${i}` }));

export default function App() {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <ComplexComponent item={item} />}
    />
  );
}
```