function formatHeight(height) {
  const cm = height * 10;
  if (cm >= 100) {
    return (cm * 0.01).toLocaleString('us', { minimumFractionDigits: 2 }) + 'm';
  } else {
    return cm + 'cm';
  }
}

function formatWeight(weight) {
  return (weight * 0.1).toLocaleString('us', { minimumFractionDigits: 2 });
}

function formatName(name) {
  return name
    .toLowerCase()
    .replace(/(?:^|\s)(?!da|de|do)\S/g, (l) => l.toUpperCase());
}

export default {
  formatHeight,
  formatWeight,
  formatName,
};
