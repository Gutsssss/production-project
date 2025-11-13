import { memo } from 'react';
import { Flex, FlexProps } from '../Flex/Flex';

type ColumnFlexProps = Omit<FlexProps, 'direction'>

export const ColumnFlex = memo((props: ColumnFlexProps) => {
    const { align = 'start' } = props;
    return (
        <Flex direction="column" {...props} align={align} />
    );
});
