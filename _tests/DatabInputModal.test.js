import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16.2';
import { shallow, mount, render } from 'enzyme';
import DatabInputModal from '../client/components/DatabInputModal.jsx';

Enzyme.configure({ adapter: new Adapter() });

/* 
- Don't test implementation details like, did this function run, or did this component load.
- Test what the user is doing, the DOM output and expected results.

-  Read about the AAA pattern: Arrange, Act, Assert

As for what to test:
- you test "shoulds". Your tests should make guarantees about the behaviour of a piece of code.
- It "should call the API on did mount". It "should send the data to redux when the button is pressed".
It "should show a turn on your Bluetooth message if Bluetooth is disabled". It "should reconnect the
Bluetooth if it gets turned on".
- Over time you'll get better at asking questions about what your components should do in a given situation,
and then your tests make sure it actually does.
*/

describe('DatabInputModal tests', () => {
  describe('')
})
