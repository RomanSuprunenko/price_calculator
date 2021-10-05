# price_calculator

This is task is completed by assumptions described here - https://www.gemsociety.org/article/what-determines-diamond-cost/
Sample Diamond Price Chart is used for creating catalog of possible variants of diamonds wtih their characteristics.
The formula for price calculation is also taken from there:

This chart resembles what you might see on a typical diamond pricing list such as Rapaport. The header at the top indicates the carat size range, the report publication date, and the shape of the diamonds priced. To calculate diamond price, first, choose a color grade (leftmost column) and a clarity grade (top row). Next, multiply the number shown at their intersection by 100, then multiply that number by the carat size. For example, an I-color grade, VVS2-clarity grade diamond would cost $3,000 per carat. So, a 0.46-ct round diamond with these qualities should cost roughly $1,380.

Those catalog data is store to module /utils/catalog.js and provides data for three typer of cut: 
- fair
- good
- excellent

All those types may have a lot of kinds of records but for this particular test task I created only some of them. Of course, for real project it should be extended with a different catalogs for different values of carat weight because diamond price range change with changing weight range.

Project consists of two API:
- POST /diamond, that will create new record for diamond search in case of all parameters is ok (Ex. POST /diamond body: { "cut":"good", "color":"M", "clarity":"I2", "weight":0.47 })
- Get /diamond, that will returns similar diamond searched with same parameters that were send in string query (Ex. GET /diamond?color=M)
