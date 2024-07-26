import { gql } from '@apollo/client';

interface IQueryBuilder {
    name: string;
    variables: any;
    fields?: any[];
}

function queryBuilders(props: IQueryBuilder, isMutation?: boolean) {
    let variables = '';
    let data = '';

    const addTypes = (key: string, val: any, required?: boolean) => {
        if (typeof val === 'boolean') {
            variables += `$${key}: Boolean${required ? '!' : ''},`;
        }

        if (typeof val === 'string') {
            variables += `$${key}: String${required ? '!' : ''},`;
        }

        if (typeof val === 'number') {
            variables += `$${key}: Int${required ? '!' : ''},`;
        }
    };

    const buildVar = (obj: object) => {
        Object.entries(obj).forEach(([key, val], index) => {
            if (typeof val === 'object') {
                if (val.required) {
                    addTypes(key, val, true);
                }

                addTypes(key, val);
            } else {
                addTypes(key, val);
            }

            if (isMutation) {
                if (index === 0) {
                    data += `data:{`;
                }

                data += `${key}: $${key},`;

                if (index === Object.keys(obj).length - 1) {
                    data += `}`;
                }
            } else {
                data += `${key}: $${key},`;
            }
        });
    };

    props.variables && buildVar(props.variables);
    let updFields = '';

    const rec = (fields?: any[], first?: boolean) => {
        fields?.forEach((i: any, index: number) => {
            if (typeof i === 'object') {
                updFields += `${i.name}`;

                return rec(i.fields);
            } else {
                if (index === 0) {
                    updFields += `{`;
                }

                updFields += `${i},`;

                if (index === fields?.length - 1) {
                    updFields += `}`;
                }
            }
        });

        if (!first) {
            updFields += '}';
        }
    };

    props.fields?.length && rec(props.fields, true);

    const str = `
          ${isMutation ? 'mutation' : 'query'} ${props.name}(${variables}){
          ${props.name}(${data})${updFields} }
          `;

    return gql`
        ${str}
    `;
}

export default queryBuilders;
