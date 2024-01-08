const validation = (values, rules) => {
    const errors = {};

    Object.keys(values).forEach((key) => {
        const rule = rules.find(r => r.name === key)
        const value = values[key];
        if(rule.required) {
            if(value.length > 0) {
                errors[key] = 'field is empty!';
            }
         }
    })

    return errors;
}

export default validation;