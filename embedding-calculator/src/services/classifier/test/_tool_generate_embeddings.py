import logging

import joblib

from sample_images import IMG_DIR
from src.cache import get_scanner
from src.services.facescan.scanner.facescanner import FaceScanner
from src.services.imgtools.read_img import read_img
from src.services.utils.pyutils import get_current_dir

CURRENT_DIR = get_current_dir(__file__)


def generate_embedding_from_img(filename):
    img = read_img(IMG_DIR / f'{filename}.jpg')
    scanner: FaceScanner = get_scanner()
    embedding = scanner.scan_one(img).embedding
    joblib.dump(embedding, CURRENT_DIR / f'{filename}.embedding.joblib')


if __name__ == '__main__':
    logging.basicConfig(level=logging.DEBUG)
    generate_embedding_from_img('01.A')
    generate_embedding_from_img('02.A')
    generate_embedding_from_img('07.B')