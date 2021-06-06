import React, { FC, ReactNode, useEffect, useState } from "react";

type Props = {
    children: ReactNode;
};

const ClientOnly: FC<Props> = ({ children }) => {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) {
        return null;
    }

    return <div>{children}</div>;
};

export default ClientOnly;
