import { useEffect, useMemo, useState } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { Button } from '@mui/material';

import { Container, Content, FilterByMonthDiv, FilterByMonthItem, FilterByMonthItemSelect, FilterDiv, GraphicDiv } from './styles';
import { SalesReportInterface } from '../../dtos/SalesReportInterface';
import { Header } from '../../components/Header';
import { Spinner } from '../../components/Spinner/indes';
import useApi from '../../hooks/useApi';
import { useNavigate } from 'react-router-dom';
import FilterItem from '../../components/FilterItem';


export const Home = () => {
    const navigate = useNavigate();
    const api = useApi();
    const [loading, setLoading] = useState(true)

    const [graphicData, setGraphicData] = useState<SalesReportInterface[]>([])

    const [categoryFiltered, setCategoryFiltered] = useState('')
    const [productFiltered, setProductFiltered] = useState('')
    const [brandFiltered, setBrandFiltered] = useState('')
    const [monthFiltered, setMonthFiltered] = useState('')

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

    const dataForChart = useMemo(() => {
        if (monthFiltered) {
            return months.map((month) => ({
                month: month,
                sales: monthFiltered === month ? filteredData.reduce((total, current) => total + (current[month as keyof SalesReportInterface] as number), 0) : 0
            }));
        } else {
            return months.map((month) => ({
                month: month,
                sales: filteredData.reduce((total, current) => total + total + (current[month as keyof SalesReportInterface] as number), 0)
            }));
        }
    }, [filteredData, monthFiltered]);


    useEffect(() => {
        const handleDataGraphic = async () => {
            try {
                const res = await api.getAllReport();
                if (res.error) {
                    console.log(res.error)
                    alert(res.error)
                    navigate('/')
                } else {
                    setGraphicData(res)
                }
            } catch (error) {
                console.log('Não foi possível se conectar ao banco de dados: ', error)
            } finally {
                setLoading(false)
            }
        }
        handleDataGraphic()
    }, [])


    return (
        <Container>
            <Header />
            <Content>
                <FilterDiv>
                    <FilterItem
                        label="Category"
                        value={categoryFiltered}
                        onChange={e => setCategoryFiltered(e.target.value)}
                        options={uniqueCategories}
                    />
                    <FilterItem
                        label="Product"
                        value={productFiltered}
                        onChange={e => setProductFiltered(e.target.value)}
                        options={uniqueProducts}
                    />
                    <FilterItem
                        label="Brand"
                        value={brandFiltered}
                        onChange={e => setBrandFiltered(e.target.value)}
                        options={uniqueBrands}
                    />
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
                            <Button variant="text" key={month} onClick={() => setMonthFiltered(current => current === month ? '' : month)}>
                                {month}
                            </Button>
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