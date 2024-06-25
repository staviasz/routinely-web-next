import ButtonFooter from '../ButtonFooter';

export default {
  title: 'ButtonFooter',
  component: ButtonFooter,
};

export const Template = () => (
  <div>
    <ButtonFooter />
  </div>
);

Template.parameters = {
  backgrounds: { default: 'white' },
};
