import React from "react";
import { Pie } from "react-chartjs-2";
import { Box, Flex, Heading, useColorModeValue } from "@chakra-ui/react";

const PieChart = ({ data }) => {
    const sectors = {};

    data.forEach((entry) => {
        if (!sectors[entry.sector]) {
            sectors[entry.sector] = 0;
        }
        sectors[entry.sector] += entry.intensity;
    });

    const getRandomColor = (index) => {
        const colors = [
            "#FF0080",
            "#00BFFF",
            "#FFD700",
            "#32CD32",
            "#FF4500",
            "#9400D3",
            // Add more colors as needed
        ];
        return colors[index % colors.length];
    };

    const chartData = {
        labels: Object.keys(sectors),
        datasets: [
            {
                data: Object.values(sectors),
                backgroundColor: Object.keys(sectors).map((_, index) =>
                    getRandomColor(index)
                ),
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            tooltip: {
                position: "average",
            },
        },
    };

    return (
        <Box
            p={6}
            margin={50}
            shadow="md"
            bg={useColorModeValue("white", "gray.800")}
            height={700}
            width={"50%"}
        >
            <Heading as="h2" mb={4}>
                Sector Chart
            </Heading>

            <Pie data={chartData} options={chartOptions} />
        </Box>
    );
};

export default PieChart;
