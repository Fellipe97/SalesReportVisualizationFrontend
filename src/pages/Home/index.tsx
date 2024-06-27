/* import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; */

import { useEffect, useMemo, useState } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

import { Container, Content, FilterByMonthDiv, FilterByMonthItem, FilterByMonthItemSelect, FilterDiv, FilterItem, GraphicDiv } from './styles';
import { SalesReportInterface } from '../../dtos/SalesReportInterface';
import { Header } from '../../components/Header';
import { Spinner } from '../../components/Spinner/indes';


export const Home = () => {
    //const navigate = useNavigate();
    const [loading, setLoading] = useState(false)

    const [graphicData, setGraphic] = useState<SalesReportInterface[]>([
        { "category": "Food", "product": "Cereals", "brand": "Kellogs", "January": 120, "February": 110, "March": 130, "April": 140 },
        { "category": "Food", "product": "Cereals", "brand": "Nestle", "January": 80, "February": 90, "March": 75, "April": 95 },
        { "category": "Food", "product": "Cereals", "brand": "General Mills", "January": 150, "February": 160, "March": 170, "April": 180 },
        { "category": "Food", "product": "Snacks", "brand": "Lay's", "January": 200, "February": 190, "March": 210, "April": 220 },
        { "category": "Food", "product": "Snacks", "brand": "Doritos", "January": 180, "February": 170, "March": 190, "April": 180 },
        { "category": "Beverages", "product": "Soda", "brand": "Coca Cola", "January": 300, "February": 280, "March": 310, "April": 290 },
        { "category": "Beverages", "product": "Soda", "brand": "Pepsi", "January": 280, "February": 270, "March": 260, "April": 250 },
        { "category": "Beverages", "product": "Juice", "brand": "Minute Maid", "January": 130, "February": 140, "March": 150, "April": 145 },
        { "category": "Beverages", "product": "Juice", "brand": "Tropicana", "January": 120, "February": 130, "March": 125, "April": 135 },
        { "category": "Electronics", "product": "Smartphones", "brand": "Apple", "January": 500, "February": 450, "March": 550, "April": 530 },
        { "category": "Electronics", "product": "Smartphones", "brand": "Samsung", "January": 450, "February": 460, "March": 470, "April": 480 },
        { "category": "Electronics", "product": "Laptops", "brand": "Dell", "January": 250, "February": 260, "March": 270, "April": 280 },
        { "category": "Electronics", "product": "Laptops", "brand": "HP", "January": 240, "February": 250, "March": 245, "April": 255 },
        { "category": "Automobiles", "product": "Cars", "brand": "Toyota", "January": 600, "February": 610, "March": 620, "April": 630 },
        { "category": "Automobiles", "product": "Cars", "brand": "Ford", "January": 350, "February": 360, "March": 370, "April": 380 },
        { "category": "Automobiles", "product": "Motorcycles", "brand": "Harley Davidson", "January": 200, "February": 210, "March": 220, "April": 230 },
        { "category": "Automobiles", "product": "Motorcycles", "brand": "Honda", "January": 250, "February": 260, "March": 270, "April": 280 },
        { "category": "Clothing", "product": "Men's Wear", "brand": "Levi's", "January": 300, "February": 310, "March": 320, "April": 330 },
        { "category": "Clothing", "product": "Women's Wear", "brand": "Gucci", "January": 250, "February": 260, "March": 250, "April": 270 },
        { "category": "Clothing", "product": "Sportswear", "brand": "Nike", "January": 400, "February": 410, "March": 420, "April": 430 }
    ])

    const [categoryFiltered, setCategoryFiltered] = useState('')
    const [productFiltered, setProductFiltered] = useState('')
    const [brandFiltered, setBrandFiltered] = useState('')
    const [monthFiltered, setMonthFiltered] = useState('')

    // Filtrar dados com base nos filtros aplicados
    const filteredData = useMemo(() => {
        return graphicData.filter(data =>
            (!categoryFiltered || data.category === categoryFiltered) &&
            (!productFiltered || data.product === productFiltered) &&
            (!brandFiltered || data.brand === brandFiltered)
        );
    }, [categoryFiltered, productFiltered, brandFiltered, graphicData]);

    const uniqueCategories = useMemo(() => [...new Set(filteredData.map(data => data.category))], [filteredData]);
    const uniqueProducts = useMemo(() => [...new Set(filteredData.map(data => data.product))], [filteredData]);
    const uniqueBrands = useMemo(() => [...new Set(filteredData.map(data => data.brand))], [filteredData]);

    const months = ['January', 'February', 'March', 'April'];
    const monthColors = ['#3498db', '#2ecc71', '#f1c40f', '#e67e22'];

    const dataForChart = useMemo(() => {
        if (monthFiltered) {
            return months.map((month, index) => ({
                month: month,
                sales: monthFiltered === month ? filteredData.reduce((total, current) => total + current[month], 0) : 0
            }));
        } else {
            return months.map((month, index) => ({
                month: month,
                sales: filteredData.reduce((total, current) => total + current[month], 0)
            }));
        }
    }, [filteredData, monthFiltered]);


    return (
        <Container>
            <Header />
            <Content>
                <FilterDiv>
                    <FilterItem>
                        <h1>Category: </h1>
                        <select value={categoryFiltered} onChange={e => setCategoryFiltered(e.target.value)}>
                            <option value="">Selecione uma categoria</option>
                            {uniqueCategories.map(category => (
                                <option key={category} value={category}>{category}</option>
                            ))}
                        </select>
                    </FilterItem>
                    <FilterItem>
                        <h1>Product: </h1>
                        <select value={productFiltered} onChange={e => setProductFiltered(e.target.value)}>
                            <option value="">Selecione uma categoria</option>
                            {uniqueProducts.map(category => (
                                <option key={category} value={category}>{category}</option>
                            ))}
                        </select>
                    </FilterItem>
                    <FilterItem>
                        <h1>Brand: </h1>
                        <select value={brandFiltered} onChange={e => setBrandFiltered(e.target.value)}>
                            <option value="">Selecione uma categoria</option>
                            {uniqueBrands.map(category => (
                                <option key={category} value={category}>{category}</option>
                            ))}
                        </select>
                    </FilterItem>
                </FilterDiv>

                <FilterByMonthDiv>
                    <FilterByMonthItem>
                        <h1>Sales By Month for: </h1>
                        {!monthFiltered &&
                            <h1>{`(Selected Filters)`}</h1>
                        }
                        {monthFiltered &&
                            <h1>{monthFiltered}</h1>
                        }
                    </FilterByMonthItem>
                    <FilterByMonthItemSelect>
                        {months.map((month) => (
                            <h1 key={month} onClick={() => setMonthFiltered(current => current === month ? '' : month)}>
                                {month}
                            </h1>
                        ))}
                    </FilterByMonthItemSelect>
                </FilterByMonthDiv>

                <GraphicDiv>
                    {!loading &&
                        <BarChart
                            xAxis={[
                                {
                                    id: 'barCategories',
                                    data: dataForChart.map(entry => entry.month),
                                    scaleType: 'band',
                                    /* colorMap: {
                                        type: 'piecewise',
                                        thresholds: [5350, new Date(2023, 1, 1), 3333, 3322],
                                        colors: ['red', 'blue', 'blue', 'blue'],
                                    } */
                                },
                            ]}

                            series={[
                                {
                                    data: dataForChart.map(entry => entry.sales)
                                },
                            ]}

                            barLabel={(item, context) => {
                                return context.bar.height < 60 ? null : item.value?.toString();
                              }}

                            width={800}
                            height={500}
                        />
                    }

                    {loading &&
                        <Spinner />
                    }
                </GraphicDiv>
            </Content>
        </Container>
    )
}