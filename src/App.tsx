import 'react-native-get-random-values';

import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { TBeer, TBeerstyle, TBrewery } from './types';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export function App() {
  const [beers, setBeers] = React.useState<TBeer[]>([]);
  const [beerstyles, setBeerstyles] = React.useState<TBeerstyle[]>([]);
  const [breweries, setBreweries] = React.useState<TBrewery[]>([]);

  React.useEffect(() => {
    // @todo: Find a better place to put most of this logic
    function loadStaticData() {
      /* eslint-disable @typescript-eslint/no-var-requires, global-require */
      try {
        const beersDirty = require('~/assets/data/beers-production.json') as TBeer[];

        const beersCleaned = beersDirty?.map((beer) => ({
          // @ts-expect-error ignore-next-line
          abv: Number.parseFloat(beer.abv as string),
          beerstyleId: String(beer.beerstyleId),
          breweryId: String(beer.breweryId),
          id: String(beer.id),
          name: String(beer.name),
        }));

        setBeers(beersCleaned);
      } catch (error) {
        // eslint-disable-next-line
        console.log(error);
      }
      try {
        const breweriesDirty = require('~/assets/data/breweries-production.json') as TBrewery[];

        const breweriesCleaned = breweriesDirty?.map((brewery) => ({
          city: String(brewery.city),
          country: String(brewery.country),
          createdAt: String(brewery.createdAt),
          description: String(brewery.description),
          id: String(brewery.id), // @ts-expect-error ignore-next-line
          lat: Number.parseFloat(brewery.lat), // @ts-expect-error ignore-next-line
          lng: Number.parseFloat(brewery.lng),
          logo: String(brewery.logo),
          name: String(brewery.name),
          photo: String(brewery.photo),
          state: String(brewery.state),
          updatedAt: String(brewery.updatedAt),
          url: String(brewery.url),
        }));

        setBreweries(breweriesCleaned);
      } catch (error) {
        // eslint-disable-next-line
        console.log(error);
      }
      try {
        const beerstylesDirty = require('~/assets/data/beerstyles-production.json') as TBeerstyle[];

        const beerstylesCleaned = beerstylesDirty?.map((style) => ({
          // @ts-expect-error ignore-next-line
          abvAvg: Number.parseFloat(style.abvAvg), // @ts-expect-error ignore-next-line
          abvMax: Number.parseFloat(style.abvMax), // @ts-expect-error ignore-next-line
          abvMin: Number.parseFloat(style.abvMin),
          biabCategoryId: String(style.biabCategoryId),
          biabCategoryName: String(style.biabCategoryName),
          categoryId: String(style.categoryId),
          categoryName: String(style.categoryName),
          createdAt: String(style.createdAt),
          description: String(style.description), // @ts-expect-error ignore-next-line
          ebcAvg: Number.parseFloat(style.ebcAvg), // @ts-expect-error ignore-next-line
          ebcMax: Number.parseFloat(style.ebcMax), // @ts-expect-error ignore-next-line
          ebcMin: Number.parseFloat(style.ebcMin),
          id: String(style.id),
          name: String(style.name),
          originId: String(style.originId),
          originName: String(style.originName), // @ts-expect-error ignore-next-line
          tasteBitter: Number.parseFloat(style.tasteBitter as string), // @ts-expect-error ignore-next-line
          tasteFruity: Number.parseFloat(style.tasteFruity), // @ts-expect-error ignore-next-line
          tasteIntensity: Number.parseFloat(style.tasteIntensity), // @ts-expect-error ignore-next-line
          tasteSour: Number.parseFloat(style.tasteSour), // @ts-expect-error ignore-next-line
          tasteSweet: Number.parseFloat(style.tasteSweet),
          updatedAt: String(style.updatedAt),
        }));

        setBeerstyles(beerstylesCleaned);
      } catch (error) {
        // eslint-disable-next-line
        console.log(error);
      }
      /* eslint-enable @typescript-eslint/no-var-requires, global-require */
    }
    loadStaticData();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Minimal Reproducible Example</Text>
      <Text>beers.length: {beers?.length}</Text>
      <Text>beerstyles.length: {beerstyles?.length}</Text>
      <Text>breweries.length: {breweries?.length}</Text>
    </View>
  );
}
