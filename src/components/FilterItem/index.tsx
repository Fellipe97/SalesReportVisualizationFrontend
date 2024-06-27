import React from 'react';
import { FilterItemContainer } from './styles';

interface FilterItemProps {
    label: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    options: string[];
}

const FilterItem = ({ label, value, onChange, options }: FilterItemProps) => {
    return (
        <FilterItemContainer>
            <h1>{label}: </h1>
            <select value={value} onChange={onChange}>
                <option value="">Select a {label.toLowerCase()}</option>
                {options.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </FilterItemContainer>
    );
};

export default FilterItem;
