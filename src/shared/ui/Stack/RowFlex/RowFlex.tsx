import { memo } from 'react';
import { Flex, FlexProps } from '../Flex/Flex';

type RowFlexProps = Omit<FlexProps, 'direction'>

export const RowFlex = memo((props: RowFlexProps) => (
    <Flex direction="row" {...props} />
));
