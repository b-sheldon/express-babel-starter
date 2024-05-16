import maxZIndex from '../models/maxZIndex';

export const getMaxZIndex = () => {
  return maxZIndex.findOne({}).then((zIndex) => {
    return zIndex.maxZIndex;
  });
};

export const updateMaxZIndex = (newMaxZIndex) => {
  return maxZIndex.findOneAndUpdate({}, { maxZIndex: newMaxZIndex }, { new: true, upsert: true });
};
