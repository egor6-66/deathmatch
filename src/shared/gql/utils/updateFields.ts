function updateFields(fields: any[]) {
    let upd = '';

    const rec = (fields?: any[], first?: boolean) => {
        fields?.forEach((i: any, index: number) => {
            if (typeof i === 'object') {
                upd += `${i.name}`;

                return rec(i.fields);
            } else {
                if (index === 0) {
                    upd += `{`;
                }

                upd += `${i},`;

                if (index === fields?.length - 1) {
                    upd += `}`;
                }
            }
        });

        if (!first) {
            upd += '}';
        }
    };

    rec(fields, true);

    return upd;
}

export default updateFields;
