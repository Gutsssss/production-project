import { memo } from 'react';
import { Flex, FlexProps } from '../Flex/Flex';

type ColumnFlexProps = Omit<FlexProps, 'direction'>

export const ColumnFlex = memo((props: ColumnFlexProps) => (
    <Flex direction="column" {...props} />
));
