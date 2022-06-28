import React from 'react';
import { Box, Stack, Text } from '@qwant/qwant-ponents';
import { reactTranslator } from '~common/translators/reactTranslator';
import { CheckboxCard } from '~pages/common/components/CheckboxCard/index.jsx';
import { ReactComponent as IconSearch } from './assets/icon-search.svg';
import { ReactComponent as IconProtection } from './assets/icon-protection.svg';
import Styles from './Steps.module.scss';

export const StepSelectMode = ({
    protectionEnabled,
    onEnable,
    onDisable,
}) => {
    return (
        <Stack gap="m">
            <Text bold typo="heading-3" color="primary" as="h1">
                {reactTranslator.getMessage('onboarding_step_mode_title')}
            </Text>
            <Text as="p" typo="body-1" color="primary">
                {reactTranslator.getMessage('onboarding_step_mode_description')}
            </Text>
            <Box className={Styles.StepChoices}>
                <CheckboxCard
                    onClick={onDisable}
                    title={reactTranslator.getMessage('onboarding_step_mode_search')}
                    description={reactTranslator.getMessage('onboarding_step_mode_search_description')}
                    selected={!protectionEnabled}
                    icon={<IconSearch />}
                />
                <CheckboxCard
                    onClick={onEnable}
                    title={reactTranslator.getMessage('onboarding_step_mode_search')}
                    description={reactTranslator.getMessage('onboarding_step_mode_search_description')}
                    selected={protectionEnabled}
                    isNew
                    icon={(
                        <>
                            <IconSearch />
                            <Text typo="heading-6" color="primary" bold>+</Text>
                            <IconProtection />
                        </>
                    )}
                />
            </Box>
        </Stack>
    );
};
