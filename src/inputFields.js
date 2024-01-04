const inputs = [
    {
        label: 'First name',
        name: 'firstName',
        type: 'text',
        required: true,
        stepId: 1,
    },
    {
        label: 'Last name',
        name: 'lastName',
        type: 'text',
        required: true,
        stepId: 1,
    },
    {
        label: 'Male',
        name: 'male',
        type: 'radio',
        value: 'male',
        required: true,
        stepId: 1,
    },
    {
        label: 'Female',
        name: 'female',
        type: 'radio',
        value: 'female',
        required: true,
        stepId: 1,
    },
    {
        label: 'Custom Dropdown',
        name: 'custom Dropdown',
        type: 'dropdown',
        options: [
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option2' },
        ],
        required: true,
        stepId: 2
    },
    {
        label: 'Email',
        name: 'email',
        type: 'email',
        required: true,
        stepId: 2,
    },
    {
        label: 'Experience',
        name: 'experience',
        type: 'text',
        required: true,
        stepId: 2,
    },
    {
        label: 'Country',
        name: 'country',
        type: 'text',
        required: true,
        stepId: 3,
    },
    {
        label: 'City',
        name: 'city',
        type: 'text',
        required: true,
        stepId: 3,
    },
    {
        label: 'Street',
        name: 'street',
        type: 'text',
        required: true,
        stepId: 3,
    }
];


export default inputs;